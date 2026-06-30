import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { profile } from "../data";
import {
  completeCommand,
  quickCommands,
  resolveCommand,
  type CommandName,
} from "../lib/commands";
import { CommandOutput } from "./CommandOutput";

type Entry = {
  id: number;
  raw: string;
  command?: CommandName;
  error?: string;
};

export function Terminal() {
  const [entries, setEntries] = useState<Entry[]>([
    { id: 1, raw: "home", command: "home" },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const newestEntryRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(2);

  useEffect(() => {
    const body = bodyRef.current;
    const entry = newestEntryRef.current;
    if (!body || !entry) return;
    const top = entry.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;
    body.scrollTo({ top, behavior: "smooth" });
  }, [entries]);

  const run = (raw: string) => {
    const input = raw.trim();
    if (!input) return;
    const resolved = resolveCommand(input);

    setHistory((current) => [...current.filter((item) => item !== input), input]);
    setHistoryIndex(null);
    setValue("");

    if (resolved?.name === "clear") {
      setEntries([]);
      return;
    }

    setEntries((current) => [
      ...current,
      resolved
        ? { id: nextId.current++, raw: input, command: resolved.name }
        : {
            id: nextId.current++,
            raw: input,
            command: "help",
            error: `command not found: ${input.split(/\s+/)[0]}`,
          },
    ]);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    run(value);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      run(value);
      return;
    }

    if (event.key === "Tab") {
      const completion = completeCommand(value);
      if (completion) {
        event.preventDefault();
        setValue(completion);
      }
      return;
    }

    if (event.key === "ArrowUp") {
      if (!history.length) return;
      event.preventDefault();
      const next = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setValue(history[next]);
      return;
    }

    if (event.key === "ArrowDown" && historyIndex !== null) {
      event.preventDefault();
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(null);
        setValue("");
      } else {
        setHistoryIndex(next);
        setValue(history[next]);
      }
    }
  };

  return (
    <main className="page-shell">
      <section className="terminal-window" aria-label="Sameer Khoja portfolio terminal">
        <header className="window-bar">
          <div className="window-brand">
            <span className="monogram">SK</span>
            <div>
              <strong>{profile.domain}</strong>
              <span>senior software engineer</span>
            </div>
          </div>
          <div className="window-actions" aria-hidden="true"><i /><i /><i /></div>
        </header>

        <div className="workspace">
          <aside className="identity-panel">
            <div>
              <h2>{profile.name}</h2>
              <p className="identity-role">{profile.role}</p>
              <p className="identity-headline">{profile.headline}</p>
            </div>

            <div className="identity-bottom">
              <div className="location"><span>⌖</span> {profile.location}</div>
              <nav aria-label="Social links">
                <a href={profile.links.github} target="_blank" rel="noreferrer">GH</a>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">IN</a>
                <a href={`mailto:${profile.links.email}`}>@</a>
              </nav>
            </div>
          </aside>

          <section className="console-panel">
            <div className="console-toolbar">
              <div className="console-tab"><span>&gt;_</span> portfolio</div>
              <div className="session-id">Interactive profile</div>
            </div>

            <nav className="command-deck" aria-label="Quick commands">
              {quickCommands.map((command) => (
                <button key={command} onClick={() => run(command)} type="button">
                  <span>$</span> {command}
                </button>
              ))}
            </nav>

            <div className="console-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
              {entries.length === 0 && (
                <div className="empty-console">
                  history cleared. type <code>home</code> to restart.
                </div>
              )}
              {entries.map((entry, index) => (
                <div
                  className="command-block"
                  key={entry.id}
                  ref={index === entries.length - 1 ? newestEntryRef : undefined}
                >
                  {(index > 0 || entries[0]?.raw !== "home") && (
                    <div className="command-echo">
                      <span>sameer@portfolio</span><b>:</b><em>~</em><b>$</b> {entry.raw}
                    </div>
                  )}
                  {entry.error && (
                    <div className="error-output">
                      <strong>{entry.error}</strong>
                    </div>
                  )}
                  {entry.command && <CommandOutput command={entry.command} />}
                </div>
              ))}
            </div>

            <form className="prompt" onSubmit={submit}>
              <label className="sr-only" htmlFor="terminal-input">Terminal command</label>
              <span className="prompt-user">sameer@portfolio</span><b>:</b><em>~</em><b>$</b>
              <input
                id="terminal-input"
                ref={inputRef}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                placeholder="type a command..."
              />
              <button type="submit" aria-label="Run command">ENTER ↵</button>
            </form>
          </section>
        </div>

        <footer className="status-bar">
          <span><i /> Available</span>
          <span>↑↓ Command history</span>
          <span>Tab to complete</span>
          <span>© {new Date().getFullYear()} SAMEER KHOJA</span>
        </footer>
      </section>
    </main>
  );
}

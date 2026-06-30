import { describe, expect, it } from "vitest";
import { completeCommand, resolveCommand } from "./commands";

describe("resolveCommand", () => {
  it("resolves canonical commands", () => {
    expect(resolveCommand("work")?.name).toBe("work");
  });

  it("resolves aliases without regard to case", () => {
    expect(resolveCommand("  RESUME  ")?.name).toBe("experience");
    expect(resolveCommand("whoami")?.name).toBe("about");
  });

  it("returns undefined for unknown commands", () => {
    expect(resolveCommand("sudo"))?.toBeUndefined();
  });
});

describe("completeCommand", () => {
  it("completes a partial canonical command", () => {
    expect(completeCommand("exp")).toBe("experience");
  });

  it("does not complete an empty command", () => {
    expect(completeCommand(""))?.toBeUndefined();
  });
});

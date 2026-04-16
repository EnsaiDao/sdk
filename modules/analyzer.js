import Engine from "../core/engine.js";

const engine = new Engine();

export function analyze(input) {
  return engine.process(input);
}

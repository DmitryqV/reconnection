/**
 * Using Go Lang to win speed
 **/
const go = new Go();

/**
 * Connected to Go Lang
 **/
WebAssembly.instantiateStreaming(
  fetch("wasm/main.go.wasm"),
  go.importObject
).then(async (self) => await go.run(self.instance));

/**
 * Connect optimized modules below
 **/

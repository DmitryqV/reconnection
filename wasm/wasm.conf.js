/**
 * Using Go Lang to win speed
 **/
const go = new Go();

/**
 * Connected to Go Lang
 **/
WebAssembly.instantiateStreaming(fetch("main.module.wasm"), go.importObject)
  .then((self) => go.run(self.instance));

/** 
 * Connect optimized modules below 
 **/

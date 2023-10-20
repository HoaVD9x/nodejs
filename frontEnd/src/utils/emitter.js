import EventEmitter from "events";
const _emmitter = new EventEmitter();
_emmitter.setMaxListeners(0);
export const emitter = _emmitter
// Lock In Planner — on-device coach worker.
// Runs the WebLLM model off the main thread so the UI stays responsive
// while the coach is generating. The page talks to this via CreateWebWorkerMLCEngine.
import { WebWorkerMLCEngineHandler } from 'https://esm.run/@mlc-ai/web-llm';

const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg) => { handler.onmessage(msg); };

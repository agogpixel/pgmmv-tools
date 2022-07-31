import type { Agtk } from './agtk';

type window = { Agtk: Agtk; window: window } & Record<string, unknown>;

declare global {
  const Agtk: Agtk;
  const window: window;
}

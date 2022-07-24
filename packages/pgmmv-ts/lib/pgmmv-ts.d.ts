import type { Agtk } from './agtk.interface';

type window = { Agtk: Agtk; window: window } & Record<string, unknown>;

declare global {
  const Agtk: Agtk;
  const window: window;
}

/**
 * PGMMV TS global namespace declaration.
 *
 * @packageDocumentation
 */
import type { Agtk } from './agtk';

/**
 * Window namespace type.
 */
type window = { Agtk: Agtk; window: window } & Record<string, unknown>;

/**
 * Global namespace.
 */
declare global {
  /**
   * Agtk namespace.
   */
  const Agtk: Agtk;

  /**
   * Window namespace.
   */
  const window: window;
}

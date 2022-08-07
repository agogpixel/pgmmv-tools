/**
 * PGMMV TS global namespace declaration.
 *
 * @packageDocumentation
 */
import type { Agtk } from './agtk';
import type { cc } from './cc';

/**
 * Window namespace type.
 */
type window = { Agtk: Agtk; cc: cc; window: window } & Record<string, unknown>;

/**
 * Global namespace.
 */
declare global {
  /**
   * Agtk namespace.
   */
  const Agtk: Agtk;

  /**
   * Cocos namespace.
   */
  const cc: cc;

  /**
   * Window namespace.
   */
  const window: window;
}

/**
 * Objects constants interface module.
 *
 * @packageDocumentation
 */
import type { Switches } from './switches';
import type { Variables } from './variables';

/**
 * Objects constants interface.
 */
export interface Objects {
  /**
   * Switches.
   */
  readonly switches: Switches;

  /**
   * Variables.
   */
  readonly variables: Variables;
}

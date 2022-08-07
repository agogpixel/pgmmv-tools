/**
 * Agtk interface module.
 *
 * @packageDocumentation
 */
import type { AgtkConstants } from './constants';
import type { AgtkObjectInstances } from './object-instances';
import type { AgtkPlayerCharacters } from './player-characters';
import type { AgtkSettings } from './settings';
import type { AgtkSwitches } from './switches';
import type { AgtkVariables } from './variables';

/**
 * Agtk interface.
 */
export interface Agtk {
  /**
   * Text string that displays execution engine version.
   *
   * ```
   * Notes:
   * PGMMV <Version Number>
   * player <Version Number>
   * runtime <Version Number>
   * ```
   */
  readonly version: string;

  /**
   * Outputs log.
   *
   * In the player, it is output in the "Runtime Log Console".
   *
   * @param message - Output string.
   */
  log(message: string): void;

  /**
   * Resets the game. Performs same operation as resetting with F5 key.
   */
  reset(): void;

  /**
   * Settings.
   */
  readonly settings: AgtkSettings;

  /**
   * Player characters.
   */
  readonly playerCharacters: AgtkPlayerCharacters;

  /**
   * Object instances.
   */
  readonly objectInstances: AgtkObjectInstances;

  /**
   * Constants.
   */
  readonly constants: AgtkConstants;

  /**
   * Common switches.
   */
  readonly switches: AgtkSwitches

  /**
   * Common variables.
   */
  readonly variables: AgtkVariables;
}

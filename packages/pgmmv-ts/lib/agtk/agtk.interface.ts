/**
 * Agtk interface module.
 *
 * @packageDocumentation
 */
import type { Constants } from './constants';
import type { ObjectInstances } from './object-instances';
import type { PlayerCharacters } from './player-characters';
import type { Settings } from './settings';
import type { Switches } from './switches';
import type { Variables } from './variables';

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
  readonly settings: Settings;

  /**
   * Player characters.
   */
  readonly playerCharacters: PlayerCharacters;

  /**
   * Object instances.
   */
  readonly objectInstances: ObjectInstances;

  /**
   * Constants.
   */
  readonly constants: Constants;

  /**
   * Common switches.
   */
  readonly switches: Switches

  /**
   * Common variables.
   */
  readonly variables: Variables;
}

/**
 * Player characters interface module.
 *
 * @packageDocumentation
 */
import type { PlayerCharacter } from './player-character';

/**
 * Player characters interface.
 */
export interface PlayerCharacters {
  /**
   * Get count.
   *
   * @returns Number of slots for managing player characters.
   * @note Currently fixed at 4.
   */
  getCount(): number;

  /**
   * Get player character.
   *
   * @param index Player character index.
   * @returns playerCharacter of the specified slot.
   */
  get(arg: number): PlayerCharacter;
}

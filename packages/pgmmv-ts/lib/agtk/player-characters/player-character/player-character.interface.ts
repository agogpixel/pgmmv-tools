/**
 * Player character interface module.
 *
 * @packageDocumentation
 */

/**
 * Player character interface.
 */
export interface PlayerCharacter {
  /**
   * Get count.
   *
   * @returns Number of objects set in the player character slot.
   */
  getCount(): number;

  /**
   * Get Object ID.
   *
   * @param index Player character index.
   */
  get(index: number): number;
}

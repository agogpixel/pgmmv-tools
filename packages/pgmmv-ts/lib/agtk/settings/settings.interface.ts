/**
 * Settings interface module.
 *
 * @packageDocumentation
 */
import type { PlayerCharacters } from '../player-characters';

/**
 * Settings interface.
 */
export interface Settings {
  /**
   * Tile width (unit: dots).
   */
  tileWidth: number;

  /**
   * Tile height (unit: dots).
   */
  tileHeight: number;

  /**
   * Screen width (unit: dots).
   */
  screenWidth: number;

  /**
   * Screen height (unit: dots).
   */
  screenHeight: number;

  /**
   * The playerCharacters object.
   */
  playerCharacters: PlayerCharacters;

  /**
   * Project path.
   */
  projectPath: string;
}

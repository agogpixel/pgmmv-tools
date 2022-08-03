/**
 * Player character value type module.
 *
 * @packageDocumentation
 */
import type { PlayerCharacterKey } from './player-character-key.type';
import type { PlayerCharacter } from './player-character.interface';

/**
 * Player character value type.
 */
export type PlayerCharacterValue = PlayerCharacter[PlayerCharacterKey];

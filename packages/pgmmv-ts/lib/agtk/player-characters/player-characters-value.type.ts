/**
 * Player characters value type module.
 *
 * @packageDocumentation
 */
import type { PlayerCharactersKey } from './player-characters-key.type';
import type { PlayerCharacters } from './player-characters.interface';

/**
 * Player characters value type.
 */
export type PlayerCharactersValue = PlayerCharacters[PlayerCharactersKey];

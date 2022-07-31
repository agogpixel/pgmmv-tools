/**
 * Predefined common switch ID type module.
 *
 * @packageDocumentation
 */
import type { SwitchesKey } from '../switches/switches-key.type'
import type { Switches } from '../switches/switches.interface';

/**
 * Predefined common switch ID type
 */
export type PredefinedCommonSwitchId = Switches[Exclude<SwitchesKey, 'get' | 'getIdByName'>];

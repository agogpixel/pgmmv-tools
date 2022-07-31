/**
 * Switch condition type module.
 *
 * @packageDocumentation
 */
import type { Conditions } from '../constants/conditions/conditions.interface';

/**
 * Switch condition type.
 */
export type SwitchCondition = Conditions['SwitchConditionOn'] | Conditions['SwitchConditionOff'] | Conditions['SwitchConditionOnFromOff'] | Conditions['SwitchConditionOffFromOn'];

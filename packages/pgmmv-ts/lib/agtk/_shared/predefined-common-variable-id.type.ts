/**
 * Predefined common variable ID type module.
 *
 * @packageDocumentation
 */
import type { VariablesKey } from '../variables/variables-key.type';
import type { Variables } from '../variables/variables.interface';

/**
 * Predefined common variable ID type
 */
export type PredefinedCommonVariableId = Variables[Exclude<VariablesKey, 'get' | 'getIdByName'>];

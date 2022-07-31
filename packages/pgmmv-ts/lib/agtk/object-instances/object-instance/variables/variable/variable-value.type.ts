/**
 * Object instance variable value type module.
 *
 * @packageDocumentation
 */
import type { VariableKey } from './variable-key.type';
import type { Variable } from './variable.interface';

/**
 * Object instance variable value type.
 */
export type VariableValue = Variable[VariableKey];

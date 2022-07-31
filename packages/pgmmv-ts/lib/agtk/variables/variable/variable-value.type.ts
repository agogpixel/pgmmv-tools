/**
 * Common variable value type module.
 *
 * @packageDocumentation
 */
import type { VariableKey } from './variable-key.type';
import type { Variable } from './variable.interface';

/**
 * Common variable value type.
 */
export type VariableValue = Variable[VariableKey];

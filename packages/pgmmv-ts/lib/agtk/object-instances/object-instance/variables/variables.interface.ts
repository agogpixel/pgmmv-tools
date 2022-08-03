/**
 * Object instance variables interface module.
 *
 * @packageDocumentation
 */
import type { Variables as PresetVariables } from '../../../constants/objects/variables';
import type { ValueAccessorAccessor } from '../../../_shared/value-accessor-accessor.interface';

import type { Variable } from './variable';

/**
 * Object instance variables interface.
 */
export interface Variables extends PresetVariables, ValueAccessorAccessor<Variable> {}

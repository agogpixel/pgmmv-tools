/**
 * Object instance variables interface module.
 *
 * @packageDocumentation
 */
import type { ValueAccessorAccessor } from '../../../_shared/value-accessor-accessor.interface';

import type { Variable } from './variable';

/**
 * Object instance variables interface.
 */
export interface Variables extends ValueAccessorAccessor<Variable> {}

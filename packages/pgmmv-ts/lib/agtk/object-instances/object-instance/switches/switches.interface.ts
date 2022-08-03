/**
 * Object instance switches interface module.
 *
 * @packageDocumentation
 */
import type { Switches as PresetSwitches } from '../../../constants/objects/switches'
import type { ValueAccessorAccessor } from '../../../_shared/value-accessor-accessor.interface';

import type { Switch } from './switch';

/**
 * Object instance switches interface
 */
export interface Switches extends PresetSwitches, ValueAccessorAccessor<Switch> {}

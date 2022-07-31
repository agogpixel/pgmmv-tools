/**
 * Object instance value type module.
 *
 * @packageDocumentation
 */
import type { ObjectInstanceKey } from './object-instance-key.type';
import type { ObjectInstance } from './object-instance.interface';

/**
 * Object instance value type.
 */
export type ObjectInstanceValue = ObjectInstance[ObjectInstanceKey];

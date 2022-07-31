/**
 * Generic value accessor accessor interface module.
 *
 * @packageDocumentation
 */
import type { NonZeroPositiveInteger } from './non-zero-positive-integer.type';
import type { SwitchValueAccessor } from './switch-value-accessor.interface';
import type { VariableValueAccessor } from './variable-value-accessor.interface';

/**
 * Generic value accessor accessor interface.
 *
 * @template T - Type of value accessor to be accessed.
 */
export interface ValueAccessorAccessor<T extends SwitchValueAccessor | VariableValueAccessor> {
  /**
   * Get value accessor.
   *
   * @param id - Value accessor ID.
   * @returns The value accessor.
   */
  get<U extends number>(id: NonZeroPositiveInteger<U>): T;

  /**
    * Get value accessor ID by name.
    *
    * @param name Accessor name.
    * @returns A value accessor ID when found, -1 otherwise.
    * @note Preset variable names may change according to language, so avoid
    * using this if possible.
    */
  getIdByName(name: string): number;
}

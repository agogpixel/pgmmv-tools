/**
 * Generic value accessor interface module.
 *
 * @packageDocumentation
 */

/**
 * Generic value accessor interface.
 *
 * @template T - Type of value to be accessed.
 */
export interface ValueAccessor<T extends boolean | number> {
  /**
   * Get value.
   *
   * @returns The value.
   */
  getValue(): T;

  /**
   * Set value.
   *
   * @param value - The value.
   */
  setValue(value: T): void;
}

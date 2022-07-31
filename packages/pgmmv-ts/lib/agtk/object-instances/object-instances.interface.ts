/**
 * Object instances interface module.
 *
 * @packageDocumentation
 */
import type { ObjectInstance } from './object-instance';

/**
 * Object instance interface.
 */
export interface ObjectInstances {
  /**
   * Get object instance.
   *
   * @param id - The object instance ID.
   * @returns The object instance
   */
  get(id: number): ObjectInstance;

  /**
   * Get object instance ID by name.
   *
   * @param objectId - The object instance's object ID.
   * @param instanceName - The object instance's name (as set in the editor).
   * @returns An object instance ID when found, -1 otherwise.
   * @note Checks for consistency with object name if object instance is dynamically generated.
   */
  getIdByName(objectId: number, instanceName: string): number;
}

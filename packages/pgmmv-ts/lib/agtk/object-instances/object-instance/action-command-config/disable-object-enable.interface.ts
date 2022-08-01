/**
 * Object instance disabled object enable action command configuration interface module.
 *
 * @packageDocumentation
 */

/**
 * Object instance disabled object enable action command configuration interface.
 */
export interface DisableObjectEnable {
  /**
   * Value -1 or 1+
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;
}

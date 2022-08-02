/**
 * Object instance switch/variable reset action command configuration interface module.
 *
 * @packageDocumentation
 */

/**
 * Object instance switch/variable reset action command configuration interface.
 */
export interface SwitchVariableReset {
  /**
   * Value true/false.
   *  - True = Switch
   *  - False = Variable
   */
  swtch: boolean;

  /**
   * Value -2, 0+
   *  - -2 = Object Self
   *  - 0 = Common Switch/Variable
   *  - 1+ = Any Object ID's you may have created
   */
  objectId: number;

  /**
   * This takes an whole number 1+ and represents the Switch or Variable ID. Value will depend on if Self or Common selected as well as if a created or default so refer to section 'Targeting Switches & Variables' and 'Find Switch / Variable ID's' for info on getting the corresponding ID
   */
  itemId: number;
}

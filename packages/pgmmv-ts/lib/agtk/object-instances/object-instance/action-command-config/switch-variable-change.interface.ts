/**
 * Object instance switch/variable change action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { Assignments } from '../../../constants/assignments';
import type { QualifierValue as QualifierId } from '../../../constants/qualifier';

/**
 * Switch/variable change switch value type.
 *
 * @internal
 */
type SwitchValue =
  | Assignments['SwitchAssignOn']
  | Assignments['SwitchAssignOff']
  | Assignments['SwitchAssignToggle'];

/**
 * Switch/variable change variable assignment operator type.
 *
 * @internal
 */
type VariableAssignmentOperator =
  | Assignments['VariableAssignOperatorSet']
  | Assignments['VariableAssignOperatorAdd']
  | Assignments['VariableAssignOperatorSub']
  | Assignments['VariableAssignOperatorMul']
  | Assignments['VariableAssignOperatorDiv']
  | Assignments['VariableAssignOperatorMod'];

/**
 * Switch/variable change variable assignment value type type.
 *
 * @internal
 */
type VariableAssignValueType =
  | Assignments['VariableAssignValue']
  | Assignments['VariableAssignVariable']
  | Assignments['VariableAssignRandom']
  | Assignments['VariableAssignScript'];

/**
 * Object instance switch/variable change action command configuration interface.
 */
export interface SwitchVariableChange {
  /**
   * Value true/false
   *  - True = Switch
   *  - False = Variable
   */
  swtch: boolean;

  /**
   * Value -7, -5, -2, -1, 0, 1+.
   *  - -7 = Parent
   *  - -5 = Locked
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  switchObjectId: number;

  /**
   * Value -2, -1
   *  - -2 = All
   *  - -1 = Single
   */
  switchQualifierId: QualifierId;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common selected as well as if a created or default switch, so refer to section 'Targeting Switches & Variables' and 'Find Switch / Variable ID's' for info on getting switch values
   */
  switchId: number;

  /**
   * Value 0 - 2
   *  - 0 = ON
   *  - 1 = OFF
   *  - 2 = Toggle
   */
  switchValue: SwitchValue;

  /**
   * Value -7, -5, -2, -1, 0, 1+.
   *  - -7 = Parent
   *  - -5 = Locked
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  variableObjectId: number;

  /**
   * Value -2, -1
   *  - -2 = All
   *  - -1 = Single
   */
  variableQualifierId: QualifierId;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common selected as well as if a created or default variable, so refer to section 'Targeting Switches & Variables' and 'Find Switch / Variable ID's' for info on getting variable values
   */
  variableId: number;

  /**
   * Value 0 - 5
   *  - 0 = Assign (=)
   *  - 1 = Add & assign (+=)
   *  - 2 = Subtract & assign (-=)
   *  - 3 = Multiply & assign (*=)
   *  - 4 = Divide & assign (/=)
   *  - 5 = Modulus & assign (%=)
   */
  variableAssignOperator: VariableAssignmentOperator;

  /**
   * Value 0 - 3
   *  - 0 = Constant
   *  - 1 = Variables
   *  - 2 = Random
   *  - 3 = Script
   *
   * @note Do NOT specify Agtk.constants.assignments.VariableAssignScript
   */
  variableAssignValueType: VariableAssignValueType;

  /**
   * Value any float.
   */
  assignValue: number

  /**
   * Value -7, -2, -1, 0, 1+
   *  - -7 = Parent
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */;
  assignVariableObjectId: number;

  /**
   * Value -1
   *  - -1 = Single
   */
  assignVariableQualifierId: number;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common selected as well as if a created or default variable, so refer to section 'Targeting Switches & Variables' and 'Find Switch / Variable ID's' for info on getting variable values
   */
  assignVariableId: number;

  /**
   * Any integer.
   */
  randomMin: number;

  /**
   * Any integer.
   */
  randomMax: number;

  /**
   * @note Probably shouldn't use this.
   */
  assignScript?: string;
}

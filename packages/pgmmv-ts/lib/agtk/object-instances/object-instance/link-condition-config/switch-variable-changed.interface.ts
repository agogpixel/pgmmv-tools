/**
 * Object instance switch/variable changed link condition configuration
 * interface module.
 *
 * @packageDocumentation
 */
import type { Conditions } from '../../../constants/conditions';
import type { QualifierValue as QualifierId } from '../../../constants/qualifier';

/**
 * Switch/variable changed switch condition type.
 *
 * @internal
 */
type SwitchCondition =
  | Conditions['SwitchConditionOn']
  | Conditions['SwitchConditionOff']
  | Conditions['SwitchConditionOnFromOff']
  | Conditions['SwitchConditionOffFromOn'];

/**
 * Switch/variable changed compare variable operator type.
 *
 * @internal
 */
type CompareVariableOperator =
  | Conditions['OperatorLess']
  | Conditions['OperatorLessEqual']
  | Conditions['OperatorEaual']
  | Conditions['OperatorGreaterEqual']
  | Conditions['OperatorGreater']
  | Conditions['OperatorNotEqual'];

/**
 * Switch/variable changed compare value type type.
 *
 * @internal
 */
type CompareValueType =
  | Conditions['CompareValue']
  | Conditions['CompareVariable']
  | Conditions['CompareNaN'];

/**
 * Object instance switch/variable changed link condition configuration
 * interface.
 */
export interface SwitchVariableChanged {
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
   * Value -2, -1.
   *  - -2 = All
   *  - -1 = Single
   */
  switchQualifierId: QualifierId;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common
   * selected as well as if created or default switch.
   */
  switchId: number;

  /**
   * Value 0 - 3.
   *  - 0 = ON
   *  - 1 = OFF
   *  - 2 = OFF to ON
   *  - 3 = ON to OFF
   */
  switchCondition: SwitchCondition;

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
   * Value -2, -1.
   *  - -2 = All
   *  - -1 = Single
   */
  variableQualifierId: QualifierId;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common
   * selected as well as if created or default variable.
   */
  variableId: number;

  /**
   * Value 0 - 5.
   *  - 0 = Less than <
   *  - 1 = Less than or equal to <=
   *  - 2 = Equal to =
   *  - 3 = Greater than or equal to >=
   *  - 4 = Greater than >
   *  - 5 = Not equal to !=
   */
  compareVariableOperator: CompareVariableOperator;

  /**
   * Value 0 - 2.
   *  - 0 = Constant
   *  - 1 = Set Variable as Condition
   *  - 2 = Non-numeric
   */
  compareValueType: CompareValueType;

  /**
   * Value any float.
   */
  compareValue: number;

  /**
   * Value -7, -2, -1, 0, 1+.
   *  - -7 = Parent
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  compareVariableObjectId: number;

  /**
   * Value -1
   *  - -1 = Single
   */
  compareVariableQualifierId: number;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common
   * selected as well as if created or default variable.
   */
  compareVariableId: number;
}

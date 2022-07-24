/**
 *
 */
export interface Conditions {
  SwitchConditionOn: 0;
  SwitchConditionOff: 1;
  SwitchConditionOnFromOff: 2;
  SwitchConditionOffFromOn: 3;
  OperatorLess: 0;
  OperatorLessEqual: 1;
  /**
   * @note Developer typo.
   */
  OperatorEaual: 2;
  OperatorGreaterEqual: 3;
  OperatorGreater: 4;
  OperatorNotEqual: 5;
  CompareValue: 0;
  CompareVariable: 1;
  CompareNaN: 2;
};

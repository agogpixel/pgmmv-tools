/**
 *
 */
export interface ObjectLock {
  SetByObjectGroup: 0;
  SetByObject: 1;
  UseSwitch: 0;
  UseVariable: 1;
  UseNone: 2;
  CompareValueConstant: 0;
  CompareValueOtherVariable: 1;
  CompareValueNonNumeric: 2;
}

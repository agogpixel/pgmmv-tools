/**
 * Object instance database reflect action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { Assignments } from '../../../constants/assignments';

/**
 * Database reflect reflect variable assignment operator type.
 *
 * @internal
 */
type ReflectVariableAssignmentOperator =
  | Assignments['VariableAssignOperatorSet']
  | Assignments['VariableAssignOperatorAdd']
  | Assignments['VariableAssignOperatorSub']
  | Assignments['VariableAssignOperatorMul']
  | Assignments['VariableAssignOperatorDiv']
  | Assignments['VariableAssignOperatorMod'];

/**
 * Object instance database reflect action command configuration interface.
 */
export interface DatabaseReflect {
  columnIndex: number;
  columnIndexFromName: boolean;
  columnNumberFromValue: boolean;
  columnVariableId: number;
  columnVariableObjectId: number;
  columnVariableQualifierId: number;
  databaseId: number;
  fromObject: boolean;
  fromRow: boolean;
  objectId: number;
  reflectObjectId: number;
  reflectQualifierId: number;
  reflectVariableAssignOperator: ReflectVariableAssignmentOperator;
  reflectVariableId: number;
  rowIndexFromName: boolean;
  rowNumberFromValue: boolean;
  rowIndex: number;
  rowVariableObjectId: number;
  rowVariableQualifierId: number;
  rowVariableId: number;
}

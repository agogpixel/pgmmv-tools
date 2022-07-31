/**
 * Comparison operator type module.
 *
 * @packageDocumentation
 */
import type { Conditions } from '../constants/conditions/conditions.interface';

/**
 * Comparison operator type.
 */
export type ComparisonOperator = Conditions['OperatorLess'] | Conditions['OperatorLessEqual'] | Conditions['OperatorEaual'] | Conditions['OperatorGreaterEqual'] | Conditions['OperatorGreater'] | Conditions['OperatorNotEqual'];

/**
 * Comparison type type module.
 *
 * @packageDocumentation
 */
import type { Conditions } from '../constants/conditions/conditions.interface';

/**
 * Comparison type type.
 */
export type ComparisonType = Conditions['CompareValue'] | Conditions['CompareVariable'] | Conditions['CompareNaN'];

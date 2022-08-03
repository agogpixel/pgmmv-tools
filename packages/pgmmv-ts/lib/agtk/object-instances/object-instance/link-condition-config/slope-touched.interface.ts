/**
 * Object instance slope touched link condition configuration interface module.
 *
 * @packageDocumentation
 */
import type { SlopeTouched as SlopeTouchedConstant } from '../../../constants/link-condition/slope-touched';

/**
 * Slope touched direction type type.
 *
 * @internal
 */
type DirectionType =
  | SlopeTouchedConstant['DirectionUpper']
  | SlopeTouchedConstant['DirectionLower']
  | SlopeTouchedConstant['DirectionAny'];

/**
 * Slope touched downward type type.
 *
 * @internal
 */
type DownwardType =
  | SlopeTouchedConstant['DownwardLeft']
  | SlopeTouchedConstant['DownwardRight']
  | SlopeTouchedConstant['DownwardNone'];

/**
 * Object instance slope touched link condition configuration interface.
 */
export interface SlopeTouched {
  /**
   * Value 0 - 2.
   *  - 0 = From Top
   *  - 1 = From Bottom
   *  - 2 = Don't Set
   */
  directionType: DirectionType;

  /**
   * Value 0 - 2.
   *  - 0 = Sloping Left
   *  - 1 = Sloping Right
   *  - 2 = Don't Set
   */
  downwardType: DownwardType;
}

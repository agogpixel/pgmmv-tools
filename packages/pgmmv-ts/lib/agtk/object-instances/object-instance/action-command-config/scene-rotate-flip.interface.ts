/**
 * Object instance scene rotate flip action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { SceneRotateFlipValue as Type } from '../../../constants/action-commands/scene-rotate-flip';

/**
 * Object instance scene rotate flip action command configuration interface.
 */
export interface SceneRotateFlip {
  /**
   * Value 0 - 1
   *  - 0 = Reset
   *  - 1 = Rotate/Flip
   */
  type: Type;

  /**
   * Value true/false
   *  - True = Rotate
   *  - False = Don't Rotate
   */
  rotationFlag: boolean;

  /**
   * Value 0.00+. Percentage of rotation.
   */
  rotation: number;

  /**
   * Value true/false
   *  - True = Absolute Angle
   *  - False = Not Absolute
   */
  absoluteRotation: boolean;

  /**
   * Value true/false
   *  - True = Flip Horizontal
   *  - False = No Horizontal flip
   */
  flipX: boolean;

  /**
   * Value true/false
   *  - True = Flip Vertical
   *  - False = No Vertical flip
   */
  flipY: boolean;

  /**
   * Value 0.00+. NOTE: 300 = 1sec
   */
  duration300: number;
}

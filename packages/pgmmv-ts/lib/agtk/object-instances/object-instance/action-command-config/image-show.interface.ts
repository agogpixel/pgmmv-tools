/**
 * Object instance image show action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { ImageShow as ImageShowConstant } from '../../../constants/action-commands/image-show';
import type { PriorityTypeValue as PriorityType } from '../../../constants/action-commands/priority-type';

/**
 * Image show position type type.
 *
 * @internal
 */
type PositionType =
  | ImageShowConstant['PositionCenter']
  | ImageShowConstant['PositionLockObjectCenter']
  | ImageShowConstant['PositionScenePosition'];

/**
 * Image show vertical alignment type.
 *
 * @internal
 */
type VerticalAlignment =
  | ImageShowConstant['VertAlignCenter']
  | ImageShowConstant['VertAlignTop']
  | ImageShowConstant['VertAlignBottom'];

/**
 * Image show horizontal alignment type.
 *
 * @internal
 */
type HorizontalAlignment =
  | ImageShowConstant['HorzAlignCenter']
  | ImageShowConstant['HorzAlignLeft']
  | ImageShowConstant['HorzAlignRight'];

/**
 * Object instance image show action command configuration interface.
 */
export interface ImageShow {
  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Any video ID's you may have
   */
  imageId: number;

  /**
   * Value true/false.
   *  - True = Use Default Size
   *  - False = Use Adjust Size
   */
  defaultSize: boolean;

  /**
   * Value 0+.
   */
  width: number;

  /**
   * Value 0+.
   */
  height: number;

  /**
   * Value 0 - 2.
   *  - 0 = Center of This Object
   *  - 1 = Center of Object Locked by This Object
   *  - 2 = Use Scene as Base
   */
  positionType: PositionType;

  /**
   * Value true/false.
   *  - True = Use Connection Point
   *  - False = Don't Use
   */
  useConnect: boolean;

  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Any Connection Points you may have added
   */
  connectId: number;

  /**
   * Value 0 - 2.
   *  - 0 = Center
   *  - 1 = Top
   *  - 2 = Bottom
   */
  vertAlign: VerticalAlignment;

  /**
   * Value 0 - 2.
   *  - 0 = Center
   *  - 1 = Left
   *  - 2 = Right
   */
  horzAlign: HorizontalAlignment;

  /**
   * Value any integer.
   */
  adjustX: number;

  /**
   * Value any integer.
   */
  adjustY: number;

  /**
   * Value 0+. A value of 300 = 1 second.
   */
  duration300: number;

  /**
   * Value true/false.
   *  - True = No Time Limit
   *  - False = Time Limit based on duration300 value
   */
  durationUnlimited: boolean;

  /**
   * Value true/false.
   *  - True = Hide on Object Action Change
   *  - False = Don't hide on action change
   */
  hideOnObjectActionChange: boolean;

  /**
   * Value true/false.
   *  - True = Press OK to Close Image
   *  - False = OK won't close
   */
  closeByOk: boolean;

  /**
   * Value true/false.
   *  - True = Stop All Object Motions During Video Playback
   *  - False = Don't stop motions
   */
  stopObject: boolean;

  /**
   * Value true/false.
   *  - True = Pause Game During Video Playback
   *  - False = Don't pause game
   */
  stopGame: boolean;

  /**
   * Value true/false.
   *  - True = Dim Areas Outside Image
   *  - False = Don't dim
   */
  fillBlack: boolean;

  /**
   * Value true/false.
   *  - True = Position
   *  - False = Don't adjust position
   */
  priority: boolean;

  /**
   * Value true/false.
   *  - True = Frontmost
   *  - False = Not frontmost (note only priorityType value of 0 will be false)
   *
   * @deprecated To be removed.
   */
  priorityMostFront: boolean;


  /**
   * Value 0 - 2.
   *  - 0 = Background
   *  - 1 = Frontmost
   *  - 2 = Frontmost + Menu Scene
   */
  priorityType: PriorityType;
}

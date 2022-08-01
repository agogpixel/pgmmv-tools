/**
 * Object instance scroll message show action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { PriorityTypeValue as PriorityType } from '../../../constants/action-commands/priority-type';
import type { ScrollMessageShow as ScrollMessageShowConstant } from '../../../constants/action-commands/scroll-message-show';

/**
 * Scroll message show background type type.
 *
 * @internal
 */
type BackgroundType =
  | ScrollMessageShowConstant['BackgroundNone']
  | ScrollMessageShowConstant['BackgroundTemplate']
  | ScrollMessageShowConstant['BackgroundImage'];

/**
 * Scroll message show template ID type.
 *
 * @internal
 */
type TemplateId =
  | ScrollMessageShowConstant['TemplateBlack']
  | ScrollMessageShowConstant['TemplateWhite'];

/**
 * Scroll message show position type type.
 *
 * @internal
 */
type PositionType =
  | ScrollMessageShowConstant['PositionCenter']
  | ScrollMessageShowConstant['PositionLockObjectCenter']
  | ScrollMessageShowConstant['PositionScenePosition'];

/**
 * Scroll message show horizontal alignment type.
 *
 * @internal
 */
type HorizontalAlignment =
  | ScrollMessageShowConstant['HorzAlignLeft']
  | ScrollMessageShowConstant['HorzAlignCenter']
  | ScrollMessageShowConstant['HorzAlignRight'];

/**
 * Object instance scroll message show action command configuration interface.
 *
 * NOTE: Text Resource options 'Font', 'Character Spacing', and 'Line Spacing' are only available in the normal Runtime Action as they are essentially an extension to the Text resource tab.
 */
export interface ScrollMessageShow {
  /**
   * Value -1, 1+
   *  - -1 = Not Set
   *  - 1+ = Any Text resource ID's you may have
   */
  textId: number;

  /**
   * Value 0 - 255
   */
  colorA: number;

  /**
   * Value 0 - 255
   */
  colorR: number;

  /**
   * Value 0 - 255
   */
  colorG: number;

  /**
   * Value 0 - 255
   */
  colorB: number;

  /**
   * Value -1, 0, 1
   *  - -1 = Not Set
   *  - 0 = Select from Templates
   *  - 1 = Select from Image Resource
   */
  backgroundType: BackgroundType;

  /**
   * Value 1 - 2
   *  - 1 = Black
   *  - 2 = White
   */
  templateId: TemplateId;

  /**
   * Value -1, 1+
   *  - -1 = None
   *  - 1+ = Any Image resource ID's you may have
   */
  imageId: number;

  /**
   * Value 0 - 100
   */
  backgroundTransparency: number;

  /**
   * Value 0+
   */
  backgroundWidth: number;

  /**
   * Value 0+
   */
  backgroundHeight: number;

  /**
   * Value 0 - 2
   *  - 0 = Center of This Object
   *  - 1 = Center of Object Locked by This Object
   *  - 2 = Use Scene as Base
   */
  positionType: PositionType;

  /**
   * Value true/false
   *  - True = Use Connection Point
   *  - False = Don't use
   */
  useConnect: boolean;

  /**
   * Value -1, 1+
   *  - -1 = None
   *  - 1+ = Any Connection Point ID's you may have
   */
  connectId: number;

  /**
   * Value any integer. Referring to 'Use Scene as Base'
   */
  adjustX: number;

  /**
   * Value any integer. Referring to 'Use Scene as Base'
   */
  adjustY: number;

  /**
   * Value 0 - 2
   *  - 0 = Left
   *  - 1 = Center
   *  - 2 = Right
   */
  horzAlign: HorizontalAlignment;

  /**
   * Value any integer.
   */
  topBottomMargin: number;

  /**
   * Value any integer.
   */
  leftRightMargin: number;

  /**
   * Value any float. 1 = 1 second
   */
  scrollSpeed: number;

  /**
   * Value true/false
   *  - True = Bottom to Top
   *  - False = Top to Bottom
   */
  scrollUp: boolean;

  /**
   * Value true/false
   *  - True = Hide on Object Action Change
   *  - False = Don't hide
   */
  actionChangeHide: boolean;

  /**
   * Value true/false
   *  - True = Speed Up on Input
   *  - False = Don't allow speed up
   */
  speedUpByKey: boolean;

  /**
   * Value -1 and 1+ varying. NOTE: Refer to the section 'Find Control Key ID's' for specific key ID's (both default and custom)
   *  - -1 = None
   *  - 1 - 27 (varying) = Default keys
   *  - 1000+ = Any custom key ID's you may have
   */
  keyId: number;

  /**
   * Value true/false
   *  - True = Stop All Object Motions During Message Display
   *  - False = Don't stop
   */
  objectStop: boolean;

  /**
   * Value true/false
   *  - True = Pause Game During Message Display
   *  - False = Don't pause
   */
  gameStop: boolean;

  /**
   * Value true/false
   *  - True = Frontmost
   *  - False = Not frontmost (note only priorityType value of 0 will be false)
   *
   * @deprecated To be removed.
   */
  priorityMostFront: boolean;

  /**
   * Value true/false
   *  - True = Position
   *  - False = No Positioning
   */
  priority: boolean;

  /**
   * Value 0 - 2
   *  - 0 = Background
   *  - 1 = Frontmost
   *  - 2 = Frontmost + Menu Scene
   */
  priorityType: PriorityType;
}

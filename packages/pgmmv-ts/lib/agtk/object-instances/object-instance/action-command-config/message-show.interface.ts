/**
 * Object instance message show action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { MessageShow as MessageShowConstant } from '../../../constants/action-commands/message-show';
import type { PriorityTypeValue as PriorityType } from '../../../constants/action-commands/priority-type';

/**
 * Message show window type type.
 *
 * @internal
 */
type WindowType =
  | MessageShowConstant['WindowNone']
  | MessageShowConstant['WindowTemplate']
  | MessageShowConstant['WindowImage'];

/**
 * Message show template ID type.
 *
 * @internal
 */
type TemplateId =
  | MessageShowConstant['TemplateWhiteFrame']
  | MessageShowConstant['TemplateBlack']
  | MessageShowConstant['TemplateWhite'];

/**
 * Message show position type type.
 *
 * @internal
 */
type PositionType =
  | MessageShowConstant['PositionCenter']
  | MessageShowConstant['PositionLockObjectCenter']
  | MessageShowConstant['PositionScenePosition'];

/**
 * Message show horizontal alignment type.
 *
 * @internal
 */
type HorizontalAlignment =
  | MessageShowConstant['HorzAlignLeft']
  | MessageShowConstant['HorzAlignCenter']
  | MessageShowConstant['HorzAlignRight'];

/**
 * Message show vertical alignment type.
 *
 * @internal
 */
type VerticalAlignment =
  | MessageShowConstant['VertAlignTop']
  | MessageShowConstant['VertAlignCenter']
  | MessageShowConstant['VertAlignBottom'];

/**
 * Object instance message show action command configuration interface.
 *
 * NOTE: Text Resource options 'Font', 'Character Spacing', and 'Line Spacing' are only available in the normal Runtime Action as they are essentially an extension to the Text resource tab.
 */
export interface MessageShow {
  /**
   * Value true/false
   *  - True = Text Resources
   *  - False = Variables
   */
  textFlag: boolean;

  /**
   * Value -1, 1+
   *  - -1 = Not Set
   *  - 1+ = Any Text resource ID's you may have
   */
  textId: number;

  /**
   * Value -5, -2, -1, 0, 1+
   *  - -5 = Locked
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  variableObjectId: number;

  /**
   * Value -1
   *  - -1 = Single
   */
  variableQualifierId: number;

  /**
   * Value -1 (None) or 1+. Value will depend on if Self or Common selected as well as if a created or default variable, so refer to section 'Targeting Switches & Variables' and 'Find Switch / Variable ID's' for info on getting variable values
   */
  variableId: number;

  /**
   * Value -1, 1+. NOTE: This is referring to the Show Variable option only. You cannot change the Font on the Text Resources option via script, that can only be done in the normal Runtime Action
   *  - -1 = None
   *  - 1+ = Any Font resource ID's you may have
   */
  fontId: number;

  /**
   * Value true/false
   *  - True = Set No. of Digits
   *  - False = Don't Set
   */
  digitFlag: boolean;

  /**
   * Value 0+. How many digits to show.
   */
  digits: number;

  /**
   * Value true/false
   *  - True = Add Zeroes
   *  - False = Don't add zeroes
   */
  zeroPadding: boolean;

  /**
   * Value true/false
   *  - True = Delimit with "," *Money notation
   *  - False = Don't
   */
  comma: boolean;

  /**
   * Value true/false
   *  - True = Hide Decimals
   *  - False = Don't hide
   */
  withoutDecimalPlaces: boolean;

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
   *  - -1 = None
   *  - 0 = Select from Templates
   *  - 1 = Select from Image Resource
   */
  windowType: WindowType;

  /**
   * Value 0 - 2
   *  - 0 = Blank Frame
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
  windowTransparency: number;

  /**
   * Value 0+
   */
  windowWidth: number;

  /**
   * Value 0+
   */
  windowHeight: number;

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
   * Value any integer.
   */
  topBottomMargin: number;

  /**
   * Value any integer.
   */
  leftRightMargin: number;

  /**
   * Value 0 - 2
   *  - 0 = Left
   *  - 1 = Center
   *  - 2 = Right
   */
  horzAlign: HorizontalAlignment;


  /**
   * Value 0 - 2
   *  - 0 = Top
   *  - 1 = Center
   *  - 2 = Bottom
   */
  vertAlign: VerticalAlignment;

  /**
   * Value 0.00+. NOTE: 300 = 1sec.
   */
  duration300: number;

  /**
   * Value true/false
   *  - True = No Time Limit
   *  - False = Use duration300 time
   */
  durationUnlimited: boolean;

  /**
   * Value true/false
   *  - True = Hide on Object Action Change
   *  - False = Don't hide
   */
  actionChangeHide: boolean;

  /**
   * Value true/false
   *  - True = Hide Message on Specified Input
   *  - False = Don't Hide
   */
  closeByKey: boolean;

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
   * @deprecated To be removed
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
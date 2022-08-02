/**
 * Object instance timer action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { TimerValue as SecondType } from '../../../constants/action-commands/timer';

/**
 * Object instance timer action command configuration interface.
 */
export interface Timer {
  /**
   * Value true/false
   *  - True = Start
   *  - False = Stop
   */
  start: boolean;

  /**
   * Value -5, -2, -1, 0, 1+.
   *  - -5 = Locked
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  timerVariableObjectId: number;

  /**
   * Value -1
   *  - -1 = Single
   */
  timerVariableQualifierId: number;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common selected as well as if a created or default variable, so refer to section 'Targeting Switches & Variables' and 'Find Switch / Variable ID's' for info on getting variable values
   */
  timerVariableId: number;

  /**
   * Value true/false
   *  - True = Count Up
   *  - False = Count Down
   */
  countUp: boolean;

  /**
   * Value 0 - 1
   *  - 0 = Input Seconds
   *  - 1 = Set by Variable
   */
  secondType: SecondType;

  /**
   * Value 0.00+. 300 = 1 second if secondType is 0
   */
  second300: number;

  /**
   * Value -5, -2, -1, 0, 1+.
   *  - -5 = Locked
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  secondVariableObjectId: number;

  /**
   * Value -1
   *  - -1 = Single
   */
  secondVariableQualifierId: number;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common selected as well as if a created or default variable, so refer to section 'Targeting Switches & Variables' and 'Find Switch / Variable ID's' for info on getting variable values
   */
  secondVariableId: number;
}

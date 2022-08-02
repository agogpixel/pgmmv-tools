/**
 * Object instance menu hide action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { MenuHideValue as EffectType } from '../../../constants/action-commands/menu-hide';

/**
 * Object instance menu hide action command configuration interface.
 */
export interface MenuHide {
  /**
   * Value true/false
   *  - True = Hide All Except Default Display Menu
   *  - False = Hide only last shown menu
   */
  hideExceptInitial: boolean;

  /**
   * Value true/false
   *  - True = Set Sequence
   *  - False = No sequence
   */
  useEffect: boolean;

  /**
   * Value -1, 0 - 3
   *  - -1 = Not Set
   *  - 0 = Slide Up
   *  - 1 = Slide Down
   *  - 2 = Slide Left
   *  - 3 = Slide Right
   */
  effectType: EffectType;

  /**
   * Value true/false
   *  - True = Fade-out
   *  - False = None
   */
  fadeout: boolean;

  /**
   * Value 0.00+. 300 = 1 second
   */
  duration300: number;

  /**
   * Value true/false
   *  - True = Disable Object
   *  - False = Don't disable
   */
  disableObjects: boolean;
}

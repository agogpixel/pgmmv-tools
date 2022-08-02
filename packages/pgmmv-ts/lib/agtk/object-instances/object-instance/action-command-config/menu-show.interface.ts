/**
 * Object instance menu show action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { MenuShowValue as EffectType } from '../../../constants/action-commands/menu-show';

/**
 * Object instance menu show action command configuration interface.
 */
export interface MenuShow {
  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Any menu scene layers you may have (1 being the far left tab)
   */
  layerId: number;

  /**
   * Value true/false.
   *  - True = Set Sequence
   *  - False = No sequence
   */
  useEffect: boolean;

  /**
   * Value -1, 0 - 3.
   *  - -1 = Not Set
   *  - 0 = Slide Up
   *  - 1 = Slide Down
   *  - 2 = Slide Left
   *  - 3 = Slide Right
   */
  effectType: EffectType;

  /**
   * Value true/false.
   *  - True = Fade-in
   *  - False = None
   */
  fadein: boolean;

  /**
   * Value 0.00+. 300 = 1 second.
   */
  duration300: number;
}

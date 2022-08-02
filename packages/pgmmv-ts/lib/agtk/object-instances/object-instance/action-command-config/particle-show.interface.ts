/**
 * Object instance particle show action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { ParticleShowValue as PositionType } from '../../../constants/action-commands/particle-show';

/**
 * Object instance particle show action command configuration interface.
 */
export interface ParticleShow {
  /**
   * Value -1, 1+
   *  - -1 = Not Set
   *  - 1+ = Any particles you may have created
   */
  particleId: number;

  /**
   * Value 0 - 1
   *  - 0 = Center of This Object
   *  - 1 = Center of Object Locked by This Object
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
   *  - -1 = Not Set
   *  - 1+ = Any Connection Points you may have created
   */
  connectId: number;

  /**
   * Value any integer.
   */
  adjustX: number;

  /**
   * Value any integer.
   */
  adjustY: number;

  /**
   * Value 0.00+. NOTE: 300 = 1sec
   */
  duration300: number;

  /**
   * Value true/false
   *  - True = No Time Limit
   *  - False = Time Limited to 'duration300' setting
   */
  durationUnlimited: boolean;
}

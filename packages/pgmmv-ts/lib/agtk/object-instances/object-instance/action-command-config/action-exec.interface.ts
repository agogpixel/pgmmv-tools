/**
 * Object instance action execute action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { QualifierValue as QualifierId } from '../../../constants/qualifier';

/**
 * Object instance action execute action command configuration interface.
 */
export interface ActionExec {
  /**
   * Value -2, -1 or 1+. WARNING: Game will crash if value is 0 or a nonexistent object ID positive number
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;

  /**
   * Value -2 or -1.
   *  - -2 = All
   *  - -1 = Single
   */
  qualifierId: QualifierId;

  /**
   * Value -1 or 1+. Note: If actionId doesn't exist, default action will apply
   *  - -1 = Default Action
   *  - 1+ = Any actions you may have
   */
  actionId: number;
}

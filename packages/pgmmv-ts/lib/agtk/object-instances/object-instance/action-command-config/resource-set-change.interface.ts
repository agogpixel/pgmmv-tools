/**
 * Object instance resource set change action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { QualifierValue as QualifierId } from '../../../constants/qualifier';

/**
 * Object instance resource set change action command configuration interface.
 */
export interface ResourceSetChange {
  /**
   * Value -2, -1, 1+
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;

  /**
   * Value -2, -1
   *  - -2 = All
   *  - -1 = Single
   */
  qualifierId: QualifierId;

  /**
   * Value -1, 1+
   *  - -1 = Not Set
   *  - 1+ = Any animation sets you may have associated with that objectId
   */
  resourceSetId: number;
}

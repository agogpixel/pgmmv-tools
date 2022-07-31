/**
 * Link condition constants interface module.
 *
 * @packageDocumentation
 */
import type { AttackAreaNear } from './attack-area-near';
import type { AttackAreaTouched } from './attack-area-touched';
import type { Locked } from './locked';
import type { ObjectFacingDirection } from './object-facing-direction';
import type { ObjectFacingEachOther } from './object-facing-each-other';
import type { ObjectFacing } from './object-facing';
import type { ObjectFound } from './object-found';
import type { ObjectHit } from './object-hit';
import type { ObjectNear } from './object-near';
import type { ObjectWallTouched } from './object-wall-touched';
import type { SlopeTouched } from './slope-touched';

/**
 * Link condition constants interface.
 */
export interface LinkCondition {
  /**
   * Object wall touched.
   */
  readonly objectWallTouched: ObjectWallTouched;

  /**
   * Object hit.
   */
  readonly objectHit: ObjectHit;

  /**
   * Attack area touched.
   */
  readonly attackAreaTouched: AttackAreaTouched;

  /**
   * Attack area near.
   */
  readonly attackAreaNear: AttackAreaNear;

  /**
   * Object near.
   */
  readonly objectNear: ObjectNear;

  /**
   * Object facing each other.
   */
  readonly objectFacingEachOther: ObjectFacingEachOther;

  /**
   * Object facing.
   */
  readonly objectFacing: ObjectFacing;

  /**
   * Object found.
   */
  readonly objectFound: ObjectFound;

  /**
   * Object facing direction.
   */
  readonly objectFacingDirection: ObjectFacingDirection;

  /**
   * Locked.
   */
  readonly locked: Locked;

  /**
   * Slope touched.
   */
  readonly slopeTouched: SlopeTouched;
}

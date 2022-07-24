import type { AttackAreaNear } from './attack-area-near.interface';
import type { AttackAreaTouched } from './attack-area-touched.interface';
import type { Locked } from './locked.interface';
import type { ObjectFacingDirection } from './object-facing-direction.interface';
import type { ObjectFacingEachOther } from './object-facing-each-other.interface';
import type { ObjectFacing } from './object-facing.interface';
import type { ObjectFound } from './object-found.interface';
import type { ObjectHit } from './object-hit.interface';
import type { ObjectNear } from './object-near.interface';
import type { ObjectWallTouched } from './object-wall-touched.interface';
import type { SlopeTouched } from './slope-touched.interface';

/**
 *
 */
export interface LinkCondition {
  objectWallTouched: ObjectWallTouched;
  objectHit: ObjectHit;
  attackAreaTouched: AttackAreaTouched;
  attackAreaNear: AttackAreaNear;
  objectNear: ObjectNear;
  objectFacingEachOther: ObjectFacingEachOther;
  objectFacing: ObjectFacing;
  objectFound: ObjectFound;
  objectFacingDirection: ObjectFacingDirection;
  locked: Locked;
  slopeTouched: SlopeTouched;
}

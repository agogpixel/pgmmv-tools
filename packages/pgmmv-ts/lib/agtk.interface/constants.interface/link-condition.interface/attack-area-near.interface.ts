/**
 *
 */
export interface AttackAreaNear {
  DistanceNone: 0;
  DistanceGreaterEqual: 1;
  DistanceLessEqual: 2;
  SetByObjectGroup: 0;
  SetByObjectId: 1;
  AttributeNone: 0;
  AttributePreset: 1;
  AttributeValue: 2;
}

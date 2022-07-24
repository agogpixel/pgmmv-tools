/**
 *
 */
export interface ObjectMove {
  MoveWithDirection: 0;
  MoveToPosition: 1;
  MoveToObjectCenter: 2;
  MoveToObjectOrigin: 3;
  MoveToObjectConnectionPoint: 4;
  /**
   * @note Developer Typo
   */
  TargettingByType: 0;
  /**
   * @note Developer Typo
   */
  TargettingByGroup: 0;
  /**
   * @note Developer Typo
   */
  TargettingById: 1;
  /**
   * @note Developer Typo
   */
  TargettingTouched: 2;
  /**
   * @note Developer Typo
   */
  TargettingLocked: 3;
}

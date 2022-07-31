/**
 * Action commands file load constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Action commands file load constants interface.
 */
export interface FileLoad {
  /**
   * None.
   */
  readonly None: -1;

  /**
   * Black.
   */
  readonly Black: 0;

  /**
   * White.
   */
  readonly White: 1;

  /**
   * Slide up.
   */
  readonly SlideUp: 2;

  /**
   * Slide down.
   */
  readonly SlideDown: 3;

  /**
   * Slide left.
   */
  readonly SlideLeft: 4;

  /**
   * Slide right.
   */
  readonly SlideRight: 5;
}

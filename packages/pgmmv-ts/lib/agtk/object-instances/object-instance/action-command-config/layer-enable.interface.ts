/**
 * Object instance layer enable action command configuration interface module.
 *
 * @packageDocumentation
 */

/**
 * Object instance layer disable action command configuration interface.
 */
export interface LayerEnable {
  /**
   * Value -1 or 0+. Note: If non-existing layer, game will not crash but action
   * will be null.
   *  - -1 = Not Set
   *  - 0+ = Any created layers you may have, first layer = 0
   */
  layerIndex: number;

  /**
   * Value true/false.
   *  - True = Enable Unselected Layers
   *  - False = Enable selected layer only
   */
  exceptFlag: boolean;
}

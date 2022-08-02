/**
 * Object instance scene effect action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { FilterEffects } from '../../../constants/filter-effects'

import type { ObjectFilterEffect } from './object-filter-effect.interface';

/**
 * Scene effect filter effect image placement.
 */
type ImagePlacement =
  | FilterEffects['PlacementCenter']
  | FilterEffects['PlacementMagnify']
  | FilterEffects['PlacementTiling']
  | FilterEffects['PlacementKeepRatio']
  | FilterEffects['PlacementObjectCenter']

/**
 * Object instance scene effect action command configuration interface.
 */
export interface SceneEffect {
  /**
   * Value -4, -3, -1, 0+.
   *  - -4 = Foremost Layer + Menu
   *  - -3 = Foremost Layer
   *  - -1 = All Layers in Scene
   *  - 0+ = Any individual available layer
   */
  layerIndex: number;

  /**
   * Filter effect.
   */
  filterEffect: ObjectFilterEffect & {
    /**
     * Value 0 - 4.
     *  - 0 = Center
     *  - 1 = Enlarge
     *  - 2 = Tiles
     *  - 3 = Keep Aspect Ratio and Enlarge
     *  - 4 = Center of This Object
     */
    imagePlacement: ImagePlacement;
  }
}

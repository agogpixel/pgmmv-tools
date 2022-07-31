/**
 * Constants interface module.
 *
 * @packageDocumentation
 */
import type { ActionCommands } from './action-commands';
import type { Animations } from './animations';
import type { Assignments } from './assignments';
import type { AttackAttributes } from './attack-attributes';
import type { Conditions } from './conditions';
import type { Controllers } from './controllers';
import type { DatabaseTemplateTypes } from './database-template-types';
import type { Direction } from './direction';
import type { FilterEffects } from './filter-effects';
import type { LinkCondition } from './link-condition';
import type { ObjectGroup } from './object-group';
import type { ObjectType } from './object-type';
import type { Objects } from './objects';
import type { Qualifier } from './qualifier';
import type { SwitchVariableObjects } from './switch-variable-objects';
import type { SystemLayers } from './system-layers';
import type { TileGroup } from './tile-group';
import type { Tile } from './tile';
import type { Tracks } from './tracks';

/**
 * Constants interface.
 */
export interface Constants {
  /**
   * Action commands.
   */
  readonly actionCommands: ActionCommands;

  /**
   * Link condition.
   */
  readonly linkCondition: LinkCondition;

  /**
   * Conditions.
   */
  readonly conditions: Conditions;

  /**
   * Assignments.
   */
  readonly assignments: Assignments;

  /**
   * Attack attributes.
   */
  readonly attackAttributes: AttackAttributes;

  /**
   * Filter effects.
   */
  readonly filterEffects: FilterEffects;

  /**
   * System layers.
   */
  readonly systemLayers: SystemLayers;

  /**
   * Qualifier.
   */
  readonly qualifier: Qualifier;

  /**
   * Object type.
   *
   * @deprecated
   */
  readonly objectType: ObjectType;

  /**
   * Object group.
   */
  readonly objectGroup: ObjectGroup;

  /**
   * Tile group.
   */
  readonly tileGroup: TileGroup;

  /**
   * Tile.
   */
  readonly tile: Tile;

  /**
   * Direction.
   */
  readonly direction: Direction;

  /**
   * Controllers.
   */
  readonly controllers: Controllers;

  /**
   * Animations.
   */
  readonly animations: Animations;

  /**
   * Tracks.
   */
  readonly tracks: Tracks;

  /**
   * Objects.
   */
  readonly objects: Objects;

  /**
   * Switch variable objects.
   */
  readonly switchVariableObjects: SwitchVariableObjects;

  /**
   * Database template types.
   */
  readonly databaseTemplateTypes: DatabaseTemplateTypes;
}

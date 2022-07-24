import type { ActionCommands } from './action-commands.interface';
import type { Animations } from './animations.interface';
import type { Assignments } from './assignments.interface';
import type { AttackAttributes } from './attack-attributes.interface';
import type { Conditions } from './conditions.interface';
import type { Controllers } from './controllers.interface';
import type { DatabaseTemplateTypes } from './database-template-types.interface';
import type { Direction } from './direction.interface';
import type { FilterEffects } from './filter-effects.interface';
import type { LinkCondition } from './link-condition.interface';
import type { ObjectGroup } from './object-group.interface';
import type { ObjectType } from './object-type.interface';
import type { Objects } from './objects.interface';
import type { Qualifier } from './qualifier.interface';
import type { SwitchVariableObjects } from './switch-variable-objects.interface';
import type { SystemLayers } from './system-layers.interface';
import type { TileGroup } from './tile-group.interface';
import type { Tile } from './tile.interface';
import type { Tracks } from './tracks.interface';

/**
 *
 */
export interface Constants {
  actionCommands: ActionCommands;
  linkCondition: LinkCondition;
  conditions: Conditions;
  assignments: Assignments;
  attackAttributes: AttackAttributes;
  filterEffects: FilterEffects;
  systemLayers: SystemLayers;
  qualifier: Qualifier;
  /**
   * @deprecated
   */
  objectType: ObjectType;
  objectGroup: ObjectGroup;
  tileGroup: TileGroup;
  tile: Tile;
  direction: Direction;
  controllers: Controllers;
  animations: Animations;
  tracks: Tracks;
  objects: Objects;
  switchVariableObjects: SwitchVariableObjects;
  databaseTemplateTypes: DatabaseTemplateTypes;
}

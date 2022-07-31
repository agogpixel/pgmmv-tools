/**
 * Object instance interface module.
 *
 * @packageDocumentation
 */
import type { CommandBehaviorNext } from '../../_shared/command-behavior-next.type';

import type { ObjectLock, TemplateMove } from './action-command-config';
import type { Switches } from './switches';
import type { Variables } from './variables';

/**
 * Object instance interface.
 */
export interface ObjectInstance {
  /**
   * Object instance ID.
   */
  readonly id: number;

  /**
   * Object ID.
   */
  readonly objectId: number;

  /**
   * Object location layer ID.
   */
  readonly layerId: number;

  /**
   * Object location layer index.
   */
  readonly layerIndex: number;

  /**
   * References object switches.
   */
  readonly switches: Switches;

  /**
   * References object variables.
   */
  readonly variables: Variables;

  /**
   * Get attacker object instance list.
   *
   * @returns An array of IDs referencing object instances that attacked this
   * object instance.
   * @note Information for 1 frame before can be acquired.
   */
  getAttackerInstanceIdList(): number[];

  /**
   * Executes "Template movement settings".
   *
   * @param templateMove
   */
  execCommandTemplateMove(templateMove: TemplateMove): CommandBehaviorNext;

  /**
   * Executes "Lock Object";
   *
   * @param objectLock
   */
  execCommandObjectLock(objectLock: ObjectLock): CommandBehaviorNext;
}

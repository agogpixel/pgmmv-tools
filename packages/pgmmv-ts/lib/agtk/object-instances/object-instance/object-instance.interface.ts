/**
 * Object instance interface module.
 *
 * @packageDocumentation
 */
import type { CommandBehavior } from '../../constants/action-commands/command-behavior';

import type {
  AttackSetting,
  BulletFire,
  CameraAreaChange,
  DisableObjectEnable,
  DisappearObjectRecover,
  EffectShow,
  LayerMove,
  MessageShow,
  ObjectChange,
  ObjectCreate,
  ObjectFilterEffect,
  ObjectFilterEffectRemove,
  ObjectLock,
  ObjectMove,
  ObjectPushPull,
  SceneEffect,
  SceneEffectRemove,
  SceneGravityChange,
  SceneRotateFlip,
  ScrollMessageShow,
  SoundPlay,
  TemplateMove
} from './action-command-config';
import type { Switches } from './switches';
import type { Variables } from './variables';

/**
 * Command behavior next type.
 *
 * @internal
 */
type CommandBehaviorNext = CommandBehavior['CommandBehaviorNext'];

/**
 * Command behavior loop type.
 *
 * @internal
 */
type CommandBehaviorLoop = CommandBehavior['CommandBehaviorLoop'];

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

  /**
   * Executes "Generate Object".
   *
   * @param objectCreate
   */
  execCommandObjectCreate(objectCreate: ObjectCreate): CommandBehaviorNext;

  /**
   * Executes "Change Object".
   *
   * @param objectChange
   */
  execCommandObjectChange(objectChange: ObjectChange): CommandBehaviorNext;

  /**
   * Executes "Move Object".
   *
   * @param objectMove
   */
  execCommandObjectMove(objectMove: ObjectMove): CommandBehaviorNext;

  /**
   * Executes "Push/Pull Object".
   *
   * @param objectPushPull
   */
  execCommandObjectPushPull(objectPushPull: ObjectPushPull): CommandBehaviorLoop;

  /**
   * Executes "Move Layer".
   *
   * @param layerMove
   */
  execCommandLayerMove(layerMove: LayerMove): CommandBehaviorNext;

  /**
   * Executes "Attack Settings".
   *
   * @param attackSetting
   */
  execCommandAttackSetting(attackSetting: AttackSetting): CommandBehaviorNext;

  /**
   * Executes "Fire Bullet".
   *
   * @param bulletFire
   */
  execCommandBulletFire(bulletFire: BulletFire): CommandBehaviorNext;

  /**
   * Executes "Destroy Object".
   *
   * @param disappear Not used.
   */
  execCommandDisappear(disappear?: unknown): CommandBehaviorNext;

  /**
   * Executes "Restore Destroyed Object".
   *
   * @param disappearObjectRecover
   */
  execCommandDisappearObjectRecover(disappearObjectRecover: DisappearObjectRecover): CommandBehaviorNext;

  /**
   * Executes "Disable Object".
   *
   * @param disable Not used.
   */
  execCommandDisable(disable?: unknown): CommandBehaviorNext;

  /**
   * Executes "Restore Destroyed Object".
   *
   * @param disableObjectEnable
   */
  execCommandDisableObjectEnable(disableObjectEnable: DisableObjectEnable): CommandBehaviorNext;

  /**
   * Executes "Apply Filter Effects on Object".
   *
   * @param objectFilterEffect
   */
  execCommandObjectFilterEffect(objectFilterEffect: ObjectFilterEffect): CommandBehaviorNext;

  /**
   * Executes "Delete Filter Effects from Objects".
   *
   * @param objectFilterEffectRemove
   */
  execCommandObjectFilterEffectRemove(objectFilterEffectRemove: ObjectFilterEffectRemove): CommandBehaviorNext;

  /**
   * Executes "Apply Screen Effect to Scene".
   *
   * @param sceneEffect
   */
  execCommandSceneEffect(sceneEffect: SceneEffect): CommandBehaviorNext;

  /**
   * Executes "Delete Screen Effects from Scene".
   *
   * @param sceneEffectRemove
   */
  execCommandSceneEffectRemove(sceneEffectRemove: SceneEffectRemove): CommandBehaviorNext;

  /**
   * Executes "Change Scene Gravity Effect".
   *
   * @param sceneGravityChange
   */
  execCommandSceneGravityChange(sceneGravityChange: SceneGravityChange): CommandBehaviorNext;

  /**
   * Executes "Rotate/Flip Scene".
   *
   * @param sceneRotateFlip
   */
  execCommandSceneRotateFlip(sceneRotateFlip: SceneRotateFlip): CommandBehaviorNext;

  /**
   * Executes "Change Camera Display Area".
   *
   * @param cameraAreaChange
   */
  execCommandCameraAreaChange(cameraAreaChange: CameraAreaChange): CommandBehaviorNext;

  /**
   * Executes "Audio Playback".
   *
   * @param soundPlay
   */
  execCommandSoundPlay(soundPlay: SoundPlay): CommandBehaviorNext;

  /**
   * Executes "Show Text".
   *
   * @param messageShow
   */
  execCommandMessageShow(messageShow: MessageShow): CommandBehaviorNext;

  /**
   * Executes "Show Scrolling Text".
   *
   * @param scrollMessageShow
   */
  execCommandScrollMessageShow(scrollMessageShow: ScrollMessageShow): CommandBehaviorNext;

  /**
   * Executes "Show Effect".
   *
   * @param effectShow
   */
  execCommandEffectShow(effectShow: EffectShow): CommandBehaviorNext;
}

/**
 * Object instance interface module.
 *
 * @packageDocumentation
 */
import type { CommandBehavior } from '../../constants/action-commands/command-behavior';

import type {
  ActionExec,
  AttackSetting,
  BulletFire,
  CameraAreaChange,
  DatabaseReflect,
  DirectionMove,
  DisableObjectEnable,
  DisappearObjectRecover,
  DisplayDirectionMove,
  EffectRemove,
  EffectShow,
  FileLoad,
  ForthBackMoveTurn,
  GameSpeedChange,
  ImageShow,
  LayerDisable,
  LayerEnable,
  LayerHide,
  LayerMove,
  LayerShow,
  MenuHide,
  MenuShow,
  MessageShow,
  MovieShow,
  ObjectChange,
  ObjectCreate,
  ObjectFilterEffect,
  ObjectFilterEffectRemove,
  ObjectLock,
  ObjectMove,
  ObjectPushPull,
  ObjectUnlock,
  ParticleRemove,
  ParticleShow,
  ResourceSetChange,
  SceneEffect,
  SceneEffectRemove,
  SceneGravityChange,
  SceneRotateFlip,
  SceneShake,
  ScrollMessageShow,
  SoundPlay,
  SoundPositionRemember,
  SwitchVariableChange,
  SwitchVariableReset,
  TemplateMove,
  Timer
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
 * Command behavior break type.
 *
 * @internal
 */
type CommandBehaviorBreak = CommandBehavior['CommandBehaviorBreak'];

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

  /**
   * Executes "Hide Effects".
   *
   * @param effectRemove
   */
  execCommandEffectRemove(effectRemove: EffectRemove): CommandBehaviorNext;

  /**
   * Executes "Show Particles".
   *
   * @param particleShow
   */
  execCommandParticleShow(particleShow: ParticleShow): CommandBehaviorNext;

  /**
   * Executes "Hide Particles".
   *
   * @param particleRemove
   */
  execCommandParticleRemove(particleRemove: ParticleRemove): CommandBehaviorNext;

  /**
   * Executes "Play Video".
   *
   * @param movieShow
   */
  execCommandMovieShow(movieShow: MovieShow): CommandBehaviorNext;

  /**
   * Executes "Display Image".
   *
   * @param imageShow
   */
  execCommandImageShow(imageShow: ImageShow): CommandBehaviorNext;

  /**
   * Executes "Change Switch/Variable".
   *
   * @param switchVariableChange
   */
  execCommandSwitchVariableChange(switchVariableChange: SwitchVariableChange): CommandBehaviorNext;

  /**
   * Executes "Reset Switch/Variable".
   *
   * @param switchVariableResets
   */
  execCommandSwitchVariableReset(switchVariableResets: SwitchVariableReset[]): CommandBehaviorNext;

  /**
   * Executes "Change Game Speed".
   *
   * @param gameSpeedChange
   */
  execCommandGameSpeedChange(gameSpeedChange: GameSpeedChange): CommandBehaviorNext;

  /**
   * Executes "Timer Function".
   *
   * @param timer
   */
  execCommandTimer(timer: Timer): CommandBehaviorNext;

  /**
   * Executes "End Scene".
   *
   * @param sceneTerminate Not used.
   */
  execCommandSceneTerminate(sceneTerminate?: unknown): CommandBehaviorNext;

  /**
   * Executes "Set Move Direction and Move".
   *
   * @param directionMove
   */
  execCommandDirectionMove(directionMove: DirectionMove): CommandBehaviorNext;

  /**
   * Executes "Back and Forth Moving and Turning".
   *
   * @param forthBackMoveTurn
   */
  execCommandForthBackMoveTurn(forthBackMoveTurn: ForthBackMoveTurn): CommandBehaviorNext;

  /**
   * Executes "Execute Object Action". When action of this object self is executed,
   * Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBreak is returned.
   *
   * @param actionExec
   */
  execCommandActionExec(actionExec: ActionExec): CommandBehaviorNext | CommandBehaviorBreak;

  /**
   * Executes "Shake Scene".
   *
   * @param sceneShake
   */
  execCommandSceneShake(sceneShake: SceneShake): CommandBehaviorNext;

  /**
   * Execute "Disable Layer Display".
   *
   * @param layerHide
   */
  execCommandLayerHide(layerHide: LayerHide): CommandBehaviorNext;

  /**
   * Executes "Enable Layer Display".
   *
   * @param layerShow
   */
  execCommandLayerShow(layerShow: LayerShow): CommandBehaviorNext;

  /**
   * Executes "Disable Layer Motion".
   *
   * @param layerDisable
   */
  execCommandLayerDisable(layerDisable: LayerDisable): CommandBehaviorNext;

  /**
   * Executes "Enable Layer Motion".
   *
   * @param layerEnable
   */
  execCommandLayerEnable(layerEnable: LayerEnable): CommandBehaviorNext;

  /**
   * Executes "Show Menu Screen".
   *
   * @param menuShow
   */
  execCommandMenuShow(menuShow: MenuShow): CommandBehaviorNext;

  /**
   * Executes "Hide Menu Screen".
   *
   * @param menuHide
   */
  execCommandMenuHide(menuHide: MenuHide): CommandBehaviorNext;

  /**
   * Executes "Move Towards Display Direction"
   *
   * @param displayDirectionMove
   */
  execCommandDisplayDirectionMove(displayDirectionMove: DisplayDirectionMove): CommandBehaviorNext;

  /**
   * Executes “File load".
   *
   * @param fileLoad
   */
  execCommandFileLoad(fileLoad: FileLoad): CommandBehaviorNext;

  /**
   * Execute "Save Sound Playback Location".
   *
   * @param soundPositionRemember
   */
  execCommandSoundPositionRemember(soundPositionRemember: SoundPositionRemember): CommandBehaviorNext;

  /**
   * Execute "Unlock"
   *
   * @param objectUnlock
   */
  execCommandObjectUnlock(objectUnlock: ObjectUnlock): CommandBehaviorNext;

  /**
   * Execute "Change Animation Resource Set".
   *
   * @param resourceSetChange
   */
  execCommandResourceSetChange(resourceSetChange: ResourceSetChange): CommandBehaviorNext;

  /**
   * Run the runtime action “Object Parameter Apply to Database".
   *
   * @param databaseReflect
   */
  execCommandDatabaseReflect(databaseReflect: DatabaseReflect): CommandBehaviorNext;
}

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
  SoundStop,
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
   * @param templateMove Template move configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandTemplateMove({
   *   moveType: 2,
   *   horizontalMoveStartRight: false,
   *   horizontalMoveDuration300: 300,
   *   horizontalInfinite: false,
   *   verticalMoveStartDown: false,
   *   verticalMoveDuration300: 300,
   *   verticalInfinite: false,
   *   randomMoveDuration300: 300,
   *   randomMoveStop300: 300,
   *   nearObjectGroup:0,
   *   nearObjectLockedObjectPrior:false,
   *   nearPlayerLockedPlayerPrior: false,
   *   apartNearObjectGroup:0,
   *   apartNearObjectLockedObjectPrior: false,
   *   apartNearPlayerLockedPlayerPrior: false,
   *   fallFromStep: true,
   *   ignoreOtherObjectWallArea: false,
   *   ignoreWall: false
   * });
   * ```
   */
  execCommandTemplateMove(templateMove: TemplateMove): CommandBehaviorNext;

  /**
   * Executes "Lock Object".
   *
   * @param objectLock Object lock configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandObjectLock({
   *   lockTouchedObject: false,
   *   lockViewportLightObject: false,
   *   lockViewportLightOfAcrossLayerObject: false,
   *   lockObjectOnScreen: false,
   *   lockObjectTouchedByThisObjectAttack: false,
   *   objectTypeByType: 1,
   *   objectGroup: 0,
   *   objectType: 0,
   *   objectId: -1,
   *   useType: 2,
   *   switchId: -1,
   *   switchCondition: 0,
   *   variableId: -1,
   *   compareVariableOperator: 2,
   *   compareValueType: 0,
   *   compareValue: 0,
   *   compareVariableObjectId: -1,
   *   compareVariableQualifierId: -1,
   *   compareVariableId: -1
   * });
   * ```
   */
  execCommandObjectLock(objectLock: ObjectLock): CommandBehaviorNext;

  /**
   * Executes "Generate Object".
   *
   * @param objectCreate Object create configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandObjectCreate({
   *   objectId: -1,
   *   actionId: -1,
   *   createPosition: 0,
   *   useConnect: false,
   *   connectId: -1,
   *   adjustX: 0,
   *   adjustY: 0,
   *   probability: 100,
   *   childObject: false,
   *   useRotation: false,
   *   lowerPriority: false,
   *   gridMagnet: false
   * });
   * ```
   */
  execCommandObjectCreate(objectCreate: ObjectCreate): CommandBehaviorNext;

  /**
   * Executes "Change Object".
   *
   * @param objectChange Object change configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandObjectChange({
   *   objectId: -1,
   *   actionId: -1,
   *   createPosition: 0,
   *   takeOverVariables: true,
   *   takeOverSwitches: true,
   *   takeOverParentChild: true,
   *   useConnect: false,
   *   connectId: -1,
   *   adjustX: 0,
   *   adjustY: 0,
   *   probability: 100
   * });
   * ```
   */
  execCommandObjectChange(objectChange: ObjectChange): CommandBehaviorNext;

  /**
   * Executes "Move Object".
   *
   * @param objectMove Object move configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandObjectMove({
   *   moveType: 0,
   *   angle: 0,
   *   moveDistance: 128,
   *   posX: 0,
   *   posY: 0,
   *   moveInDisplayCoordinates: false,
   *   followCameraMoving: false,
   *   centerObjectId: -1,
   *   centerQualifierId: -1,
   *   centerAdjustX: 0,
   *   centerAdjustY: 0,
   *   connectId: -1,
   *   useObjectParameter: true,
   *   changeMoveSpeed: 100,
   *   moveDuration300: 300,
   *   targettingType: 0,
   *   targetObjectType: 1,
   *   targetObjectGroup: 0,
   *   targetObjectId: -1,
   *   targetQualifierId: -1,
   *   playerObject: false,
   *   enemyObject: false,
   *   objectGroupBit: 0,
   *   excludeObjectGroupBit: 3,
   *   fitDispDirToMoveDir: false,
   *   dispWhileMoving: true,
   *   stopActionWhileMoving: false,
   *   stopAnimWhileMoving: false,
   *   finalGridMagnet: false
   * });
   * ```
   */
  execCommandObjectMove(objectMove: ObjectMove): CommandBehaviorNext;

  /**
   * Executes "Push/Pull Object".
   *
   * @param objectPushPull Object push/pull configuration.
   * @returns Command behavior loop signal.
   * @example
   * ```ts
   * o.execCommandObjectPushPull({
   *   effectRangeBaseConnect: false,
   *   effectRangeBaseConnectId: -1,
   *   directionType: 0,
   *   angle: 0,
   *   connectId: -1,
   *   rectangle: true,
   *   rectangleDistance: 64,
   *   rectangleHeight: 64,
   *   circleDistance: 64,
   *   arcAngle: 360,
   *   effectDirectionType: 0,
   *   effectDirection: 0.000000,
   *   effectValue: 100,
   *   distanceEffect: false,
   *   nearValue: 100,
   *   farValue: 100,
   *   oneTimeEffect: false,
   *   targettingType: 0,
   *   targetObjectType: 1,
   *   targetObjectGroup: 0,
   *   targetObjectId: -1,
   *   targetQualifierId: -1,
   *   playerObject: false,
   *   enemyObject: false,
   *   objectGroupBit: 508,
   *   excludeObjectGroupBit: 3
   * });
   * ```
   */
  execCommandObjectPushPull(objectPushPull: ObjectPushPull): CommandBehaviorLoop;

  /**
   * Executes "Move Layer".
   *
   * @param layerMove Layer move configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandLayerMove({
   *   layerIndex": -1
   * });
   * ```
   */
  execCommandLayerMove(layerMove: LayerMove): CommandBehaviorNext;

  /**
   * Executes "Attack Settings".
   *
   * @param attackSetting Attack setting configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandAttackSetting({
   *   attackChange: 100,
   *   hitObjectFlag: false,
   *   playerAttackArea: false,
   *   enemyAttackArea: false,
   *   objectGroupBit: 0,
   *   hitTileFlag: false,
   *   tileAttackArea: false,
   *   tileGroupBit: 0,
   *   attributeType: 0,
   *   attributePresetId: 1,
   *   attributeValue: 0
   * });
   * ```
   */
  execCommandAttackSetting(attackSetting: AttackSetting): CommandBehaviorNext;

  /**
   * Executes "Fire Bullet".
   *
   * @param bulletFire Bullet fire configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandBulletFire({
   *   bulletId: -1,
   *   connectId": -1
   * });
   * ```
   */
  execCommandBulletFire(bulletFire: BulletFire): CommandBehaviorNext;

  /**
   * Executes "Destroy Object".
   *
   * @param disappear Not used.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandDisappear();
   * ```
   */
  execCommandDisappear(disappear?: unknown): CommandBehaviorNext;

  /**
   * Executes "Restore Destroyed Object".
   *
   * @param disappearObjectRecover Disappear object recover configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandDisappearObjectRecover({
   *   objectId": -1
   * });
   * ```
   */
  execCommandDisappearObjectRecover(disappearObjectRecover: DisappearObjectRecover): CommandBehaviorNext;

  /**
   * Executes "Disable Object".
   *
   * @param disable Not used.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandDisable();
   * ```
   */
  execCommandDisable(disable?: unknown): CommandBehaviorNext;

  /**
   * Executes "Restore Destroyed Object".
   *
   * @param disableObjectEnable Disable object enable configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandDisableObjectEnable({
   *   objectId": -1
   * });
   * ```
   */
  execCommandDisableObjectEnable(disableObjectEnable: DisableObjectEnable): CommandBehaviorNext;

  /**
   * Executes "Apply Filter Effects on Object".
   *
   * @param objectFilterEffect Object filter effect configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandObjectFilterEffect({
   *   effectType: 1,
   *   noise: 100,
   *   mosaic: 100,
   *   monochrome: 100,
   *   sepia: 100,
   *   negaPosiReverse: 100,
   *   defocus: 100,
   *   chromaticAberration: 100,
   *   darkness: 100,
   *   transparency: 100,
   *   blinkInterval300: 0,
   *   imageId: -1,
   *   imageTransparency: 0,
   *   imagePlacement: 0,
   *   fillA: 255,
   *   fillR: 255,
   *   fillG: 255,
   *   fillB: 255,
   *   duration300: 300
   * });
   * ```
   */
  execCommandObjectFilterEffect(objectFilterEffect: ObjectFilterEffect): CommandBehaviorNext;

  /**
   * Executes "Delete Filter Effects from Objects".
   *
   * @param objectFilterEffectRemove Object filter effect remove configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandObjectFilterEffectRemove({
   *   removeBit: 0,
   *   duration300: 300
   * });
   * ```
   */
  execCommandObjectFilterEffectRemove(objectFilterEffectRemove: ObjectFilterEffectRemove): CommandBehaviorNext;

  /**
   * Executes "Apply Screen Effect to Scene".
   *
   * @param sceneEffect Scene effect configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSceneEffect({
   *     layerIndex: -1,
   *     filterEffect: {
   *     effectType: 0,
   *     noise: 100,
   *     mosaic: 100,
   *     monochrome: 100,
   *     sepia: 100,
   *     negaPosiReverse: 100,
   *     defocus: 100,
   *     chromaticAberration: 100,
   *     darkness: 100,
   *     transparency: 100,
   *     blinkInterval300: 0,
   *     imageId: -1,
   *     imageTransparency: 0,
   *     imagePlacement: 0,
   *     fillA: 255,
   *     fillR: 255,
   *     fillG: 255,
   *     fillB: 255,
   *     duration300: 300
   *   }
   * });
   * ```
   */
  execCommandSceneEffect(sceneEffect: SceneEffect): CommandBehaviorNext;

  /**
   * Executes "Delete Screen Effects from Scene".
   *
   * @param sceneEffectRemove Scene effect remove configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSceneEffectRemove({
   *   layerIndex: -1,
   *   removeBit: 0,
   *   duration300: 300
   * });
   * ```
   */
  execCommandSceneEffectRemove(sceneEffectRemove: SceneEffectRemove): CommandBehaviorNext;

  /**
   * Executes "Change Scene Gravity Effect".
   *
   * @param sceneGravityChange Scene gravity change configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSceneGravityChange({
   *   gravity: 100,
   *   direction: 180,
   *   duration300: 300,
   *   durationUnlimited: false
   * });
   * ```
   */
  execCommandSceneGravityChange(sceneGravityChange: SceneGravityChange): CommandBehaviorNext;

  /**
   * Executes "Rotate/Flip Scene".
   *
   * @param sceneRotateFlip Scene rotate/flip configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSceneRotateFlip({
   *   type: 1,
   *   rotationFlag: false,
   *   rotation: 0,
   *   absoluteRotation: false,
   *   flipX: false,
   *   flipY: false,
   *   duration300: 300
   * });
   * ```
   */
  execCommandSceneRotateFlip(sceneRotateFlip: SceneRotateFlip): CommandBehaviorNext;

  /**
   * Executes "Change Camera Display Area".
   *
   * @param cameraAreaChange Camera area change configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandCameraAreaChange({
   *   xRate: 1,
   *   yRate: 1,
   *   duration300: 300
   * });
   * ```
   */
  execCommandCameraAreaChange(cameraAreaChange: CameraAreaChange): CommandBehaviorNext;

  /**
   * Executes "Audio Playback".
   *
   * @param soundPlay Sound play configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSoundPlay({
   *   soundType: 0,
   *   seId: -1,
   *   voiceId: -1,
   *   bgmId: -1,
   *   loop: false,
   *   fadein: false,
   *   duration300: 300,
   *   specifyAudioPosition: false,
   *   audioPositionVariableObjectId: -1,
   *   audioPositionVariableQualifierId: -1,
   *   audioPositionVariableId: -1,
   *   volume: 100,
   *   pan: 0,
   *   pitch: 0
   * });
   * ```
   */
  execCommandSoundPlay(soundPlay: SoundPlay): CommandBehaviorNext;

  /**
   * Executes "Audio Stop".
   *
   * @param soundStop Sound stop configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSoundStop({
   *   soundType: 0,
   *   seId: -1,
   *   voiceId: -1,
   *   bgmId: -1,
   *   fadeout: false,
   *   duration300: 300,
   *   stopOnlySoundByThisObject: false
   * });
   * ```
   */
  execCommandSoundStop(soundStop: SoundStop): CommandBehaviorNext;

  /**
   * Executes "Show Text".
   *
   * @param messageShow Message show configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandMessageShow({
   *   textFlag: true,
   *   textId: -1,
   *   variableObjectId: -1,
   *   variableQualifierId: -1,
   *   variableId: -1,
   *   fontId: -1,
   *   digitFlag: false,
   *   digits: 0,
   *   zeroPadding: false,
   *   comma: false,
   *   withoutDecimalPlaces: false,
   *   colorA: 255,
   *   colorR: 255,
   *   colorG: 255,
   *   colorB: 255,
   *   windowType: 0,
   *   templateId: 0,
   *   imageId: -1,
   *   windowTransparency: 0,
   *   windowWidth: 256,
   *   windowHeight: 256,
   *   positionType: 0,
   *   useConnect: false,
   *   connectId: -1,
   *   adjustX: 0,
   *   adjustY: 0,
   *   topBottomMargin: 10,
   *   leftRightMargin: 10,
   *   horzAlign: 0,
   *   vertAlign: 0,
   *   duration300: 300,
   *   durationUnlimited: false,
   *   actionChangeHide: false,
   *   closeByKey: false,
   *   keyId: -1,
   *   objectStop: false,
   *   gameStop: false,
   *   priorityMostFront: false,
   *   priority: false,
   *   priorityType: 1
   * });
   * ```
   */
  execCommandMessageShow(messageShow: MessageShow): CommandBehaviorNext;

  /**
   * Executes "Show Scrolling Text".
   *
   * @param scrollMessageShow Scroll message show configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandScrollMessageShow({
   *   textId: -1,
   *   colorA: 255,
   *   colorR: 255,
   *   colorG: 255,
   *   colorB: 255,
   *   backgroundType: 0,
   *   templateId: 1,
   *   imageId: -1,
   *   backgroundTransparency: 0,
   *   backgroundWidth: 256,
   *   backgroundHeight: 256,
   *   positionType: 0,
   *   useConnect: false,
   *   connectId: -1,
   *   adjustX: 0,
   *   adjustY: 0,
   *   horzAlign: 0,
   *   topBottomMargin: 10,
   *   leftRightMargin: 10,
   *   scrollSpeed: 1,
   *   scrollUp: true,
   *   actionChangeHide: false,
   *   speedUpByKey: false,
   *   keyId: -1,
   *   objectStop: false,
   *   gameStop: false,
   *   priorityMostFront: false,
   *   priority: false,
   *   priorityType: 1
   * });
   * ```
   */
  execCommandScrollMessageShow(scrollMessageShow: ScrollMessageShow): CommandBehaviorNext;

  /**
   * Executes "Show Effect".
   *
   * @param effectShow Effect show configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandEffectShow({
   *   effectId: -1,
   *   positionType: 0,
   *   useConnect: false,
   *   connectId: -1,
   *   adjustX: 0,
   *   adjustY: 0,
   *   duration300: 300,
   *   durationUnlimited: false
   * });
   * ```
   */
  execCommandEffectShow(effectShow: EffectShow): CommandBehaviorNext;

  /**
   * Executes "Hide Effects".
   *
   * @param effectRemove Effect remove configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandEffectRemove({
   *   effectId: -2,
   *   targettingType: 5,
   *   targetObjectType: 0,
   *   targetObjectGroup: -1,
   *   targetObjectId: -1
   * });
   * ```
   */
  execCommandEffectRemove(effectRemove: EffectRemove): CommandBehaviorNext;

  /**
   * Executes "Show Particles".
   *
   * @param particleShow Particle show configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandParticleShow({
   *   particleId: -1,
   *   positionType: 0,
   *   useConnect: false,
   *   connectId: -1,
   *   adjustX: 0,
   *   adjustY: 0,
   *   duration300: 300,
   *   durationUnlimited: false
   * });
   * ```
   */
  execCommandParticleShow(particleShow: ParticleShow): CommandBehaviorNext;

  /**
   * Executes "Hide Particles".
   *
   * @param particleRemove Particle remove configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandParticleRemove({
   *   particleId: -2,
   *   targettingType: 5,
   *   targetObjectType: 0,
   *   targetObjectGroup: -1,
   *   targetObjectId: -1
   * });
   * ```
   */
  execCommandParticleRemove(particleRemove: ParticleRemove): CommandBehaviorNext;

  /**
   * Executes "Play Video".
   *
   * @param movieShow Movie show configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandMovieShow({
   *   movieId: -1,
   *   loop: false,
   *   volume: 100,
   *   defaultSize: true,
   *   width: 256,
   *   height: 256,
   *   positionType: 0,
   *   useConnect: false,
   *   connectId: -1,
   *   vertAlign: 0,
   *   horzAlign: 0,
   *   adjustX: 0,
   *   adjustY: 0,
   *   hideOnObjectActionChange: false,
   *   stopObject: false,
   *   stopGame: false,
   *   fillBlack: false,
   *   priority: false,
   *   priorityMostFront: true,
   *   priorityType: 1
   * });
   * ```
   */
  execCommandMovieShow(movieShow: MovieShow): CommandBehaviorNext;

  /**
   * Executes "Display Image".
   *
   * @param imageShow Image show configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandImageShow({
   *   imageId: -1,
   *   defaultSize: true,
   *   width: 256,
   *   height: 256,
   *   positionType: 0,
   *   useConnect: false,
   *   connectId: -1,
   *   vertAlign: 0,
   *   horzAlign: 0,
   *   adjustX: 0,
   *   adjustY: 0,
   *   duration300: 300,
   *   durationUnlimited: false,
   *   hideOnObjectActionChange: false,
   *   closeByOk: false,
   *   stopObject: false,
   *   stopGame: false,
   *   priority: false,
   *   priorityMostFront: true,
   *   priorityType: 1
   * });
   * ```
   */
  execCommandImageShow(imageShow: ImageShow): CommandBehaviorNext;

  /**
   * Executes "Change Switch/Variable".
   *
   * @param switchVariableChange Switch/variable change configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSwitchVariableChange({
   *   swtch: true,
   *   switchObjectId: -1,
   *   switchQualifierId: -1,
   *   switchId: -1,
   *   switchValue: 0,
   *   variableObjectId: -1,
   *   variableQualifierId: -1,
   *   variableId: -1,
   *   variableAssignOperator: 0,
   *   variableAssignValueType: 0,
   *   assignValue: 0.000000,
   *   assignVariableObjectId: -1,
   *   assignVariableQualifierId: -1,
   *   assignVariableId: -1,
   *   randomMin: 0,
   *   randomMax: 100
   * });
   * ```
   */
  execCommandSwitchVariableChange(switchVariableChange: SwitchVariableChange): CommandBehaviorNext;

  /**
   * Executes "Reset Switch/Variable".
   *
   * @param switchVariableResets Switch/variable reset configurations.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSwitchVariableReset([
   *   { swtch: true, objectId: 0, itemId: 2001 }, // Common Switch Example
   *   { swtch: true, objectId: -2, itemId: 2001 }, // Object Self Switch Example
   *   { swtch: true, objectId: 1, itemId: 1 }, // Object ID Invincibility Switch Example
   *   { swtch: false, objectId: 0, itemId: 12 }, // Common Variable Example
   *   { swtch: false, objectId: 6, itemId: 2 } // Object ID HP Variable Example
   * ]);
   * ```
   */
  execCommandSwitchVariableReset(switchVariableResets: SwitchVariableReset[]): CommandBehaviorNext;

  /**
   * Executes "Change Game Speed".
   *
   * @param gameSpeedChange Game speed change configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandGameSpeedChange({
   *   gameSpeed: 100,
   *   duration300: 300,
   *   durationUnlimited: false,
   *   targetObject: false,
   *   targetEffect: false,
   *   targetTile: false,
   *   targetMenu: false,
   *   targettingType: 0,
   *   targetObjectType: 1,
   *   targetObjectGroup: 0,
   *   targetObjectId: -1,
   *   targetQualifierId: -1,
   *   excludePlayerObject: false,
   *   excludeEnemyObject: false,
   *   excludeObjectGroupBit: 0
   * });
   * ```
   */
  execCommandGameSpeedChange(gameSpeedChange: GameSpeedChange): CommandBehaviorNext;

  /**
   * Executes "Timer Function".
   *
   * @param timer Timer configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandTimer({
   *   start: true,
   *   timerVariableObjectId: -1,
   *   timerVariableQualifierId: -1,
   *   timerVariableId: -1,
   *   countUp: true,
   *   secondType: 0,
   *   second300: 300,
   *   secondVariableObjectId: -1,
   *   secondVariableQualifierId: -1,
   *   secondVariableId: -1
   * });
   * ```
   */
  execCommandTimer(timer: Timer): CommandBehaviorNext;

  /**
   * Executes "End Scene".
   *
   * @param sceneTerminate Not used.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSceneTerminate();
   * ```
   */
  execCommandSceneTerminate(sceneTerminate?: unknown): CommandBehaviorNext;

  /**
   * Executes "Set Move Direction and Move".
   *
   * @param directionMove Direction move configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandDirectionMove({
   *   direction: 270,
   *   directionId: -2,
   *   moveDistance: 0,
   *   moveDistanceEnabled: false
   * });
   * ```
   */
  execCommandDirectionMove(directionMove: DirectionMove): CommandBehaviorNext;

  /**
   * Executes "Back and Forth Moving and Turning".
   *
   * @param forthBackMoveTurn Forth/back/move/turn configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandForthBackMoveTurn({
   *   moveType: 0,
   *   turnType: 0,
   *   directionId: -2
   * });
   * ```
   */
  execCommandForthBackMoveTurn(forthBackMoveTurn: ForthBackMoveTurn): CommandBehaviorNext;

  /**
   * Executes "Execute Object Action".
   *
   * @param actionExec Action execution configuration.
   * @returns Command behavior break signal When action of this object self is
   * executed; otherwise, Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandActionExec({
   *   objectId": -1,
   *   qualifierId": -1,
   *   actionId": -1
   * });
   * ```
   */
  execCommandActionExec(actionExec: ActionExec): CommandBehaviorNext | CommandBehaviorBreak;

  /**
   * Executes "Shake Scene".
   *
   * @param sceneShake Scene shake configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSceneShake({
   *   duration300: 300,
   *   fadeIn: false,
   *   fadeOut: false,
   *   interval300: 30,
   *   height: 16,
   *   heightDispersion: 16,
   *   width: 8,
   *   widthDispersion: 8
   * });
   * ```
   */
  execCommandSceneShake(sceneShake: SceneShake): CommandBehaviorNext;

  /**
   * Execute "Disable Layer Display".
   *
   * @param layerHide Layer hide configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandLayerHide({
   *   layerIndex: -1,
   *   exceptFlag: false
   * });
   * ```
   */
  execCommandLayerHide(layerHide: LayerHide): CommandBehaviorNext;

  /**
   * Executes "Enable Layer Display".
   *
   * @param layerShow Layer show configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandLayerShow({
   *   layerIndex: -1,
   *   exceptFlag: false
   * });
   * ```
   */
  execCommandLayerShow(layerShow: LayerShow): CommandBehaviorNext;

  /**
   * Executes "Disable Layer Motion".
   *
   * @param layerDisable Layer disable configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandLayerDisable({
   *   layerIndex: -1,
   *   exceptFlag: false
   * });
   * ```
   */
  execCommandLayerDisable(layerDisable: LayerDisable): CommandBehaviorNext;

  /**
   * Executes "Enable Layer Motion".
   *
   * @param layerEnable Layer enable configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandLayerEnable({
   *   layerIndex: -1,
   *   exceptFlag: false
   * });
   * ```
   */
  execCommandLayerEnable(layerEnable: LayerEnable): CommandBehaviorNext;

  /**
   * Executes "Show Menu Screen".
   *
   * @param menuShow Menu show configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandMenuShow( {
   *   layerId: -1,
   *   useEffect: false,
   *   effectType: -1,
   *   fadein: false,
   *   duration300: 300
   * });
   * ```
   */
  execCommandMenuShow(menuShow: MenuShow): CommandBehaviorNext;

  /**
   * Executes "Hide Menu Screen".
   *
   * @param menuHide Menu hide configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandMenuHide({
   *   hideExceptInitial: false,
   *   useEffect: false,
   *   effectType: -1,
   *   fadeout: false,
   *   duration300: 300,
   *   disableObjects: true
   * });
   * ```
   */
  execCommandMenuHide(menuHide: MenuHide): CommandBehaviorNext;

  /**
   * Executes "Move Towards Display Direction"
   *
   * @param displayDirectionMove Display direction move configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandDisplayDirectionMove({
   *   distanceOverride: false,
   *   moveDistance: 0,
   *   reverse: false
   * });
   * ```
   */
  execCommandDisplayDirectionMove(displayDirectionMove: DisplayDirectionMove): CommandBehaviorNext;

  /**
   * Executes “File load".
   *
   * @param fileLoad File load configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandFileLoad({
   *   projectCommonVariables: true,
   *   projectCommonSwitches: true,
   *   sceneAtTimeOfSave: true,
   *   objectsStatesInSceneAtTimeOfSave: true,
   *   effectType: -1,
   *   duration300: 300
   * });
   * ```
   */
  execCommandFileLoad(fileLoad: FileLoad): CommandBehaviorNext;

  /**
   * Execute "Save Sound Playback Location".
   *
   * @param soundPositionRemember Sound position remember configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandSoundPositionRemember({
   *   soundType: 0,
   *   variableObjectId: -1,
   *   variableQualifierId: -1,
   *   variableId: -1
   * });
   * ```
   */
  execCommandSoundPositionRemember(soundPositionRemember: SoundPositionRemember): CommandBehaviorNext;

  /**
   * Execute "Unlock"
   *
   * @param objectUnlock Object unlock configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandObjectUnlock({
   *   objectGroup: 0,
   *   objectType: 0,
   *   objectId: -1
   * });
   * ```
   */
  execCommandObjectUnlock(objectUnlock: ObjectUnlock): CommandBehaviorNext;

  /**
   * Execute "Change Animation Resource Set".
   *
   * @param resourceSetChange Resource set change configuration.
   * @returns Command behavior next signal.
   * @example
   * ```ts
   * o.execCommandResourceSetChange({
   *   objectId: -1,
   *   qualifierId: -1,
   *   resourceSetId: -1
   * });
   * ```
   */
  execCommandResourceSetChange(resourceSetChange: ResourceSetChange): CommandBehaviorNext;

  /**
   * Run the runtime action “Object Parameter Apply to Database".
   *
   * @param databaseReflect Database reflect configuration.
   * @returns Command behavior next signal.
   */
  execCommandDatabaseReflect(databaseReflect: DatabaseReflect): CommandBehaviorNext;
}

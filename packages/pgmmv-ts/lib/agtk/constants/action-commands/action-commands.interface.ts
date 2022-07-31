/**
 * Action commands constants interface module.
 *
 * @packageDocumentation
 */
import type { AttackSetting } from './attack-setting';
import type { CommandBehavior } from './command-behavior';
import type { DirectionMove } from './direction-move';
import type { EffectRemove } from './effect-remove';
import type { EffectShow } from './effect-show';
import type { FileLoad } from './file-load';
import type { ForthBackMoveTurn } from './forth-back-move-turn';
import type { GameSpeedChange } from './game-speed-change';
import type { ImageShow } from './image-show';
import type { MenuHide } from './menu-hide';
import type { MenuShow } from './menu-show';
import type { MessageShow } from './message-show';
import type { MovieShow } from './movie-show';
import type { ObjectChange } from './object-change';
import type { ObjectCreate } from './object-create';
import type { ObjectLock } from './object-lock';
import type { ObjectMove } from './object-move';
import type { ObjectPushPull } from './object-push-pull';
import type { ObjectUnlock } from './object-unlock';
import type { ParticleRemove } from './particle-remove';
import type { ParticleShow } from './particle-show';
import type { PriorityType } from './priority-type';
import type { SceneRotateFlip } from './scene-rotate-flip';
import type { ScrollMessageShow } from './scroll-message-show';
import type { SoundPlay } from './sound-play';
import type { SoundPositionRemember } from './sound-position-remember';
import type { SoundStop } from './sound-stop';
import type { TemplateMove } from './template-move';
import type { Timer } from './timer';

/**
 * Action commands constants interface.
 */
export interface ActionCommands {
  /**
   * Object by type.
   */
  readonly ObjectByType: 0;

  /**
   * Object by group.
   */
  readonly ObjectByGroup: 0;

  /**
   * Object by ID.
   */
  readonly ObjectById: 1;

  /**
   * Project common.
   */
  readonly ProjectCommon: 0;

  /**
   * Unset object.
   */
  readonly UnsetObject: -1;

  /**
   * Self object.
   */
  readonly SelfObject: -2;

  /**
   * Other than self object.
   */
  readonly OtherThanSelfObject: -3;

  /**
   * Child object.
   */
  readonly ChildObject: -4;

  /**
   * Locked object.
   */
  readonly LockedObject: -5;

  /**
   * Touched object.
   */
  readonly TouchedObject: -6;

  /**
   * Parent object.
   */
  readonly ParentObject: -7;

  /**
   * According to move direction.
   */
  readonly AccordingToMoveDirection: -2;

  /**
   * Command behavior.
   */
  readonly commandBehavior: CommandBehavior;

  /**
   * Priority type.
   */
  readonly priorityType: PriorityType;

  /**
   * Template move.
   */
  readonly templateMove: TemplateMove;

  /**
   * Object lock.
   */
  readonly objectLock: ObjectLock;

  /**
   * Object create.
   */
  readonly objectCreate: ObjectCreate;

  /**
   * Object change.
   */
  readonly objectChange: ObjectChange;

  /**
   * Object move.
   */
  readonly objectMove: ObjectMove;

  /**
   * Object push pull.
   */
  readonly objectPushPull: ObjectPushPull;

  /**
   * Attack setting.
   */
  readonly attackSetting: AttackSetting;

  /**
   * Scene rotate flip.
   */
  readonly sceneRotateFlip: SceneRotateFlip;

  /**
   * Sound play.
   */
  readonly soundPlay: SoundPlay;

  /**
   * Sound stop.
   */
  readonly soundStop: SoundStop;

  /**
   * Sound position remember.
   */
  readonly soundPositionRemember: SoundPositionRemember;

  /**
   * Message show.
   */
  readonly messageShow: MessageShow;

  /**
   * Scroll message show.
   */
  readonly scrollMessageShow: ScrollMessageShow;

  /**
   * Effect show.
   */
  readonly effectShow: EffectShow;

  /**
   * Effect remove.
   */
  readonly effectRemove: EffectRemove;

  /**
   * Particle show.
   */
  readonly particleShow: ParticleShow;

  /**
   * Particle remove.
   */
  readonly particleRemove: ParticleRemove;

  /**
   * Movie show.
   */
  readonly movieShow: MovieShow;

  /**
   * Image show.
   */
  readonly imageShow: ImageShow;

  /**
   * Game speed change.
   */
  readonly gameSpeedChange: GameSpeedChange;

  /**
   * Timer.
   */
  readonly timer: Timer;

  /**
   * Direction move.
   */
  readonly directionMove: DirectionMove;

  /**
   * Forth back move turn.
   */
  readonly forthBackMoveTurn: ForthBackMoveTurn;

  /**
   * Menu show.
   */
  readonly menuShow: MenuShow;

  /**
   * Menu hide.
   */
  readonly menuHide: MenuHide;

  /**
   * File load.
   */
  readonly fileLoad: FileLoad;

  /**
   * Object unlock.
   */
  readonly objectUnlock: ObjectUnlock;
}

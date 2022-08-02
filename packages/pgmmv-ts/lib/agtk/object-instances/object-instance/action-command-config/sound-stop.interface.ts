/**
 * Object instance sound stop action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { SoundStopValue as SoundType } from '../../../constants/action-commands/sound-stop';

/**
 * Object instance sound stop action command configuration interface.
 */
export interface SoundStop {
  /**
   * Value 0 - 2.
   *  - 0 = Sound Effects
   *  - 1 = Voices
   *  - 2 = Background Music
   */
  soundType: SoundType;

  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Sound Effects you may have added
   */
  seId: number;

  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Voices you may have added
   */
  voiceId: number;

  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Background Music you may have added
   */
  bgmId: number;

  /**
   * Value true/false.
   *  - True = Fade-out
   *  - False = No fade-out
   */
  fadeout: boolean;

  /**
   * Value 0.00+. This is for the 'fadeIn' NOTE: 300 = 1sec.
   */
  duration300: number;

  /**
   * Value true/false.
   *  - True = Stops audio playback for this Object only
   *  - False = Stops audio all objects
   */
  stopOnlySoundByThisObject: boolean;
}

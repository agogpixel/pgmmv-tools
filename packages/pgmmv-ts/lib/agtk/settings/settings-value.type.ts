/**
 * Settings value type module.
 *
 * @packageDocumentation
 */
import type { SettingsKey } from './settings-key.type';
import type { Settings } from './settings.interface';

/**
 * Settings value type.
 */
export type SettingsValue = Settings[SettingsKey];

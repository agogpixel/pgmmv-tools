/**
 * Link condition attack area touched constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Link condition attack area touched constants interface.
 */
export interface AttackAreaTouched {
  /**
   * Set by object group.
   */
  readonly SetByObjectGroup: 0;

  /**
   * Set by object ID.
   */
  readonly SetByObjectId: 1;

  /**
   * Attribute none.
   */
  readonly AttributeNone: 0;

  /**
   * Attribute preset.
   */
  readonly AttributePreset: 1;

  /**
   * Attribute value.
   */
  readonly AttributeValue: 2;
}

/// <reference types="@capacitor/cli" />

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    /**
     * Haptics can be configured with this options:
     */
    Haptics?: {
      /**
       * Configure the style.
       *
       * @since 1.0.0
       * @default native
       * @example "native"
       */
      style?: 'none' | 'native';

      /**
       * Configure the duration.
       *
       * @since 1.2.3
       * @example 123
       */
      duration?: number;
    };
  }
}

/**
 * ## Docs from JSDoc comments!
 *
 * This content is from the JSDOC comments on top of
 * the `HapticsPlugin` interface. All the API data below
 * is generated from comments from its methods, interfaces
 * and enums.
 *
 * Take a look at the test [HapticsPlugin interface source file](https://github.com/ionic-team/capacitor-docgen/blob/master/src/test/fixtures/definitions.ts).
 */
export interface HapticsPlugin {
  /**
   * Trigger a haptics "impact" feedback
   *
   * @param options The
   * impact   options
   * @since 1.0.0
   */
  impact(options: HapticsImpactOptions, x?: number): Promise<HapticsImpact>;

  /**
   * Trigger a haptics "notification" feedback
   *
   * @since 1.0.0
   */
  notification(options?: HapticsNotificationOptions): Promise<string | number>;

  /**
   * Vibrate the device
   *
   * @since 1.0.0
   */
  vibrate(options?: VibrateOptions): Promise<number>;

  /**
   * Add a listener. Callback has VibrateOptions.
   *
   * @since 1.0.0
   */
  addListener(
    eventName: 'vibrate',
    listenerFunc: VibrateListener,
  ): Promise<void>;

  /**
   * Add a listener. Callback has VibrateOptions.
   *
   * @hidden
   * @deprecated Use the 'vibrate' event instead.
   */
  addListener(eventName: 'bad', listenerFunc: VibrateListener): Promise<void>;

  /**
   * Remove all the listeners that are attached to this plugin
   *
   * @since 1.0.0
   */
  removeAllListeners(): void;
}

/**
 * The vibrate listener callback function.
 */
export type VibrateListener = (event: VibrateListenerEvent) => void;

export interface VibrateListenerEvent {
  /**
   * The style of vibration.
   *
   * @since 1.0.0
   */
  style?: HapticsImpactStyle;

  /**
   * The duration of the vibration.
   * @since 1.0.0
   */
  duration: number;

  /**
   * How often this vibrate event is repeated.
   * @since 1.0.0
   */
  repeat?: RepeatSchedule;
}

/**
 * How often a vibration repeats.
 * @since 1.0.0
 */
export type RepeatSchedule = 'hourly' | 'daily' | 'weekly' | 'monthly';

export interface HapticsImpact {
  value: number;
}

export interface HapticsImpactOptions {
  /**
   * Impact Feedback Style
   *
   * The mass of the objects in the collision simulated by a
   * [`UIImpactFeedbackGenerator`](https://developer.apple.com/documentation/uikit/uiimpactfeedbackstyle) object.
   * Type is a `HapticsImpactStyle`.
   *
   * @default HapticsImpactStyle.Heavy
   * @since 1.0.0
   */
  style: HapticsImpactStyle;

  value: boolean;

  recursive: HapticsImpactOptions;
}

/**
 * HapticsImpactStyle Docs
 */
export enum HapticsImpactStyle {
  /**
   * A collision between small, light user interface elements
   *
   * @since 1.0.0
   */
  Heavy = 'HEAVY',

  /**
   * A collision between moderately sized user interface elements
   *
   * @since 1.0.0
   */
  Medium = 'MEDIUM',

  /**
   * A collision between small, light user interface elements
   *
   * @since 1.0.0
   */
  Light = 'LIGHT',
}

export interface HapticsNotificationOptions {
  /**
   * Notification Feedback Type
   *
   * The type of notification feedback generated by a [`UINotificationFeedbackGenerator`](https://developer.apple.com/documentation/uikit/uinotificationfeedbacktype) object.
   *
   * @default HapticsNotificationType.SUCCESS
   * @since 1.0.0
   */
  type: HapticsNotificationType;
}

export enum HapticsNotificationType {
  /**
   * A notification feedback type indicating that a task has completed successfully
   *
   * @since 1.0.0
   */
  SUCCESS = 'SUCCESS',

  /**
   * A notification feedback type indicating that a task has produced a warning
   *
   * @since 1.0.0
   */
  WARNING = 'WARNING',

  /**
   * A notification feedback type indicating that a task has failed
   *
   * @since 1.0.0
   */
  ERROR = 'ERROR',
}

export interface VibrateOptions {
  /**
   * Duration of the vibration in milliseconds.
   *
   * Not supported in iOS.
   *
   * @default 300
   * @since 1.0.0
   */
  duration: number;
}

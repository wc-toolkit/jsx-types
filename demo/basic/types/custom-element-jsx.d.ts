import type { SlAlert } from "components/alert/alert.js";
import type { SlAnimatedImage } from "components/animated-image/animated-image.js";
import type { SlAnimation } from "components/animation/animation.js";
import type { SlAvatar } from "components/avatar/avatar.js";
import type { SlBadge } from "components/badge/badge.js";
import type { SlBreadcrumb } from "components/breadcrumb/breadcrumb.js";
import type { SlButton } from "components/button/button.js";
import type { SlBreadcrumbItem } from "components/breadcrumb-item/breadcrumb-item.js";
import type { SlButtonGroup } from "components/button-group/button-group.js";
import type { SlCard } from "components/card/card.js";
import type { SlCarousel } from "components/carousel/carousel.js";
import type { SlCarouselItem } from "components/carousel-item/carousel-item.js";
import type { SlCheckbox } from "components/checkbox/checkbox.js";
import type { SlColorPicker } from "components/color-picker/color-picker.js";
import type { SlCopyButton } from "components/copy-button/copy-button.js";
import type { SlDetails } from "components/details/details.js";
import type { SlDialog } from "components/dialog/dialog.js";
import type { SlDivider } from "components/divider/divider.js";
import type { SlDrawer } from "components/drawer/drawer.js";
import type { SlDropdown } from "components/dropdown/dropdown.js";
import type { SlFormatBytes } from "components/format-bytes/format-bytes.js";
import type { SlFormatDate } from "components/format-date/format-date.js";
import type { SlFormatNumber } from "components/format-number/format-number.js";
import type { SlIcon } from "components/icon/icon.js";
import type { SlInclude } from "components/include/include.js";
import type { SlIconButton } from "components/icon-button/icon-button.js";
import type { SlImageComparer } from "components/image-comparer/image-comparer.js";
import type { SlInput } from "components/input/input.js";
import type { SlMenu } from "components/menu/menu.js";
import type { SlMenuLabel } from "components/menu-label/menu-label.js";
import type { SlMutationObserver } from "components/mutation-observer/mutation-observer.js";
import type { SlMenuItem } from "components/menu-item/menu-item.js";
import type { SlOption } from "components/option/option.js";
import type { SlPopup } from "components/popup/popup.js";
import type { SlProgressBar } from "components/progress-bar/progress-bar.js";
import type { SlProgressRing } from "components/progress-ring/progress-ring.js";
import type { SlRadio } from "components/radio/radio.js";
import type { SlQrCode } from "components/qr-code/qr-code.js";
import type { SlRadioButton } from "components/radio-button/radio-button.js";
import type { SlRadioGroup } from "components/radio-group/radio-group.js";
import type { SlRange } from "components/range/range.js";
import type { SlRating } from "components/rating/rating.js";
import type { SlRelativeTime } from "components/relative-time/relative-time.js";
import type { SlResizeObserver } from "components/resize-observer/resize-observer.js";
import type { SlSkeleton } from "components/skeleton/skeleton.js";
import type { SlSelect } from "components/select/select.js";
import type { SlSpinner } from "components/spinner/spinner.js";
import type { SlSwitch } from "components/switch/switch.js";
import type {
  SNAP_NONE,
  SlSplitPanel,
} from "components/split-panel/split-panel.js";
import type { SlTabGroup } from "components/tab-group/tab-group.js";
import type { SlTab } from "components/tab/tab.js";
import type { SlTabPanel } from "components/tab-panel/tab-panel.js";
import type { SlTextarea } from "components/textarea/textarea.js";
import type { SlTag } from "components/tag/tag.js";
import type { SlTooltip } from "components/tooltip/tooltip.js";
import type { SlTree } from "components/tree/tree.js";
import type { SlTreeItem } from "components/tree-item/tree-item.js";
import type { SlVisuallyHidden } from "components/visually-hidden/visually-hidden.js";

/**
 * This type can be used to create scoped tags for your components.
 *
 * Usage:
 *
 * ```ts
 * import type { ScopedElements } from "path/to/library/jsx-integration";
 *
 * declare module "my-library" {
 *   namespace JSX {
 *     interface IntrinsicElements
 *       extends ScopedElements<'test-', ''> {}
 *   }
 * }
 * ```
 *
 * @deprecated Runtime scoped elements result in duplicate types and can confusing for developers. It is recommended to use the `prefix` and `suffix` options to generate new types instead.
 */
export type ScopedElements<
  Prefix extends string = "",
  Suffix extends string = "",
> = {
  [Key in keyof CustomElements as `${Prefix}${Key}${Suffix}`]: CustomElements[Key];
};

/**
 * A generic type for strongly typing custom events with their targets
 * @template T - The type of the event target (extends EventTarget)
 * @template D - The type of the detail payload for the custom event
 */
type TypedEvent<T extends EventTarget, E = Event> = E & {
  target: T;
};

type BaseProps<T extends HTMLElement> = {
  /** Content added between the opening and closing tags of the element */
  children?: any;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  class?: string;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  className?: string;
  /** Takes an object where the key is the class name(s) and the value is a boolean expression. When true, the class is applied, and when false, it is removed. */
  classList?: Record<string, boolean | undefined>;
  /** Specifies the text direction of the element. */
  dir?: "ltr" | "rtl";
  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;
  /** For <label> and <output>, lets you associate the label with some control. */
  htmlFor?: string;
  /** Specifies whether the element should be hidden. */
  hidden?: boolean | string;
  /** A unique identifier for the element. */
  id?: string;
  /** Keys tell React which array item each component corresponds to */
  key?: string | number;
  /** Specifies the language of the element. */
  lang?: string;
  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;
  /** Use the ref attribute with a variable to assign a DOM element to the variable once the element is rendered. */
  ref?: T | ((e: T) => void);
  /** Adds a reference for a custom element slot */
  slot?: string;
  /** Prop for setting inline styles */
  style?: Record<string, string | number>;
  /** Overrides the default Tab button behavior. Avoid using values other than -1 and 0. */
  tabIndex?: number;
  /** Specifies the tooltip text for the element. */
  title?: string;
  /** Passing 'no' excludes the element content from being translated. */
  translate?: "yes" | "no";
  /** The popover global attribute is used to designate an element as a popover element. */
  popover?: "auto" | "hint" | "manual";
  /** Turns an element element into a popover control button; takes the ID of the popover element to control as its value. */
  popovertarget?: "top" | "bottom" | "left" | "right" | "auto";
  /** Specifies the action to be performed on a popover element being controlled by a control element. */
  popovertargetaction?: "show" | "hide" | "toggle";
} & Record<string, any>;

type BaseEvents = {};

/** `SlAlert` component event */
export type SlAlertEvent<E = Event> = TypedEvent<SlAlert, E>;

export type SlAlertProps = {
  /** Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
use the `show()` and `hide()` methods and this attribute will reflect the alert's open state. */
  open?: SlAlert["open"];
  /** Enables a close button that allows the user to dismiss the alert. */
  closable?: SlAlert["closable"];
  /** The alert's theme variant. */
  variant?: SlAlert["variant"];
  /** The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
the alert will not close on its own. */
  duration?: SlAlert["duration"];
  /** Enables a countdown that indicates the remaining time the alert will be displayed.
Typically used to indicate the remaining time before a whole app refresh. */
  countdown?: SlAlert["countdown"];
  /**  */
  base?: SlAlert["base"];
  /**  */
  countdownElement?: SlAlert["countdownElement"];

  /** Emitted when the alert opens. */
  "onsl-show"?: (e: SlAlertEvent) => void;
  /** Emitted after the alert opens and all animations are complete. */
  "onsl-after-show"?: (e: SlAlertEvent) => void;
  /** Emitted when the alert closes. */
  "onsl-hide"?: (e: SlAlertEvent) => void;
  /** Emitted after the alert closes and all animations are complete. */
  "onsl-after-hide"?: (e: SlAlertEvent) => void;
};

export type SlAlertSolidJsProps = {
  /** Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
use the `show()` and `hide()` methods and this attribute will reflect the alert's open state. */
  "prop:open"?: SlAlert["open"];
  /** Enables a close button that allows the user to dismiss the alert. */
  "prop:closable"?: SlAlert["closable"];
  /** The alert's theme variant. */
  "prop:variant"?: SlAlert["variant"];
  /** The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
the alert will not close on its own. */
  "prop:duration"?: SlAlert["duration"];
  /** Enables a countdown that indicates the remaining time the alert will be displayed.
Typically used to indicate the remaining time before a whole app refresh. */
  "prop:countdown"?: SlAlert["countdown"];
  /**  */
  "prop:base"?: SlAlert["base"];
  /**  */
  "prop:countdownElement"?: SlAlert["countdownElement"];
  /** Emitted when the alert opens. */
  "on:sl-show"?: (e: SlAlertEvent) => void;
  /** Emitted after the alert opens and all animations are complete. */
  "on:sl-after-show"?: (e: SlAlertEvent) => void;
  /** Emitted when the alert closes. */
  "on:sl-hide"?: (e: SlAlertEvent) => void;
  /** Emitted after the alert closes and all animations are complete. */
  "on:sl-after-hide"?: (e: SlAlertEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlAnimatedImage` component event */
export type SlAnimatedImageEvent<E = Event> = TypedEvent<SlAnimatedImage, E>;

export type SlAnimatedImageProps = {
  /** The path to the image to load. */
  src?: SlAnimatedImage["src"];
  /** A description of the image used by assistive devices. */
  alt?: SlAnimatedImage["alt"];
  /** Plays the animation. When this attribute is remove, the animation will pause. */
  play?: SlAnimatedImage["play"];
  /**  */
  animatedImage?: SlAnimatedImage["animatedImage"];
  /**  */
  frozenFrame?: SlAnimatedImage["frozenFrame"];
  /**  */
  isLoaded?: SlAnimatedImage["isLoaded"];

  /** Emitted when the image loads successfully. */
  "onsl-load"?: (e: SlAnimatedImageEvent) => void;
  /** Emitted when the image fails to load. */
  "onsl-error"?: (e: SlAnimatedImageEvent) => void;
};

export type SlAnimatedImageSolidJsProps = {
  /** The path to the image to load. */
  "prop:src"?: SlAnimatedImage["src"];
  /** A description of the image used by assistive devices. */
  "prop:alt"?: SlAnimatedImage["alt"];
  /** Plays the animation. When this attribute is remove, the animation will pause. */
  "prop:play"?: SlAnimatedImage["play"];
  /**  */
  "prop:animatedImage"?: SlAnimatedImage["animatedImage"];
  /**  */
  "prop:frozenFrame"?: SlAnimatedImage["frozenFrame"];
  /**  */
  "prop:isLoaded"?: SlAnimatedImage["isLoaded"];
  /** Emitted when the image loads successfully. */
  "on:sl-load"?: (e: SlAnimatedImageEvent) => void;
  /** Emitted when the image fails to load. */
  "on:sl-error"?: (e: SlAnimatedImageEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlAnimation` component event */
export type SlAnimationEvent<E = Event> = TypedEvent<SlAnimation, E>;

export type SlAnimationProps = {
  /** The name of the built-in animation to use. For custom animations, use the `keyframes` prop. */
  name?: SlAnimation["name"];
  /** Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
the animation finishes or gets canceled. */
  play?: SlAnimation["play"];
  /** The number of milliseconds to delay the start of the animation. */
  delay?: SlAnimation["delay"];
  /** Determines the direction of playback as well as the behavior when reaching the end of an iteration.
[Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) */
  direction?: SlAnimation["direction"];
  /** The number of milliseconds each iteration of the animation takes to complete. */
  duration?: SlAnimation["duration"];
  /** The easing function to use for the animation. This can be a Shoelace easing function or a custom easing function
such as `cubic-bezier(0, 1, .76, 1.14)`. */
  easing?: SlAnimation["easing"];
  /** The number of milliseconds to delay after the active period of an animation sequence. */
  "end-delay"?: SlAnimation["endDelay"];
  /** The number of milliseconds to delay after the active period of an animation sequence. */
  endDelay?: SlAnimation["endDelay"];
  /** Sets how the animation applies styles to its target before and after its execution. */
  fill?: SlAnimation["fill"];
  /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
  iterations?: SlAnimation["iterations"];
  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  "iteration-start"?: SlAnimation["iterationStart"];
  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  iterationStart?: SlAnimation["iterationStart"];
  /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
value can be changed without causing the animation to restart. */
  "playback-rate"?: SlAnimation["playbackRate"];
  /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
value can be changed without causing the animation to restart. */
  playbackRate?: SlAnimation["playbackRate"];
  /**  */
  defaultSlot?: SlAnimation["defaultSlot"];
  /** The keyframes to use for the animation. If this is set, `name` will be ignored. */
  keyframes?: SlAnimation["keyframes"];
  /** Gets and sets the current animation time. */
  currentTime?: SlAnimation["currentTime"];

  /** Emitted when the animation is canceled. */
  "onsl-cancel"?: (e: SlAnimationEvent) => void;
  /** Emitted when the animation finishes. */
  "onsl-finish"?: (e: SlAnimationEvent) => void;
  /** Emitted when the animation starts or restarts. */
  "onsl-start"?: (e: SlAnimationEvent) => void;
};

export type SlAnimationSolidJsProps = {
  /** The name of the built-in animation to use. For custom animations, use the `keyframes` prop. */
  "prop:name"?: SlAnimation["name"];
  /** Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
the animation finishes or gets canceled. */
  "prop:play"?: SlAnimation["play"];
  /** The number of milliseconds to delay the start of the animation. */
  "prop:delay"?: SlAnimation["delay"];
  /** Determines the direction of playback as well as the behavior when reaching the end of an iteration.
[Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) */
  "prop:direction"?: SlAnimation["direction"];
  /** The number of milliseconds each iteration of the animation takes to complete. */
  "prop:duration"?: SlAnimation["duration"];
  /** The easing function to use for the animation. This can be a Shoelace easing function or a custom easing function
such as `cubic-bezier(0, 1, .76, 1.14)`. */
  "prop:easing"?: SlAnimation["easing"];
  /** The number of milliseconds to delay after the active period of an animation sequence. */
  "attr:end-delay"?: SlAnimation["endDelay"];
  /** The number of milliseconds to delay after the active period of an animation sequence. */
  "prop:endDelay"?: SlAnimation["endDelay"];
  /** Sets how the animation applies styles to its target before and after its execution. */
  "prop:fill"?: SlAnimation["fill"];
  /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
  "prop:iterations"?: SlAnimation["iterations"];
  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  "attr:iteration-start"?: SlAnimation["iterationStart"];
  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  "prop:iterationStart"?: SlAnimation["iterationStart"];
  /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
value can be changed without causing the animation to restart. */
  "attr:playback-rate"?: SlAnimation["playbackRate"];
  /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
value can be changed without causing the animation to restart. */
  "prop:playbackRate"?: SlAnimation["playbackRate"];
  /**  */
  "prop:defaultSlot"?: SlAnimation["defaultSlot"];
  /** The keyframes to use for the animation. If this is set, `name` will be ignored. */
  "prop:keyframes"?: SlAnimation["keyframes"];
  /** Gets and sets the current animation time. */
  "prop:currentTime"?: SlAnimation["currentTime"];
  /** Emitted when the animation is canceled. */
  "on:sl-cancel"?: (e: SlAnimationEvent) => void;
  /** Emitted when the animation finishes. */
  "on:sl-finish"?: (e: SlAnimationEvent) => void;
  /** Emitted when the animation starts or restarts. */
  "on:sl-start"?: (e: SlAnimationEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlAvatar` component event */
export type SlAvatarEvent<E = Event> = TypedEvent<SlAvatar, E>;

export type SlAvatarProps = {
  /** The image source to use for the avatar. */
  image?: SlAvatar["image"];
  /** A label to use to describe the avatar to assistive devices. */
  label?: SlAvatar["label"];
  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  initials?: SlAvatar["initials"];
  /** Indicates how the browser should load the image. */
  loading?: SlAvatar["loading"];
  /** The shape of the avatar. */
  shape?: SlAvatar["shape"];

  /** The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause. */
  "onsl-error"?: (e: SlAvatarEvent) => void;
};

export type SlAvatarSolidJsProps = {
  /** The image source to use for the avatar. */
  "prop:image"?: SlAvatar["image"];
  /** A label to use to describe the avatar to assistive devices. */
  "prop:label"?: SlAvatar["label"];
  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  "prop:initials"?: SlAvatar["initials"];
  /** Indicates how the browser should load the image. */
  "prop:loading"?: SlAvatar["loading"];
  /** The shape of the avatar. */
  "prop:shape"?: SlAvatar["shape"];
  /** The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause. */
  "on:sl-error"?: (e: SlAvatarEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlBadgeProps = {
  /** The badge's theme variant. */
  variant?: SlBadge["variant"];
  /** Draws a pill-style badge with rounded edges. */
  pill?: SlBadge["pill"];
  /** Makes the badge pulsate to draw attention. */
  pulse?: SlBadge["pulse"];
};

export type SlBadgeSolidJsProps = {
  /** The badge's theme variant. */
  "prop:variant"?: SlBadge["variant"];
  /** Draws a pill-style badge with rounded edges. */
  "prop:pill"?: SlBadge["pill"];
  /** Makes the badge pulsate to draw attention. */
  "prop:pulse"?: SlBadge["pulse"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlBreadcrumbProps = {
  /** The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
screen readers and other assistive devices to provide more context for users. */
  label?: SlBreadcrumb["label"];
  /**  */
  defaultSlot?: SlBreadcrumb["defaultSlot"];
  /**  */
  separatorSlot?: SlBreadcrumb["separatorSlot"];
};

export type SlBreadcrumbSolidJsProps = {
  /** The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
screen readers and other assistive devices to provide more context for users. */
  "prop:label"?: SlBreadcrumb["label"];
  /**  */
  "prop:defaultSlot"?: SlBreadcrumb["defaultSlot"];
  /**  */
  "prop:separatorSlot"?: SlBreadcrumb["separatorSlot"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlButton` component event */
export type SlButtonEvent<E = Event> = TypedEvent<SlButton, E>;

export type SlButtonProps = {
  /**  */
  title?: SlButton["title"];
  /** The button's theme variant. */
  variant?: SlButton["variant"];
  /** The button's size. */
  size?: SlButton["size"];
  /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
  caret?: SlButton["caret"];
  /** Disables the button. */
  disabled?: SlButton["disabled"];
  /** Draws the button in a loading state. */
  loading?: SlButton["loading"];
  /** Draws an outlined button. */
  outline?: SlButton["outline"];
  /** Draws a pill-style button with rounded edges. */
  pill?: SlButton["pill"];
  /** Draws a circular icon button. When this attribute is present, the button expects a single `<sl-icon>` in the
default slot. */
  circle?: SlButton["circle"];
  /** The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. */
  type?: SlButton["type"];
  /** The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
This attribute is ignored when `href` is present. */
  name?: SlButton["name"];
  /** The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
button is the submitter. This attribute is ignored when `href` is present. */
  value?: SlButton["value"];
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  href?: SlButton["href"];
  /** Tells the browser where to open the link. Only used when `href` is present. */
  target?: SlButton["target"];
  /** When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
setting the attribute to an empty string or a value of your choice, respectively. */
  rel?: SlButton["rel"];
  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  download?: SlButton["download"];
  /** The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
value of this attribute must be an id of a form in the same document or shadow root as the button. */
  form?: SlButton["form"];
  /** Used to override the form owner's `action` attribute. */
  formaction?: SlButton["formAction"];
  /** Used to override the form owner's `action` attribute. */
  formAction?: SlButton["formAction"];
  /** Used to override the form owner's `enctype` attribute. */
  formenctype?: SlButton["formEnctype"];
  /** Used to override the form owner's `enctype` attribute. */
  formEnctype?: SlButton["formEnctype"];
  /** Used to override the form owner's `method` attribute. */
  formmethod?: SlButton["formMethod"];
  /** Used to override the form owner's `method` attribute. */
  formMethod?: SlButton["formMethod"];
  /** Used to override the form owner's `novalidate` attribute. */
  formnovalidate?: SlButton["formNoValidate"];
  /** Used to override the form owner's `novalidate` attribute. */
  formNoValidate?: SlButton["formNoValidate"];
  /** Used to override the form owner's `target` attribute. */
  formtarget?: SlButton["formTarget"];
  /** Used to override the form owner's `target` attribute. */
  formTarget?: SlButton["formTarget"];
  /**  */
  button?: SlButton["button"];
  /**  */
  invalid?: SlButton["invalid"];

  /** Emitted when the button loses focus. */
  "onsl-blur"?: (e: SlButtonEvent) => void;
  /** Emitted when the button gains focus. */
  "onsl-focus"?: (e: SlButtonEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onsl-invalid"?: (e: SlButtonEvent) => void;
};

export type SlButtonSolidJsProps = {
  /**  */
  "prop:title"?: SlButton["title"];
  /** The button's theme variant. */
  "prop:variant"?: SlButton["variant"];
  /** The button's size. */
  "prop:size"?: SlButton["size"];
  /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
  "prop:caret"?: SlButton["caret"];
  /** Disables the button. */
  "prop:disabled"?: SlButton["disabled"];
  /** Draws the button in a loading state. */
  "prop:loading"?: SlButton["loading"];
  /** Draws an outlined button. */
  "prop:outline"?: SlButton["outline"];
  /** Draws a pill-style button with rounded edges. */
  "prop:pill"?: SlButton["pill"];
  /** Draws a circular icon button. When this attribute is present, the button expects a single `<sl-icon>` in the
default slot. */
  "prop:circle"?: SlButton["circle"];
  /** The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. */
  "prop:type"?: SlButton["type"];
  /** The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
This attribute is ignored when `href` is present. */
  "prop:name"?: SlButton["name"];
  /** The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
button is the submitter. This attribute is ignored when `href` is present. */
  "prop:value"?: SlButton["value"];
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  "prop:href"?: SlButton["href"];
  /** Tells the browser where to open the link. Only used when `href` is present. */
  "prop:target"?: SlButton["target"];
  /** When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
setting the attribute to an empty string or a value of your choice, respectively. */
  "prop:rel"?: SlButton["rel"];
  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  "prop:download"?: SlButton["download"];
  /** The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
value of this attribute must be an id of a form in the same document or shadow root as the button. */
  "prop:form"?: SlButton["form"];
  /** Used to override the form owner's `action` attribute. */
  "attr:formaction"?: SlButton["formAction"];
  /** Used to override the form owner's `action` attribute. */
  "prop:formAction"?: SlButton["formAction"];
  /** Used to override the form owner's `enctype` attribute. */
  "attr:formenctype"?: SlButton["formEnctype"];
  /** Used to override the form owner's `enctype` attribute. */
  "prop:formEnctype"?: SlButton["formEnctype"];
  /** Used to override the form owner's `method` attribute. */
  "attr:formmethod"?: SlButton["formMethod"];
  /** Used to override the form owner's `method` attribute. */
  "prop:formMethod"?: SlButton["formMethod"];
  /** Used to override the form owner's `novalidate` attribute. */
  "bool:formnovalidate"?: SlButton["formNoValidate"];
  /** Used to override the form owner's `novalidate` attribute. */
  "prop:formNoValidate"?: SlButton["formNoValidate"];
  /** Used to override the form owner's `target` attribute. */
  "attr:formtarget"?: SlButton["formTarget"];
  /** Used to override the form owner's `target` attribute. */
  "prop:formTarget"?: SlButton["formTarget"];
  /**  */
  "prop:button"?: SlButton["button"];
  /**  */
  "prop:invalid"?: SlButton["invalid"];
  /** Emitted when the button loses focus. */
  "on:sl-blur"?: (e: SlButtonEvent) => void;
  /** Emitted when the button gains focus. */
  "on:sl-focus"?: (e: SlButtonEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:sl-invalid"?: (e: SlButtonEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlBreadcrumbItemProps = {
  /** Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
internally. When unset, a button will be rendered instead. */
  href?: SlBreadcrumbItem["href"];
  /** Tells the browser where to open the link. Only used when `href` is set. */
  target?: SlBreadcrumbItem["target"];
  /** The `rel` attribute to use on the link. Only used when `href` is set. */
  rel?: SlBreadcrumbItem["rel"];
  /**  */
  defaultSlot?: SlBreadcrumbItem["defaultSlot"];
};

export type SlBreadcrumbItemSolidJsProps = {
  /** Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
internally. When unset, a button will be rendered instead. */
  "prop:href"?: SlBreadcrumbItem["href"];
  /** Tells the browser where to open the link. Only used when `href` is set. */
  "prop:target"?: SlBreadcrumbItem["target"];
  /** The `rel` attribute to use on the link. Only used when `href` is set. */
  "prop:rel"?: SlBreadcrumbItem["rel"];
  /**  */
  "prop:defaultSlot"?: SlBreadcrumbItem["defaultSlot"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlButtonGroupProps = {
  /** A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended. */
  label?: SlButtonGroup["label"];
  /**  */
  defaultSlot?: SlButtonGroup["defaultSlot"];
  /**  */
  disableRole?: SlButtonGroup["disableRole"];
};

export type SlButtonGroupSolidJsProps = {
  /** A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended. */
  "prop:label"?: SlButtonGroup["label"];
  /**  */
  "prop:defaultSlot"?: SlButtonGroup["defaultSlot"];
  /**  */
  "prop:disableRole"?: SlButtonGroup["disableRole"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlCardProps = {};

export type SlCardSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlCarousel` component event */
export type SlCarouselEvent<E = Event> = TypedEvent<SlCarousel, E>;
/** `sl-slide-change` event type */
export type SlCarouselSlSlideChangeEvent = SlCarouselEvent<
  CustomEvent<{ index: number; slide: SlCarouselItem }>
>;

export type SlCarouselProps = {
  /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
  loop?: SlCarousel["loop"];
  /** When set, show the carousel's navigation. */
  navigation?: SlCarousel["navigation"];
  /** When set, show the carousel's pagination indicators. */
  pagination?: SlCarousel["pagination"];
  /** When set, the slides will scroll automatically when the user is not interacting with them. */
  autoplay?: SlCarousel["autoplay"];
  /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
  "autoplay-interval"?: SlCarousel["autoplayInterval"];
  /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
  autoplayInterval?: SlCarousel["autoplayInterval"];
  /** Specifies how many slides should be shown at a given time. */
  "slides-per-page"?: SlCarousel["slidesPerPage"];
  /** Specifies how many slides should be shown at a given time. */
  slidesPerPage?: SlCarousel["slidesPerPage"];
  /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
greater than one. It can't be higher than `slides-per-page`. */
  "slides-per-move"?: SlCarousel["slidesPerMove"];
  /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
greater than one. It can't be higher than `slides-per-page`. */
  slidesPerMove?: SlCarousel["slidesPerMove"];
  /** Specifies the orientation in which the carousel will lay out. */
  orientation?: SlCarousel["orientation"];
  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  "mouse-dragging"?: SlCarousel["mouseDragging"];
  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  mouseDragging?: SlCarousel["mouseDragging"];
  /**  */
  scrollContainer?: SlCarousel["scrollContainer"];
  /**  */
  paginationContainer?: SlCarousel["paginationContainer"];
  /**  */
  activeSlide?: SlCarousel["activeSlide"];
  /**  */
  scrolling?: SlCarousel["scrolling"];
  /**  */
  dragging?: SlCarousel["dragging"];

  /** Emitted when the active slide changes. */
  "onsl-slide-change"?: (e: SlCarouselSlSlideChangeEvent) => void;
};

export type SlCarouselSolidJsProps = {
  /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
  "prop:loop"?: SlCarousel["loop"];
  /** When set, show the carousel's navigation. */
  "prop:navigation"?: SlCarousel["navigation"];
  /** When set, show the carousel's pagination indicators. */
  "prop:pagination"?: SlCarousel["pagination"];
  /** When set, the slides will scroll automatically when the user is not interacting with them. */
  "prop:autoplay"?: SlCarousel["autoplay"];
  /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
  "attr:autoplay-interval"?: SlCarousel["autoplayInterval"];
  /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
  "prop:autoplayInterval"?: SlCarousel["autoplayInterval"];
  /** Specifies how many slides should be shown at a given time. */
  "attr:slides-per-page"?: SlCarousel["slidesPerPage"];
  /** Specifies how many slides should be shown at a given time. */
  "prop:slidesPerPage"?: SlCarousel["slidesPerPage"];
  /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
greater than one. It can't be higher than `slides-per-page`. */
  "attr:slides-per-move"?: SlCarousel["slidesPerMove"];
  /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
greater than one. It can't be higher than `slides-per-page`. */
  "prop:slidesPerMove"?: SlCarousel["slidesPerMove"];
  /** Specifies the orientation in which the carousel will lay out. */
  "prop:orientation"?: SlCarousel["orientation"];
  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  "bool:mouse-dragging"?: SlCarousel["mouseDragging"];
  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  "prop:mouseDragging"?: SlCarousel["mouseDragging"];
  /**  */
  "prop:scrollContainer"?: SlCarousel["scrollContainer"];
  /**  */
  "prop:paginationContainer"?: SlCarousel["paginationContainer"];
  /**  */
  "prop:activeSlide"?: SlCarousel["activeSlide"];
  /**  */
  "prop:scrolling"?: SlCarousel["scrolling"];
  /**  */
  "prop:dragging"?: SlCarousel["dragging"];
  /** Emitted when the active slide changes. */
  "on:sl-slide-change"?: (e: SlCarouselSlSlideChangeEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlCarouselItemProps = {};

export type SlCarouselItemSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlCheckbox` component event */
export type SlCheckboxEvent<E = Event> = TypedEvent<SlCheckbox, E>;

export type SlCheckboxProps = {
  /**  */
  title?: SlCheckbox["title"];
  /** The name of the checkbox, submitted as a name/value pair with form data. */
  name?: SlCheckbox["name"];
  /** The current value of the checkbox, submitted as a name/value pair with form data. */
  value?: SlCheckbox["value"];
  /** The checkbox's size. */
  size?: SlCheckbox["size"];
  /** Disables the checkbox. */
  disabled?: SlCheckbox["disabled"];
  /** Draws the checkbox in a checked state. */
  checked?: SlCheckbox["checked"];
  /** Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
all/none" behavior when associated checkboxes have a mix of checked and unchecked states. */
  indeterminate?: SlCheckbox["indeterminate"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: SlCheckbox["form"];
  /** Makes the checkbox a required field. */
  required?: SlCheckbox["required"];
  /** The checkbox's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: SlCheckbox["helpText"];
  /** The checkbox's help text. If you need to display HTML, use the `help-text` slot instead. */
  helpText?: SlCheckbox["helpText"];
  /**  */
  input?: SlCheckbox["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultChecked?: SlCheckbox["defaultChecked"];

  /** Emitted when the checkbox loses focus. */
  "onsl-blur"?: (e: SlCheckboxEvent) => void;
  /** Emitted when the checked state changes. */
  "onsl-change"?: (e: SlCheckboxEvent) => void;
  /** Emitted when the checkbox gains focus. */
  "onsl-focus"?: (e: SlCheckboxEvent) => void;
  /** Emitted when the checkbox receives input. */
  "onsl-input"?: (e: SlCheckboxEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onsl-invalid"?: (e: SlCheckboxEvent) => void;
};

export type SlCheckboxSolidJsProps = {
  /**  */
  "prop:title"?: SlCheckbox["title"];
  /** The name of the checkbox, submitted as a name/value pair with form data. */
  "prop:name"?: SlCheckbox["name"];
  /** The current value of the checkbox, submitted as a name/value pair with form data. */
  "prop:value"?: SlCheckbox["value"];
  /** The checkbox's size. */
  "prop:size"?: SlCheckbox["size"];
  /** Disables the checkbox. */
  "prop:disabled"?: SlCheckbox["disabled"];
  /** Draws the checkbox in a checked state. */
  "prop:checked"?: SlCheckbox["checked"];
  /** Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
all/none" behavior when associated checkboxes have a mix of checked and unchecked states. */
  "prop:indeterminate"?: SlCheckbox["indeterminate"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  "prop:form"?: SlCheckbox["form"];
  /** Makes the checkbox a required field. */
  "prop:required"?: SlCheckbox["required"];
  /** The checkbox's help text. If you need to display HTML, use the `help-text` slot instead. */
  "attr:help-text"?: SlCheckbox["helpText"];
  /** The checkbox's help text. If you need to display HTML, use the `help-text` slot instead. */
  "prop:helpText"?: SlCheckbox["helpText"];
  /**  */
  "prop:input"?: SlCheckbox["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultChecked"?: SlCheckbox["defaultChecked"];
  /** Emitted when the checkbox loses focus. */
  "on:sl-blur"?: (e: SlCheckboxEvent) => void;
  /** Emitted when the checked state changes. */
  "on:sl-change"?: (e: SlCheckboxEvent) => void;
  /** Emitted when the checkbox gains focus. */
  "on:sl-focus"?: (e: SlCheckboxEvent) => void;
  /** Emitted when the checkbox receives input. */
  "on:sl-input"?: (e: SlCheckboxEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:sl-invalid"?: (e: SlCheckboxEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlColorPicker` component event */
export type SlColorPickerEvent<E = Event> = TypedEvent<SlColorPicker, E>;

export type SlColorPickerProps = {
  /** The current value of the color picker. The value's format will vary based the `format` attribute. To get the value
in a specific format, use the `getFormattedValue()` method. The value is submitted as a name/value pair with form
data. */
  value?: SlColorPicker["value"];
  /** The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
display HTML, you can use the `label` slot` instead. */
  label?: SlColorPicker["label"];
  /** The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
picker will accept user input in any format (including CSS color names) and convert it to the desired format. */
  format?: SlColorPicker["format"];
  /** Renders the color picker inline rather than in a dropdown. */
  inline?: SlColorPicker["inline"];
  /** Determines the size of the color picker's trigger. This has no effect on inline color pickers. */
  size?: SlColorPicker["size"];
  /** Removes the button that lets users toggle between format. */
  "no-format-toggle"?: SlColorPicker["noFormatToggle"];
  /** Removes the button that lets users toggle between format. */
  noFormatToggle?: SlColorPicker["noFormatToggle"];
  /** The name of the form control, submitted as a name/value pair with form data. */
  name?: SlColorPicker["name"];
  /** Disables the color picker. */
  disabled?: SlColorPicker["disabled"];
  /** Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  hoist?: SlColorPicker["hoist"];
  /** Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA. */
  opacity?: SlColorPicker["opacity"];
  /** By default, values are lowercase. With this attribute, values will be uppercase instead. */
  uppercase?: SlColorPicker["uppercase"];
  /** One or more predefined color swatches to display as presets in the color picker. Can include any format the color
picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript. */
  swatches?: SlColorPicker["swatches"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: SlColorPicker["form"];
  /** Makes the color picker a required field. */
  required?: SlColorPicker["required"];
  /**  */
  base?: SlColorPicker["base"];
  /**  */
  input?: SlColorPicker["input"];
  /**  */
  dropdown?: SlColorPicker["dropdown"];
  /**  */
  previewButton?: SlColorPicker["previewButton"];
  /**  */
  trigger?: SlColorPicker["trigger"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: SlColorPicker["defaultValue"];

  /** Emitted when the color picker loses focus. */
  "onsl-blur"?: (e: SlColorPickerEvent) => void;
  /** Emitted when the color picker's value changes. */
  "onsl-change"?: (e: SlColorPickerEvent) => void;
  /** Emitted when the color picker receives focus. */
  "onsl-focus"?: (e: SlColorPickerEvent) => void;
  /** Emitted when the color picker receives input. */
  "onsl-input"?: (e: SlColorPickerEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onsl-invalid"?: (e: SlColorPickerEvent) => void;
};

export type SlColorPickerSolidJsProps = {
  /** The current value of the color picker. The value's format will vary based the `format` attribute. To get the value
in a specific format, use the `getFormattedValue()` method. The value is submitted as a name/value pair with form
data. */
  "prop:value"?: SlColorPicker["value"];
  /** The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
display HTML, you can use the `label` slot` instead. */
  "prop:label"?: SlColorPicker["label"];
  /** The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
picker will accept user input in any format (including CSS color names) and convert it to the desired format. */
  "prop:format"?: SlColorPicker["format"];
  /** Renders the color picker inline rather than in a dropdown. */
  "prop:inline"?: SlColorPicker["inline"];
  /** Determines the size of the color picker's trigger. This has no effect on inline color pickers. */
  "prop:size"?: SlColorPicker["size"];
  /** Removes the button that lets users toggle between format. */
  "bool:no-format-toggle"?: SlColorPicker["noFormatToggle"];
  /** Removes the button that lets users toggle between format. */
  "prop:noFormatToggle"?: SlColorPicker["noFormatToggle"];
  /** The name of the form control, submitted as a name/value pair with form data. */
  "prop:name"?: SlColorPicker["name"];
  /** Disables the color picker. */
  "prop:disabled"?: SlColorPicker["disabled"];
  /** Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  "prop:hoist"?: SlColorPicker["hoist"];
  /** Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA. */
  "prop:opacity"?: SlColorPicker["opacity"];
  /** By default, values are lowercase. With this attribute, values will be uppercase instead. */
  "prop:uppercase"?: SlColorPicker["uppercase"];
  /** One or more predefined color swatches to display as presets in the color picker. Can include any format the color
picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript. */
  "prop:swatches"?: SlColorPicker["swatches"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  "prop:form"?: SlColorPicker["form"];
  /** Makes the color picker a required field. */
  "prop:required"?: SlColorPicker["required"];
  /**  */
  "prop:base"?: SlColorPicker["base"];
  /**  */
  "prop:input"?: SlColorPicker["input"];
  /**  */
  "prop:dropdown"?: SlColorPicker["dropdown"];
  /**  */
  "prop:previewButton"?: SlColorPicker["previewButton"];
  /**  */
  "prop:trigger"?: SlColorPicker["trigger"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultValue"?: SlColorPicker["defaultValue"];
  /** Emitted when the color picker loses focus. */
  "on:sl-blur"?: (e: SlColorPickerEvent) => void;
  /** Emitted when the color picker's value changes. */
  "on:sl-change"?: (e: SlColorPickerEvent) => void;
  /** Emitted when the color picker receives focus. */
  "on:sl-focus"?: (e: SlColorPickerEvent) => void;
  /** Emitted when the color picker receives input. */
  "on:sl-input"?: (e: SlColorPickerEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:sl-invalid"?: (e: SlColorPickerEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlCopyButton` component event */
export type SlCopyButtonEvent<E = Event> = TypedEvent<SlCopyButton, E>;

export type SlCopyButtonProps = {
  /** The text value to copy. */
  value?: SlCopyButton["value"];
  /** An id that references an element in the same document from which data will be copied. If both this and `value` are
present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an
attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
append a dot and the property name, e.g. `from="el.value"`. */
  from?: SlCopyButton["from"];
  /** Disables the copy button. */
  disabled?: SlCopyButton["disabled"];
  /** A custom label to show in the tooltip. */
  "copy-label"?: SlCopyButton["copyLabel"];
  /** A custom label to show in the tooltip. */
  copyLabel?: SlCopyButton["copyLabel"];
  /** A custom label to show in the tooltip after copying. */
  "success-label"?: SlCopyButton["successLabel"];
  /** A custom label to show in the tooltip after copying. */
  successLabel?: SlCopyButton["successLabel"];
  /** A custom label to show in the tooltip when a copy error occurs. */
  "error-label"?: SlCopyButton["errorLabel"];
  /** A custom label to show in the tooltip when a copy error occurs. */
  errorLabel?: SlCopyButton["errorLabel"];
  /** The length of time to show feedback before restoring the default trigger. */
  "feedback-duration"?: SlCopyButton["feedbackDuration"];
  /** The length of time to show feedback before restoring the default trigger. */
  feedbackDuration?: SlCopyButton["feedbackDuration"];
  /** The preferred placement of the tooltip. */
  "tooltip-placement"?: SlCopyButton["tooltipPlacement"];
  /** The preferred placement of the tooltip. */
  tooltipPlacement?: SlCopyButton["tooltipPlacement"];
  /** Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
scenarios. */
  hoist?: SlCopyButton["hoist"];
  /**  */
  copyIcon?: SlCopyButton["copyIcon"];
  /**  */
  successIcon?: SlCopyButton["successIcon"];
  /**  */
  errorIcon?: SlCopyButton["errorIcon"];
  /**  */
  tooltip?: SlCopyButton["tooltip"];
  /**  */
  isCopying?: SlCopyButton["isCopying"];
  /**  */
  status?: SlCopyButton["status"];

  /** Emitted when the data has been copied. */
  "onsl-copy"?: (e: SlCopyButtonEvent) => void;
  /** Emitted when the data could not be copied. */
  "onsl-error"?: (e: SlCopyButtonEvent) => void;
};

export type SlCopyButtonSolidJsProps = {
  /** The text value to copy. */
  "prop:value"?: SlCopyButton["value"];
  /** An id that references an element in the same document from which data will be copied. If both this and `value` are
present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an
attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
append a dot and the property name, e.g. `from="el.value"`. */
  "prop:from"?: SlCopyButton["from"];
  /** Disables the copy button. */
  "prop:disabled"?: SlCopyButton["disabled"];
  /** A custom label to show in the tooltip. */
  "attr:copy-label"?: SlCopyButton["copyLabel"];
  /** A custom label to show in the tooltip. */
  "prop:copyLabel"?: SlCopyButton["copyLabel"];
  /** A custom label to show in the tooltip after copying. */
  "attr:success-label"?: SlCopyButton["successLabel"];
  /** A custom label to show in the tooltip after copying. */
  "prop:successLabel"?: SlCopyButton["successLabel"];
  /** A custom label to show in the tooltip when a copy error occurs. */
  "attr:error-label"?: SlCopyButton["errorLabel"];
  /** A custom label to show in the tooltip when a copy error occurs. */
  "prop:errorLabel"?: SlCopyButton["errorLabel"];
  /** The length of time to show feedback before restoring the default trigger. */
  "attr:feedback-duration"?: SlCopyButton["feedbackDuration"];
  /** The length of time to show feedback before restoring the default trigger. */
  "prop:feedbackDuration"?: SlCopyButton["feedbackDuration"];
  /** The preferred placement of the tooltip. */
  "attr:tooltip-placement"?: SlCopyButton["tooltipPlacement"];
  /** The preferred placement of the tooltip. */
  "prop:tooltipPlacement"?: SlCopyButton["tooltipPlacement"];
  /** Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
scenarios. */
  "prop:hoist"?: SlCopyButton["hoist"];
  /**  */
  "prop:copyIcon"?: SlCopyButton["copyIcon"];
  /**  */
  "prop:successIcon"?: SlCopyButton["successIcon"];
  /**  */
  "prop:errorIcon"?: SlCopyButton["errorIcon"];
  /**  */
  "prop:tooltip"?: SlCopyButton["tooltip"];
  /**  */
  "prop:isCopying"?: SlCopyButton["isCopying"];
  /**  */
  "prop:status"?: SlCopyButton["status"];
  /** Emitted when the data has been copied. */
  "on:sl-copy"?: (e: SlCopyButtonEvent) => void;
  /** Emitted when the data could not be copied. */
  "on:sl-error"?: (e: SlCopyButtonEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlDetails` component event */
export type SlDetailsEvent<E = Event> = TypedEvent<SlDetails, E>;

export type SlDetailsProps = {
  /** Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
can use the `show()` and `hide()` methods and this attribute will reflect the details' open state. */
  open?: SlDetails["open"];
  /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
  summary?: SlDetails["summary"];
  /** Disables the details so it can't be toggled. */
  disabled?: SlDetails["disabled"];
  /**  */
  details?: SlDetails["details"];
  /**  */
  header?: SlDetails["header"];
  /**  */
  body?: SlDetails["body"];
  /**  */
  expandIconSlot?: SlDetails["expandIconSlot"];
  /**  */
  detailsObserver?: SlDetails["detailsObserver"];

  /** Emitted when the details opens. */
  "onsl-show"?: (e: SlDetailsEvent) => void;
  /** Emitted after the details opens and all animations are complete. */
  "onsl-after-show"?: (e: SlDetailsEvent) => void;
  /** Emitted when the details closes. */
  "onsl-hide"?: (e: SlDetailsEvent) => void;
  /** Emitted after the details closes and all animations are complete. */
  "onsl-after-hide"?: (e: SlDetailsEvent) => void;
};

export type SlDetailsSolidJsProps = {
  /** Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
can use the `show()` and `hide()` methods and this attribute will reflect the details' open state. */
  "prop:open"?: SlDetails["open"];
  /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
  "prop:summary"?: SlDetails["summary"];
  /** Disables the details so it can't be toggled. */
  "prop:disabled"?: SlDetails["disabled"];
  /**  */
  "prop:details"?: SlDetails["details"];
  /**  */
  "prop:header"?: SlDetails["header"];
  /**  */
  "prop:body"?: SlDetails["body"];
  /**  */
  "prop:expandIconSlot"?: SlDetails["expandIconSlot"];
  /**  */
  "prop:detailsObserver"?: SlDetails["detailsObserver"];
  /** Emitted when the details opens. */
  "on:sl-show"?: (e: SlDetailsEvent) => void;
  /** Emitted after the details opens and all animations are complete. */
  "on:sl-after-show"?: (e: SlDetailsEvent) => void;
  /** Emitted when the details closes. */
  "on:sl-hide"?: (e: SlDetailsEvent) => void;
  /** Emitted after the details closes and all animations are complete. */
  "on:sl-after-hide"?: (e: SlDetailsEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlDialog` component event */
export type SlDialogEvent<E = Event> = TypedEvent<SlDialog, E>;
/** `sl-request-close` event type */
export type SlDialogSlRequestCloseEvent = SlDialogEvent<
  CustomEvent<{ source: "close-button" | "keyboard" | "overlay" }>
>;

export type SlDialogProps = {
  /** Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state. */
  open?: SlDialog["open"];
  /** The dialog's label as displayed in the header. You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead. */
  label?: SlDialog["label"];
  /** Disables the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the dialog. */
  "no-header"?: SlDialog["noHeader"];
  /** Disables the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the dialog. */
  noHeader?: SlDialog["noHeader"];
  /** Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. */
  modal?: SlDialog["modal"];
  /**  */
  dialog?: SlDialog["dialog"];
  /**  */
  panel?: SlDialog["panel"];
  /**  */
  overlay?: SlDialog["overlay"];

  /** Emitted when the dialog opens. */
  "onsl-show"?: (e: SlDialogEvent) => void;
  /** Emitted after the dialog opens and all animations are complete. */
  "onsl-after-show"?: (e: SlDialogEvent) => void;
  /** Emitted when the dialog closes. */
  "onsl-hide"?: (e: SlDialogEvent) => void;
  /** Emitted after the dialog closes and all animations are complete. */
  "onsl-after-hide"?: (e: SlDialogEvent) => void;
  /** Emitted when the dialog opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input. */
  "onsl-initial-focus"?: (e: SlDialogEvent) => void;
  /** Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss. */
  "onsl-request-close"?: (e: SlDialogSlRequestCloseEvent) => void;
};

export type SlDialogSolidJsProps = {
  /** Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state. */
  "prop:open"?: SlDialog["open"];
  /** The dialog's label as displayed in the header. You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: SlDialog["label"];
  /** Disables the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the dialog. */
  "bool:no-header"?: SlDialog["noHeader"];
  /** Disables the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the dialog. */
  "prop:noHeader"?: SlDialog["noHeader"];
  /** Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. */
  "prop:modal"?: SlDialog["modal"];
  /**  */
  "prop:dialog"?: SlDialog["dialog"];
  /**  */
  "prop:panel"?: SlDialog["panel"];
  /**  */
  "prop:overlay"?: SlDialog["overlay"];
  /** Emitted when the dialog opens. */
  "on:sl-show"?: (e: SlDialogEvent) => void;
  /** Emitted after the dialog opens and all animations are complete. */
  "on:sl-after-show"?: (e: SlDialogEvent) => void;
  /** Emitted when the dialog closes. */
  "on:sl-hide"?: (e: SlDialogEvent) => void;
  /** Emitted after the dialog closes and all animations are complete. */
  "on:sl-after-hide"?: (e: SlDialogEvent) => void;
  /** Emitted when the dialog opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input. */
  "on:sl-initial-focus"?: (e: SlDialogEvent) => void;
  /** Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss. */
  "on:sl-request-close"?: (e: SlDialogSlRequestCloseEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlDividerProps = {
  /** Draws the divider in a vertical orientation. */
  vertical?: SlDivider["vertical"];
};

export type SlDividerSolidJsProps = {
  /** Draws the divider in a vertical orientation. */
  "prop:vertical"?: SlDivider["vertical"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlDrawer` component event */
export type SlDrawerEvent<E = Event> = TypedEvent<SlDrawer, E>;
/** `sl-request-close` event type */
export type SlDrawerSlRequestCloseEvent = SlDrawerEvent<
  CustomEvent<{ source: "close-button" | "keyboard" | "overlay" }>
>;

export type SlDrawerProps = {
  /** Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state. */
  open?: SlDrawer["open"];
  /** The drawer's label as displayed in the header. You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead. */
  label?: SlDrawer["label"];
  /** The direction from which the drawer will open. */
  placement?: SlDrawer["placement"];
  /** By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
its parent element, set this attribute and add `position: relative` to the parent. */
  contained?: SlDrawer["contained"];
  /** Removes the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the drawer. */
  "no-header"?: SlDrawer["noHeader"];
  /** Removes the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the drawer. */
  noHeader?: SlDrawer["noHeader"];
  /** Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. */
  modal?: SlDrawer["modal"];
  /**  */
  drawer?: SlDrawer["drawer"];
  /**  */
  panel?: SlDrawer["panel"];
  /**  */
  overlay?: SlDrawer["overlay"];

  /** Emitted when the drawer opens. */
  "onsl-show"?: (e: SlDrawerEvent) => void;
  /** Emitted after the drawer opens and all animations are complete. */
  "onsl-after-show"?: (e: SlDrawerEvent) => void;
  /** Emitted when the drawer closes. */
  "onsl-hide"?: (e: SlDrawerEvent) => void;
  /** Emitted after the drawer closes and all animations are complete. */
  "onsl-after-hide"?: (e: SlDrawerEvent) => void;
  /** Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input. */
  "onsl-initial-focus"?: (e: SlDrawerEvent) => void;
  /** Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
  "onsl-request-close"?: (e: SlDrawerSlRequestCloseEvent) => void;
};

export type SlDrawerSolidJsProps = {
  /** Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state. */
  "prop:open"?: SlDrawer["open"];
  /** The drawer's label as displayed in the header. You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: SlDrawer["label"];
  /** The direction from which the drawer will open. */
  "prop:placement"?: SlDrawer["placement"];
  /** By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
its parent element, set this attribute and add `position: relative` to the parent. */
  "prop:contained"?: SlDrawer["contained"];
  /** Removes the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the drawer. */
  "bool:no-header"?: SlDrawer["noHeader"];
  /** Removes the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the drawer. */
  "prop:noHeader"?: SlDrawer["noHeader"];
  /** Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. */
  "prop:modal"?: SlDrawer["modal"];
  /**  */
  "prop:drawer"?: SlDrawer["drawer"];
  /**  */
  "prop:panel"?: SlDrawer["panel"];
  /**  */
  "prop:overlay"?: SlDrawer["overlay"];
  /** Emitted when the drawer opens. */
  "on:sl-show"?: (e: SlDrawerEvent) => void;
  /** Emitted after the drawer opens and all animations are complete. */
  "on:sl-after-show"?: (e: SlDrawerEvent) => void;
  /** Emitted when the drawer closes. */
  "on:sl-hide"?: (e: SlDrawerEvent) => void;
  /** Emitted after the drawer closes and all animations are complete. */
  "on:sl-after-hide"?: (e: SlDrawerEvent) => void;
  /** Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input. */
  "on:sl-initial-focus"?: (e: SlDrawerEvent) => void;
  /** Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
  "on:sl-request-close"?: (e: SlDrawerSlRequestCloseEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlDropdown` component event */
export type SlDropdownEvent<E = Event> = TypedEvent<SlDropdown, E>;

export type SlDropdownProps = {
  /** Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state. */
  open?: SlDropdown["open"];
  /** The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
inside of the viewport. */
  placement?: SlDropdown["placement"];
  /** Disables the dropdown so the panel will not open. */
  disabled?: SlDropdown["disabled"];
  /** By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
dropdowns that allow for multiple interactions. */
  "stay-open-on-select"?: SlDropdown["stayOpenOnSelect"];
  /** By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
dropdowns that allow for multiple interactions. */
  stayOpenOnSelect?: SlDropdown["stayOpenOnSelect"];
  /** The distance in pixels from which to offset the panel away from its trigger. */
  distance?: SlDropdown["distance"];
  /** The distance in pixels from which to offset the panel along its trigger. */
  skidding?: SlDropdown["skidding"];
  /** Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  hoist?: SlDropdown["hoist"];
  /** Syncs the popup width or height to that of the trigger element. */
  sync?: SlDropdown["sync"];
  /**  */
  popup?: SlDropdown["popup"];
  /**  */
  trigger?: SlDropdown["trigger"];
  /**  */
  panel?: SlDropdown["panel"];
  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other
components that use a dropdown internally. */
  containingElement?: SlDropdown["containingElement"];

  /** Emitted when the dropdown opens. */
  "onsl-show"?: (e: SlDropdownEvent) => void;
  /** Emitted after the dropdown opens and all animations are complete. */
  "onsl-after-show"?: (e: SlDropdownEvent) => void;
  /** Emitted when the dropdown closes. */
  "onsl-hide"?: (e: SlDropdownEvent) => void;
  /** Emitted after the dropdown closes and all animations are complete. */
  "onsl-after-hide"?: (e: SlDropdownEvent) => void;
};

export type SlDropdownSolidJsProps = {
  /** Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state. */
  "prop:open"?: SlDropdown["open"];
  /** The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
inside of the viewport. */
  "prop:placement"?: SlDropdown["placement"];
  /** Disables the dropdown so the panel will not open. */
  "prop:disabled"?: SlDropdown["disabled"];
  /** By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
dropdowns that allow for multiple interactions. */
  "bool:stay-open-on-select"?: SlDropdown["stayOpenOnSelect"];
  /** By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
dropdowns that allow for multiple interactions. */
  "prop:stayOpenOnSelect"?: SlDropdown["stayOpenOnSelect"];
  /** The distance in pixels from which to offset the panel away from its trigger. */
  "prop:distance"?: SlDropdown["distance"];
  /** The distance in pixels from which to offset the panel along its trigger. */
  "prop:skidding"?: SlDropdown["skidding"];
  /** Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  "prop:hoist"?: SlDropdown["hoist"];
  /** Syncs the popup width or height to that of the trigger element. */
  "prop:sync"?: SlDropdown["sync"];
  /**  */
  "prop:popup"?: SlDropdown["popup"];
  /**  */
  "prop:trigger"?: SlDropdown["trigger"];
  /**  */
  "prop:panel"?: SlDropdown["panel"];
  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other
components that use a dropdown internally. */
  "prop:containingElement"?: SlDropdown["containingElement"];
  /** Emitted when the dropdown opens. */
  "on:sl-show"?: (e: SlDropdownEvent) => void;
  /** Emitted after the dropdown opens and all animations are complete. */
  "on:sl-after-show"?: (e: SlDropdownEvent) => void;
  /** Emitted when the dropdown closes. */
  "on:sl-hide"?: (e: SlDropdownEvent) => void;
  /** Emitted after the dropdown closes and all animations are complete. */
  "on:sl-after-hide"?: (e: SlDropdownEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlFormatBytesProps = {
  /** The number to format in bytes. */
  value?: SlFormatBytes["value"];
  /** The type of unit to display. */
  unit?: SlFormatBytes["unit"];
  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
  display?: SlFormatBytes["display"];
};

export type SlFormatBytesSolidJsProps = {
  /** The number to format in bytes. */
  "prop:value"?: SlFormatBytes["value"];
  /** The type of unit to display. */
  "prop:unit"?: SlFormatBytes["unit"];
  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
  "prop:display"?: SlFormatBytes["display"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlFormatDateProps = {
  /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  date?: SlFormatDate["date"];
  /** The format for displaying the weekday. */
  weekday?: SlFormatDate["weekday"];
  /** The format for displaying the era. */
  era?: SlFormatDate["era"];
  /** The format for displaying the year. */
  year?: SlFormatDate["year"];
  /** The format for displaying the month. */
  month?: SlFormatDate["month"];
  /** The format for displaying the day. */
  day?: SlFormatDate["day"];
  /** The format for displaying the hour. */
  hour?: SlFormatDate["hour"];
  /** The format for displaying the minute. */
  minute?: SlFormatDate["minute"];
  /** The format for displaying the second. */
  second?: SlFormatDate["second"];
  /** The format for displaying the time. */
  "time-zone-name"?: SlFormatDate["timeZoneName"];
  /** The format for displaying the time. */
  timeZoneName?: SlFormatDate["timeZoneName"];
  /** The time zone to express the time in. */
  "time-zone"?: SlFormatDate["timeZone"];
  /** The time zone to express the time in. */
  timeZone?: SlFormatDate["timeZone"];
  /** The format for displaying the hour. */
  "hour-format"?: SlFormatDate["hourFormat"];
  /** The format for displaying the hour. */
  hourFormat?: SlFormatDate["hourFormat"];
};

export type SlFormatDateSolidJsProps = {
  /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  "prop:date"?: SlFormatDate["date"];
  /** The format for displaying the weekday. */
  "prop:weekday"?: SlFormatDate["weekday"];
  /** The format for displaying the era. */
  "prop:era"?: SlFormatDate["era"];
  /** The format for displaying the year. */
  "prop:year"?: SlFormatDate["year"];
  /** The format for displaying the month. */
  "prop:month"?: SlFormatDate["month"];
  /** The format for displaying the day. */
  "prop:day"?: SlFormatDate["day"];
  /** The format for displaying the hour. */
  "prop:hour"?: SlFormatDate["hour"];
  /** The format for displaying the minute. */
  "prop:minute"?: SlFormatDate["minute"];
  /** The format for displaying the second. */
  "prop:second"?: SlFormatDate["second"];
  /** The format for displaying the time. */
  "attr:time-zone-name"?: SlFormatDate["timeZoneName"];
  /** The format for displaying the time. */
  "prop:timeZoneName"?: SlFormatDate["timeZoneName"];
  /** The time zone to express the time in. */
  "attr:time-zone"?: SlFormatDate["timeZone"];
  /** The time zone to express the time in. */
  "prop:timeZone"?: SlFormatDate["timeZone"];
  /** The format for displaying the hour. */
  "attr:hour-format"?: SlFormatDate["hourFormat"];
  /** The format for displaying the hour. */
  "prop:hourFormat"?: SlFormatDate["hourFormat"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlFormatNumberProps = {
  /** The number to format. */
  value?: SlFormatNumber["value"];
  /** The formatting style to use. */
  type?: SlFormatNumber["type"];
  /** Turns off grouping separators. */
  "no-grouping"?: SlFormatNumber["noGrouping"];
  /** Turns off grouping separators. */
  noGrouping?: SlFormatNumber["noGrouping"];
  /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
  currency?: SlFormatNumber["currency"];
  /** How to display the currency. */
  "currency-display"?: SlFormatNumber["currencyDisplay"];
  /** How to display the currency. */
  currencyDisplay?: SlFormatNumber["currencyDisplay"];
  /** The minimum number of integer digits to use. Possible values are 1-21. */
  "minimum-integer-digits"?: SlFormatNumber["minimumIntegerDigits"];
  /** The minimum number of integer digits to use. Possible values are 1-21. */
  minimumIntegerDigits?: SlFormatNumber["minimumIntegerDigits"];
  /** The minimum number of fraction digits to use. Possible values are 0-20. */
  "minimum-fraction-digits"?: SlFormatNumber["minimumFractionDigits"];
  /** The minimum number of fraction digits to use. Possible values are 0-20. */
  minimumFractionDigits?: SlFormatNumber["minimumFractionDigits"];
  /** The maximum number of fraction digits to use. Possible values are 0-0. */
  "maximum-fraction-digits"?: SlFormatNumber["maximumFractionDigits"];
  /** The maximum number of fraction digits to use. Possible values are 0-0. */
  maximumFractionDigits?: SlFormatNumber["maximumFractionDigits"];
  /** The minimum number of significant digits to use. Possible values are 1-21. */
  "minimum-significant-digits"?: SlFormatNumber["minimumSignificantDigits"];
  /** The minimum number of significant digits to use. Possible values are 1-21. */
  minimumSignificantDigits?: SlFormatNumber["minimumSignificantDigits"];
  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  "maximum-significant-digits"?: SlFormatNumber["maximumSignificantDigits"];
  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  maximumSignificantDigits?: SlFormatNumber["maximumSignificantDigits"];
};

export type SlFormatNumberSolidJsProps = {
  /** The number to format. */
  "prop:value"?: SlFormatNumber["value"];
  /** The formatting style to use. */
  "prop:type"?: SlFormatNumber["type"];
  /** Turns off grouping separators. */
  "bool:no-grouping"?: SlFormatNumber["noGrouping"];
  /** Turns off grouping separators. */
  "prop:noGrouping"?: SlFormatNumber["noGrouping"];
  /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
  "prop:currency"?: SlFormatNumber["currency"];
  /** How to display the currency. */
  "attr:currency-display"?: SlFormatNumber["currencyDisplay"];
  /** How to display the currency. */
  "prop:currencyDisplay"?: SlFormatNumber["currencyDisplay"];
  /** The minimum number of integer digits to use. Possible values are 1-21. */
  "attr:minimum-integer-digits"?: SlFormatNumber["minimumIntegerDigits"];
  /** The minimum number of integer digits to use. Possible values are 1-21. */
  "prop:minimumIntegerDigits"?: SlFormatNumber["minimumIntegerDigits"];
  /** The minimum number of fraction digits to use. Possible values are 0-20. */
  "attr:minimum-fraction-digits"?: SlFormatNumber["minimumFractionDigits"];
  /** The minimum number of fraction digits to use. Possible values are 0-20. */
  "prop:minimumFractionDigits"?: SlFormatNumber["minimumFractionDigits"];
  /** The maximum number of fraction digits to use. Possible values are 0-0. */
  "attr:maximum-fraction-digits"?: SlFormatNumber["maximumFractionDigits"];
  /** The maximum number of fraction digits to use. Possible values are 0-0. */
  "prop:maximumFractionDigits"?: SlFormatNumber["maximumFractionDigits"];
  /** The minimum number of significant digits to use. Possible values are 1-21. */
  "attr:minimum-significant-digits"?: SlFormatNumber["minimumSignificantDigits"];
  /** The minimum number of significant digits to use. Possible values are 1-21. */
  "prop:minimumSignificantDigits"?: SlFormatNumber["minimumSignificantDigits"];
  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  "attr:maximum-significant-digits"?: SlFormatNumber["maximumSignificantDigits"];
  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  "prop:maximumSignificantDigits"?: SlFormatNumber["maximumSignificantDigits"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlIcon` component event */
export type SlIconEvent<E = Event> = TypedEvent<SlIcon, E>;

export type SlIconProps = {
  /** The name of the icon to draw. Available names depend on the icon library being used. */
  name?: SlIcon["name"];
  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks. */
  src?: SlIcon["src"];
  /** An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
ignored by assistive devices. */
  label?: SlIcon["label"];
  /** The name of a registered custom icon library. */
  library?: SlIcon["library"];

  /** Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit. */
  "onsl-load"?: (e: SlIconEvent) => void;
  /** Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit. */
  "onsl-error"?: (e: SlIconEvent) => void;
};

export type SlIconSolidJsProps = {
  /** The name of the icon to draw. Available names depend on the icon library being used. */
  "prop:name"?: SlIcon["name"];
  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks. */
  "prop:src"?: SlIcon["src"];
  /** An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
ignored by assistive devices. */
  "prop:label"?: SlIcon["label"];
  /** The name of a registered custom icon library. */
  "prop:library"?: SlIcon["library"];
  /** Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit. */
  "on:sl-load"?: (e: SlIconEvent) => void;
  /** Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit. */
  "on:sl-error"?: (e: SlIconEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlInclude` component event */
export type SlIncludeEvent<E = Event> = TypedEvent<SlInclude, E>;
/** `sl-error` event type */
export type SlIncludeSlErrorEvent = SlIncludeEvent<
  CustomEvent<{ status: number }>
>;

export type SlIncludeProps = {
  /** The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  src?: SlInclude["src"];
  /** The fetch mode to use. */
  mode?: SlInclude["mode"];
  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  "allow-scripts"?: SlInclude["allowScripts"];
  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  allowScripts?: SlInclude["allowScripts"];

  /** Emitted when the included file is loaded. */
  "onsl-load"?: (e: SlIncludeEvent) => void;
  /** Emitted when the included file fails to load due to an error. */
  "onsl-error"?: (e: SlIncludeSlErrorEvent) => void;
};

export type SlIncludeSolidJsProps = {
  /** The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  "prop:src"?: SlInclude["src"];
  /** The fetch mode to use. */
  "prop:mode"?: SlInclude["mode"];
  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  "bool:allow-scripts"?: SlInclude["allowScripts"];
  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  "prop:allowScripts"?: SlInclude["allowScripts"];
  /** Emitted when the included file is loaded. */
  "on:sl-load"?: (e: SlIncludeEvent) => void;
  /** Emitted when the included file fails to load due to an error. */
  "on:sl-error"?: (e: SlIncludeSlErrorEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlIconButton` component event */
export type SlIconButtonEvent<E = Event> = TypedEvent<SlIconButton, E>;

export type SlIconButtonProps = {
  /** The name of the icon to draw. Available names depend on the icon library being used. */
  name?: SlIconButton["name"];
  /** The name of a registered custom icon library. */
  library?: SlIconButton["library"];
  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks. */
  src?: SlIconButton["src"];
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  href?: SlIconButton["href"];
  /** Tells the browser where to open the link. Only used when `href` is set. */
  target?: SlIconButton["target"];
  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  download?: SlIconButton["download"];
  /** A description that gets read by assistive devices. For optimal accessibility, you should always include a label
that describes what the icon button does. */
  label?: SlIconButton["label"];
  /** Disables the button. */
  disabled?: SlIconButton["disabled"];
  /**  */
  button?: SlIconButton["button"];

  /** Emitted when the icon button loses focus. */
  "onsl-blur"?: (e: SlIconButtonEvent) => void;
  /** Emitted when the icon button gains focus. */
  "onsl-focus"?: (e: SlIconButtonEvent) => void;
};

export type SlIconButtonSolidJsProps = {
  /** The name of the icon to draw. Available names depend on the icon library being used. */
  "prop:name"?: SlIconButton["name"];
  /** The name of a registered custom icon library. */
  "prop:library"?: SlIconButton["library"];
  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks. */
  "prop:src"?: SlIconButton["src"];
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  "prop:href"?: SlIconButton["href"];
  /** Tells the browser where to open the link. Only used when `href` is set. */
  "prop:target"?: SlIconButton["target"];
  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  "prop:download"?: SlIconButton["download"];
  /** A description that gets read by assistive devices. For optimal accessibility, you should always include a label
that describes what the icon button does. */
  "prop:label"?: SlIconButton["label"];
  /** Disables the button. */
  "prop:disabled"?: SlIconButton["disabled"];
  /**  */
  "prop:button"?: SlIconButton["button"];
  /** Emitted when the icon button loses focus. */
  "on:sl-blur"?: (e: SlIconButtonEvent) => void;
  /** Emitted when the icon button gains focus. */
  "on:sl-focus"?: (e: SlIconButtonEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlImageComparer` component event */
export type SlImageComparerEvent<E = Event> = TypedEvent<SlImageComparer, E>;

export type SlImageComparerProps = {
  /** The position of the divider as a percentage. */
  position?: SlImageComparer["position"];
  /**  */
  base?: SlImageComparer["base"];
  /**  */
  handle?: SlImageComparer["handle"];

  /** Emitted when the position changes. */
  "onsl-change"?: (e: SlImageComparerEvent) => void;
};

export type SlImageComparerSolidJsProps = {
  /** The position of the divider as a percentage. */
  "prop:position"?: SlImageComparer["position"];
  /**  */
  "prop:base"?: SlImageComparer["base"];
  /**  */
  "prop:handle"?: SlImageComparer["handle"];
  /** Emitted when the position changes. */
  "on:sl-change"?: (e: SlImageComparerEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlInput` component event */
export type SlInputEvent<E = Event> = TypedEvent<SlInput, E>;

export type SlInputProps = {
  /**  */
  title?: SlInput["title"];
  /** The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
to `text`. */
  type?: SlInput["type"];
  /** The name of the input, submitted as a name/value pair with form data. */
  name?: SlInput["name"];
  /** The current value of the input, submitted as a name/value pair with form data. */
  value?: SlInput["value"];
  /** The input's size. */
  size?: SlInput["size"];
  /** Draws a filled input. */
  filled?: SlInput["filled"];
  /** Draws a pill-style input with rounded edges. */
  pill?: SlInput["pill"];
  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  label?: SlInput["label"];
  /** The input's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: SlInput["helpText"];
  /** The input's help text. If you need to display HTML, use the `help-text` slot instead. */
  helpText?: SlInput["helpText"];
  /** Adds a clear button when the input is not empty. */
  clearable?: SlInput["clearable"];
  /** Disables the input. */
  disabled?: SlInput["disabled"];
  /** Placeholder text to show as a hint when the input is empty. */
  placeholder?: SlInput["placeholder"];
  /** Makes the input readonly. */
  readonly?: SlInput["readonly"];
  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  "password-toggle"?: SlInput["passwordToggle"];
  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  passwordToggle?: SlInput["passwordToggle"];
  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  "password-visible"?: SlInput["passwordVisible"];
  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  passwordVisible?: SlInput["passwordVisible"];
  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  "no-spin-buttons"?: SlInput["noSpinButtons"];
  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  noSpinButtons?: SlInput["noSpinButtons"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: SlInput["form"];
  /** Makes the input a required field. */
  required?: SlInput["required"];
  /** A regular expression pattern to validate input against. */
  pattern?: SlInput["pattern"];
  /** The minimum length of input that will be considered valid. */
  minlength?: SlInput["minlength"];
  /** The maximum length of input that will be considered valid. */
  maxlength?: SlInput["maxlength"];
  /** The input's minimum value. Only applies to date and number input types. */
  min?: SlInput["min"];
  /** The input's maximum value. Only applies to date and number input types. */
  max?: SlInput["max"];
  /** Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
implied, allowing any numeric value. Only applies to date and number input types. */
  step?: SlInput["step"];
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  autocapitalize?: SlInput["autocapitalize"];
  /** Indicates whether the browser's autocorrect feature is on or off. */
  autocorrect?: SlInput["autocorrect"];
  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  autocomplete?: SlInput["autocomplete"];
  /** Indicates that the input should receive focus on page load. */
  autofocus?: SlInput["autofocus"];
  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  enterkeyhint?: SlInput["enterkeyhint"];
  /** Enables spell checking on the input. */
  spellcheck?: SlInput["spellcheck"];
  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices. */
  inputmode?: SlInput["inputmode"];
  /**  */
  input?: SlInput["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: SlInput["defaultValue"];
  /** Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error. */
  valueAsDate?: SlInput["valueAsDate"];
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  valueAsNumber?: SlInput["valueAsNumber"];

  /** Emitted when the control loses focus. */
  "onsl-blur"?: (e: SlInputEvent) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "onsl-change"?: (e: SlInputEvent) => void;
  /** Emitted when the clear button is activated. */
  "onsl-clear"?: (e: SlInputEvent) => void;
  /** Emitted when the control gains focus. */
  "onsl-focus"?: (e: SlInputEvent) => void;
  /** Emitted when the control receives input. */
  "onsl-input"?: (e: SlInputEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onsl-invalid"?: (e: SlInputEvent) => void;
};

export type SlInputSolidJsProps = {
  /**  */
  "prop:title"?: SlInput["title"];
  /** The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
to `text`. */
  "prop:type"?: SlInput["type"];
  /** The name of the input, submitted as a name/value pair with form data. */
  "prop:name"?: SlInput["name"];
  /** The current value of the input, submitted as a name/value pair with form data. */
  "prop:value"?: SlInput["value"];
  /** The input's size. */
  "prop:size"?: SlInput["size"];
  /** Draws a filled input. */
  "prop:filled"?: SlInput["filled"];
  /** Draws a pill-style input with rounded edges. */
  "prop:pill"?: SlInput["pill"];
  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: SlInput["label"];
  /** The input's help text. If you need to display HTML, use the `help-text` slot instead. */
  "attr:help-text"?: SlInput["helpText"];
  /** The input's help text. If you need to display HTML, use the `help-text` slot instead. */
  "prop:helpText"?: SlInput["helpText"];
  /** Adds a clear button when the input is not empty. */
  "prop:clearable"?: SlInput["clearable"];
  /** Disables the input. */
  "prop:disabled"?: SlInput["disabled"];
  /** Placeholder text to show as a hint when the input is empty. */
  "prop:placeholder"?: SlInput["placeholder"];
  /** Makes the input readonly. */
  "prop:readonly"?: SlInput["readonly"];
  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  "bool:password-toggle"?: SlInput["passwordToggle"];
  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  "prop:passwordToggle"?: SlInput["passwordToggle"];
  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  "bool:password-visible"?: SlInput["passwordVisible"];
  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  "prop:passwordVisible"?: SlInput["passwordVisible"];
  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  "bool:no-spin-buttons"?: SlInput["noSpinButtons"];
  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  "prop:noSpinButtons"?: SlInput["noSpinButtons"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  "prop:form"?: SlInput["form"];
  /** Makes the input a required field. */
  "prop:required"?: SlInput["required"];
  /** A regular expression pattern to validate input against. */
  "prop:pattern"?: SlInput["pattern"];
  /** The minimum length of input that will be considered valid. */
  "prop:minlength"?: SlInput["minlength"];
  /** The maximum length of input that will be considered valid. */
  "prop:maxlength"?: SlInput["maxlength"];
  /** The input's minimum value. Only applies to date and number input types. */
  "prop:min"?: SlInput["min"];
  /** The input's maximum value. Only applies to date and number input types. */
  "prop:max"?: SlInput["max"];
  /** Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
implied, allowing any numeric value. Only applies to date and number input types. */
  "prop:step"?: SlInput["step"];
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  "prop:autocapitalize"?: SlInput["autocapitalize"];
  /** Indicates whether the browser's autocorrect feature is on or off. */
  "prop:autocorrect"?: SlInput["autocorrect"];
  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  "prop:autocomplete"?: SlInput["autocomplete"];
  /** Indicates that the input should receive focus on page load. */
  "prop:autofocus"?: SlInput["autofocus"];
  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  "prop:enterkeyhint"?: SlInput["enterkeyhint"];
  /** Enables spell checking on the input. */
  "prop:spellcheck"?: SlInput["spellcheck"];
  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices. */
  "prop:inputmode"?: SlInput["inputmode"];
  /**  */
  "prop:input"?: SlInput["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultValue"?: SlInput["defaultValue"];
  /** Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error. */
  "prop:valueAsDate"?: SlInput["valueAsDate"];
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  "prop:valueAsNumber"?: SlInput["valueAsNumber"];
  /** Emitted when the control loses focus. */
  "on:sl-blur"?: (e: SlInputEvent) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "on:sl-change"?: (e: SlInputEvent) => void;
  /** Emitted when the clear button is activated. */
  "on:sl-clear"?: (e: SlInputEvent) => void;
  /** Emitted when the control gains focus. */
  "on:sl-focus"?: (e: SlInputEvent) => void;
  /** Emitted when the control receives input. */
  "on:sl-input"?: (e: SlInputEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:sl-invalid"?: (e: SlInputEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlMenu` component event */
export type SlMenuEvent<E = Event> = TypedEvent<SlMenu, E>;
/** `sl-select` event type */
export type SlMenuSlSelectEvent = SlMenuEvent<
  CustomEvent<{ item: SlMenuItem }>
>;

export type SlMenuProps = {
  /**  */
  defaultSlot?: SlMenu["defaultSlot"];

  /** Emitted when a menu item is selected. */
  "onsl-select"?: (e: SlMenuSlSelectEvent) => void;
};

export type SlMenuSolidJsProps = {
  /**  */
  "prop:defaultSlot"?: SlMenu["defaultSlot"];
  /** Emitted when a menu item is selected. */
  "on:sl-select"?: (e: SlMenuSlSelectEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlMenuLabelProps = {};

export type SlMenuLabelSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlMutationObserver` component event */
export type SlMutationObserverEvent<E = Event> = TypedEvent<
  SlMutationObserver,
  E
>;
/** `sl-mutation` event type */
export type SlMutationObserverSlMutationEvent = SlMutationObserverEvent<
  CustomEvent<{ mutationList: MutationRecord[] }>
>;

export type SlMutationObserverProps = {
  /** Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
`attr="class id title"`. To watch all attributes, use `*`. */
  attr?: SlMutationObserver["attr"];
  /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
  "attr-old-value"?: SlMutationObserver["attrOldValue"];
  /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
  attrOldValue?: SlMutationObserver["attrOldValue"];
  /** Watches for changes to the character data contained within the node. */
  "char-data"?: SlMutationObserver["charData"];
  /** Watches for changes to the character data contained within the node. */
  charData?: SlMutationObserver["charData"];
  /** Indicates whether or not the previous value of the node's text should be recorded. */
  "char-data-old-value"?: SlMutationObserver["charDataOldValue"];
  /** Indicates whether or not the previous value of the node's text should be recorded. */
  charDataOldValue?: SlMutationObserver["charDataOldValue"];
  /** Watches for the addition or removal of new child nodes. */
  "child-list"?: SlMutationObserver["childList"];
  /** Watches for the addition or removal of new child nodes. */
  childList?: SlMutationObserver["childList"];
  /** Disables the observer. */
  disabled?: SlMutationObserver["disabled"];

  /** Emitted when a mutation occurs. */
  "onsl-mutation"?: (e: SlMutationObserverSlMutationEvent) => void;
};

export type SlMutationObserverSolidJsProps = {
  /** Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
`attr="class id title"`. To watch all attributes, use `*`. */
  "prop:attr"?: SlMutationObserver["attr"];
  /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
  "bool:attr-old-value"?: SlMutationObserver["attrOldValue"];
  /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
  "prop:attrOldValue"?: SlMutationObserver["attrOldValue"];
  /** Watches for changes to the character data contained within the node. */
  "bool:char-data"?: SlMutationObserver["charData"];
  /** Watches for changes to the character data contained within the node. */
  "prop:charData"?: SlMutationObserver["charData"];
  /** Indicates whether or not the previous value of the node's text should be recorded. */
  "bool:char-data-old-value"?: SlMutationObserver["charDataOldValue"];
  /** Indicates whether or not the previous value of the node's text should be recorded. */
  "prop:charDataOldValue"?: SlMutationObserver["charDataOldValue"];
  /** Watches for the addition or removal of new child nodes. */
  "bool:child-list"?: SlMutationObserver["childList"];
  /** Watches for the addition or removal of new child nodes. */
  "prop:childList"?: SlMutationObserver["childList"];
  /** Disables the observer. */
  "prop:disabled"?: SlMutationObserver["disabled"];
  /** Emitted when a mutation occurs. */
  "on:sl-mutation"?: (e: SlMutationObserverSlMutationEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlMenuItemProps = {
  /** The type of menu item to render. To use `checked`, this value must be set to `checkbox`. */
  type?: SlMenuItem["type"];
  /** Draws the item in a checked state. */
  checked?: SlMenuItem["checked"];
  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  value?: SlMenuItem["value"];
  /** Draws the menu item in a loading state. */
  loading?: SlMenuItem["loading"];
  /** Draws the menu item in a disabled state, preventing selection. */
  disabled?: SlMenuItem["disabled"];
  /**  */
  defaultSlot?: SlMenuItem["defaultSlot"];
  /**  */
  menuItem?: SlMenuItem["menuItem"];
};

export type SlMenuItemSolidJsProps = {
  /** The type of menu item to render. To use `checked`, this value must be set to `checkbox`. */
  "prop:type"?: SlMenuItem["type"];
  /** Draws the item in a checked state. */
  "prop:checked"?: SlMenuItem["checked"];
  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  "prop:value"?: SlMenuItem["value"];
  /** Draws the menu item in a loading state. */
  "prop:loading"?: SlMenuItem["loading"];
  /** Draws the menu item in a disabled state, preventing selection. */
  "prop:disabled"?: SlMenuItem["disabled"];
  /**  */
  "prop:defaultSlot"?: SlMenuItem["defaultSlot"];
  /**  */
  "prop:menuItem"?: SlMenuItem["menuItem"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlOptionProps = {
  /** The option's value. When selected, the containing form control will receive this value. The value must be unique
from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
multiple values. */
  value?: SlOption["value"];
  /** Draws the option in a disabled state, preventing selection. */
  disabled?: SlOption["disabled"];
  /**  */
  defaultSlot?: SlOption["defaultSlot"];
  /**  */
  current?: SlOption["current"];
  /**  */
  selected?: SlOption["selected"];
  /**  */
  hasHover?: SlOption["hasHover"];
};

export type SlOptionSolidJsProps = {
  /** The option's value. When selected, the containing form control will receive this value. The value must be unique
from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
multiple values. */
  "prop:value"?: SlOption["value"];
  /** Draws the option in a disabled state, preventing selection. */
  "prop:disabled"?: SlOption["disabled"];
  /**  */
  "prop:defaultSlot"?: SlOption["defaultSlot"];
  /**  */
  "prop:current"?: SlOption["current"];
  /**  */
  "prop:selected"?: SlOption["selected"];
  /**  */
  "prop:hasHover"?: SlOption["hasHover"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlPopup` component event */
export type SlPopupEvent<E = Event> = TypedEvent<SlPopup, E>;

export type SlPopupProps = {
  /** The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
`anchor` slot instead. */
  anchor?: SlPopup["anchor"];
  /** Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
down and the popup will be hidden. */
  active?: SlPopup["active"];
  /** The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
panel inside of the viewport. */
  placement?: SlPopup["placement"];
  /** Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is
clipped, using a `fixed` position strategy can often workaround it. */
  strategy?: SlPopup["strategy"];
  /** The distance in pixels from which to offset the panel away from its anchor. */
  distance?: SlPopup["distance"];
  /** The distance in pixels from which to offset the panel along its anchor. */
  skidding?: SlPopup["skidding"];
  /** Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
`--arrow-color` custom properties. For additional customizations, you can also target the arrow using
`::part(arrow)` in your stylesheet. */
  arrow?: SlPopup["arrow"];
  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead. */
  "arrow-placement"?: SlPopup["arrowPlacement"];
  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead. */
  arrowPlacement?: SlPopup["arrowPlacement"];
  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners. */
  "arrow-padding"?: SlPopup["arrowPadding"];
  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners. */
  arrowPadding?: SlPopup["arrowPadding"];
  /** When set, placement of the popup will flip to the opposite site to keep it in view. You can use
`flipFallbackPlacements` to further configure how the fallback placement is determined. */
  flip?: SlPopup["flip"];
  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead. */
  "flip-fallback-placements"?: SlPopup["flipFallbackPlacements"];
  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead. */
  flipFallbackPlacements?: SlPopup["flipFallbackPlacements"];
  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred. */
  "flip-fallback-strategy"?: SlPopup["flipFallbackStrategy"];
  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred. */
  flipFallbackStrategy?: SlPopup["flipFallbackStrategy"];
  /** The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  flipBoundary?: SlPopup["flipBoundary"];
  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  "flip-padding"?: SlPopup["flipPadding"];
  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  flipPadding?: SlPopup["flipPadding"];
  /** Moves the popup along the axis to keep it in view when clipped. */
  shift?: SlPopup["shift"];
  /** The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  shiftBoundary?: SlPopup["shiftBoundary"];
  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  "shift-padding"?: SlPopup["shiftPadding"];
  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  shiftPadding?: SlPopup["shiftPadding"];
  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  "auto-size"?: SlPopup["autoSize"];
  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  autoSize?: SlPopup["autoSize"];
  /** Syncs the popup's width or height to that of the anchor element. */
  sync?: SlPopup["sync"];
  /** The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  autoSizeBoundary?: SlPopup["autoSizeBoundary"];
  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  "auto-size-padding"?: SlPopup["autoSizePadding"];
  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  autoSizePadding?: SlPopup["autoSizePadding"];
  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active. */
  "hover-bridge"?: SlPopup["hoverBridge"];
  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active. */
  hoverBridge?: SlPopup["hoverBridge"];
  /** A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. */
  popup?: SlPopup["popup"];

  /** Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it. */
  "onsl-reposition"?: (e: SlPopupEvent) => void;
};

export type SlPopupSolidJsProps = {
  /** The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
`anchor` slot instead. */
  "prop:anchor"?: SlPopup["anchor"];
  /** Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
down and the popup will be hidden. */
  "prop:active"?: SlPopup["active"];
  /** The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
panel inside of the viewport. */
  "prop:placement"?: SlPopup["placement"];
  /** Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is
clipped, using a `fixed` position strategy can often workaround it. */
  "prop:strategy"?: SlPopup["strategy"];
  /** The distance in pixels from which to offset the panel away from its anchor. */
  "prop:distance"?: SlPopup["distance"];
  /** The distance in pixels from which to offset the panel along its anchor. */
  "prop:skidding"?: SlPopup["skidding"];
  /** Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
`--arrow-color` custom properties. For additional customizations, you can also target the arrow using
`::part(arrow)` in your stylesheet. */
  "prop:arrow"?: SlPopup["arrow"];
  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead. */
  "attr:arrow-placement"?: SlPopup["arrowPlacement"];
  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead. */
  "prop:arrowPlacement"?: SlPopup["arrowPlacement"];
  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners. */
  "attr:arrow-padding"?: SlPopup["arrowPadding"];
  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners. */
  "prop:arrowPadding"?: SlPopup["arrowPadding"];
  /** When set, placement of the popup will flip to the opposite site to keep it in view. You can use
`flipFallbackPlacements` to further configure how the fallback placement is determined. */
  "prop:flip"?: SlPopup["flip"];
  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead. */
  "attr:flip-fallback-placements"?: SlPopup["flipFallbackPlacements"];
  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead. */
  "prop:flipFallbackPlacements"?: SlPopup["flipFallbackPlacements"];
  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred. */
  "attr:flip-fallback-strategy"?: SlPopup["flipFallbackStrategy"];
  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred. */
  "prop:flipFallbackStrategy"?: SlPopup["flipFallbackStrategy"];
  /** The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  "prop:flipBoundary"?: SlPopup["flipBoundary"];
  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  "attr:flip-padding"?: SlPopup["flipPadding"];
  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  "prop:flipPadding"?: SlPopup["flipPadding"];
  /** Moves the popup along the axis to keep it in view when clipped. */
  "prop:shift"?: SlPopup["shift"];
  /** The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  "prop:shiftBoundary"?: SlPopup["shiftBoundary"];
  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  "attr:shift-padding"?: SlPopup["shiftPadding"];
  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  "prop:shiftPadding"?: SlPopup["shiftPadding"];
  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  "attr:auto-size"?: SlPopup["autoSize"];
  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  "prop:autoSize"?: SlPopup["autoSize"];
  /** Syncs the popup's width or height to that of the anchor element. */
  "prop:sync"?: SlPopup["sync"];
  /** The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  "prop:autoSizeBoundary"?: SlPopup["autoSizeBoundary"];
  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  "attr:auto-size-padding"?: SlPopup["autoSizePadding"];
  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  "prop:autoSizePadding"?: SlPopup["autoSizePadding"];
  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active. */
  "bool:hover-bridge"?: SlPopup["hoverBridge"];
  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active. */
  "prop:hoverBridge"?: SlPopup["hoverBridge"];
  /** A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. */
  "prop:popup"?: SlPopup["popup"];
  /** Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it. */
  "on:sl-reposition"?: (e: SlPopupEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlProgressBarProps = {
  /** The current progress as a percentage, 0 to 100. */
  value?: SlProgressBar["value"];
  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  indeterminate?: SlProgressBar["indeterminate"];
  /** A custom label for assistive devices. */
  label?: SlProgressBar["label"];
};

export type SlProgressBarSolidJsProps = {
  /** The current progress as a percentage, 0 to 100. */
  "prop:value"?: SlProgressBar["value"];
  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  "prop:indeterminate"?: SlProgressBar["indeterminate"];
  /** A custom label for assistive devices. */
  "prop:label"?: SlProgressBar["label"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlProgressRingProps = {
  /** The current progress as a percentage, 0 to 100. */
  value?: SlProgressRing["value"];
  /** A custom label for assistive devices. */
  label?: SlProgressRing["label"];
  /**  */
  indicator?: SlProgressRing["indicator"];
  /**  */
  indicatorOffset?: SlProgressRing["indicatorOffset"];
};

export type SlProgressRingSolidJsProps = {
  /** The current progress as a percentage, 0 to 100. */
  "prop:value"?: SlProgressRing["value"];
  /** A custom label for assistive devices. */
  "prop:label"?: SlProgressRing["label"];
  /**  */
  "prop:indicator"?: SlProgressRing["indicator"];
  /**  */
  "prop:indicatorOffset"?: SlProgressRing["indicatorOffset"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlRadio` component event */
export type SlRadioEvent<E = Event> = TypedEvent<SlRadio, E>;

export type SlRadioProps = {
  /** The radio's value. When selected, the radio group will receive this value. */
  value?: SlRadio["value"];
  /** The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
attribute can typically be omitted. */
  size?: SlRadio["size"];
  /** Disables the radio. */
  disabled?: SlRadio["disabled"];
  /**  */
  checked?: SlRadio["checked"];

  /** Emitted when the control loses focus. */
  "onsl-blur"?: (e: SlRadioEvent) => void;
  /** Emitted when the control gains focus. */
  "onsl-focus"?: (e: SlRadioEvent) => void;
};

export type SlRadioSolidJsProps = {
  /** The radio's value. When selected, the radio group will receive this value. */
  "prop:value"?: SlRadio["value"];
  /** The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
attribute can typically be omitted. */
  "prop:size"?: SlRadio["size"];
  /** Disables the radio. */
  "prop:disabled"?: SlRadio["disabled"];
  /**  */
  "prop:checked"?: SlRadio["checked"];
  /** Emitted when the control loses focus. */
  "on:sl-blur"?: (e: SlRadioEvent) => void;
  /** Emitted when the control gains focus. */
  "on:sl-focus"?: (e: SlRadioEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlQrCodeProps = {
  /** The QR code's value. */
  value?: SlQrCode["value"];
  /** The label for assistive devices to announce. If unspecified, the value will be used instead. */
  label?: SlQrCode["label"];
  /** The size of the QR code, in pixels. */
  size?: SlQrCode["size"];
  /** The fill color. This can be any valid CSS color, but not a CSS custom property. */
  fill?: SlQrCode["fill"];
  /** The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property. */
  background?: SlQrCode["background"];
  /** The edge radius of each module. Must be between 0 and 0.5. */
  radius?: SlQrCode["radius"];
  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
  "error-correction"?: SlQrCode["errorCorrection"];
  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
  errorCorrection?: SlQrCode["errorCorrection"];
  /**  */
  canvas?: SlQrCode["canvas"];
};

export type SlQrCodeSolidJsProps = {
  /** The QR code's value. */
  "prop:value"?: SlQrCode["value"];
  /** The label for assistive devices to announce. If unspecified, the value will be used instead. */
  "prop:label"?: SlQrCode["label"];
  /** The size of the QR code, in pixels. */
  "prop:size"?: SlQrCode["size"];
  /** The fill color. This can be any valid CSS color, but not a CSS custom property. */
  "prop:fill"?: SlQrCode["fill"];
  /** The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property. */
  "prop:background"?: SlQrCode["background"];
  /** The edge radius of each module. Must be between 0 and 0.5. */
  "prop:radius"?: SlQrCode["radius"];
  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
  "attr:error-correction"?: SlQrCode["errorCorrection"];
  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
  "prop:errorCorrection"?: SlQrCode["errorCorrection"];
  /**  */
  "prop:canvas"?: SlQrCode["canvas"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlRadioButton` component event */
export type SlRadioButtonEvent<E = Event> = TypedEvent<SlRadioButton, E>;

export type SlRadioButtonProps = {
  /** The radio's value. When selected, the radio group will receive this value. */
  value?: SlRadioButton["value"];
  /** Disables the radio button. */
  disabled?: SlRadioButton["disabled"];
  /** The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so
this attribute can typically be omitted. */
  size?: SlRadioButton["size"];
  /** Draws a pill-style radio button with rounded edges. */
  pill?: SlRadioButton["pill"];
  /**  */
  input?: SlRadioButton["input"];
  /**  */
  hiddenInput?: SlRadioButton["hiddenInput"];

  /** Emitted when the button loses focus. */
  "onsl-blur"?: (e: SlRadioButtonEvent) => void;
  /** Emitted when the button gains focus. */
  "onsl-focus"?: (e: SlRadioButtonEvent) => void;
};

export type SlRadioButtonSolidJsProps = {
  /** The radio's value. When selected, the radio group will receive this value. */
  "prop:value"?: SlRadioButton["value"];
  /** Disables the radio button. */
  "prop:disabled"?: SlRadioButton["disabled"];
  /** The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so
this attribute can typically be omitted. */
  "prop:size"?: SlRadioButton["size"];
  /** Draws a pill-style radio button with rounded edges. */
  "prop:pill"?: SlRadioButton["pill"];
  /**  */
  "prop:input"?: SlRadioButton["input"];
  /**  */
  "prop:hiddenInput"?: SlRadioButton["hiddenInput"];
  /** Emitted when the button loses focus. */
  "on:sl-blur"?: (e: SlRadioButtonEvent) => void;
  /** Emitted when the button gains focus. */
  "on:sl-focus"?: (e: SlRadioButtonEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlRadioGroup` component event */
export type SlRadioGroupEvent<E = Event> = TypedEvent<SlRadioGroup, E>;

export type SlRadioGroupProps = {
  /** The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
instead. */
  label?: SlRadioGroup["label"];
  /** The radio groups's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: SlRadioGroup["helpText"];
  /** The radio groups's help text. If you need to display HTML, use the `help-text` slot instead. */
  helpText?: SlRadioGroup["helpText"];
  /** The name of the radio group, submitted as a name/value pair with form data. */
  name?: SlRadioGroup["name"];
  /** The current value of the radio group, submitted as a name/value pair with form data. */
  value?: SlRadioGroup["value"];
  /** The radio group's size. This size will be applied to all child radios and radio buttons. */
  size?: SlRadioGroup["size"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: SlRadioGroup["form"];
  /** Ensures a child radio is checked before allowing the containing form to submit. */
  required?: SlRadioGroup["required"];
  /**  */
  defaultSlot?: SlRadioGroup["defaultSlot"];
  /**  */
  validationInput?: SlRadioGroup["validationInput"];
  /**  */
  defaultValue?: SlRadioGroup["defaultValue"];

  /** Emitted when the radio group's selected value changes. */
  "onsl-change"?: (e: SlRadioGroupEvent) => void;
  /** Emitted when the radio group receives user input. */
  "onsl-input"?: (e: SlRadioGroupEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onsl-invalid"?: (e: SlRadioGroupEvent) => void;
};

export type SlRadioGroupSolidJsProps = {
  /** The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
instead. */
  "prop:label"?: SlRadioGroup["label"];
  /** The radio groups's help text. If you need to display HTML, use the `help-text` slot instead. */
  "attr:help-text"?: SlRadioGroup["helpText"];
  /** The radio groups's help text. If you need to display HTML, use the `help-text` slot instead. */
  "prop:helpText"?: SlRadioGroup["helpText"];
  /** The name of the radio group, submitted as a name/value pair with form data. */
  "prop:name"?: SlRadioGroup["name"];
  /** The current value of the radio group, submitted as a name/value pair with form data. */
  "prop:value"?: SlRadioGroup["value"];
  /** The radio group's size. This size will be applied to all child radios and radio buttons. */
  "prop:size"?: SlRadioGroup["size"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  "prop:form"?: SlRadioGroup["form"];
  /** Ensures a child radio is checked before allowing the containing form to submit. */
  "prop:required"?: SlRadioGroup["required"];
  /**  */
  "prop:defaultSlot"?: SlRadioGroup["defaultSlot"];
  /**  */
  "prop:validationInput"?: SlRadioGroup["validationInput"];
  /**  */
  "prop:defaultValue"?: SlRadioGroup["defaultValue"];
  /** Emitted when the radio group's selected value changes. */
  "on:sl-change"?: (e: SlRadioGroupEvent) => void;
  /** Emitted when the radio group receives user input. */
  "on:sl-input"?: (e: SlRadioGroupEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:sl-invalid"?: (e: SlRadioGroupEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlRange` component event */
export type SlRangeEvent<E = Event> = TypedEvent<SlRange, E>;

export type SlRangeProps = {
  /**  */
  title?: SlRange["title"];
  /** The name of the range, submitted as a name/value pair with form data. */
  name?: SlRange["name"];
  /** The current value of the range, submitted as a name/value pair with form data. */
  value?: SlRange["value"];
  /** The range's label. If you need to display HTML, use the `label` slot instead. */
  label?: SlRange["label"];
  /** The range's help text. If you need to display HTML, use the help-text slot instead. */
  "help-text"?: SlRange["helpText"];
  /** The range's help text. If you need to display HTML, use the help-text slot instead. */
  helpText?: SlRange["helpText"];
  /** Disables the range. */
  disabled?: SlRange["disabled"];
  /** The minimum acceptable value of the range. */
  min?: SlRange["min"];
  /** The maximum acceptable value of the range. */
  max?: SlRange["max"];
  /** The interval at which the range will increase and decrease. */
  step?: SlRange["step"];
  /** The preferred placement of the range's tooltip. */
  tooltip?: SlRange["tooltip"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: SlRange["form"];
  /**  */
  input?: SlRange["input"];
  /**  */
  output?: SlRange["output"];
  /** A function used to format the tooltip's value. The range's value is passed as the first and only argument. The
function should return a string to display in the tooltip. */
  tooltipFormatter?: SlRange["tooltipFormatter"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: SlRange["defaultValue"];

  /** Emitted when the control loses focus. */
  "onsl-blur"?: (e: SlRangeEvent) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "onsl-change"?: (e: SlRangeEvent) => void;
  /** Emitted when the control gains focus. */
  "onsl-focus"?: (e: SlRangeEvent) => void;
  /** Emitted when the control receives input. */
  "onsl-input"?: (e: SlRangeEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onsl-invalid"?: (e: SlRangeEvent) => void;
};

export type SlRangeSolidJsProps = {
  /**  */
  "prop:title"?: SlRange["title"];
  /** The name of the range, submitted as a name/value pair with form data. */
  "prop:name"?: SlRange["name"];
  /** The current value of the range, submitted as a name/value pair with form data. */
  "prop:value"?: SlRange["value"];
  /** The range's label. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: SlRange["label"];
  /** The range's help text. If you need to display HTML, use the help-text slot instead. */
  "attr:help-text"?: SlRange["helpText"];
  /** The range's help text. If you need to display HTML, use the help-text slot instead. */
  "prop:helpText"?: SlRange["helpText"];
  /** Disables the range. */
  "prop:disabled"?: SlRange["disabled"];
  /** The minimum acceptable value of the range. */
  "prop:min"?: SlRange["min"];
  /** The maximum acceptable value of the range. */
  "prop:max"?: SlRange["max"];
  /** The interval at which the range will increase and decrease. */
  "prop:step"?: SlRange["step"];
  /** The preferred placement of the range's tooltip. */
  "prop:tooltip"?: SlRange["tooltip"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  "prop:form"?: SlRange["form"];
  /**  */
  "prop:input"?: SlRange["input"];
  /**  */
  "prop:output"?: SlRange["output"];
  /** A function used to format the tooltip's value. The range's value is passed as the first and only argument. The
function should return a string to display in the tooltip. */
  "prop:tooltipFormatter"?: SlRange["tooltipFormatter"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultValue"?: SlRange["defaultValue"];
  /** Emitted when the control loses focus. */
  "on:sl-blur"?: (e: SlRangeEvent) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "on:sl-change"?: (e: SlRangeEvent) => void;
  /** Emitted when the control gains focus. */
  "on:sl-focus"?: (e: SlRangeEvent) => void;
  /** Emitted when the control receives input. */
  "on:sl-input"?: (e: SlRangeEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:sl-invalid"?: (e: SlRangeEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlRating` component event */
export type SlRatingEvent<E = Event> = TypedEvent<SlRating, E>;
/** `sl-hover` event type */
export type SlRatingSlHoverEvent = SlRatingEvent<
  CustomEvent<{ phase: "start" | "move" | "end"; value: number }>
>;

export type SlRatingProps = {
  /** A label that describes the rating to assistive devices. */
  label?: SlRating["label"];
  /** The current rating. */
  value?: SlRating["value"];
  /** The highest rating to show. */
  max?: SlRating["max"];
  /** The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
attribute to `0.5`. */
  precision?: SlRating["precision"];
  /** Makes the rating readonly. */
  readonly?: SlRating["readonly"];
  /** Disables the rating. */
  disabled?: SlRating["disabled"];
  /** A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
well with `<sl-icon>` elements. */
  getSymbol?: SlRating["getSymbol"];
  /**  */
  rating?: SlRating["rating"];

  /** Emitted when the rating's value changes. */
  "onsl-change"?: (e: SlRatingEvent) => void;
  /** Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value. */
  "onsl-hover"?: (e: SlRatingSlHoverEvent) => void;
};

export type SlRatingSolidJsProps = {
  /** A label that describes the rating to assistive devices. */
  "prop:label"?: SlRating["label"];
  /** The current rating. */
  "prop:value"?: SlRating["value"];
  /** The highest rating to show. */
  "prop:max"?: SlRating["max"];
  /** The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
attribute to `0.5`. */
  "prop:precision"?: SlRating["precision"];
  /** Makes the rating readonly. */
  "prop:readonly"?: SlRating["readonly"];
  /** Disables the rating. */
  "prop:disabled"?: SlRating["disabled"];
  /** A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
well with `<sl-icon>` elements. */
  "prop:getSymbol"?: SlRating["getSymbol"];
  /**  */
  "prop:rating"?: SlRating["rating"];
  /** Emitted when the rating's value changes. */
  "on:sl-change"?: (e: SlRatingEvent) => void;
  /** Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value. */
  "on:sl-hover"?: (e: SlRatingSlHoverEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlRelativeTimeProps = {
  /** The date from which to calculate time from. If not set, the current date and time will be used. When passing a
string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  date?: SlRelativeTime["date"];
  /** The formatting style to use. */
  format?: SlRelativeTime["format"];
  /** When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
"1 day ago" and "in 1 day" will be shown. */
  numeric?: SlRelativeTime["numeric"];
  /** Keep the displayed value up to date as time passes. */
  sync?: SlRelativeTime["sync"];
};

export type SlRelativeTimeSolidJsProps = {
  /** The date from which to calculate time from. If not set, the current date and time will be used. When passing a
string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  "prop:date"?: SlRelativeTime["date"];
  /** The formatting style to use. */
  "prop:format"?: SlRelativeTime["format"];
  /** When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
"1 day ago" and "in 1 day" will be shown. */
  "prop:numeric"?: SlRelativeTime["numeric"];
  /** Keep the displayed value up to date as time passes. */
  "prop:sync"?: SlRelativeTime["sync"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlResizeObserver` component event */
export type SlResizeObserverEvent<E = Event> = TypedEvent<SlResizeObserver, E>;
/** `sl-resize` event type */
export type SlResizeObserverSlResizeEvent = SlResizeObserverEvent<
  CustomEvent<{ entries: ResizeObserverEntry[] }>
>;

export type SlResizeObserverProps = {
  /** Disables the observer. */
  disabled?: SlResizeObserver["disabled"];

  /** Emitted when the element is resized. */
  "onsl-resize"?: (e: SlResizeObserverSlResizeEvent) => void;
};

export type SlResizeObserverSolidJsProps = {
  /** Disables the observer. */
  "prop:disabled"?: SlResizeObserver["disabled"];
  /** Emitted when the element is resized. */
  "on:sl-resize"?: (e: SlResizeObserverSlResizeEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlSkeletonProps = {
  /** Determines which effect the skeleton will use. */
  effect?: SlSkeleton["effect"];
};

export type SlSkeletonSolidJsProps = {
  /** Determines which effect the skeleton will use. */
  "prop:effect"?: SlSkeleton["effect"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlSelect` component event */
export type SlSelectEvent<E = Event> = TypedEvent<SlSelect, E>;

export type SlSelectProps = {
  /** The name of the select, submitted as a name/value pair with form data. */
  name?: SlSelect["name"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  value?: SlSelect["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: SlSelect["defaultValue"];
  /** The select's size. */
  size?: SlSelect["size"];
  /** Placeholder text to show as a hint when the select is empty. */
  placeholder?: SlSelect["placeholder"];
  /** Allows more than one option to be selected. */
  multiple?: SlSelect["multiple"];
  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  "max-options-visible"?: SlSelect["maxOptionsVisible"];
  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  maxOptionsVisible?: SlSelect["maxOptionsVisible"];
  /** Disables the select control. */
  disabled?: SlSelect["disabled"];
  /** Adds a clear button when the select is not empty. */
  clearable?: SlSelect["clearable"];
  /** Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
use the `show()` and `hide()` methods and this attribute will reflect the select's open state. */
  open?: SlSelect["open"];
  /** Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  hoist?: SlSelect["hoist"];
  /** Draws a filled select. */
  filled?: SlSelect["filled"];
  /** Draws a pill-style select with rounded edges. */
  pill?: SlSelect["pill"];
  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  label?: SlSelect["label"];
  /** The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
inside of the viewport. */
  placement?: SlSelect["placement"];
  /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: SlSelect["helpText"];
  /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
  helpText?: SlSelect["helpText"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: SlSelect["form"];
  /** The select's required attribute. */
  required?: SlSelect["required"];
  /** A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
the specified value. */
  getTag?: SlSelect["getTag"];
  /**  */
  popup?: SlSelect["popup"];
  /**  */
  combobox?: SlSelect["combobox"];
  /**  */
  displayInput?: SlSelect["displayInput"];
  /**  */
  valueInput?: SlSelect["valueInput"];
  /**  */
  listbox?: SlSelect["listbox"];
  /**  */
  displayLabel?: SlSelect["displayLabel"];
  /**  */
  currentOption?: SlSelect["currentOption"];
  /**  */
  selectedOptions?: SlSelect["selectedOptions"];

  /** Emitted when the control's value changes. */
  "onsl-change"?: (e: SlSelectEvent) => void;
  /** Emitted when the control's value is cleared. */
  "onsl-clear"?: (e: SlSelectEvent) => void;
  /** Emitted when the control receives input. */
  "onsl-input"?: (e: SlSelectEvent) => void;
  /** Emitted when the control gains focus. */
  "onsl-focus"?: (e: SlSelectEvent) => void;
  /** Emitted when the control loses focus. */
  "onsl-blur"?: (e: SlSelectEvent) => void;
  /** Emitted when the select's menu opens. */
  "onsl-show"?: (e: SlSelectEvent) => void;
  /** Emitted after the select's menu opens and all animations are complete. */
  "onsl-after-show"?: (e: SlSelectEvent) => void;
  /** Emitted when the select's menu closes. */
  "onsl-hide"?: (e: SlSelectEvent) => void;
  /** Emitted after the select's menu closes and all animations are complete. */
  "onsl-after-hide"?: (e: SlSelectEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onsl-invalid"?: (e: SlSelectEvent) => void;
};

export type SlSelectSolidJsProps = {
  /** The name of the select, submitted as a name/value pair with form data. */
  "prop:name"?: SlSelect["name"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "attr:value"?: SlSelect["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultValue"?: SlSelect["defaultValue"];
  /** The select's size. */
  "prop:size"?: SlSelect["size"];
  /** Placeholder text to show as a hint when the select is empty. */
  "prop:placeholder"?: SlSelect["placeholder"];
  /** Allows more than one option to be selected. */
  "prop:multiple"?: SlSelect["multiple"];
  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  "attr:max-options-visible"?: SlSelect["maxOptionsVisible"];
  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  "prop:maxOptionsVisible"?: SlSelect["maxOptionsVisible"];
  /** Disables the select control. */
  "prop:disabled"?: SlSelect["disabled"];
  /** Adds a clear button when the select is not empty. */
  "prop:clearable"?: SlSelect["clearable"];
  /** Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
use the `show()` and `hide()` methods and this attribute will reflect the select's open state. */
  "prop:open"?: SlSelect["open"];
  /** Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  "prop:hoist"?: SlSelect["hoist"];
  /** Draws a filled select. */
  "prop:filled"?: SlSelect["filled"];
  /** Draws a pill-style select with rounded edges. */
  "prop:pill"?: SlSelect["pill"];
  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: SlSelect["label"];
  /** The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
inside of the viewport. */
  "prop:placement"?: SlSelect["placement"];
  /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
  "attr:help-text"?: SlSelect["helpText"];
  /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
  "prop:helpText"?: SlSelect["helpText"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  "prop:form"?: SlSelect["form"];
  /** The select's required attribute. */
  "prop:required"?: SlSelect["required"];
  /** A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
the specified value. */
  "prop:getTag"?: SlSelect["getTag"];
  /**  */
  "prop:popup"?: SlSelect["popup"];
  /**  */
  "prop:combobox"?: SlSelect["combobox"];
  /**  */
  "prop:displayInput"?: SlSelect["displayInput"];
  /**  */
  "prop:valueInput"?: SlSelect["valueInput"];
  /**  */
  "prop:listbox"?: SlSelect["listbox"];
  /**  */
  "prop:displayLabel"?: SlSelect["displayLabel"];
  /**  */
  "prop:currentOption"?: SlSelect["currentOption"];
  /**  */
  "prop:selectedOptions"?: SlSelect["selectedOptions"];
  /** Emitted when the control's value changes. */
  "on:sl-change"?: (e: SlSelectEvent) => void;
  /** Emitted when the control's value is cleared. */
  "on:sl-clear"?: (e: SlSelectEvent) => void;
  /** Emitted when the control receives input. */
  "on:sl-input"?: (e: SlSelectEvent) => void;
  /** Emitted when the control gains focus. */
  "on:sl-focus"?: (e: SlSelectEvent) => void;
  /** Emitted when the control loses focus. */
  "on:sl-blur"?: (e: SlSelectEvent) => void;
  /** Emitted when the select's menu opens. */
  "on:sl-show"?: (e: SlSelectEvent) => void;
  /** Emitted after the select's menu opens and all animations are complete. */
  "on:sl-after-show"?: (e: SlSelectEvent) => void;
  /** Emitted when the select's menu closes. */
  "on:sl-hide"?: (e: SlSelectEvent) => void;
  /** Emitted after the select's menu closes and all animations are complete. */
  "on:sl-after-hide"?: (e: SlSelectEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:sl-invalid"?: (e: SlSelectEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlSpinnerProps = {};

export type SlSpinnerSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlSwitch` component event */
export type SlSwitchEvent<E = Event> = TypedEvent<SlSwitch, E>;

export type SlSwitchProps = {
  /**  */
  title?: SlSwitch["title"];
  /** The name of the switch, submitted as a name/value pair with form data. */
  name?: SlSwitch["name"];
  /** The current value of the switch, submitted as a name/value pair with form data. */
  value?: SlSwitch["value"];
  /** The switch's size. */
  size?: SlSwitch["size"];
  /** Disables the switch. */
  disabled?: SlSwitch["disabled"];
  /** Draws the switch in a checked state. */
  checked?: SlSwitch["checked"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: SlSwitch["form"];
  /** Makes the switch a required field. */
  required?: SlSwitch["required"];
  /** The switch's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: SlSwitch["helpText"];
  /** The switch's help text. If you need to display HTML, use the `help-text` slot instead. */
  helpText?: SlSwitch["helpText"];
  /**  */
  input?: SlSwitch["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultChecked?: SlSwitch["defaultChecked"];

  /** Emitted when the control loses focus. */
  "onsl-blur"?: (e: SlSwitchEvent) => void;
  /** Emitted when the control's checked state changes. */
  "onsl-change"?: (e: SlSwitchEvent) => void;
  /** Emitted when the control receives input. */
  "onsl-input"?: (e: SlSwitchEvent) => void;
  /** Emitted when the control gains focus. */
  "onsl-focus"?: (e: SlSwitchEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onsl-invalid"?: (e: SlSwitchEvent) => void;
};

export type SlSwitchSolidJsProps = {
  /**  */
  "prop:title"?: SlSwitch["title"];
  /** The name of the switch, submitted as a name/value pair with form data. */
  "prop:name"?: SlSwitch["name"];
  /** The current value of the switch, submitted as a name/value pair with form data. */
  "prop:value"?: SlSwitch["value"];
  /** The switch's size. */
  "prop:size"?: SlSwitch["size"];
  /** Disables the switch. */
  "prop:disabled"?: SlSwitch["disabled"];
  /** Draws the switch in a checked state. */
  "prop:checked"?: SlSwitch["checked"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  "prop:form"?: SlSwitch["form"];
  /** Makes the switch a required field. */
  "prop:required"?: SlSwitch["required"];
  /** The switch's help text. If you need to display HTML, use the `help-text` slot instead. */
  "attr:help-text"?: SlSwitch["helpText"];
  /** The switch's help text. If you need to display HTML, use the `help-text` slot instead. */
  "prop:helpText"?: SlSwitch["helpText"];
  /**  */
  "prop:input"?: SlSwitch["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultChecked"?: SlSwitch["defaultChecked"];
  /** Emitted when the control loses focus. */
  "on:sl-blur"?: (e: SlSwitchEvent) => void;
  /** Emitted when the control's checked state changes. */
  "on:sl-change"?: (e: SlSwitchEvent) => void;
  /** Emitted when the control receives input. */
  "on:sl-input"?: (e: SlSwitchEvent) => void;
  /** Emitted when the control gains focus. */
  "on:sl-focus"?: (e: SlSwitchEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:sl-invalid"?: (e: SlSwitchEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlSplitPanel` component event */
export type SlSplitPanelEvent<E = Event> = TypedEvent<SlSplitPanel, E>;

export type SlSplitPanelProps = {
  /** The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
container's initial size. */
  position?: SlSplitPanel["position"];
  /** The current position of the divider from the primary panel's edge in pixels. */
  "position-in-pixels"?: SlSplitPanel["positionInPixels"];
  /** The current position of the divider from the primary panel's edge in pixels. */
  positionInPixels?: SlSplitPanel["positionInPixels"];
  /** Draws the split panel in a vertical orientation with the start and end panels stacked. */
  vertical?: SlSplitPanel["vertical"];
  /** Disables resizing. Note that the position may still change as a result of resizing the host element. */
  disabled?: SlSplitPanel["disabled"];
  /** If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
host element is resized. */
  primary?: SlSplitPanel["primary"];
  /** Either one or more space-separated values at which the divider should snap, in pixels, percentages, or repeat expressions e.g. `'100px 50% 500px' or `repeat(50%) 10px`,
or a function which takes in a `SnapFunctionParams`, and returns a position to snap to, e.g. `({ pos }) => Math.round(pos / 8) * 8`. */
  snap?: SlSplitPanel["snap"];
  /** How close the divider must be to a snap point until snapping occurs. */
  "snap-threshold"?: SlSplitPanel["snapThreshold"];
  /** How close the divider must be to a snap point until snapping occurs. */
  snapThreshold?: SlSplitPanel["snapThreshold"];
  /**  */
  divider?: SlSplitPanel["divider"];

  /** Emitted when the divider's position changes. */
  "onsl-reposition"?: (e: SlSplitPanelEvent) => void;
};

export type SlSplitPanelSolidJsProps = {
  /** The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
container's initial size. */
  "prop:position"?: SlSplitPanel["position"];
  /** The current position of the divider from the primary panel's edge in pixels. */
  "attr:position-in-pixels"?: SlSplitPanel["positionInPixels"];
  /** The current position of the divider from the primary panel's edge in pixels. */
  "prop:positionInPixels"?: SlSplitPanel["positionInPixels"];
  /** Draws the split panel in a vertical orientation with the start and end panels stacked. */
  "prop:vertical"?: SlSplitPanel["vertical"];
  /** Disables resizing. Note that the position may still change as a result of resizing the host element. */
  "prop:disabled"?: SlSplitPanel["disabled"];
  /** If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
host element is resized. */
  "prop:primary"?: SlSplitPanel["primary"];
  /** Either one or more space-separated values at which the divider should snap, in pixels, percentages, or repeat expressions e.g. `'100px 50% 500px' or `repeat(50%) 10px`,
or a function which takes in a `SnapFunctionParams`, and returns a position to snap to, e.g. `({ pos }) => Math.round(pos / 8) * 8`. */
  "prop:snap"?: SlSplitPanel["snap"];
  /** How close the divider must be to a snap point until snapping occurs. */
  "attr:snap-threshold"?: SlSplitPanel["snapThreshold"];
  /** How close the divider must be to a snap point until snapping occurs. */
  "prop:snapThreshold"?: SlSplitPanel["snapThreshold"];
  /**  */
  "prop:divider"?: SlSplitPanel["divider"];
  /** Emitted when the divider's position changes. */
  "on:sl-reposition"?: (e: SlSplitPanelEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlTabGroup` component event */
export type SlTabGroupEvent<E = Event> = TypedEvent<SlTabGroup, E>;
/** `sl-tab-show` event type */
export type SlTabGroupSlTabShowEvent = SlTabGroupEvent<
  CustomEvent<{ name: String }>
>;
/** `sl-tab-hide` event type */
export type SlTabGroupSlTabHideEvent = SlTabGroupEvent<
  CustomEvent<{ name: String }>
>;

export type SlTabGroupProps = {
  /** The placement of the tabs. */
  placement?: SlTabGroup["placement"];
  /** When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
manual, the tab will receive focus but will not show until the user presses spacebar or enter. */
  activation?: SlTabGroup["activation"];
  /** Disables the scroll arrows that appear when tabs overflow. */
  "no-scroll-controls"?: SlTabGroup["noScrollControls"];
  /** Disables the scroll arrows that appear when tabs overflow. */
  noScrollControls?: SlTabGroup["noScrollControls"];
  /** Prevent scroll buttons from being hidden when inactive. */
  "fixed-scroll-controls"?: SlTabGroup["fixedScrollControls"];
  /** Prevent scroll buttons from being hidden when inactive. */
  fixedScrollControls?: SlTabGroup["fixedScrollControls"];
  /**  */
  tabGroup?: SlTabGroup["tabGroup"];
  /**  */
  body?: SlTabGroup["body"];
  /**  */
  nav?: SlTabGroup["nav"];
  /**  */
  indicator?: SlTabGroup["indicator"];

  /** Emitted when a tab is shown. */
  "onsl-tab-show"?: (e: SlTabGroupSlTabShowEvent) => void;
  /** Emitted when a tab is hidden. */
  "onsl-tab-hide"?: (e: SlTabGroupSlTabHideEvent) => void;
};

export type SlTabGroupSolidJsProps = {
  /** The placement of the tabs. */
  "prop:placement"?: SlTabGroup["placement"];
  /** When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
manual, the tab will receive focus but will not show until the user presses spacebar or enter. */
  "prop:activation"?: SlTabGroup["activation"];
  /** Disables the scroll arrows that appear when tabs overflow. */
  "bool:no-scroll-controls"?: SlTabGroup["noScrollControls"];
  /** Disables the scroll arrows that appear when tabs overflow. */
  "prop:noScrollControls"?: SlTabGroup["noScrollControls"];
  /** Prevent scroll buttons from being hidden when inactive. */
  "bool:fixed-scroll-controls"?: SlTabGroup["fixedScrollControls"];
  /** Prevent scroll buttons from being hidden when inactive. */
  "prop:fixedScrollControls"?: SlTabGroup["fixedScrollControls"];
  /**  */
  "prop:tabGroup"?: SlTabGroup["tabGroup"];
  /**  */
  "prop:body"?: SlTabGroup["body"];
  /**  */
  "prop:nav"?: SlTabGroup["nav"];
  /**  */
  "prop:indicator"?: SlTabGroup["indicator"];
  /** Emitted when a tab is shown. */
  "on:sl-tab-show"?: (e: SlTabGroupSlTabShowEvent) => void;
  /** Emitted when a tab is hidden. */
  "on:sl-tab-hide"?: (e: SlTabGroupSlTabHideEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlTab` component event */
export type SlTabEvent<E = Event> = TypedEvent<SlTab, E>;

export type SlTabProps = {
  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  panel?: SlTab["panel"];
  /** Draws the tab in an active state. */
  active?: SlTab["active"];
  /** Makes the tab closable and shows a close button. */
  closable?: SlTab["closable"];
  /** Disables the tab and prevents selection. */
  disabled?: SlTab["disabled"];
  /**  */
  tab?: SlTab["tab"];

  /** Emitted when the tab is closable and the close button is activated. */
  "onsl-close"?: (e: SlTabEvent) => void;
};

export type SlTabSolidJsProps = {
  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  "prop:panel"?: SlTab["panel"];
  /** Draws the tab in an active state. */
  "prop:active"?: SlTab["active"];
  /** Makes the tab closable and shows a close button. */
  "prop:closable"?: SlTab["closable"];
  /** Disables the tab and prevents selection. */
  "prop:disabled"?: SlTab["disabled"];
  /**  */
  "prop:tab"?: SlTab["tab"];
  /** Emitted when the tab is closable and the close button is activated. */
  "on:sl-close"?: (e: SlTabEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlTabPanelProps = {
  /** The tab panel's name. */
  name?: SlTabPanel["name"];
  /** When true, the tab panel will be shown. */
  active?: SlTabPanel["active"];
};

export type SlTabPanelSolidJsProps = {
  /** The tab panel's name. */
  "prop:name"?: SlTabPanel["name"];
  /** When true, the tab panel will be shown. */
  "prop:active"?: SlTabPanel["active"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlTextarea` component event */
export type SlTextareaEvent<E = Event> = TypedEvent<SlTextarea, E>;

export type SlTextareaProps = {
  /**  */
  title?: SlTextarea["title"];
  /** The name of the textarea, submitted as a name/value pair with form data. */
  name?: SlTextarea["name"];
  /** The current value of the textarea, submitted as a name/value pair with form data. */
  value?: SlTextarea["value"];
  /** The textarea's size. */
  size?: SlTextarea["size"];
  /** Draws a filled textarea. */
  filled?: SlTextarea["filled"];
  /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
  label?: SlTextarea["label"];
  /** The textarea's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: SlTextarea["helpText"];
  /** The textarea's help text. If you need to display HTML, use the `help-text` slot instead. */
  helpText?: SlTextarea["helpText"];
  /** Placeholder text to show as a hint when the input is empty. */
  placeholder?: SlTextarea["placeholder"];
  /** The number of rows to display by default. */
  rows?: SlTextarea["rows"];
  /** Controls how the textarea can be resized. */
  resize?: SlTextarea["resize"];
  /** Disables the textarea. */
  disabled?: SlTextarea["disabled"];
  /** Makes the textarea readonly. */
  readonly?: SlTextarea["readonly"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: SlTextarea["form"];
  /** Makes the textarea a required field. */
  required?: SlTextarea["required"];
  /** The minimum length of input that will be considered valid. */
  minlength?: SlTextarea["minlength"];
  /** The maximum length of input that will be considered valid. */
  maxlength?: SlTextarea["maxlength"];
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  autocapitalize?: SlTextarea["autocapitalize"];
  /** Indicates whether the browser's autocorrect feature is on or off. */
  autocorrect?: SlTextarea["autocorrect"];
  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  autocomplete?: SlTextarea["autocomplete"];
  /** Indicates that the input should receive focus on page load. */
  autofocus?: SlTextarea["autofocus"];
  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  enterkeyhint?: SlTextarea["enterkeyhint"];
  /** Enables spell checking on the textarea. */
  spellcheck?: SlTextarea["spellcheck"];
  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices. */
  inputmode?: SlTextarea["inputmode"];
  /**  */
  input?: SlTextarea["input"];
  /**  */
  sizeAdjuster?: SlTextarea["sizeAdjuster"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: SlTextarea["defaultValue"];

  /** Emitted when the control loses focus. */
  "onsl-blur"?: (e: SlTextareaEvent) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "onsl-change"?: (e: SlTextareaEvent) => void;
  /** Emitted when the control gains focus. */
  "onsl-focus"?: (e: SlTextareaEvent) => void;
  /** Emitted when the control receives input. */
  "onsl-input"?: (e: SlTextareaEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onsl-invalid"?: (e: SlTextareaEvent) => void;
};

export type SlTextareaSolidJsProps = {
  /**  */
  "prop:title"?: SlTextarea["title"];
  /** The name of the textarea, submitted as a name/value pair with form data. */
  "prop:name"?: SlTextarea["name"];
  /** The current value of the textarea, submitted as a name/value pair with form data. */
  "prop:value"?: SlTextarea["value"];
  /** The textarea's size. */
  "prop:size"?: SlTextarea["size"];
  /** Draws a filled textarea. */
  "prop:filled"?: SlTextarea["filled"];
  /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: SlTextarea["label"];
  /** The textarea's help text. If you need to display HTML, use the `help-text` slot instead. */
  "attr:help-text"?: SlTextarea["helpText"];
  /** The textarea's help text. If you need to display HTML, use the `help-text` slot instead. */
  "prop:helpText"?: SlTextarea["helpText"];
  /** Placeholder text to show as a hint when the input is empty. */
  "prop:placeholder"?: SlTextarea["placeholder"];
  /** The number of rows to display by default. */
  "prop:rows"?: SlTextarea["rows"];
  /** Controls how the textarea can be resized. */
  "prop:resize"?: SlTextarea["resize"];
  /** Disables the textarea. */
  "prop:disabled"?: SlTextarea["disabled"];
  /** Makes the textarea readonly. */
  "prop:readonly"?: SlTextarea["readonly"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  "prop:form"?: SlTextarea["form"];
  /** Makes the textarea a required field. */
  "prop:required"?: SlTextarea["required"];
  /** The minimum length of input that will be considered valid. */
  "prop:minlength"?: SlTextarea["minlength"];
  /** The maximum length of input that will be considered valid. */
  "prop:maxlength"?: SlTextarea["maxlength"];
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  "prop:autocapitalize"?: SlTextarea["autocapitalize"];
  /** Indicates whether the browser's autocorrect feature is on or off. */
  "prop:autocorrect"?: SlTextarea["autocorrect"];
  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  "prop:autocomplete"?: SlTextarea["autocomplete"];
  /** Indicates that the input should receive focus on page load. */
  "prop:autofocus"?: SlTextarea["autofocus"];
  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  "prop:enterkeyhint"?: SlTextarea["enterkeyhint"];
  /** Enables spell checking on the textarea. */
  "prop:spellcheck"?: SlTextarea["spellcheck"];
  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices. */
  "prop:inputmode"?: SlTextarea["inputmode"];
  /**  */
  "prop:input"?: SlTextarea["input"];
  /**  */
  "prop:sizeAdjuster"?: SlTextarea["sizeAdjuster"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultValue"?: SlTextarea["defaultValue"];
  /** Emitted when the control loses focus. */
  "on:sl-blur"?: (e: SlTextareaEvent) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "on:sl-change"?: (e: SlTextareaEvent) => void;
  /** Emitted when the control gains focus. */
  "on:sl-focus"?: (e: SlTextareaEvent) => void;
  /** Emitted when the control receives input. */
  "on:sl-input"?: (e: SlTextareaEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:sl-invalid"?: (e: SlTextareaEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlTag` component event */
export type SlTagEvent<E = Event> = TypedEvent<SlTag, E>;

export type SlTagProps = {
  /** The tag's theme variant. */
  variant?: SlTag["variant"];
  /** The tag's size. */
  size?: SlTag["size"];
  /** Draws a pill-style tag with rounded edges. */
  pill?: SlTag["pill"];
  /** Makes the tag removable and shows a remove button. */
  removable?: SlTag["removable"];

  /** Emitted when the remove button is activated. */
  "onsl-remove"?: (e: SlTagEvent) => void;
};

export type SlTagSolidJsProps = {
  /** The tag's theme variant. */
  "prop:variant"?: SlTag["variant"];
  /** The tag's size. */
  "prop:size"?: SlTag["size"];
  /** Draws a pill-style tag with rounded edges. */
  "prop:pill"?: SlTag["pill"];
  /** Makes the tag removable and shows a remove button. */
  "prop:removable"?: SlTag["removable"];
  /** Emitted when the remove button is activated. */
  "on:sl-remove"?: (e: SlTagEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlTooltip` component event */
export type SlTooltipEvent<E = Event> = TypedEvent<SlTooltip, E>;

export type SlTooltipProps = {
  /** The tooltip's content. If you need to display HTML, use the `content` slot instead. */
  content?: SlTooltip["content"];
  /** The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
inside of the viewport. */
  placement?: SlTooltip["placement"];
  /** Disables the tooltip so it won't show when triggered. */
  disabled?: SlTooltip["disabled"];
  /** The distance in pixels from which to offset the tooltip away from its target. */
  distance?: SlTooltip["distance"];
  /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
  open?: SlTooltip["open"];
  /** The distance in pixels from which to offset the tooltip along its target. */
  skidding?: SlTooltip["skidding"];
  /** Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
options can be passed by separating them with a space. When manual is used, the tooltip must be activated
programmatically. */
  trigger?: SlTooltip["trigger"];
  /** Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
scenarios. */
  hoist?: SlTooltip["hoist"];
  /**  */
  defaultSlot?: SlTooltip["defaultSlot"];
  /**  */
  body?: SlTooltip["body"];
  /**  */
  popup?: SlTooltip["popup"];

  /** Emitted when the tooltip begins to show. */
  "onsl-show"?: (e: SlTooltipEvent) => void;
  /** Emitted after the tooltip has shown and all animations are complete. */
  "onsl-after-show"?: (e: SlTooltipEvent) => void;
  /** Emitted when the tooltip begins to hide. */
  "onsl-hide"?: (e: SlTooltipEvent) => void;
  /** Emitted after the tooltip has hidden and all animations are complete. */
  "onsl-after-hide"?: (e: SlTooltipEvent) => void;
};

export type SlTooltipSolidJsProps = {
  /** The tooltip's content. If you need to display HTML, use the `content` slot instead. */
  "prop:content"?: SlTooltip["content"];
  /** The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
inside of the viewport. */
  "prop:placement"?: SlTooltip["placement"];
  /** Disables the tooltip so it won't show when triggered. */
  "prop:disabled"?: SlTooltip["disabled"];
  /** The distance in pixels from which to offset the tooltip away from its target. */
  "prop:distance"?: SlTooltip["distance"];
  /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
  "prop:open"?: SlTooltip["open"];
  /** The distance in pixels from which to offset the tooltip along its target. */
  "prop:skidding"?: SlTooltip["skidding"];
  /** Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
options can be passed by separating them with a space. When manual is used, the tooltip must be activated
programmatically. */
  "prop:trigger"?: SlTooltip["trigger"];
  /** Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
scenarios. */
  "prop:hoist"?: SlTooltip["hoist"];
  /**  */
  "prop:defaultSlot"?: SlTooltip["defaultSlot"];
  /**  */
  "prop:body"?: SlTooltip["body"];
  /**  */
  "prop:popup"?: SlTooltip["popup"];
  /** Emitted when the tooltip begins to show. */
  "on:sl-show"?: (e: SlTooltipEvent) => void;
  /** Emitted after the tooltip has shown and all animations are complete. */
  "on:sl-after-show"?: (e: SlTooltipEvent) => void;
  /** Emitted when the tooltip begins to hide. */
  "on:sl-hide"?: (e: SlTooltipEvent) => void;
  /** Emitted after the tooltip has hidden and all animations are complete. */
  "on:sl-after-hide"?: (e: SlTooltipEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlTree` component event */
export type SlTreeEvent<E = Event> = TypedEvent<SlTree, E>;
/** `sl-selection-change` event type */
export type SlTreeSlSelectionChangeEvent = SlTreeEvent<
  CustomEvent<{ selection: SlTreeItem[] }>
>;

export type SlTreeProps = {
  /** The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected. */
  selection?: SlTree["selection"];
  /**  */
  defaultSlot?: SlTree["defaultSlot"];
  /**  */
  expandedIconSlot?: SlTree["expandedIconSlot"];
  /**  */
  collapsedIconSlot?: SlTree["collapsedIconSlot"];

  /** Emitted when a tree item is selected or deselected. */
  "onsl-selection-change"?: (e: SlTreeSlSelectionChangeEvent) => void;
};

export type SlTreeSolidJsProps = {
  /** The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected. */
  "prop:selection"?: SlTree["selection"];
  /**  */
  "prop:defaultSlot"?: SlTree["defaultSlot"];
  /**  */
  "prop:expandedIconSlot"?: SlTree["expandedIconSlot"];
  /**  */
  "prop:collapsedIconSlot"?: SlTree["collapsedIconSlot"];
  /** Emitted when a tree item is selected or deselected. */
  "on:sl-selection-change"?: (e: SlTreeSlSelectionChangeEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `SlTreeItem` component event */
export type SlTreeItemEvent<E = Event> = TypedEvent<SlTreeItem, E>;

export type SlTreeItemProps = {
  /** Expands the tree item. */
  expanded?: SlTreeItem["expanded"];
  /** Draws the tree item in a selected state. */
  selected?: SlTreeItem["selected"];
  /** Disables the tree item. */
  disabled?: SlTreeItem["disabled"];
  /** Enables lazy loading behavior. */
  lazy?: SlTreeItem["lazy"];
  /**  */
  indeterminate?: SlTreeItem["indeterminate"];
  /**  */
  isLeaf?: SlTreeItem["isLeaf"];
  /**  */
  loading?: SlTreeItem["loading"];
  /**  */
  selectable?: SlTreeItem["selectable"];
  /**  */
  defaultSlot?: SlTreeItem["defaultSlot"];
  /**  */
  childrenSlot?: SlTreeItem["childrenSlot"];
  /**  */
  itemElement?: SlTreeItem["itemElement"];
  /**  */
  childrenContainer?: SlTreeItem["childrenContainer"];
  /**  */
  expandButtonSlot?: SlTreeItem["expandButtonSlot"];

  /** Emitted when the tree item expands. */
  "onsl-expand"?: (e: SlTreeItemEvent) => void;
  /** Emitted after the tree item expands and all animations are complete. */
  "onsl-after-expand"?: (e: SlTreeItemEvent) => void;
  /** Emitted when the tree item collapses. */
  "onsl-collapse"?: (e: SlTreeItemEvent) => void;
  /** Emitted after the tree item collapses and all animations are complete. */
  "onsl-after-collapse"?: (e: SlTreeItemEvent) => void;
  /** Emitted when the tree item's lazy state changes. */
  "onsl-lazy-change"?: (e: SlTreeItemEvent) => void;
  /** Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree. */
  "onsl-lazy-load"?: (e: SlTreeItemEvent) => void;
};

export type SlTreeItemSolidJsProps = {
  /** Expands the tree item. */
  "prop:expanded"?: SlTreeItem["expanded"];
  /** Draws the tree item in a selected state. */
  "prop:selected"?: SlTreeItem["selected"];
  /** Disables the tree item. */
  "prop:disabled"?: SlTreeItem["disabled"];
  /** Enables lazy loading behavior. */
  "prop:lazy"?: SlTreeItem["lazy"];
  /**  */
  "prop:indeterminate"?: SlTreeItem["indeterminate"];
  /**  */
  "prop:isLeaf"?: SlTreeItem["isLeaf"];
  /**  */
  "prop:loading"?: SlTreeItem["loading"];
  /**  */
  "prop:selectable"?: SlTreeItem["selectable"];
  /**  */
  "prop:defaultSlot"?: SlTreeItem["defaultSlot"];
  /**  */
  "prop:childrenSlot"?: SlTreeItem["childrenSlot"];
  /**  */
  "prop:itemElement"?: SlTreeItem["itemElement"];
  /**  */
  "prop:childrenContainer"?: SlTreeItem["childrenContainer"];
  /**  */
  "prop:expandButtonSlot"?: SlTreeItem["expandButtonSlot"];
  /** Emitted when the tree item expands. */
  "on:sl-expand"?: (e: SlTreeItemEvent) => void;
  /** Emitted after the tree item expands and all animations are complete. */
  "on:sl-after-expand"?: (e: SlTreeItemEvent) => void;
  /** Emitted when the tree item collapses. */
  "on:sl-collapse"?: (e: SlTreeItemEvent) => void;
  /** Emitted after the tree item collapses and all animations are complete. */
  "on:sl-after-collapse"?: (e: SlTreeItemEvent) => void;
  /** Emitted when the tree item's lazy state changes. */
  "on:sl-lazy-change"?: (e: SlTreeItemEvent) => void;
  /** Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree. */
  "on:sl-lazy-load"?: (e: SlTreeItemEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type SlVisuallyHiddenProps = {};

export type SlVisuallyHiddenSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CustomElements = {
  /**
   * Alerts are used to display important messages inline or as toast notifications.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the alert's open state.
   * - `closable`: Enables a close button that allows the user to dismiss the alert.
   * - `variant`: The alert's theme variant.
   * - `duration`: The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
   * the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
   * the alert will not close on its own.
   * - `countdown`: Enables a countdown that indicates the remaining time the alert will be displayed.
   * Typically used to indicate the remaining time before a whole app refresh.
   * - `base`: undefined (property only)
   * - `countdownElement`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the alert opens.
   * - `sl-after-show`: Emitted after the alert opens and all animations are complete.
   * - `sl-hide`: Emitted when the alert closes.
   * - `sl-after-hide`: Emitted after the alert closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The alert's main content.
   * - `icon`: An icon to show in the alert. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `handleDurationChange() => void`: undefined
   * - `show() => void`: Shows the alert.
   * - `hide() => void`: Hides the alert
   * - `toast() => void`: Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `icon`: The container that wraps the optional icon.
   * - `message`: The container that wraps the alert's main content.
   * - `close-button`: The close button, an `<sl-icon-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   */
  "wa-alert": Partial<SlAlertProps & BaseProps<SlAlert> & BaseEvents>;

  /**
   * A component for displaying animated GIFs and WEBPs that play and pause on interaction.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `src`: The path to the image to load.
   * - `alt`: A description of the image used by assistive devices.
   * - `play`: Plays the animation. When this attribute is remove, the animation will pause.
   * - `animatedImage`: undefined (property only)
   * - `frozenFrame`: undefined (property only)
   * - `isLoaded`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-load`: Emitted when the image loads successfully.
   * - `sl-error`: Emitted when the image fails to load.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `play-icon`: Optional play icon to use instead of the default. Works best with `<sl-icon>`.
   * - `pause-icon`: Optional pause icon to use instead of the default. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handlePlayChange() => void`: undefined
   * - `handleSrcChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--control-box-size`: The size of the icon box. (default: `undefined`)
   * - `--icon-size`: The size of the play/pause icons. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `control-box`: The container that surrounds the pause/play icons and provides their background.
   */
  "wa-animated-image": Partial<
    SlAnimatedImageProps & BaseProps<SlAnimatedImage> & BaseEvents
  >;

  /**
   * Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the built-in animation to use. For custom animations, use the `keyframes` prop.
   * - `play`: Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
   * the animation finishes or gets canceled.
   * - `delay`: The number of milliseconds to delay the start of the animation.
   * - `direction`: Determines the direction of playback as well as the behavior when reaching the end of an iteration.
   * [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
   * - `duration`: The number of milliseconds each iteration of the animation takes to complete.
   * - `easing`: The easing function to use for the animation. This can be a Shoelace easing function or a custom easing function
   * such as `cubic-bezier(0, 1, .76, 1.14)`.
   * - `end-delay`/`endDelay`: The number of milliseconds to delay after the active period of an animation sequence.
   * - `fill`: Sets how the animation applies styles to its target before and after its execution.
   * - `iterations`: The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops.
   * - `iteration-start`/`iterationStart`: The offset at which to start the animation, usually between 0 (start) and 1 (end).
   * - `playback-rate`/`playbackRate`: Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
   * to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
   * value can be changed without causing the animation to restart.
   * - `defaultSlot`: undefined (property only)
   * - `keyframes`: The keyframes to use for the animation. If this is set, `name` will be ignored. (property only)
   * - `currentTime`: Gets and sets the current animation time. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-cancel`: Emitted when the animation is canceled.
   * - `sl-finish`: Emitted when the animation finishes.
   * - `sl-start`: Emitted when the animation starts or restarts.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To animate multiple elements, either wrap them in a single container or use multiple `<sl-animation>` elements.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleAnimationChange() => void`: undefined
   * - `handlePlayChange() => void`: undefined
   * - `handlePlaybackRateChange() => void`: undefined
   * - `cancel() => void`: Clears all keyframe effects caused by this animation and aborts its playback.
   * - `finish() => void`: Sets the playback time to the end of the animation corresponding to the current playback direction.
   */
  "wa-animation": Partial<
    SlAnimationProps & BaseProps<SlAnimation> & BaseEvents
  >;

  /**
   * Avatars are used to represent a person or object.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `image`: The image source to use for the avatar.
   * - `label`: A label to use to describe the avatar to assistive devices.
   * - `initials`: Initials to use as a fallback when no image is available (1-2 characters max recommended).
   * - `loading`: Indicates how the browser should load the image.
   * - `shape`: The shape of the avatar.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-error`: The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `icon`: The default icon to use when no image or initials are present. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleImageChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--size`: The size of the avatar. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `icon`: The container that wraps the avatar's icon.
   * - `initials`: The container that wraps the avatar's initials.
   * - `image`: The avatar image. Only shown when the `image` attribute is set.
   */
  "wa-avatar": Partial<SlAvatarProps & BaseProps<SlAvatar> & BaseEvents>;

  /**
   * Badges are used to draw attention and display statuses or counts.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The badge's theme variant.
   * - `pill`: Draws a pill-style badge with rounded edges.
   * - `pulse`: Makes the badge pulsate to draw attention.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The badge's content.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-badge": Partial<SlBadgeProps & BaseProps<SlBadge> & BaseEvents>;

  /**
   * Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
   * screen readers and other assistive devices to provide more context for users.
   * - `defaultSlot`: undefined (property only)
   * - `separatorSlot`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: One or more breadcrumb items to display.
   * - `separator`: The separator to use between breadcrumb items. Works best with `<sl-icon>`.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-breadcrumb": Partial<
    SlBreadcrumbProps & BaseProps<SlBreadcrumb> & BaseEvents
  >;

  /**
   * Buttons represent actions that are available to the user.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `variant`: The button's theme variant.
   * - `size`: The button's size.
   * - `caret`: Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.
   * - `disabled`: Disables the button.
   * - `loading`: Draws the button in a loading state.
   * - `outline`: Draws an outlined button.
   * - `pill`: Draws a pill-style button with rounded edges.
   * - `circle`: Draws a circular icon button. When this attribute is present, the button expects a single `<sl-icon>` in the
   * default slot.
   * - `type`: The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
   * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
   * - `name`: The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
   * This attribute is ignored when `href` is present.
   * - `value`: The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
   * button is the submitter. This attribute is ignored when `href` is present.
   * - `href`: When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   * - `target`: Tells the browser where to open the link. Only used when `href` is present.
   * - `rel`: When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
   * default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
   * specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
   * setting the attribute to an empty string or a value of your choice, respectively.
   * - `download`: Tells the browser to download the linked file as this filename. Only used when `href` is present.
   * - `form`: The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
   * value of this attribute must be an id of a form in the same document or shadow root as the button.
   * - `formaction`/`formAction`: Used to override the form owner's `action` attribute.
   * - `formenctype`/`formEnctype`: Used to override the form owner's `enctype` attribute.
   * - `formmethod`/`formMethod`: Used to override the form owner's `method` attribute.
   * - `formnovalidate`/`formNoValidate`: Used to override the form owner's `novalidate` attribute.
   * - `formtarget`/`formTarget`: Used to override the form owner's `target` attribute.
   * - `button`: undefined (property only)
   * - `invalid`: undefined (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the button loses focus.
   * - `sl-focus`: Emitted when the button gains focus.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The button's label.
   * - `prefix`: A presentational prefix icon or similar element.
   * - `suffix`: A presentational suffix icon or similar element.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `click() => void`: Simulates a click on the button.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the button.
   * - `blur() => void`: Removes focus from the button.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `prefix`: The container that wraps the prefix.
   * - `label`: The button's label.
   * - `suffix`: The container that wraps the suffix.
   * - `caret`: The button's caret icon, an `<sl-icon>` element.
   * - `spinner`: The spinner that shows when the button is in the loading state.
   */
  "wa-button": Partial<SlButtonProps & BaseProps<SlButton> & BaseEvents>;

  /**
   * Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `href`: Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
   * internally. When unset, a button will be rendered instead.
   * - `target`: Tells the browser where to open the link. Only used when `href` is set.
   * - `rel`: The `rel` attribute to use on the link. Only used when `href` is set.
   * - `defaultSlot`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The breadcrumb item's label.
   * - `prefix`: An optional prefix, usually an icon or icon button.
   * - `suffix`: An optional suffix, usually an icon or icon button.
   * - `separator`: The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on `<sl-breadcrumb>` instead.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `hrefChanged() => void`: undefined
   * - `handleSlotChange() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `label`: The breadcrumb item's label.
   * - `prefix`: The container that wraps the prefix.
   * - `suffix`: The container that wraps the suffix.
   * - `separator`: The container that wraps the separator.
   */
  "wa-breadcrumb-item": Partial<
    SlBreadcrumbItemProps & BaseProps<SlBreadcrumbItem> & BaseEvents
  >;

  /**
   * Button groups can be used to group related buttons into sections.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
   * devices when interacting with the control and is strongly recommended.
   * - `defaultSlot`: undefined (property only)
   * - `disableRole`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: One or more `<sl-button>` elements to display in the button group.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-button-group": Partial<
    SlButtonGroupProps & BaseProps<SlButtonGroup> & BaseEvents
  >;

  /**
   * Cards can be used to group related subjects in a container.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The card's main content.
   * - `header`: An optional header for the card.
   * - `footer`: An optional footer for the card.
   * - `image`: An optional image to render at the start of the card.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--border-color`: The card's border color, including borders that occur inside the card. (default: `undefined`)
   * - `--border-radius`: The border radius for the card's edges. (default: `undefined`)
   * - `--border-width`: The width of the card's borders. (default: `undefined`)
   * - `--padding`: The padding to use for the card's sections. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `image`: The container that wraps the card's image.
   * - `header`: The container that wraps the card's header.
   * - `body`: The container that wraps the card's main content.
   * - `footer`: The container that wraps the card's footer.
   */
  "wa-card": Partial<SlCardProps & BaseProps<SlCard> & BaseEvents>;

  /**
   * Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `loop`: When set, allows the user to navigate the carousel in the same direction indefinitely.
   * - `navigation`: When set, show the carousel's navigation.
   * - `pagination`: When set, show the carousel's pagination indicators.
   * - `autoplay`: When set, the slides will scroll automatically when the user is not interacting with them.
   * - `autoplay-interval`/`autoplayInterval`: Specifies the amount of time, in milliseconds, between each automatic scroll.
   * - `slides-per-page`/`slidesPerPage`: Specifies how many slides should be shown at a given time.
   * - `slides-per-move`/`slidesPerMove`: Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
   * greater than one. It can't be higher than `slides-per-page`.
   * - `orientation`: Specifies the orientation in which the carousel will lay out.
   * - `mouse-dragging`/`mouseDragging`: When set, it is possible to scroll through the slides by dragging them with the mouse.
   * - `scrollContainer`: undefined (property only)
   * - `paginationContainer`: undefined (property only)
   * - `activeSlide`: undefined (property only)
   * - `scrolling`: undefined (property only)
   * - `dragging`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-slide-change`: Emitted when the active slide changes.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The carousel's main content, one or more `<sl-carousel-item>` elements.
   * - `next-icon`: Optional next icon to use instead of the default. Works best with `<sl-icon>`.
   * - `previous-icon`: Optional previous icon to use instead of the default. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `initializeSlides() => void`: undefined
   * - `handleSlideChange() => void`: undefined
   * - `updateSlidesSnap() => void`: undefined
   * - `handleAutoplayChange() => void`: undefined
   * - `previous(behavior: ScrollBehavior = 'smooth') => void`: Move the carousel backward by `slides-per-move` slides.
   * - `next(behavior: ScrollBehavior = 'smooth') => void`: Move the carousel forward by `slides-per-move` slides.
   * - `goToSlide(index: number, behavior: ScrollBehavior = 'smooth') => void`: Scrolls the carousel to the slide specified by `index`.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--slide-gap`: The space between each slide. (default: `undefined`)
   * - `--aspect-ratio`: The aspect ratio of each slide. (default: `16/9`)
   * - `--scroll-hint`: The amount of padding to apply to the scroll area, allowing adjacent slides to become partially visible as a scroll hint. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The carousel's internal wrapper.
   * - `scroll-container`: The scroll container that wraps the slides.
   * - `pagination`: The pagination indicators wrapper.
   * - `pagination-item`: The pagination indicator.
   * - `pagination-item--active`: Applied when the item is active.
   * - `navigation`: The navigation wrapper.
   * - `navigation-button`: The navigation button.
   * - `navigation-button--previous`: Applied to the previous button.
   * - `navigation-button--next`: Applied to the next button.
   */
  "wa-carousel": Partial<SlCarouselProps & BaseProps<SlCarousel> & BaseEvents>;

  /**
   * A carousel item represent a slide within a [carousel](/components/carousel).
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The carousel item's content..
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--aspect-ratio`: The slide's aspect ratio. Inherited from the carousel by default. (default: `undefined`)
   */
  "wa-carousel-item": Partial<
    SlCarouselItemProps & BaseProps<SlCarouselItem> & BaseEvents
  >;

  /**
   * Checkboxes allow the user to toggle an option on or off.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the checkbox, submitted as a name/value pair with form data.
   * - `value`: The current value of the checkbox, submitted as a name/value pair with form data.
   * - `size`: The checkbox's size.
   * - `disabled`: Disables the checkbox.
   * - `checked`: Draws the checkbox in a checked state.
   * - `indeterminate`: Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Makes the checkbox a required field.
   * - `help-text`/`helpText`: The checkbox's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `input`: undefined (property only)
   * - `defaultChecked`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the checkbox loses focus.
   * - `sl-change`: Emitted when the checked state changes.
   * - `sl-focus`: Emitted when the checkbox gains focus.
   * - `sl-input`: Emitted when the checkbox receives input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The checkbox's label.
   * - `help-text`: Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleStateChange() => void`: undefined
   * - `click() => void`: Simulates a click on the checkbox.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the checkbox.
   * - `blur() => void`: Removes focus from the checkbox.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `control`: The square container that wraps the checkbox's checked state.
   * - `control--checked`: Matches the control part when the checkbox is checked.
   * - `control--indeterminate`: Matches the control part when the checkbox is indeterminate.
   * - `checked-icon`: The checked icon, an `<sl-icon>` element.
   * - `indeterminate-icon`: The indeterminate icon, an `<sl-icon>` element.
   * - `label`: The container that wraps the checkbox's label.
   * - `form-control-help-text`: The help text's wrapper.
   */
  "wa-checkbox": Partial<SlCheckboxProps & BaseProps<SlCheckbox> & BaseEvents>;

  /**
   * Color pickers allow the user to select a color.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The current value of the color picker. The value's format will vary based the `format` attribute. To get the value
   * in a specific format, use the `getFormattedValue()` method. The value is submitted as a name/value pair with form
   * data.
   * - `label`: The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
   * display HTML, you can use the `label` slot` instead.
   * - `format`: The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
   * picker will accept user input in any format (including CSS color names) and convert it to the desired format.
   * - `inline`: Renders the color picker inline rather than in a dropdown.
   * - `size`: Determines the size of the color picker's trigger. This has no effect on inline color pickers.
   * - `no-format-toggle`/`noFormatToggle`: Removes the button that lets users toggle between format.
   * - `name`: The name of the form control, submitted as a name/value pair with form data.
   * - `disabled`: Disables the color picker.
   * - `hoist`: Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   * - `opacity`: Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA.
   * - `uppercase`: By default, values are lowercase. With this attribute, values will be uppercase instead.
   * - `swatches`: One or more predefined color swatches to display as presets in the color picker. Can include any format the color
   * picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
   * semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Makes the color picker a required field.
   * - `base`: undefined (property only)
   * - `input`: undefined (property only)
   * - `dropdown`: undefined (property only)
   * - `previewButton`: undefined (property only)
   * - `trigger`: undefined (property only)
   * - `defaultValue`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the color picker loses focus.
   * - `sl-change`: Emitted when the color picker's value changes.
   * - `sl-focus`: Emitted when the color picker receives focus.
   * - `sl-input`: Emitted when the color picker receives input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The color picker's form label. Alternatively, you can use the `label` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleFormatChange() => void`: undefined
   * - `handleOpacityChange() => void`: undefined
   * - `handleValueChange(oldValue: string | undefined, newValue: string) => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the color picker.
   * - `blur() => void`: Removes focus from the color picker.
   * - `getFormattedValue(format: 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv' | 'hsva' = 'hex') => void`: Returns the current value as a string in the specified format.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--grid-width`: The width of the color grid. (default: `undefined`)
   * - `--grid-height`: The height of the color grid. (default: `undefined`)
   * - `--grid-handle-size`: The size of the color grid's handle. (default: `undefined`)
   * - `--slider-height`: The height of the hue and alpha sliders. (default: `undefined`)
   * - `--slider-handle-size`: The diameter of the slider's handle. (default: `undefined`)
   * - `--swatch-size`: The size of each predefined color swatch. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `trigger`: The color picker's dropdown trigger.
   * - `swatches`: The container that holds the swatches.
   * - `swatch`: Each individual swatch.
   * - `grid`: The color grid.
   * - `grid-handle`: The color grid's handle.
   * - `slider`: Hue and opacity sliders.
   * - `slider-handle`: Hue and opacity slider handles.
   * - `hue-slider`: The hue slider.
   * - `hue-slider-handle`: The hue slider's handle.
   * - `opacity-slider`: The opacity slider.
   * - `opacity-slider-handle`: The opacity slider's handle.
   * - `preview`: The preview color.
   * - `input`: The text input.
   * - `eye-dropper-button`: The eye dropper button.
   * - `eye-dropper-button__base`: The eye dropper button's exported `button` part.
   * - `eye-dropper-button__prefix`: The eye dropper button's exported `prefix` part.
   * - `eye-dropper-button__label`: The eye dropper button's exported `label` part.
   * - `eye-dropper-button__suffix`: The eye dropper button's exported `suffix` part.
   * - `eye-dropper-button__caret`: The eye dropper button's exported `caret` part.
   * - `format-button`: The format button.
   * - `format-button__base`: The format button's exported `button` part.
   * - `format-button__prefix`: The format button's exported `prefix` part.
   * - `format-button__label`: The format button's exported `label` part.
   * - `format-button__suffix`: The format button's exported `suffix` part.
   * - `format-button__caret`: The format button's exported `caret` part.
   */
  "wa-color-picker": Partial<
    SlColorPickerProps & BaseProps<SlColorPicker> & BaseEvents
  >;

  /**
   * Copies text data to the clipboard when the user clicks the trigger.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The text value to copy.
   * - `from`: An id that references an element in the same document from which data will be copied. If both this and `value` are
   * present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an
   * attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
   * append a dot and the property name, e.g. `from="el.value"`.
   * - `disabled`: Disables the copy button.
   * - `copy-label`/`copyLabel`: A custom label to show in the tooltip.
   * - `success-label`/`successLabel`: A custom label to show in the tooltip after copying.
   * - `error-label`/`errorLabel`: A custom label to show in the tooltip when a copy error occurs.
   * - `feedback-duration`/`feedbackDuration`: The length of time to show feedback before restoring the default trigger.
   * - `tooltip-placement`/`tooltipPlacement`: The preferred placement of the tooltip.
   * - `hoist`: Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
   * `overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
   * scenarios.
   * - `copyIcon`: undefined (property only)
   * - `successIcon`: undefined (property only)
   * - `errorIcon`: undefined (property only)
   * - `tooltip`: undefined (property only)
   * - `isCopying`: undefined (property only)
   * - `status`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-copy`: Emitted when the data has been copied.
   * - `sl-error`: Emitted when the data could not be copied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `copy-icon`: The icon to show in the default copy state. Works best with `<sl-icon>`.
   * - `success-icon`: The icon to show when the content is copied. Works best with `<sl-icon>`.
   * - `error-icon`: The icon to show when a copy error occurs. Works best with `<sl-icon>`.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--success-color`: The color to use for success feedback. (default: `undefined`)
   * - `--error-color`: The color to use for error feedback. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `button`: The internal `<button>` element.
   * - `copy-icon`: The container that holds the copy icon.
   * - `success-icon`: The container that holds the success icon.
   * - `error-icon`: The container that holds the error icon.
   * - `tooltip__base`: The tooltip's exported `base` part.
   * - `tooltip__base__popup`: The tooltip's exported `popup` part.
   * - `tooltip__base__arrow`: The tooltip's exported `arrow` part.
   * - `tooltip__body`: The tooltip's exported `body` part.
   */
  "wa-copy-button": Partial<
    SlCopyButtonProps & BaseProps<SlCopyButton> & BaseEvents
  >;

  /**
   * Details show a brief summary and expand to show additional content.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
   * - `summary`: The summary to show in the header. If you need to display HTML, use the `summary` slot instead.
   * - `disabled`: Disables the details so it can't be toggled.
   * - `details`: undefined (property only)
   * - `header`: undefined (property only)
   * - `body`: undefined (property only)
   * - `expandIconSlot`: undefined (property only)
   * - `detailsObserver`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the details opens.
   * - `sl-after-show`: Emitted after the details opens and all animations are complete.
   * - `sl-hide`: Emitted when the details closes.
   * - `sl-after-hide`: Emitted after the details closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The details' main content.
   * - `summary`: The details' summary. Alternatively, you can use the `summary` attribute.
   * - `expand-icon`: Optional expand icon to use instead of the default. Works best with `<sl-icon>`.
   * - `collapse-icon`: Optional collapse icon to use instead of the default. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `show() => void`: Shows the details.
   * - `hide() => void`: Hides the details
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `header`: The header that wraps both the summary and the expand/collapse icon.
   * - `summary`: The container that wraps the summary.
   * - `summary-icon`: The container that wraps the expand/collapse icons.
   * - `content`: The details content.
   */
  "wa-details": Partial<SlDetailsProps & BaseProps<SlDetails> & BaseEvents>;

  /**
   * Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.
   * - `label`: The dialog's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.
   * - `no-header`/`noHeader`: Disables the header. This will also remove the default close button, so please ensure you provide an easy,
   * accessible way for users to dismiss the dialog.
   * - `modal`: Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. (property only)
   * - `dialog`: undefined (property only)
   * - `panel`: undefined (property only)
   * - `overlay`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the dialog opens.
   * - `sl-after-show`: Emitted after the dialog opens and all animations are complete.
   * - `sl-hide`: Emitted when the dialog closes.
   * - `sl-after-hide`: Emitted after the dialog closes and all animations are complete.
   * - `sl-initial-focus`: Emitted when the dialog opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
   * - `sl-request-close`: Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The dialog's main content.
   * - `label`: The dialog's label. Alternatively, you can use the `label` attribute.
   * - `header-actions`: Optional actions to add to the header. Works best with `<sl-icon-button>`.
   * - `footer`: The dialog's footer, usually one or more buttons representing various options.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `show() => void`: Shows the dialog.
   * - `hide() => void`: Hides the dialog
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--width`: The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. (default: `undefined`)
   * - `--header-spacing`: The amount of padding to use for the header. (default: `undefined`)
   * - `--body-spacing`: The amount of padding to use for the body. (default: `undefined`)
   * - `--footer-spacing`: The amount of padding to use for the footer. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `overlay`: The overlay that covers the screen behind the dialog.
   * - `panel`: The dialog's panel (where the dialog and its content are rendered).
   * - `header`: The dialog's header. This element wraps the title and header actions.
   * - `header-actions`: Optional actions to add to the header. Works best with `<sl-icon-button>`.
   * - `title`: The dialog's title.
   * - `close-button`: The close button, an `<sl-icon-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   * - `body`: The dialog's body.
   * - `footer`: The dialog's footer.
   */
  "wa-dialog": Partial<SlDialogProps & BaseProps<SlDialog> & BaseEvents>;

  /**
   * Dividers are used to visually separate or group elements.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `vertical`: Draws the divider in a vertical orientation.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleVerticalChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--color`: The color of the divider. (default: `undefined`)
   * - `--width`: The width of the divider. (default: `undefined`)
   * - `--spacing`: The spacing of the divider. (default: `undefined`)
   */
  "wa-divider": Partial<SlDividerProps & BaseProps<SlDivider> & BaseEvents>;

  /**
   * Drawers slide in from a container to expose additional options and information.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.
   * - `label`: The drawer's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.
   * - `placement`: The direction from which the drawer will open.
   * - `contained`: By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
   * its parent element, set this attribute and add `position: relative` to the parent.
   * - `no-header`/`noHeader`: Removes the header. This will also remove the default close button, so please ensure you provide an easy,
   * accessible way for users to dismiss the drawer.
   * - `modal`: Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. (property only)
   * - `drawer`: undefined (property only)
   * - `panel`: undefined (property only)
   * - `overlay`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the drawer opens.
   * - `sl-after-show`: Emitted after the drawer opens and all animations are complete.
   * - `sl-hide`: Emitted when the drawer closes.
   * - `sl-after-hide`: Emitted after the drawer closes and all animations are complete.
   * - `sl-initial-focus`: Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
   * - `sl-request-close`: Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The drawer's main content.
   * - `label`: The drawer's label. Alternatively, you can use the `label` attribute.
   * - `header-actions`: Optional actions to add to the header. Works best with `<sl-icon-button>`.
   * - `footer`: The drawer's footer, usually one or more buttons representing various options.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `handleNoModalChange() => void`: undefined
   * - `show() => void`: Shows the drawer.
   * - `hide() => void`: Hides the drawer
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--size`: The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens. (default: `undefined`)
   * - `--header-spacing`: The amount of padding to use for the header. (default: `undefined`)
   * - `--body-spacing`: The amount of padding to use for the body. (default: `undefined`)
   * - `--footer-spacing`: The amount of padding to use for the footer. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `overlay`: The overlay that covers the screen behind the drawer.
   * - `panel`: The drawer's panel (where the drawer and its content are rendered).
   * - `header`: The drawer's header. This element wraps the title and header actions.
   * - `header-actions`: Optional actions to add to the header. Works best with `<sl-icon-button>`.
   * - `title`: The drawer's title.
   * - `close-button`: The close button, an `<sl-icon-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   * - `body`: The drawer's body.
   * - `footer`: The drawer's footer.
   */
  "wa-drawer": Partial<SlDrawerProps & BaseProps<SlDrawer> & BaseEvents>;

  /**
   * Dropdowns expose additional content that "drops down" in a panel.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.
   * - `placement`: The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
   * inside of the viewport.
   * - `disabled`: Disables the dropdown so the panel will not open.
   * - `stay-open-on-select`/`stayOpenOnSelect`: By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
   * dropdowns that allow for multiple interactions.
   * - `distance`: The distance in pixels from which to offset the panel away from its trigger.
   * - `skidding`: The distance in pixels from which to offset the panel along its trigger.
   * - `hoist`: Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   * - `sync`: Syncs the popup width or height to that of the trigger element.
   * - `popup`: undefined (property only)
   * - `trigger`: undefined (property only)
   * - `panel`: undefined (property only)
   * - `containingElement`: The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other
   * components that use a dropdown internally. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the dropdown opens.
   * - `sl-after-show`: Emitted after the dropdown opens and all animations are complete.
   * - `sl-hide`: Emitted when the dropdown closes.
   * - `sl-after-hide`: Emitted after the dropdown closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The dropdown's main content.
   * - `trigger`: The dropdown's trigger, usually a `<sl-button>` element.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focusOnTrigger() => void`: undefined
   * - `getMenu() => void`: undefined
   * - `handleTriggerClick() => void`: undefined
   * - `handleTriggerKeyDown(event: KeyboardEvent) => void`: undefined
   * - `handleTriggerKeyUp(event: KeyboardEvent) => void`: undefined
   * - `handleTriggerSlotChange() => void`: undefined
   * - `updateAccessibleTrigger() => void`: undefined
   * - `show() => void`: Shows the dropdown panel.
   * - `hide() => void`: Hides the dropdown panel
   * - `reposition() => void`: Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   * - `addOpenListeners() => void`: undefined
   * - `removeOpenListeners() => void`: undefined
   * - `handleOpenChange() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper, an `<sl-popup>` element.
   * - `base__popup`: The popup's exported `popup` part. Use this to target the tooltip's popup container.
   * - `trigger`: The container that wraps the trigger.
   * - `panel`: The panel that gets shown when the dropdown is open.
   */
  "wa-dropdown": Partial<SlDropdownProps & BaseProps<SlDropdown> & BaseEvents>;

  /**
   * Formats a number as a human readable bytes value.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The number to format in bytes.
   * - `unit`: The type of unit to display.
   * - `display`: Determines how to display the result, e.g. "100 bytes", "100 b", or "100b".
   */
  "wa-format-bytes": Partial<
    SlFormatBytesProps & BaseProps<SlFormatBytes> & BaseEvents
  >;

  /**
   * Formats a date/time using the specified locale and options.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `date`: The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
   * recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
   * in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
   * - `weekday`: The format for displaying the weekday.
   * - `era`: The format for displaying the era.
   * - `year`: The format for displaying the year.
   * - `month`: The format for displaying the month.
   * - `day`: The format for displaying the day.
   * - `hour`: The format for displaying the hour.
   * - `minute`: The format for displaying the minute.
   * - `second`: The format for displaying the second.
   * - `time-zone-name`/`timeZoneName`: The format for displaying the time.
   * - `time-zone`/`timeZone`: The time zone to express the time in.
   * - `hour-format`/`hourFormat`: The format for displaying the hour.
   */
  "wa-format-date": Partial<
    SlFormatDateProps & BaseProps<SlFormatDate> & BaseEvents
  >;

  /**
   * Formats a number using the specified locale and options.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The number to format.
   * - `type`: The formatting style to use.
   * - `no-grouping`/`noGrouping`: Turns off grouping separators.
   * - `currency`: The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting.
   * - `currency-display`/`currencyDisplay`: How to display the currency.
   * - `minimum-integer-digits`/`minimumIntegerDigits`: The minimum number of integer digits to use. Possible values are 1-21.
   * - `minimum-fraction-digits`/`minimumFractionDigits`: The minimum number of fraction digits to use. Possible values are 0-20.
   * - `maximum-fraction-digits`/`maximumFractionDigits`: The maximum number of fraction digits to use. Possible values are 0-0.
   * - `minimum-significant-digits`/`minimumSignificantDigits`: The minimum number of significant digits to use. Possible values are 1-21.
   * - `maximum-significant-digits`/`maximumSignificantDigits`: The maximum number of significant digits to use,. Possible values are 1-21.
   */
  "wa-format-number": Partial<
    SlFormatNumberProps & BaseProps<SlFormatNumber> & BaseEvents
  >;

  /**
   * Icons are symbols that can be used to represent various options within an application.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the icon to draw. Available names depend on the icon library being used.
   * - `src`: An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks.
   * - `label`: An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
   * ignored by assistive devices.
   * - `library`: The name of a registered custom icon library.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-load`: Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
   * - `sl-error`: Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleLabelChange() => void`: undefined
   * - `setIcon() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `svg`: The internal SVG element.
   * - `use`: The <use> element generated when using `spriteSheet: true`
   */
  "wa-icon": Partial<SlIconProps & BaseProps<SlIcon> & BaseEvents>;

  /**
   * Includes give you the power to embed external HTML files into the page.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `src`: The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
   * code and can result in XSS attacks.
   * - `mode`: The fetch mode to use.
   * - `allow-scripts`/`allowScripts`: Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
   * code and can result in XSS attacks.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-load`: Emitted when the included file is loaded.
   * - `sl-error`: Emitted when the included file fails to load due to an error.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleSrcChange() => void`: undefined
   */
  "wa-include": Partial<SlIncludeProps & BaseProps<SlInclude> & BaseEvents>;

  /**
   * Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the icon to draw. Available names depend on the icon library being used.
   * - `library`: The name of a registered custom icon library.
   * - `src`: An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks.
   * - `href`: When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   * - `target`: Tells the browser where to open the link. Only used when `href` is set.
   * - `download`: Tells the browser to download the linked file as this filename. Only used when `href` is set.
   * - `label`: A description that gets read by assistive devices. For optimal accessibility, you should always include a label
   * that describes what the icon button does.
   * - `disabled`: Disables the button.
   * - `button`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the icon button loses focus.
   * - `sl-focus`: Emitted when the icon button gains focus.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `click() => void`: Simulates a click on the icon button.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the icon button.
   * - `blur() => void`: Removes focus from the icon button.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-icon-button": Partial<
    SlIconButtonProps & BaseProps<SlIconButton> & BaseEvents
  >;

  /**
   * Compare visual differences between similar photos with a sliding panel.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `position`: The position of the divider as a percentage.
   * - `base`: undefined (property only)
   * - `handle`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-change`: Emitted when the position changes.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `before`: The before image, an `<img>` or `<svg>` element.
   * - `after`: The after image, an `<img>` or `<svg>` element.
   * - `handle`: The icon used inside the handle.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handlePositionChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--divider-width`: The width of the dividing line. (default: `undefined`)
   * - `--handle-size`: The size of the compare handle. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `before`: The container that wraps the before image.
   * - `after`: The container that wraps the after image.
   * - `divider`: The divider that separates the images.
   * - `handle`: The handle that the user drags to expose the after image.
   */
  "wa-image-comparer": Partial<
    SlImageComparerProps & BaseProps<SlImageComparer> & BaseEvents
  >;

  /**
   * Inputs collect data from the user.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `type`: The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   * - `name`: The name of the input, submitted as a name/value pair with form data.
   * - `value`: The current value of the input, submitted as a name/value pair with form data.
   * - `size`: The input's size.
   * - `filled`: Draws a filled input.
   * - `pill`: Draws a pill-style input with rounded edges.
   * - `label`: The input's label. If you need to display HTML, use the `label` slot instead.
   * - `help-text`/`helpText`: The input's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `clearable`: Adds a clear button when the input is not empty.
   * - `disabled`: Disables the input.
   * - `placeholder`: Placeholder text to show as a hint when the input is empty.
   * - `readonly`: Makes the input readonly.
   * - `password-toggle`/`passwordToggle`: Adds a button to toggle the password's visibility. Only applies to password types.
   * - `password-visible`/`passwordVisible`: Determines whether or not the password is currently visible. Only applies to password input types.
   * - `no-spin-buttons`/`noSpinButtons`: Hides the browser's built-in increment/decrement spin buttons for number inputs.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Makes the input a required field.
   * - `pattern`: A regular expression pattern to validate input against.
   * - `minlength`: The minimum length of input that will be considered valid.
   * - `maxlength`: The maximum length of input that will be considered valid.
   * - `min`: The input's minimum value. Only applies to date and number input types.
   * - `max`: The input's maximum value. Only applies to date and number input types.
   * - `step`: Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
   * implied, allowing any numeric value. Only applies to date and number input types.
   * - `autocapitalize`: Controls whether and how text input is automatically capitalized as it is entered by the user.
   * - `autocorrect`: Indicates whether the browser's autocorrect feature is on or off.
   * - `autocomplete`: Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   * - `autofocus`: Indicates that the input should receive focus on page load.
   * - `enterkeyhint`: Used to customize the label or icon of the Enter key on virtual keyboards.
   * - `spellcheck`: Enables spell checking on the input.
   * - `inputmode`: Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   * - `input`: undefined (property only)
   * - `defaultValue`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `valueAsDate`: Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error. (property only)
   * - `valueAsNumber`: Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-change`: Emitted when an alteration to the control's value is committed by the user.
   * - `sl-clear`: Emitted when the clear button is activated.
   * - `sl-focus`: Emitted when the control gains focus.
   * - `sl-input`: Emitted when the control receives input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The input's label. Alternatively, you can use the `label` attribute.
   * - `prefix`: Used to prepend a presentational icon or similar element to the input.
   * - `suffix`: Used to append a presentational icon or similar element to the input.
   * - `clear-icon`: An icon to use in lieu of the default clear icon.
   * - `show-password-icon`: An icon to use in lieu of the default show password icon.
   * - `hide-password-icon`: An icon to use in lieu of the default hide password icon.
   * - `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleStepChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the input.
   * - `blur() => void`: Removes focus from the input.
   * - `select() => void`: Selects all the text in the input.
   * - `setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the text selection (0-based).
   * - `setRangeText(replacement: string, start?: number, end?: number, selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve') => void`: Replaces a range of text with a new string.
   * - `showPicker() => void`: Displays the browser picker for an input element (only works if the browser supports it for the input type).
   * - `stepUp() => void`: Increments the value of a numeric input type by the value of the step attribute.
   * - `stepDown() => void`: Decrements the value of a numeric input type by the value of the step attribute.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and help text.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The input's wrapper.
   * - `form-control-help-text`: The help text's wrapper.
   * - `base`: The component's base wrapper.
   * - `input`: The internal `<input>` control.
   * - `prefix`: The container that wraps the prefix.
   * - `clear-button`: The clear button.
   * - `password-toggle-button`: The password toggle button.
   * - `suffix`: The container that wraps the suffix.
   */
  "wa-input": Partial<SlInputProps & BaseProps<SlInput> & BaseEvents>;

  /**
   * Menus provide a list of options for the user to choose from.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `defaultSlot`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-select`: Emitted when a menu item is selected.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The menu's content, including menu items, menu labels, and dividers.
   */
  "wa-menu": Partial<SlMenuProps & BaseProps<SlMenu> & BaseEvents>;

  /**
   * Menu labels are used to describe a group of menu items.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The menu label's content.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-menu-label": Partial<
    SlMenuLabelProps & BaseProps<SlMenuLabel> & BaseEvents
  >;

  /**
   * The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `attr`: Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
   * `attr="class id title"`. To watch all attributes, use `*`.
   * - `attr-old-value`/`attrOldValue`: Indicates whether or not the attribute's previous value should be recorded when monitoring changes.
   * - `char-data`/`charData`: Watches for changes to the character data contained within the node.
   * - `char-data-old-value`/`charDataOldValue`: Indicates whether or not the previous value of the node's text should be recorded.
   * - `child-list`/`childList`: Watches for the addition or removal of new child nodes.
   * - `disabled`: Disables the observer.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-mutation`: Emitted when a mutation occurs.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content to watch for mutations.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleChange() => void`: undefined
   */
  "wa-mutation-observer": Partial<
    SlMutationObserverProps & BaseProps<SlMutationObserver> & BaseEvents
  >;

  /**
   * Menu items provide options for the user to pick from in a menu.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `type`: The type of menu item to render. To use `checked`, this value must be set to `checkbox`.
   * - `checked`: Draws the item in a checked state.
   * - `value`: A unique value to store in the menu item. This can be used as a way to identify menu items when selected.
   * - `loading`: Draws the menu item in a loading state.
   * - `disabled`: Draws the menu item in a disabled state, preventing selection.
   * - `defaultSlot`: undefined (property only)
   * - `menuItem`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The menu item's label.
   * - `prefix`: Used to prepend an icon or similar element to the menu item.
   * - `suffix`: Used to append an icon or similar element to the menu item.
   * - `submenu`: Used to denote a nested menu.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleCheckedChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `handleTypeChange() => void`: undefined
   * - `getTextLabel() => void`: Returns a text label based on the contents of the menu item's default slot.
   * - `isSubmenu() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--submenu-offset`: The distance submenus shift to overlap the parent menu. (default: `-2px`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `checked-icon`: The checked icon, which is only visible when the menu item is checked.
   * - `prefix`: The prefix container.
   * - `label`: The menu item label.
   * - `suffix`: The suffix container.
   * - `spinner`: The spinner that shows when the menu item is in the loading state.
   * - `spinner__base`: The spinner's base part.
   * - `submenu-icon`: The submenu icon, visible only when the menu item has a submenu (not yet implemented).
   */
  "wa-menu-item": Partial<SlMenuItemProps & BaseProps<SlMenuItem> & BaseEvents>;

  /**
   * Options define the selectable items within various form controls such as [select](/components/select).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The option's value. When selected, the containing form control will receive this value. The value must be unique
   * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
   * multiple values.
   * - `disabled`: Draws the option in a disabled state, preventing selection.
   * - `defaultSlot`: undefined (property only)
   * - `current`: undefined (property only)
   * - `selected`: undefined (property only)
   * - `hasHover`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The option's label.
   * - `prefix`: Used to prepend an icon or similar element to the menu item.
   * - `suffix`: Used to append an icon or similar element to the menu item.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleSelectedChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `getTextLabel() => void`: Returns a plain text label based on the option's content.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `checked-icon`: The checked icon, an `<sl-icon>` element.
   * - `base`: The component's base wrapper.
   * - `label`: The option's label.
   * - `prefix`: The container that wraps the prefix.
   * - `suffix`: The container that wraps the suffix.
   */
  "wa-option": Partial<SlOptionProps & BaseProps<SlOption> & BaseEvents>;

  /**
   * Popup is a utility that lets you declaratively anchor "popup" containers to another element.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `anchor`: The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
   * element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
   * `anchor` slot instead.
   * - `active`: Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
   * down and the popup will be hidden.
   * - `placement`: The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
   * panel inside of the viewport.
   * - `strategy`: Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is
   * clipped, using a `fixed` position strategy can often workaround it.
   * - `distance`: The distance in pixels from which to offset the panel away from its anchor.
   * - `skidding`: The distance in pixels from which to offset the panel along its anchor.
   * - `arrow`: Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
   * `--arrow-color` custom properties. For additional customizations, you can also target the arrow using
   * `::part(arrow)` in your stylesheet.
   * - `arrow-placement`/`arrowPlacement`: The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
   * anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
   * align the arrow to the start, end, or center of the popover instead.
   * - `arrow-padding`/`arrowPadding`: The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
   * this will prevent it from overflowing the corners.
   * - `flip`: When set, placement of the popup will flip to the opposite site to keep it in view. You can use
   * `flipFallbackPlacements` to further configure how the fallback placement is determined.
   * - `flip-fallback-placements`/`flipFallbackPlacements`: If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
   * string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
   * fallback strategy will be used instead.
   * - `flip-fallback-strategy`/`flipFallbackStrategy`: When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
   * the popup should be positioned using the best available fit based on available space or as it was initially
   * preferred.
   * - `flipBoundary`: The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   * - `flip-padding`/`flipPadding`: The amount of padding, in pixels, to exceed before the flip behavior will occur.
   * - `shift`: Moves the popup along the axis to keep it in view when clipped.
   * - `shiftBoundary`: The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   * - `shift-padding`/`shiftPadding`: The amount of padding, in pixels, to exceed before the shift behavior will occur.
   * - `auto-size`/`autoSize`: When set, this will cause the popup to automatically resize itself to prevent it from overflowing.
   * - `sync`: Syncs the popup's width or height to that of the anchor element.
   * - `autoSizeBoundary`: The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   * - `auto-size-padding`/`autoSizePadding`: The amount of padding, in pixels, to exceed before the auto-size behavior will occur.
   * - `hover-bridge`/`hoverBridge`: When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
   * gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
   * because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
   * active.
   * - `popup`: A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-reposition`: Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The popup's content.
   * - `anchor`: The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the `anchor` attribute or property instead.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `reposition() => void`: Forces the popup to recalculate and reposition itself.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--arrow-size`: The size of the arrow. Note that an arrow won't be shown unless the `arrow` attribute is used. (default: `6px`)
   * - `--arrow-color`: The color of the arrow. (default: `var(--sl-color-neutral-0)`)
   * - `--auto-size-available-width`: A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. (default: `undefined`)
   * - `--auto-size-available-height`: A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `arrow`: The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and maybe a border or box shadow.
   * - `popup`: The popup's container. Useful for setting a background color, box shadow, etc.
   * - `hover-bridge`: The hover bridge element. Only available when the `hover-bridge` option is enabled.
   */
  "wa-popup": Partial<SlPopupProps & BaseProps<SlPopup> & BaseEvents>;

  /**
   * Progress bars are used to show the status of an ongoing operation.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The current progress as a percentage, 0 to 100.
   * - `indeterminate`: When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.
   * - `label`: A custom label for assistive devices.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: A label to show inside the progress indicator.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--height`: The progress bar's height. (default: `undefined`)
   * - `--track-color`: The color of the track. (default: `undefined`)
   * - `--indicator-color`: The color of the indicator. (default: `undefined`)
   * - `--label-color`: The color of the label. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `indicator`: The progress bar's indicator.
   * - `label`: The progress bar's label.
   */
  "wa-progress-bar": Partial<
    SlProgressBarProps & BaseProps<SlProgressBar> & BaseEvents
  >;

  /**
   * Progress rings are used to show the progress of a determinate operation in a circular fashion.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The current progress as a percentage, 0 to 100.
   * - `label`: A custom label for assistive devices.
   * - `indicator`: undefined (property only)
   * - `indicatorOffset`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: A label to show inside the ring.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--size`: The diameter of the progress ring (cannot be a percentage). (default: `undefined`)
   * - `--track-width`: The width of the track. (default: `undefined`)
   * - `--track-color`: The color of the track. (default: `undefined`)
   * - `--indicator-width`: The width of the indicator. Defaults to the track width. (default: `undefined`)
   * - `--indicator-color`: The color of the indicator. (default: `undefined`)
   * - `--indicator-transition-duration`: The duration of the indicator's transition when the value changes. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `label`: The progress ring label.
   */
  "wa-progress-ring": Partial<
    SlProgressRingProps & BaseProps<SlProgressRing> & BaseEvents
  >;

  /**
   * Radios allow the user to select a single option from a group.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The radio's value. When selected, the radio group will receive this value.
   * - `size`: The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
   * attribute can typically be omitted.
   * - `disabled`: Disables the radio.
   * - `checked`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-focus`: Emitted when the control gains focus.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The radio's label.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleCheckedChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `control`: The circular container that wraps the radio's checked state.
   * - `control--checked`: The radio control when the radio is checked.
   * - `checked-icon`: The checked icon, an `<sl-icon>` element.
   * - `label`: The container that wraps the radio's label.
   */
  "wa-radio": Partial<SlRadioProps & BaseProps<SlRadio> & BaseEvents>;

  /**
   * Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The QR code's value.
   * - `label`: The label for assistive devices to announce. If unspecified, the value will be used instead.
   * - `size`: The size of the QR code, in pixels.
   * - `fill`: The fill color. This can be any valid CSS color, but not a CSS custom property.
   * - `background`: The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property.
   * - `radius`: The edge radius of each module. Must be between 0 and 0.5.
   * - `error-correction`/`errorCorrection`: The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html)
   * - `canvas`: undefined (property only)
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `generate() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-qr-code": Partial<SlQrCodeProps & BaseProps<SlQrCode> & BaseEvents>;

  /**
   * Radios buttons allow the user to select a single option from a group using a button-like control.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The radio's value. When selected, the radio group will receive this value.
   * - `disabled`: Disables the radio button.
   * - `size`: The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so
   * this attribute can typically be omitted.
   * - `pill`: Draws a pill-style radio button with rounded edges.
   * - `input`: undefined (property only)
   * - `hiddenInput`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the button loses focus.
   * - `sl-focus`: Emitted when the button gains focus.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The radio button's label.
   * - `prefix`: A presentational prefix icon or similar element.
   * - `suffix`: A presentational suffix icon or similar element.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the radio button.
   * - `blur() => void`: Removes focus from the radio button.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `button`: The internal `<button>` element.
   * - `button--checked`: The internal button element when the radio button is checked.
   * - `prefix`: The container that wraps the prefix.
   * - `label`: The container that wraps the radio button's label.
   * - `suffix`: The container that wraps the suffix.
   */
  "wa-radio-button": Partial<
    SlRadioButtonProps & BaseProps<SlRadioButton> & BaseEvents
  >;

  /**
   * Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   * - `help-text`/`helpText`: The radio groups's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `name`: The name of the radio group, submitted as a name/value pair with form data.
   * - `value`: The current value of the radio group, submitted as a name/value pair with form data.
   * - `size`: The radio group's size. This size will be applied to all child radios and radio buttons.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Ensures a child radio is checked before allowing the containing form to submit.
   * - `defaultSlot`: undefined (property only)
   * - `validationInput`: undefined (property only)
   * - `defaultValue`: undefined (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-change`: Emitted when the radio group's selected value changes.
   * - `sl-input`: Emitted when the radio group receives user input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The default slot where `<sl-radio>` or `<sl-radio-button>` elements are placed.
   * - `label`: The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
   * - `help-text`: Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleSizeChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => boolean`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message = '') => void`: Sets a custom validation message. Pass an empty string to restore validity.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the radio-group.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and help text.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The input's wrapper.
   * - `form-control-help-text`: The help text's wrapper.
   * - `button-group`: The button group that wraps radio buttons.
   * - `button-group__base`: The button group's `base` part.
   */
  "wa-radio-group": Partial<
    SlRadioGroupProps & BaseProps<SlRadioGroup> & BaseEvents
  >;

  /**
   * Ranges allow the user to select a single value within a given range using a slider.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the range, submitted as a name/value pair with form data.
   * - `value`: The current value of the range, submitted as a name/value pair with form data.
   * - `label`: The range's label. If you need to display HTML, use the `label` slot instead.
   * - `help-text`/`helpText`: The range's help text. If you need to display HTML, use the help-text slot instead.
   * - `disabled`: Disables the range.
   * - `min`: The minimum acceptable value of the range.
   * - `max`: The maximum acceptable value of the range.
   * - `step`: The interval at which the range will increase and decrease.
   * - `tooltip`: The preferred placement of the range's tooltip.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `input`: undefined (property only)
   * - `output`: undefined (property only)
   * - `tooltipFormatter`: A function used to format the tooltip's value. The range's value is passed as the first and only argument. The
   * function should return a string to display in the tooltip. (property only)
   * - `defaultValue`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-change`: Emitted when an alteration to the control's value is committed by the user.
   * - `sl-focus`: Emitted when the control gains focus.
   * - `sl-input`: Emitted when the control receives input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The range's label. Alternatively, you can use the `label` attribute.
   * - `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleValueChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `syncRange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the range.
   * - `blur() => void`: Removes focus from the range.
   * - `stepUp() => void`: Increments the value of the range by the value of the step attribute.
   * - `stepDown() => void`: Decrements the value of the range by the value of the step attribute.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--thumb-size`: The size of the thumb. (default: `undefined`)
   * - `--tooltip-offset`: The vertical distance the tooltip is offset from the track. (default: `undefined`)
   * - `--track-color-active`: The color of the portion of the track that represents the current value. (default: `undefined`)
   * - `--track-color-inactive`: The of the portion of the track that represents the remaining value. (default: `undefined`)
   * - `--track-height`: The height of the track. (default: `undefined`)
   * - `--track-active-offset`: The point of origin of the active track. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and help text.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The range's wrapper.
   * - `form-control-help-text`: The help text's wrapper.
   * - `base`: The component's base wrapper.
   * - `input`: The internal `<input>` element.
   * - `tooltip`: The range's tooltip.
   */
  "wa-range": Partial<SlRangeProps & BaseProps<SlRange> & BaseEvents>;

  /**
   * Ratings give users a way to quickly view and provide feedback.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: A label that describes the rating to assistive devices.
   * - `value`: The current rating.
   * - `max`: The highest rating to show.
   * - `precision`: The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
   * attribute to `0.5`.
   * - `readonly`: Makes the rating readonly.
   * - `disabled`: Disables the rating.
   * - `getSymbol`: A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
   * The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
   * well with `<sl-icon>` elements.
   * - `rating`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-change`: Emitted when the rating's value changes.
   * - `sl-hover`: Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleHoverValueChange() => void`: undefined
   * - `handleIsHoveringChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the rating.
   * - `blur() => void`: Removes focus from the rating.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--symbol-color`: The inactive color for symbols. (default: `undefined`)
   * - `--symbol-color-active`: The active color for symbols. (default: `undefined`)
   * - `--symbol-size`: The size of symbols. (default: `undefined`)
   * - `--symbol-spacing`: The spacing to use around symbols. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-rating": Partial<SlRatingProps & BaseProps<SlRating> & BaseEvents>;

  /**
   * Outputs a localized time phrase relative to the current date and time.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `date`: The date from which to calculate time from. If not set, the current date and time will be used. When passing a
   * string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
   * a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
   * - `format`: The formatting style to use.
   * - `numeric`: When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
   * "1 day ago" and "in 1 day" will be shown.
   * - `sync`: Keep the displayed value up to date as time passes.
   */
  "wa-relative-time": Partial<
    SlRelativeTimeProps & BaseProps<SlRelativeTime> & BaseEvents
  >;

  /**
   * The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `disabled`: Disables the observer.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-resize`: Emitted when the element is resized.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: One or more elements to watch for resizing.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   */
  "wa-resize-observer": Partial<
    SlResizeObserverProps & BaseProps<SlResizeObserver> & BaseEvents
  >;

  /**
   * Skeletons are used to provide a visual representation of where content will eventually be drawn.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `effect`: Determines which effect the skeleton will use.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--border-radius`: The skeleton's border radius. (default: `undefined`)
   * - `--color`: The color of the skeleton. (default: `undefined`)
   * - `--sheen-color`: The sheen color when the skeleton is in its loading state. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `indicator`: The skeleton's indicator which is responsible for its color and animation.
   */
  "wa-skeleton": Partial<SlSkeletonProps & BaseProps<SlSkeleton> & BaseEvents>;

  /**
   * Selects allow you to choose items from a menu of predefined options.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the select, submitted as a name/value pair with form data.
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `size`: The select's size.
   * - `placeholder`: Placeholder text to show as a hint when the select is empty.
   * - `multiple`: Allows more than one option to be selected.
   * - `max-options-visible`/`maxOptionsVisible`: The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
   * indicate the number of additional items that are selected. Set to 0 to remove the limit.
   * - `disabled`: Disables the select control.
   * - `clearable`: Adds a clear button when the select is not empty.
   * - `open`: Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
   * - `hoist`: Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   * - `filled`: Draws a filled select.
   * - `pill`: Draws a pill-style select with rounded edges.
   * - `label`: The select's label. If you need to display HTML, use the `label` slot instead.
   * - `placement`: The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   * - `help-text`/`helpText`: The select's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: The select's required attribute.
   * - `getTag`: A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
   * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
   * the specified value.
   * - `popup`: undefined (property only)
   * - `combobox`: undefined (property only)
   * - `displayInput`: undefined (property only)
   * - `valueInput`: undefined (property only)
   * - `listbox`: undefined (property only)
   * - `displayLabel`: undefined (property only)
   * - `currentOption`: undefined (property only)
   * - `selectedOptions`: undefined (property only)
   * - `value`: The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
   * value attribute will be a space-delimited list of values based on the options selected, and the value property will
   * be an array. **For this reason, values must not contain spaces.** (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-change`: Emitted when the control's value changes.
   * - `sl-clear`: Emitted when the control's value is cleared.
   * - `sl-input`: Emitted when the control receives input.
   * - `sl-focus`: Emitted when the control gains focus.
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-show`: Emitted when the select's menu opens.
   * - `sl-after-show`: Emitted after the select's menu opens and all animations are complete.
   * - `sl-hide`: Emitted when the select's menu closes.
   * - `sl-after-hide`: Emitted after the select's menu closes and all animations are complete.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The listbox options. Must be `<sl-option>` elements. You can use `<sl-divider>` to group items visually.
   * - `label`: The input's label. Alternatively, you can use the `label` attribute.
   * - `prefix`: Used to prepend a presentational icon or similar element to the combobox.
   * - `suffix`: Used to append a presentational icon or similar element to the combobox.
   * - `clear-icon`: An icon to use in lieu of the default clear icon.
   * - `expand-icon`: The icon to show when the control is expanded and collapsed. Rotates on open and close.
   * - `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDefaultSlotChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `handleOpenChange() => void`: undefined
   * - `show() => void`: Shows the listbox.
   * - `hide() => void`: Hides the listbox.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the control.
   * - `blur() => void`: Removes focus from the control.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and help text.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The select's wrapper.
   * - `form-control-help-text`: The help text's wrapper.
   * - `combobox`: The container the wraps the prefix, suffix, combobox, clear icon, and expand button.
   * - `prefix`: The container that wraps the prefix slot.
   * - `suffix`: The container that wraps the suffix slot.
   * - `display-input`: The element that displays the selected option's label, an `<input>` element.
   * - `listbox`: The listbox container where options are slotted.
   * - `tags`: The container that houses option tags when `multiselect` is used.
   * - `tag`: The individual tags that represent each multiselect option.
   * - `tag__base`: The tag's base part.
   * - `tag__content`: The tag's content part.
   * - `tag__remove-button`: The tag's remove button.
   * - `tag__remove-button__base`: The tag's remove button base part.
   * - `clear-button`: The clear button.
   * - `expand-icon`: The container that wraps the expand icon.
   */
  "wa-select": Partial<SlSelectProps & BaseProps<SlSelect> & BaseEvents>;

  /**
   * Spinners are used to show the progress of an indeterminate operation.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--track-width`: The width of the track. (default: `undefined`)
   * - `--track-color`: The color of the track. (default: `undefined`)
   * - `--indicator-color`: The color of the spinner's indicator. (default: `undefined`)
   * - `--speed`: The time it takes for the spinner to complete one animation cycle. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-spinner": Partial<SlSpinnerProps & BaseProps<SlSpinner> & BaseEvents>;

  /**
   * Switches allow the user to toggle an option on or off.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the switch, submitted as a name/value pair with form data.
   * - `value`: The current value of the switch, submitted as a name/value pair with form data.
   * - `size`: The switch's size.
   * - `disabled`: Disables the switch.
   * - `checked`: Draws the switch in a checked state.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Makes the switch a required field.
   * - `help-text`/`helpText`: The switch's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `input`: undefined (property only)
   * - `defaultChecked`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-change`: Emitted when the control's checked state changes.
   * - `sl-input`: Emitted when the control receives input.
   * - `sl-focus`: Emitted when the control gains focus.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The switch's label.
   * - `help-text`: Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleCheckedChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `click() => void`: Simulates a click on the switch.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the switch.
   * - `blur() => void`: Removes focus from the switch.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--width`: The width of the switch. (default: `undefined`)
   * - `--height`: The height of the switch. (default: `undefined`)
   * - `--thumb-size`: The size of the thumb. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `control`: The control that houses the switch's thumb.
   * - `thumb`: The switch's thumb.
   * - `label`: The switch's label.
   * - `form-control-help-text`: The help text's wrapper.
   */
  "wa-switch": Partial<SlSwitchProps & BaseProps<SlSwitch> & BaseEvents>;

  /**
   * Split panels display two adjacent panels, allowing the user to reposition them.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `position`: The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
   * container's initial size.
   * - `position-in-pixels`/`positionInPixels`: The current position of the divider from the primary panel's edge in pixels.
   * - `vertical`: Draws the split panel in a vertical orientation with the start and end panels stacked.
   * - `disabled`: Disables resizing. Note that the position may still change as a result of resizing the host element.
   * - `primary`: If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
   * primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
   * host element is resized.
   * - `snap`: Either one or more space-separated values at which the divider should snap, in pixels, percentages, or repeat expressions e.g. `'100px 50% 500px' or `repeat(50%) 10px`,
   * or a function which takes in a `SnapFunctionParams`, and returns a position to snap to, e.g. `({ pos }) => Math.round(pos / 8) * 8`.
   * - `snap-threshold`/`snapThreshold`: How close the divider must be to a snap point until snapping occurs.
   * - `divider`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-reposition`: Emitted when the divider's position changes.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `start`: Content to place in the start panel.
   * - `end`: Content to place in the end panel.
   * - `divider`: The divider. Useful for slotting in a custom icon that renders as a handle.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handlePositionChange() => void`: undefined
   * - `handlePositionInPixelsChange() => void`: undefined
   * - `handleVerticalChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--divider-width`: The width of the visible divider. (default: `4px`)
   * - `--divider-hit-area`: The invisible region around the divider where dragging can occur. This is usually wider than the divider to facilitate easier dragging. (default: `12px`)
   * - `--min`: The minimum allowed size of the primary panel. (default: `0`)
   * - `--max`: The maximum allowed size of the primary panel. (default: `100%`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `start`: The start panel.
   * - `end`: The end panel.
   * - `panel`: Targets both the start and end panels.
   * - `divider`: The divider that separates the start and end panels.
   */
  "wa-split-panel": Partial<
    SlSplitPanelProps & BaseProps<SlSplitPanel> & BaseEvents
  >;

  /**
   * Tab groups organize content into a container that shows one section at a time.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `placement`: The placement of the tabs.
   * - `activation`: When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
   * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
   * - `no-scroll-controls`/`noScrollControls`: Disables the scroll arrows that appear when tabs overflow.
   * - `fixed-scroll-controls`/`fixedScrollControls`: Prevent scroll buttons from being hidden when inactive.
   * - `tabGroup`: undefined (property only)
   * - `body`: undefined (property only)
   * - `nav`: undefined (property only)
   * - `indicator`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-tab-show`: Emitted when a tab is shown.
   * - `sl-tab-hide`: Emitted when a tab is hidden.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Used for grouping tab panels in the tab group. Must be `<sl-tab-panel>` elements.
   * - `nav`: Used for grouping tabs in the tab group. Must be `<sl-tab>` elements.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `updateScrollControls() => void`: undefined
   * - `syncIndicator() => void`: undefined
   * - `show(panel: string) => void`: Shows the specified tab panel.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--indicator-color`: The color of the active tab indicator. (default: `undefined`)
   * - `--track-color`: The color of the indicator's track (the line that separates tabs from panels). (default: `undefined`)
   * - `--track-width`: The width of the indicator's track (the line that separates tabs from panels). (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `nav`: The tab group's navigation container where tabs are slotted in.
   * - `tabs`: The container that wraps the tabs.
   * - `active-tab-indicator`: The line that highlights the currently selected tab.
   * - `body`: The tab group's body where tab panels are slotted in.
   * - `scroll-button`: The previous/next scroll buttons that show when tabs are scrollable, an `<sl-icon-button>`.
   * - `scroll-button--start`: The starting scroll button.
   * - `scroll-button--end`: The ending scroll button.
   * - `scroll-button__base`: The scroll button's exported `base` part.
   */
  "wa-tab-group": Partial<SlTabGroupProps & BaseProps<SlTabGroup> & BaseEvents>;

  /**
   * Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `panel`: The name of the tab panel this tab is associated with. The panel must be located in the same tab group.
   * - `active`: Draws the tab in an active state.
   * - `closable`: Makes the tab closable and shows a close button.
   * - `disabled`: Disables the tab and prevents selection.
   * - `tab`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-close`: Emitted when the tab is closable and the close button is activated.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The tab's label.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleActiveChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `close-button`: The close button, an `<sl-icon-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   */
  "wa-tab": Partial<SlTabProps & BaseProps<SlTab> & BaseEvents>;

  /**
   * Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The tab panel's name.
   * - `active`: When true, the tab panel will be shown.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The tab panel's content.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleActiveChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--padding`: The tab panel's padding. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-tab-panel": Partial<SlTabPanelProps & BaseProps<SlTabPanel> & BaseEvents>;

  /**
   * Textareas collect data from the user and allow multiple lines of text.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the textarea, submitted as a name/value pair with form data.
   * - `value`: The current value of the textarea, submitted as a name/value pair with form data.
   * - `size`: The textarea's size.
   * - `filled`: Draws a filled textarea.
   * - `label`: The textarea's label. If you need to display HTML, use the `label` slot instead.
   * - `help-text`/`helpText`: The textarea's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `placeholder`: Placeholder text to show as a hint when the input is empty.
   * - `rows`: The number of rows to display by default.
   * - `resize`: Controls how the textarea can be resized.
   * - `disabled`: Disables the textarea.
   * - `readonly`: Makes the textarea readonly.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Makes the textarea a required field.
   * - `minlength`: The minimum length of input that will be considered valid.
   * - `maxlength`: The maximum length of input that will be considered valid.
   * - `autocapitalize`: Controls whether and how text input is automatically capitalized as it is entered by the user.
   * - `autocorrect`: Indicates whether the browser's autocorrect feature is on or off.
   * - `autocomplete`: Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   * - `autofocus`: Indicates that the input should receive focus on page load.
   * - `enterkeyhint`: Used to customize the label or icon of the Enter key on virtual keyboards.
   * - `spellcheck`: Enables spell checking on the textarea.
   * - `inputmode`: Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   * - `input`: undefined (property only)
   * - `sizeAdjuster`: undefined (property only)
   * - `defaultValue`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-change`: Emitted when an alteration to the control's value is committed by the user.
   * - `sl-focus`: Emitted when the control gains focus.
   * - `sl-input`: Emitted when the control receives input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The textarea's label. Alternatively, you can use the `label` attribute.
   * - `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleRowsChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the textarea.
   * - `blur() => void`: Removes focus from the textarea.
   * - `select() => void`: Selects all the text in the textarea.
   * - `scrollPosition(position?: { top?: number; left?: number }) => { top: number; left: number } | undefined`: Gets or sets the textarea's scroll position.
   * - `setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the text selection (0-based).
   * - `setRangeText(replacement: string, start?: number, end?: number, selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve') => void`: Replaces a range of text with a new string.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and help text.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The input's wrapper.
   * - `form-control-help-text`: The help text's wrapper.
   * - `base`: The component's base wrapper.
   * - `textarea`: The internal `<textarea>` control.
   */
  "wa-textarea": Partial<SlTextareaProps & BaseProps<SlTextarea> & BaseEvents>;

  /**
   * Tags are used as labels to organize things or to indicate a selection.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The tag's theme variant.
   * - `size`: The tag's size.
   * - `pill`: Draws a pill-style tag with rounded edges.
   * - `removable`: Makes the tag removable and shows a remove button.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-remove`: Emitted when the remove button is activated.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The tag's content.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `content`: The tag's content.
   * - `remove-button`: The tag's remove button, an `<sl-icon-button>`.
   * - `remove-button__base`: The remove button's exported `base` part.
   */
  "wa-tag": Partial<SlTagProps & BaseProps<SlTag> & BaseEvents>;

  /**
   * Tooltips display additional information based on a specific action.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `content`: The tooltip's content. If you need to display HTML, use the `content` slot instead.
   * - `placement`: The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
   * inside of the viewport.
   * - `disabled`: Disables the tooltip so it won't show when triggered.
   * - `distance`: The distance in pixels from which to offset the tooltip away from its target.
   * - `open`: Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.
   * - `skidding`: The distance in pixels from which to offset the tooltip along its target.
   * - `trigger`: Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
   * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
   * programmatically.
   * - `hoist`: Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
   * `overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
   * scenarios.
   * - `defaultSlot`: undefined (property only)
   * - `body`: undefined (property only)
   * - `popup`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the tooltip begins to show.
   * - `sl-after-show`: Emitted after the tooltip has shown and all animations are complete.
   * - `sl-hide`: Emitted when the tooltip begins to hide.
   * - `sl-after-hide`: Emitted after the tooltip has hidden and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
   * - `content`: The content to render in the tooltip. Alternatively, you can use the `content` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `handleOptionsChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `show() => void`: Shows the tooltip.
   * - `hide() => void`: Hides the tooltip
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--max-width`: The maximum width of the tooltip before its content will wrap. (default: `undefined`)
   * - `--hide-delay`: The amount of time to wait before hiding the tooltip when hovering. (default: `undefined`)
   * - `--show-delay`: The amount of time to wait before showing the tooltip when hovering. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper, an `<sl-popup>` element.
   * - `base__popup`: The popup's exported `popup` part. Use this to target the tooltip's popup container.
   * - `base__arrow`: The popup's exported `arrow` part. Use this to target the tooltip's arrow.
   * - `body`: The tooltip's body where its content is rendered.
   */
  "wa-tooltip": Partial<SlTooltipProps & BaseProps<SlTooltip> & BaseEvents>;

  /**
   * Trees allow you to display a hierarchical list of selectable [tree items](/components/tree-item). Items with children can be expanded and collapsed as desired by the user.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `selection`: The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
   * displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.
   * - `defaultSlot`: undefined (property only)
   * - `expandedIconSlot`: undefined (property only)
   * - `collapsedIconSlot`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-selection-change`: Emitted when a tree item is selected or deselected.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The default slot.
   * - `expand-icon`: The icon to show when the tree item is expanded. Works best with `<sl-icon>`.
   * - `collapse-icon`: The icon to show when the tree item is collapsed. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleMouseDown(event: MouseEvent) => void`: undefined
   * - `handleSelectionChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--indent-size`: The size of the indentation for nested items. (default: `var(--sl-spacing-medium)`)
   * - `--indent-guide-color`: The color of the indentation line. (default: `var(--sl-color-neutral-200)`)
   * - `--indent-guide-offset`: The amount of vertical spacing to leave between the top and bottom of the indentation line's starting position. (default: `0`)
   * - `--indent-guide-style`: The style of the indentation line, e.g. solid, dotted, dashed. (default: `solid`)
   * - `--indent-guide-width`: The width of the indentation line. (default: `0`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-tree": Partial<SlTreeProps & BaseProps<SlTree> & BaseEvents>;

  /**
   * A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `expanded`: Expands the tree item.
   * - `selected`: Draws the tree item in a selected state.
   * - `disabled`: Disables the tree item.
   * - `lazy`: Enables lazy loading behavior.
   * - `indeterminate`: undefined (property only)
   * - `isLeaf`: undefined (property only)
   * - `loading`: undefined (property only)
   * - `selectable`: undefined (property only)
   * - `defaultSlot`: undefined (property only)
   * - `childrenSlot`: undefined (property only)
   * - `itemElement`: undefined (property only)
   * - `childrenContainer`: undefined (property only)
   * - `expandButtonSlot`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-expand`: Emitted when the tree item expands.
   * - `sl-after-expand`: Emitted after the tree item expands and all animations are complete.
   * - `sl-collapse`: Emitted when the tree item collapses.
   * - `sl-after-collapse`: Emitted after the tree item collapses and all animations are complete.
   * - `sl-lazy-change`: Emitted when the tree item's lazy state changes.
   * - `sl-lazy-load`: Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The default slot.
   * - `expand-icon`: The icon to show when the tree item is expanded.
   * - `collapse-icon`: The icon to show when the tree item is collapsed.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `isTreeItem(node: Node) => void`: undefined
   * - `handleLoadingChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `handleSelectedChange() => void`: undefined
   * - `handleExpandedChange() => void`: undefined
   * - `handleExpandAnimation() => void`: undefined
   * - `handleLazyChange() => void`: undefined
   * - `getChildrenItems({ includeDisabled = true }: { includeDisabled?: boolean } = {}) => SlTreeItem[]`: Gets all the nested tree items in this node.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `item`: The tree item's container. This element wraps everything except slotted tree item children.
   * - `item--disabled`: Applied when the tree item is disabled.
   * - `item--expanded`: Applied when the tree item is expanded.
   * - `item--indeterminate`: Applied when the selection is indeterminate.
   * - `item--selected`: Applied when the tree item is selected.
   * - `indentation`: The tree item's indentation container.
   * - `expand-button`: The container that wraps the tree item's expand button and spinner.
   * - `spinner`: The spinner that shows when a lazy tree item is in the loading state.
   * - `spinner__base`: The spinner's base part.
   * - `label`: The tree item's label.
   * - `children`: The container that wraps the tree item's nested children.
   * - `checkbox`: The checkbox that shows when using multiselect.
   * - `checkbox__base`: The checkbox's exported `base` part.
   * - `checkbox__control`: The checkbox's exported `control` part.
   * - `checkbox__control--checked`: The checkbox's exported `control--checked` part.
   * - `checkbox__control--indeterminate`: The checkbox's exported `control--indeterminate` part.
   * - `checkbox__checked-icon`: The checkbox's exported `checked-icon` part.
   * - `checkbox__indeterminate-icon`: The checkbox's exported `indeterminate-icon` part.
   * - `checkbox__label`: The checkbox's exported `label` part.
   */
  "wa-tree-item": Partial<SlTreeItemProps & BaseProps<SlTreeItem> & BaseEvents>;

  /**
   * The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content to be visually hidden.
   */
  "wa-visually-hidden": Partial<
    SlVisuallyHiddenProps & BaseProps<SlVisuallyHidden> & BaseEvents
  >;
};

export type CustomElementsSolidJs = {
  /**
   * Alerts are used to display important messages inline or as toast notifications.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the alert's open state.
   * - `closable`: Enables a close button that allows the user to dismiss the alert.
   * - `variant`: The alert's theme variant.
   * - `duration`: The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
   * the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
   * the alert will not close on its own.
   * - `countdown`: Enables a countdown that indicates the remaining time the alert will be displayed.
   * Typically used to indicate the remaining time before a whole app refresh.
   * - `base`: undefined (property only)
   * - `countdownElement`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the alert opens.
   * - `sl-after-show`: Emitted after the alert opens and all animations are complete.
   * - `sl-hide`: Emitted when the alert closes.
   * - `sl-after-hide`: Emitted after the alert closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The alert's main content.
   * - `icon`: An icon to show in the alert. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `handleDurationChange() => void`: undefined
   * - `show() => void`: Shows the alert.
   * - `hide() => void`: Hides the alert
   * - `toast() => void`: Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `icon`: The container that wraps the optional icon.
   * - `message`: The container that wraps the alert's main content.
   * - `close-button`: The close button, an `<sl-icon-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   */
  "wa-alert": Partial<
    SlAlertProps & SlAlertSolidJsProps & BaseProps<SlAlert> & BaseEvents
  >;

  /**
   * A component for displaying animated GIFs and WEBPs that play and pause on interaction.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `src`: The path to the image to load.
   * - `alt`: A description of the image used by assistive devices.
   * - `play`: Plays the animation. When this attribute is remove, the animation will pause.
   * - `animatedImage`: undefined (property only)
   * - `frozenFrame`: undefined (property only)
   * - `isLoaded`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-load`: Emitted when the image loads successfully.
   * - `sl-error`: Emitted when the image fails to load.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `play-icon`: Optional play icon to use instead of the default. Works best with `<sl-icon>`.
   * - `pause-icon`: Optional pause icon to use instead of the default. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handlePlayChange() => void`: undefined
   * - `handleSrcChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--control-box-size`: The size of the icon box. (default: `undefined`)
   * - `--icon-size`: The size of the play/pause icons. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `control-box`: The container that surrounds the pause/play icons and provides their background.
   */
  "wa-animated-image": Partial<
    SlAnimatedImageProps &
      SlAnimatedImageSolidJsProps &
      BaseProps<SlAnimatedImage> &
      BaseEvents
  >;

  /**
   * Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the built-in animation to use. For custom animations, use the `keyframes` prop.
   * - `play`: Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
   * the animation finishes or gets canceled.
   * - `delay`: The number of milliseconds to delay the start of the animation.
   * - `direction`: Determines the direction of playback as well as the behavior when reaching the end of an iteration.
   * [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
   * - `duration`: The number of milliseconds each iteration of the animation takes to complete.
   * - `easing`: The easing function to use for the animation. This can be a Shoelace easing function or a custom easing function
   * such as `cubic-bezier(0, 1, .76, 1.14)`.
   * - `end-delay`/`endDelay`: The number of milliseconds to delay after the active period of an animation sequence.
   * - `fill`: Sets how the animation applies styles to its target before and after its execution.
   * - `iterations`: The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops.
   * - `iteration-start`/`iterationStart`: The offset at which to start the animation, usually between 0 (start) and 1 (end).
   * - `playback-rate`/`playbackRate`: Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
   * to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
   * value can be changed without causing the animation to restart.
   * - `defaultSlot`: undefined (property only)
   * - `keyframes`: The keyframes to use for the animation. If this is set, `name` will be ignored. (property only)
   * - `currentTime`: Gets and sets the current animation time. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-cancel`: Emitted when the animation is canceled.
   * - `sl-finish`: Emitted when the animation finishes.
   * - `sl-start`: Emitted when the animation starts or restarts.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To animate multiple elements, either wrap them in a single container or use multiple `<sl-animation>` elements.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleAnimationChange() => void`: undefined
   * - `handlePlayChange() => void`: undefined
   * - `handlePlaybackRateChange() => void`: undefined
   * - `cancel() => void`: Clears all keyframe effects caused by this animation and aborts its playback.
   * - `finish() => void`: Sets the playback time to the end of the animation corresponding to the current playback direction.
   */
  "wa-animation": Partial<
    SlAnimationProps &
      SlAnimationSolidJsProps &
      BaseProps<SlAnimation> &
      BaseEvents
  >;

  /**
   * Avatars are used to represent a person or object.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `image`: The image source to use for the avatar.
   * - `label`: A label to use to describe the avatar to assistive devices.
   * - `initials`: Initials to use as a fallback when no image is available (1-2 characters max recommended).
   * - `loading`: Indicates how the browser should load the image.
   * - `shape`: The shape of the avatar.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-error`: The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `icon`: The default icon to use when no image or initials are present. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleImageChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--size`: The size of the avatar. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `icon`: The container that wraps the avatar's icon.
   * - `initials`: The container that wraps the avatar's initials.
   * - `image`: The avatar image. Only shown when the `image` attribute is set.
   */
  "wa-avatar": Partial<
    SlAvatarProps & SlAvatarSolidJsProps & BaseProps<SlAvatar> & BaseEvents
  >;

  /**
   * Badges are used to draw attention and display statuses or counts.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The badge's theme variant.
   * - `pill`: Draws a pill-style badge with rounded edges.
   * - `pulse`: Makes the badge pulsate to draw attention.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The badge's content.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-badge": Partial<
    SlBadgeProps & SlBadgeSolidJsProps & BaseProps<SlBadge> & BaseEvents
  >;

  /**
   * Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
   * screen readers and other assistive devices to provide more context for users.
   * - `defaultSlot`: undefined (property only)
   * - `separatorSlot`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: One or more breadcrumb items to display.
   * - `separator`: The separator to use between breadcrumb items. Works best with `<sl-icon>`.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-breadcrumb": Partial<
    SlBreadcrumbProps &
      SlBreadcrumbSolidJsProps &
      BaseProps<SlBreadcrumb> &
      BaseEvents
  >;

  /**
   * Buttons represent actions that are available to the user.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `variant`: The button's theme variant.
   * - `size`: The button's size.
   * - `caret`: Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.
   * - `disabled`: Disables the button.
   * - `loading`: Draws the button in a loading state.
   * - `outline`: Draws an outlined button.
   * - `pill`: Draws a pill-style button with rounded edges.
   * - `circle`: Draws a circular icon button. When this attribute is present, the button expects a single `<sl-icon>` in the
   * default slot.
   * - `type`: The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
   * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
   * - `name`: The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
   * This attribute is ignored when `href` is present.
   * - `value`: The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
   * button is the submitter. This attribute is ignored when `href` is present.
   * - `href`: When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   * - `target`: Tells the browser where to open the link. Only used when `href` is present.
   * - `rel`: When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
   * default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
   * specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
   * setting the attribute to an empty string or a value of your choice, respectively.
   * - `download`: Tells the browser to download the linked file as this filename. Only used when `href` is present.
   * - `form`: The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
   * value of this attribute must be an id of a form in the same document or shadow root as the button.
   * - `formaction`/`formAction`: Used to override the form owner's `action` attribute.
   * - `formenctype`/`formEnctype`: Used to override the form owner's `enctype` attribute.
   * - `formmethod`/`formMethod`: Used to override the form owner's `method` attribute.
   * - `formnovalidate`/`formNoValidate`: Used to override the form owner's `novalidate` attribute.
   * - `formtarget`/`formTarget`: Used to override the form owner's `target` attribute.
   * - `button`: undefined (property only)
   * - `invalid`: undefined (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the button loses focus.
   * - `sl-focus`: Emitted when the button gains focus.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The button's label.
   * - `prefix`: A presentational prefix icon or similar element.
   * - `suffix`: A presentational suffix icon or similar element.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `click() => void`: Simulates a click on the button.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the button.
   * - `blur() => void`: Removes focus from the button.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `prefix`: The container that wraps the prefix.
   * - `label`: The button's label.
   * - `suffix`: The container that wraps the suffix.
   * - `caret`: The button's caret icon, an `<sl-icon>` element.
   * - `spinner`: The spinner that shows when the button is in the loading state.
   */
  "wa-button": Partial<
    SlButtonProps & SlButtonSolidJsProps & BaseProps<SlButton> & BaseEvents
  >;

  /**
   * Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `href`: Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
   * internally. When unset, a button will be rendered instead.
   * - `target`: Tells the browser where to open the link. Only used when `href` is set.
   * - `rel`: The `rel` attribute to use on the link. Only used when `href` is set.
   * - `defaultSlot`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The breadcrumb item's label.
   * - `prefix`: An optional prefix, usually an icon or icon button.
   * - `suffix`: An optional suffix, usually an icon or icon button.
   * - `separator`: The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on `<sl-breadcrumb>` instead.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `hrefChanged() => void`: undefined
   * - `handleSlotChange() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `label`: The breadcrumb item's label.
   * - `prefix`: The container that wraps the prefix.
   * - `suffix`: The container that wraps the suffix.
   * - `separator`: The container that wraps the separator.
   */
  "wa-breadcrumb-item": Partial<
    SlBreadcrumbItemProps &
      SlBreadcrumbItemSolidJsProps &
      BaseProps<SlBreadcrumbItem> &
      BaseEvents
  >;

  /**
   * Button groups can be used to group related buttons into sections.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
   * devices when interacting with the control and is strongly recommended.
   * - `defaultSlot`: undefined (property only)
   * - `disableRole`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: One or more `<sl-button>` elements to display in the button group.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-button-group": Partial<
    SlButtonGroupProps &
      SlButtonGroupSolidJsProps &
      BaseProps<SlButtonGroup> &
      BaseEvents
  >;

  /**
   * Cards can be used to group related subjects in a container.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The card's main content.
   * - `header`: An optional header for the card.
   * - `footer`: An optional footer for the card.
   * - `image`: An optional image to render at the start of the card.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--border-color`: The card's border color, including borders that occur inside the card. (default: `undefined`)
   * - `--border-radius`: The border radius for the card's edges. (default: `undefined`)
   * - `--border-width`: The width of the card's borders. (default: `undefined`)
   * - `--padding`: The padding to use for the card's sections. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `image`: The container that wraps the card's image.
   * - `header`: The container that wraps the card's header.
   * - `body`: The container that wraps the card's main content.
   * - `footer`: The container that wraps the card's footer.
   */
  "wa-card": Partial<
    SlCardProps & SlCardSolidJsProps & BaseProps<SlCard> & BaseEvents
  >;

  /**
   * Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `loop`: When set, allows the user to navigate the carousel in the same direction indefinitely.
   * - `navigation`: When set, show the carousel's navigation.
   * - `pagination`: When set, show the carousel's pagination indicators.
   * - `autoplay`: When set, the slides will scroll automatically when the user is not interacting with them.
   * - `autoplay-interval`/`autoplayInterval`: Specifies the amount of time, in milliseconds, between each automatic scroll.
   * - `slides-per-page`/`slidesPerPage`: Specifies how many slides should be shown at a given time.
   * - `slides-per-move`/`slidesPerMove`: Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
   * greater than one. It can't be higher than `slides-per-page`.
   * - `orientation`: Specifies the orientation in which the carousel will lay out.
   * - `mouse-dragging`/`mouseDragging`: When set, it is possible to scroll through the slides by dragging them with the mouse.
   * - `scrollContainer`: undefined (property only)
   * - `paginationContainer`: undefined (property only)
   * - `activeSlide`: undefined (property only)
   * - `scrolling`: undefined (property only)
   * - `dragging`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-slide-change`: Emitted when the active slide changes.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The carousel's main content, one or more `<sl-carousel-item>` elements.
   * - `next-icon`: Optional next icon to use instead of the default. Works best with `<sl-icon>`.
   * - `previous-icon`: Optional previous icon to use instead of the default. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `initializeSlides() => void`: undefined
   * - `handleSlideChange() => void`: undefined
   * - `updateSlidesSnap() => void`: undefined
   * - `handleAutoplayChange() => void`: undefined
   * - `previous(behavior: ScrollBehavior = 'smooth') => void`: Move the carousel backward by `slides-per-move` slides.
   * - `next(behavior: ScrollBehavior = 'smooth') => void`: Move the carousel forward by `slides-per-move` slides.
   * - `goToSlide(index: number, behavior: ScrollBehavior = 'smooth') => void`: Scrolls the carousel to the slide specified by `index`.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--slide-gap`: The space between each slide. (default: `undefined`)
   * - `--aspect-ratio`: The aspect ratio of each slide. (default: `16/9`)
   * - `--scroll-hint`: The amount of padding to apply to the scroll area, allowing adjacent slides to become partially visible as a scroll hint. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The carousel's internal wrapper.
   * - `scroll-container`: The scroll container that wraps the slides.
   * - `pagination`: The pagination indicators wrapper.
   * - `pagination-item`: The pagination indicator.
   * - `pagination-item--active`: Applied when the item is active.
   * - `navigation`: The navigation wrapper.
   * - `navigation-button`: The navigation button.
   * - `navigation-button--previous`: Applied to the previous button.
   * - `navigation-button--next`: Applied to the next button.
   */
  "wa-carousel": Partial<
    SlCarouselProps &
      SlCarouselSolidJsProps &
      BaseProps<SlCarousel> &
      BaseEvents
  >;

  /**
   * A carousel item represent a slide within a [carousel](/components/carousel).
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The carousel item's content..
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--aspect-ratio`: The slide's aspect ratio. Inherited from the carousel by default. (default: `undefined`)
   */
  "wa-carousel-item": Partial<
    SlCarouselItemProps &
      SlCarouselItemSolidJsProps &
      BaseProps<SlCarouselItem> &
      BaseEvents
  >;

  /**
   * Checkboxes allow the user to toggle an option on or off.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the checkbox, submitted as a name/value pair with form data.
   * - `value`: The current value of the checkbox, submitted as a name/value pair with form data.
   * - `size`: The checkbox's size.
   * - `disabled`: Disables the checkbox.
   * - `checked`: Draws the checkbox in a checked state.
   * - `indeterminate`: Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Makes the checkbox a required field.
   * - `help-text`/`helpText`: The checkbox's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `input`: undefined (property only)
   * - `defaultChecked`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the checkbox loses focus.
   * - `sl-change`: Emitted when the checked state changes.
   * - `sl-focus`: Emitted when the checkbox gains focus.
   * - `sl-input`: Emitted when the checkbox receives input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The checkbox's label.
   * - `help-text`: Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleStateChange() => void`: undefined
   * - `click() => void`: Simulates a click on the checkbox.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the checkbox.
   * - `blur() => void`: Removes focus from the checkbox.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `control`: The square container that wraps the checkbox's checked state.
   * - `control--checked`: Matches the control part when the checkbox is checked.
   * - `control--indeterminate`: Matches the control part when the checkbox is indeterminate.
   * - `checked-icon`: The checked icon, an `<sl-icon>` element.
   * - `indeterminate-icon`: The indeterminate icon, an `<sl-icon>` element.
   * - `label`: The container that wraps the checkbox's label.
   * - `form-control-help-text`: The help text's wrapper.
   */
  "wa-checkbox": Partial<
    SlCheckboxProps &
      SlCheckboxSolidJsProps &
      BaseProps<SlCheckbox> &
      BaseEvents
  >;

  /**
   * Color pickers allow the user to select a color.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The current value of the color picker. The value's format will vary based the `format` attribute. To get the value
   * in a specific format, use the `getFormattedValue()` method. The value is submitted as a name/value pair with form
   * data.
   * - `label`: The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
   * display HTML, you can use the `label` slot` instead.
   * - `format`: The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
   * picker will accept user input in any format (including CSS color names) and convert it to the desired format.
   * - `inline`: Renders the color picker inline rather than in a dropdown.
   * - `size`: Determines the size of the color picker's trigger. This has no effect on inline color pickers.
   * - `no-format-toggle`/`noFormatToggle`: Removes the button that lets users toggle between format.
   * - `name`: The name of the form control, submitted as a name/value pair with form data.
   * - `disabled`: Disables the color picker.
   * - `hoist`: Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   * - `opacity`: Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA.
   * - `uppercase`: By default, values are lowercase. With this attribute, values will be uppercase instead.
   * - `swatches`: One or more predefined color swatches to display as presets in the color picker. Can include any format the color
   * picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
   * semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Makes the color picker a required field.
   * - `base`: undefined (property only)
   * - `input`: undefined (property only)
   * - `dropdown`: undefined (property only)
   * - `previewButton`: undefined (property only)
   * - `trigger`: undefined (property only)
   * - `defaultValue`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the color picker loses focus.
   * - `sl-change`: Emitted when the color picker's value changes.
   * - `sl-focus`: Emitted when the color picker receives focus.
   * - `sl-input`: Emitted when the color picker receives input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The color picker's form label. Alternatively, you can use the `label` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleFormatChange() => void`: undefined
   * - `handleOpacityChange() => void`: undefined
   * - `handleValueChange(oldValue: string | undefined, newValue: string) => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the color picker.
   * - `blur() => void`: Removes focus from the color picker.
   * - `getFormattedValue(format: 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv' | 'hsva' = 'hex') => void`: Returns the current value as a string in the specified format.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--grid-width`: The width of the color grid. (default: `undefined`)
   * - `--grid-height`: The height of the color grid. (default: `undefined`)
   * - `--grid-handle-size`: The size of the color grid's handle. (default: `undefined`)
   * - `--slider-height`: The height of the hue and alpha sliders. (default: `undefined`)
   * - `--slider-handle-size`: The diameter of the slider's handle. (default: `undefined`)
   * - `--swatch-size`: The size of each predefined color swatch. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `trigger`: The color picker's dropdown trigger.
   * - `swatches`: The container that holds the swatches.
   * - `swatch`: Each individual swatch.
   * - `grid`: The color grid.
   * - `grid-handle`: The color grid's handle.
   * - `slider`: Hue and opacity sliders.
   * - `slider-handle`: Hue and opacity slider handles.
   * - `hue-slider`: The hue slider.
   * - `hue-slider-handle`: The hue slider's handle.
   * - `opacity-slider`: The opacity slider.
   * - `opacity-slider-handle`: The opacity slider's handle.
   * - `preview`: The preview color.
   * - `input`: The text input.
   * - `eye-dropper-button`: The eye dropper button.
   * - `eye-dropper-button__base`: The eye dropper button's exported `button` part.
   * - `eye-dropper-button__prefix`: The eye dropper button's exported `prefix` part.
   * - `eye-dropper-button__label`: The eye dropper button's exported `label` part.
   * - `eye-dropper-button__suffix`: The eye dropper button's exported `suffix` part.
   * - `eye-dropper-button__caret`: The eye dropper button's exported `caret` part.
   * - `format-button`: The format button.
   * - `format-button__base`: The format button's exported `button` part.
   * - `format-button__prefix`: The format button's exported `prefix` part.
   * - `format-button__label`: The format button's exported `label` part.
   * - `format-button__suffix`: The format button's exported `suffix` part.
   * - `format-button__caret`: The format button's exported `caret` part.
   */
  "wa-color-picker": Partial<
    SlColorPickerProps &
      SlColorPickerSolidJsProps &
      BaseProps<SlColorPicker> &
      BaseEvents
  >;

  /**
   * Copies text data to the clipboard when the user clicks the trigger.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The text value to copy.
   * - `from`: An id that references an element in the same document from which data will be copied. If both this and `value` are
   * present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an
   * attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
   * append a dot and the property name, e.g. `from="el.value"`.
   * - `disabled`: Disables the copy button.
   * - `copy-label`/`copyLabel`: A custom label to show in the tooltip.
   * - `success-label`/`successLabel`: A custom label to show in the tooltip after copying.
   * - `error-label`/`errorLabel`: A custom label to show in the tooltip when a copy error occurs.
   * - `feedback-duration`/`feedbackDuration`: The length of time to show feedback before restoring the default trigger.
   * - `tooltip-placement`/`tooltipPlacement`: The preferred placement of the tooltip.
   * - `hoist`: Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
   * `overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
   * scenarios.
   * - `copyIcon`: undefined (property only)
   * - `successIcon`: undefined (property only)
   * - `errorIcon`: undefined (property only)
   * - `tooltip`: undefined (property only)
   * - `isCopying`: undefined (property only)
   * - `status`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-copy`: Emitted when the data has been copied.
   * - `sl-error`: Emitted when the data could not be copied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `copy-icon`: The icon to show in the default copy state. Works best with `<sl-icon>`.
   * - `success-icon`: The icon to show when the content is copied. Works best with `<sl-icon>`.
   * - `error-icon`: The icon to show when a copy error occurs. Works best with `<sl-icon>`.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--success-color`: The color to use for success feedback. (default: `undefined`)
   * - `--error-color`: The color to use for error feedback. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `button`: The internal `<button>` element.
   * - `copy-icon`: The container that holds the copy icon.
   * - `success-icon`: The container that holds the success icon.
   * - `error-icon`: The container that holds the error icon.
   * - `tooltip__base`: The tooltip's exported `base` part.
   * - `tooltip__base__popup`: The tooltip's exported `popup` part.
   * - `tooltip__base__arrow`: The tooltip's exported `arrow` part.
   * - `tooltip__body`: The tooltip's exported `body` part.
   */
  "wa-copy-button": Partial<
    SlCopyButtonProps &
      SlCopyButtonSolidJsProps &
      BaseProps<SlCopyButton> &
      BaseEvents
  >;

  /**
   * Details show a brief summary and expand to show additional content.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
   * - `summary`: The summary to show in the header. If you need to display HTML, use the `summary` slot instead.
   * - `disabled`: Disables the details so it can't be toggled.
   * - `details`: undefined (property only)
   * - `header`: undefined (property only)
   * - `body`: undefined (property only)
   * - `expandIconSlot`: undefined (property only)
   * - `detailsObserver`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the details opens.
   * - `sl-after-show`: Emitted after the details opens and all animations are complete.
   * - `sl-hide`: Emitted when the details closes.
   * - `sl-after-hide`: Emitted after the details closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The details' main content.
   * - `summary`: The details' summary. Alternatively, you can use the `summary` attribute.
   * - `expand-icon`: Optional expand icon to use instead of the default. Works best with `<sl-icon>`.
   * - `collapse-icon`: Optional collapse icon to use instead of the default. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `show() => void`: Shows the details.
   * - `hide() => void`: Hides the details
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `header`: The header that wraps both the summary and the expand/collapse icon.
   * - `summary`: The container that wraps the summary.
   * - `summary-icon`: The container that wraps the expand/collapse icons.
   * - `content`: The details content.
   */
  "wa-details": Partial<
    SlDetailsProps & SlDetailsSolidJsProps & BaseProps<SlDetails> & BaseEvents
  >;

  /**
   * Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.
   * - `label`: The dialog's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.
   * - `no-header`/`noHeader`: Disables the header. This will also remove the default close button, so please ensure you provide an easy,
   * accessible way for users to dismiss the dialog.
   * - `modal`: Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. (property only)
   * - `dialog`: undefined (property only)
   * - `panel`: undefined (property only)
   * - `overlay`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the dialog opens.
   * - `sl-after-show`: Emitted after the dialog opens and all animations are complete.
   * - `sl-hide`: Emitted when the dialog closes.
   * - `sl-after-hide`: Emitted after the dialog closes and all animations are complete.
   * - `sl-initial-focus`: Emitted when the dialog opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
   * - `sl-request-close`: Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The dialog's main content.
   * - `label`: The dialog's label. Alternatively, you can use the `label` attribute.
   * - `header-actions`: Optional actions to add to the header. Works best with `<sl-icon-button>`.
   * - `footer`: The dialog's footer, usually one or more buttons representing various options.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `show() => void`: Shows the dialog.
   * - `hide() => void`: Hides the dialog
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--width`: The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. (default: `undefined`)
   * - `--header-spacing`: The amount of padding to use for the header. (default: `undefined`)
   * - `--body-spacing`: The amount of padding to use for the body. (default: `undefined`)
   * - `--footer-spacing`: The amount of padding to use for the footer. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `overlay`: The overlay that covers the screen behind the dialog.
   * - `panel`: The dialog's panel (where the dialog and its content are rendered).
   * - `header`: The dialog's header. This element wraps the title and header actions.
   * - `header-actions`: Optional actions to add to the header. Works best with `<sl-icon-button>`.
   * - `title`: The dialog's title.
   * - `close-button`: The close button, an `<sl-icon-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   * - `body`: The dialog's body.
   * - `footer`: The dialog's footer.
   */
  "wa-dialog": Partial<
    SlDialogProps & SlDialogSolidJsProps & BaseProps<SlDialog> & BaseEvents
  >;

  /**
   * Dividers are used to visually separate or group elements.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `vertical`: Draws the divider in a vertical orientation.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleVerticalChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--color`: The color of the divider. (default: `undefined`)
   * - `--width`: The width of the divider. (default: `undefined`)
   * - `--spacing`: The spacing of the divider. (default: `undefined`)
   */
  "wa-divider": Partial<
    SlDividerProps & SlDividerSolidJsProps & BaseProps<SlDivider> & BaseEvents
  >;

  /**
   * Drawers slide in from a container to expose additional options and information.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.
   * - `label`: The drawer's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.
   * - `placement`: The direction from which the drawer will open.
   * - `contained`: By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
   * its parent element, set this attribute and add `position: relative` to the parent.
   * - `no-header`/`noHeader`: Removes the header. This will also remove the default close button, so please ensure you provide an easy,
   * accessible way for users to dismiss the drawer.
   * - `modal`: Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. (property only)
   * - `drawer`: undefined (property only)
   * - `panel`: undefined (property only)
   * - `overlay`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the drawer opens.
   * - `sl-after-show`: Emitted after the drawer opens and all animations are complete.
   * - `sl-hide`: Emitted when the drawer closes.
   * - `sl-after-hide`: Emitted after the drawer closes and all animations are complete.
   * - `sl-initial-focus`: Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
   * - `sl-request-close`: Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The drawer's main content.
   * - `label`: The drawer's label. Alternatively, you can use the `label` attribute.
   * - `header-actions`: Optional actions to add to the header. Works best with `<sl-icon-button>`.
   * - `footer`: The drawer's footer, usually one or more buttons representing various options.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `handleNoModalChange() => void`: undefined
   * - `show() => void`: Shows the drawer.
   * - `hide() => void`: Hides the drawer
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--size`: The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens. (default: `undefined`)
   * - `--header-spacing`: The amount of padding to use for the header. (default: `undefined`)
   * - `--body-spacing`: The amount of padding to use for the body. (default: `undefined`)
   * - `--footer-spacing`: The amount of padding to use for the footer. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `overlay`: The overlay that covers the screen behind the drawer.
   * - `panel`: The drawer's panel (where the drawer and its content are rendered).
   * - `header`: The drawer's header. This element wraps the title and header actions.
   * - `header-actions`: Optional actions to add to the header. Works best with `<sl-icon-button>`.
   * - `title`: The drawer's title.
   * - `close-button`: The close button, an `<sl-icon-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   * - `body`: The drawer's body.
   * - `footer`: The drawer's footer.
   */
  "wa-drawer": Partial<
    SlDrawerProps & SlDrawerSolidJsProps & BaseProps<SlDrawer> & BaseEvents
  >;

  /**
   * Dropdowns expose additional content that "drops down" in a panel.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.
   * - `placement`: The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
   * inside of the viewport.
   * - `disabled`: Disables the dropdown so the panel will not open.
   * - `stay-open-on-select`/`stayOpenOnSelect`: By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
   * dropdowns that allow for multiple interactions.
   * - `distance`: The distance in pixels from which to offset the panel away from its trigger.
   * - `skidding`: The distance in pixels from which to offset the panel along its trigger.
   * - `hoist`: Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   * - `sync`: Syncs the popup width or height to that of the trigger element.
   * - `popup`: undefined (property only)
   * - `trigger`: undefined (property only)
   * - `panel`: undefined (property only)
   * - `containingElement`: The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other
   * components that use a dropdown internally. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the dropdown opens.
   * - `sl-after-show`: Emitted after the dropdown opens and all animations are complete.
   * - `sl-hide`: Emitted when the dropdown closes.
   * - `sl-after-hide`: Emitted after the dropdown closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The dropdown's main content.
   * - `trigger`: The dropdown's trigger, usually a `<sl-button>` element.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focusOnTrigger() => void`: undefined
   * - `getMenu() => void`: undefined
   * - `handleTriggerClick() => void`: undefined
   * - `handleTriggerKeyDown(event: KeyboardEvent) => void`: undefined
   * - `handleTriggerKeyUp(event: KeyboardEvent) => void`: undefined
   * - `handleTriggerSlotChange() => void`: undefined
   * - `updateAccessibleTrigger() => void`: undefined
   * - `show() => void`: Shows the dropdown panel.
   * - `hide() => void`: Hides the dropdown panel
   * - `reposition() => void`: Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   * - `addOpenListeners() => void`: undefined
   * - `removeOpenListeners() => void`: undefined
   * - `handleOpenChange() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper, an `<sl-popup>` element.
   * - `base__popup`: The popup's exported `popup` part. Use this to target the tooltip's popup container.
   * - `trigger`: The container that wraps the trigger.
   * - `panel`: The panel that gets shown when the dropdown is open.
   */
  "wa-dropdown": Partial<
    SlDropdownProps &
      SlDropdownSolidJsProps &
      BaseProps<SlDropdown> &
      BaseEvents
  >;

  /**
   * Formats a number as a human readable bytes value.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The number to format in bytes.
   * - `unit`: The type of unit to display.
   * - `display`: Determines how to display the result, e.g. "100 bytes", "100 b", or "100b".
   */
  "wa-format-bytes": Partial<
    SlFormatBytesProps &
      SlFormatBytesSolidJsProps &
      BaseProps<SlFormatBytes> &
      BaseEvents
  >;

  /**
   * Formats a date/time using the specified locale and options.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `date`: The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
   * recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
   * in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
   * - `weekday`: The format for displaying the weekday.
   * - `era`: The format for displaying the era.
   * - `year`: The format for displaying the year.
   * - `month`: The format for displaying the month.
   * - `day`: The format for displaying the day.
   * - `hour`: The format for displaying the hour.
   * - `minute`: The format for displaying the minute.
   * - `second`: The format for displaying the second.
   * - `time-zone-name`/`timeZoneName`: The format for displaying the time.
   * - `time-zone`/`timeZone`: The time zone to express the time in.
   * - `hour-format`/`hourFormat`: The format for displaying the hour.
   */
  "wa-format-date": Partial<
    SlFormatDateProps &
      SlFormatDateSolidJsProps &
      BaseProps<SlFormatDate> &
      BaseEvents
  >;

  /**
   * Formats a number using the specified locale and options.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The number to format.
   * - `type`: The formatting style to use.
   * - `no-grouping`/`noGrouping`: Turns off grouping separators.
   * - `currency`: The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting.
   * - `currency-display`/`currencyDisplay`: How to display the currency.
   * - `minimum-integer-digits`/`minimumIntegerDigits`: The minimum number of integer digits to use. Possible values are 1-21.
   * - `minimum-fraction-digits`/`minimumFractionDigits`: The minimum number of fraction digits to use. Possible values are 0-20.
   * - `maximum-fraction-digits`/`maximumFractionDigits`: The maximum number of fraction digits to use. Possible values are 0-0.
   * - `minimum-significant-digits`/`minimumSignificantDigits`: The minimum number of significant digits to use. Possible values are 1-21.
   * - `maximum-significant-digits`/`maximumSignificantDigits`: The maximum number of significant digits to use,. Possible values are 1-21.
   */
  "wa-format-number": Partial<
    SlFormatNumberProps &
      SlFormatNumberSolidJsProps &
      BaseProps<SlFormatNumber> &
      BaseEvents
  >;

  /**
   * Icons are symbols that can be used to represent various options within an application.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the icon to draw. Available names depend on the icon library being used.
   * - `src`: An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks.
   * - `label`: An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
   * ignored by assistive devices.
   * - `library`: The name of a registered custom icon library.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-load`: Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
   * - `sl-error`: Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleLabelChange() => void`: undefined
   * - `setIcon() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `svg`: The internal SVG element.
   * - `use`: The <use> element generated when using `spriteSheet: true`
   */
  "wa-icon": Partial<
    SlIconProps & SlIconSolidJsProps & BaseProps<SlIcon> & BaseEvents
  >;

  /**
   * Includes give you the power to embed external HTML files into the page.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `src`: The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
   * code and can result in XSS attacks.
   * - `mode`: The fetch mode to use.
   * - `allow-scripts`/`allowScripts`: Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
   * code and can result in XSS attacks.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-load`: Emitted when the included file is loaded.
   * - `sl-error`: Emitted when the included file fails to load due to an error.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleSrcChange() => void`: undefined
   */
  "wa-include": Partial<
    SlIncludeProps & SlIncludeSolidJsProps & BaseProps<SlInclude> & BaseEvents
  >;

  /**
   * Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the icon to draw. Available names depend on the icon library being used.
   * - `library`: The name of a registered custom icon library.
   * - `src`: An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks.
   * - `href`: When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   * - `target`: Tells the browser where to open the link. Only used when `href` is set.
   * - `download`: Tells the browser to download the linked file as this filename. Only used when `href` is set.
   * - `label`: A description that gets read by assistive devices. For optimal accessibility, you should always include a label
   * that describes what the icon button does.
   * - `disabled`: Disables the button.
   * - `button`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the icon button loses focus.
   * - `sl-focus`: Emitted when the icon button gains focus.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `click() => void`: Simulates a click on the icon button.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the icon button.
   * - `blur() => void`: Removes focus from the icon button.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-icon-button": Partial<
    SlIconButtonProps &
      SlIconButtonSolidJsProps &
      BaseProps<SlIconButton> &
      BaseEvents
  >;

  /**
   * Compare visual differences between similar photos with a sliding panel.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `position`: The position of the divider as a percentage.
   * - `base`: undefined (property only)
   * - `handle`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-change`: Emitted when the position changes.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `before`: The before image, an `<img>` or `<svg>` element.
   * - `after`: The after image, an `<img>` or `<svg>` element.
   * - `handle`: The icon used inside the handle.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handlePositionChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--divider-width`: The width of the dividing line. (default: `undefined`)
   * - `--handle-size`: The size of the compare handle. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `before`: The container that wraps the before image.
   * - `after`: The container that wraps the after image.
   * - `divider`: The divider that separates the images.
   * - `handle`: The handle that the user drags to expose the after image.
   */
  "wa-image-comparer": Partial<
    SlImageComparerProps &
      SlImageComparerSolidJsProps &
      BaseProps<SlImageComparer> &
      BaseEvents
  >;

  /**
   * Inputs collect data from the user.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `type`: The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   * - `name`: The name of the input, submitted as a name/value pair with form data.
   * - `value`: The current value of the input, submitted as a name/value pair with form data.
   * - `size`: The input's size.
   * - `filled`: Draws a filled input.
   * - `pill`: Draws a pill-style input with rounded edges.
   * - `label`: The input's label. If you need to display HTML, use the `label` slot instead.
   * - `help-text`/`helpText`: The input's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `clearable`: Adds a clear button when the input is not empty.
   * - `disabled`: Disables the input.
   * - `placeholder`: Placeholder text to show as a hint when the input is empty.
   * - `readonly`: Makes the input readonly.
   * - `password-toggle`/`passwordToggle`: Adds a button to toggle the password's visibility. Only applies to password types.
   * - `password-visible`/`passwordVisible`: Determines whether or not the password is currently visible. Only applies to password input types.
   * - `no-spin-buttons`/`noSpinButtons`: Hides the browser's built-in increment/decrement spin buttons for number inputs.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Makes the input a required field.
   * - `pattern`: A regular expression pattern to validate input against.
   * - `minlength`: The minimum length of input that will be considered valid.
   * - `maxlength`: The maximum length of input that will be considered valid.
   * - `min`: The input's minimum value. Only applies to date and number input types.
   * - `max`: The input's maximum value. Only applies to date and number input types.
   * - `step`: Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
   * implied, allowing any numeric value. Only applies to date and number input types.
   * - `autocapitalize`: Controls whether and how text input is automatically capitalized as it is entered by the user.
   * - `autocorrect`: Indicates whether the browser's autocorrect feature is on or off.
   * - `autocomplete`: Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   * - `autofocus`: Indicates that the input should receive focus on page load.
   * - `enterkeyhint`: Used to customize the label or icon of the Enter key on virtual keyboards.
   * - `spellcheck`: Enables spell checking on the input.
   * - `inputmode`: Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   * - `input`: undefined (property only)
   * - `defaultValue`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `valueAsDate`: Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error. (property only)
   * - `valueAsNumber`: Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-change`: Emitted when an alteration to the control's value is committed by the user.
   * - `sl-clear`: Emitted when the clear button is activated.
   * - `sl-focus`: Emitted when the control gains focus.
   * - `sl-input`: Emitted when the control receives input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The input's label. Alternatively, you can use the `label` attribute.
   * - `prefix`: Used to prepend a presentational icon or similar element to the input.
   * - `suffix`: Used to append a presentational icon or similar element to the input.
   * - `clear-icon`: An icon to use in lieu of the default clear icon.
   * - `show-password-icon`: An icon to use in lieu of the default show password icon.
   * - `hide-password-icon`: An icon to use in lieu of the default hide password icon.
   * - `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleStepChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the input.
   * - `blur() => void`: Removes focus from the input.
   * - `select() => void`: Selects all the text in the input.
   * - `setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the text selection (0-based).
   * - `setRangeText(replacement: string, start?: number, end?: number, selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve') => void`: Replaces a range of text with a new string.
   * - `showPicker() => void`: Displays the browser picker for an input element (only works if the browser supports it for the input type).
   * - `stepUp() => void`: Increments the value of a numeric input type by the value of the step attribute.
   * - `stepDown() => void`: Decrements the value of a numeric input type by the value of the step attribute.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and help text.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The input's wrapper.
   * - `form-control-help-text`: The help text's wrapper.
   * - `base`: The component's base wrapper.
   * - `input`: The internal `<input>` control.
   * - `prefix`: The container that wraps the prefix.
   * - `clear-button`: The clear button.
   * - `password-toggle-button`: The password toggle button.
   * - `suffix`: The container that wraps the suffix.
   */
  "wa-input": Partial<
    SlInputProps & SlInputSolidJsProps & BaseProps<SlInput> & BaseEvents
  >;

  /**
   * Menus provide a list of options for the user to choose from.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `defaultSlot`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-select`: Emitted when a menu item is selected.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The menu's content, including menu items, menu labels, and dividers.
   */
  "wa-menu": Partial<
    SlMenuProps & SlMenuSolidJsProps & BaseProps<SlMenu> & BaseEvents
  >;

  /**
   * Menu labels are used to describe a group of menu items.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The menu label's content.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-menu-label": Partial<
    SlMenuLabelProps &
      SlMenuLabelSolidJsProps &
      BaseProps<SlMenuLabel> &
      BaseEvents
  >;

  /**
   * The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `attr`: Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
   * `attr="class id title"`. To watch all attributes, use `*`.
   * - `attr-old-value`/`attrOldValue`: Indicates whether or not the attribute's previous value should be recorded when monitoring changes.
   * - `char-data`/`charData`: Watches for changes to the character data contained within the node.
   * - `char-data-old-value`/`charDataOldValue`: Indicates whether or not the previous value of the node's text should be recorded.
   * - `child-list`/`childList`: Watches for the addition or removal of new child nodes.
   * - `disabled`: Disables the observer.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-mutation`: Emitted when a mutation occurs.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content to watch for mutations.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleChange() => void`: undefined
   */
  "wa-mutation-observer": Partial<
    SlMutationObserverProps &
      SlMutationObserverSolidJsProps &
      BaseProps<SlMutationObserver> &
      BaseEvents
  >;

  /**
   * Menu items provide options for the user to pick from in a menu.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `type`: The type of menu item to render. To use `checked`, this value must be set to `checkbox`.
   * - `checked`: Draws the item in a checked state.
   * - `value`: A unique value to store in the menu item. This can be used as a way to identify menu items when selected.
   * - `loading`: Draws the menu item in a loading state.
   * - `disabled`: Draws the menu item in a disabled state, preventing selection.
   * - `defaultSlot`: undefined (property only)
   * - `menuItem`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The menu item's label.
   * - `prefix`: Used to prepend an icon or similar element to the menu item.
   * - `suffix`: Used to append an icon or similar element to the menu item.
   * - `submenu`: Used to denote a nested menu.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleCheckedChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `handleTypeChange() => void`: undefined
   * - `getTextLabel() => void`: Returns a text label based on the contents of the menu item's default slot.
   * - `isSubmenu() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--submenu-offset`: The distance submenus shift to overlap the parent menu. (default: `-2px`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `checked-icon`: The checked icon, which is only visible when the menu item is checked.
   * - `prefix`: The prefix container.
   * - `label`: The menu item label.
   * - `suffix`: The suffix container.
   * - `spinner`: The spinner that shows when the menu item is in the loading state.
   * - `spinner__base`: The spinner's base part.
   * - `submenu-icon`: The submenu icon, visible only when the menu item has a submenu (not yet implemented).
   */
  "wa-menu-item": Partial<
    SlMenuItemProps &
      SlMenuItemSolidJsProps &
      BaseProps<SlMenuItem> &
      BaseEvents
  >;

  /**
   * Options define the selectable items within various form controls such as [select](/components/select).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The option's value. When selected, the containing form control will receive this value. The value must be unique
   * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
   * multiple values.
   * - `disabled`: Draws the option in a disabled state, preventing selection.
   * - `defaultSlot`: undefined (property only)
   * - `current`: undefined (property only)
   * - `selected`: undefined (property only)
   * - `hasHover`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The option's label.
   * - `prefix`: Used to prepend an icon or similar element to the menu item.
   * - `suffix`: Used to append an icon or similar element to the menu item.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleSelectedChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `getTextLabel() => void`: Returns a plain text label based on the option's content.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `checked-icon`: The checked icon, an `<sl-icon>` element.
   * - `base`: The component's base wrapper.
   * - `label`: The option's label.
   * - `prefix`: The container that wraps the prefix.
   * - `suffix`: The container that wraps the suffix.
   */
  "wa-option": Partial<
    SlOptionProps & SlOptionSolidJsProps & BaseProps<SlOption> & BaseEvents
  >;

  /**
   * Popup is a utility that lets you declaratively anchor "popup" containers to another element.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `anchor`: The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
   * element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
   * `anchor` slot instead.
   * - `active`: Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
   * down and the popup will be hidden.
   * - `placement`: The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
   * panel inside of the viewport.
   * - `strategy`: Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is
   * clipped, using a `fixed` position strategy can often workaround it.
   * - `distance`: The distance in pixels from which to offset the panel away from its anchor.
   * - `skidding`: The distance in pixels from which to offset the panel along its anchor.
   * - `arrow`: Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
   * `--arrow-color` custom properties. For additional customizations, you can also target the arrow using
   * `::part(arrow)` in your stylesheet.
   * - `arrow-placement`/`arrowPlacement`: The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
   * anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
   * align the arrow to the start, end, or center of the popover instead.
   * - `arrow-padding`/`arrowPadding`: The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
   * this will prevent it from overflowing the corners.
   * - `flip`: When set, placement of the popup will flip to the opposite site to keep it in view. You can use
   * `flipFallbackPlacements` to further configure how the fallback placement is determined.
   * - `flip-fallback-placements`/`flipFallbackPlacements`: If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
   * string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
   * fallback strategy will be used instead.
   * - `flip-fallback-strategy`/`flipFallbackStrategy`: When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
   * the popup should be positioned using the best available fit based on available space or as it was initially
   * preferred.
   * - `flipBoundary`: The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   * - `flip-padding`/`flipPadding`: The amount of padding, in pixels, to exceed before the flip behavior will occur.
   * - `shift`: Moves the popup along the axis to keep it in view when clipped.
   * - `shiftBoundary`: The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   * - `shift-padding`/`shiftPadding`: The amount of padding, in pixels, to exceed before the shift behavior will occur.
   * - `auto-size`/`autoSize`: When set, this will cause the popup to automatically resize itself to prevent it from overflowing.
   * - `sync`: Syncs the popup's width or height to that of the anchor element.
   * - `autoSizeBoundary`: The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   * - `auto-size-padding`/`autoSizePadding`: The amount of padding, in pixels, to exceed before the auto-size behavior will occur.
   * - `hover-bridge`/`hoverBridge`: When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
   * gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
   * because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
   * active.
   * - `popup`: A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-reposition`: Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The popup's content.
   * - `anchor`: The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the `anchor` attribute or property instead.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `reposition() => void`: Forces the popup to recalculate and reposition itself.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--arrow-size`: The size of the arrow. Note that an arrow won't be shown unless the `arrow` attribute is used. (default: `6px`)
   * - `--arrow-color`: The color of the arrow. (default: `var(--sl-color-neutral-0)`)
   * - `--auto-size-available-width`: A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. (default: `undefined`)
   * - `--auto-size-available-height`: A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `arrow`: The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and maybe a border or box shadow.
   * - `popup`: The popup's container. Useful for setting a background color, box shadow, etc.
   * - `hover-bridge`: The hover bridge element. Only available when the `hover-bridge` option is enabled.
   */
  "wa-popup": Partial<
    SlPopupProps & SlPopupSolidJsProps & BaseProps<SlPopup> & BaseEvents
  >;

  /**
   * Progress bars are used to show the status of an ongoing operation.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The current progress as a percentage, 0 to 100.
   * - `indeterminate`: When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.
   * - `label`: A custom label for assistive devices.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: A label to show inside the progress indicator.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--height`: The progress bar's height. (default: `undefined`)
   * - `--track-color`: The color of the track. (default: `undefined`)
   * - `--indicator-color`: The color of the indicator. (default: `undefined`)
   * - `--label-color`: The color of the label. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `indicator`: The progress bar's indicator.
   * - `label`: The progress bar's label.
   */
  "wa-progress-bar": Partial<
    SlProgressBarProps &
      SlProgressBarSolidJsProps &
      BaseProps<SlProgressBar> &
      BaseEvents
  >;

  /**
   * Progress rings are used to show the progress of a determinate operation in a circular fashion.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The current progress as a percentage, 0 to 100.
   * - `label`: A custom label for assistive devices.
   * - `indicator`: undefined (property only)
   * - `indicatorOffset`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: A label to show inside the ring.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--size`: The diameter of the progress ring (cannot be a percentage). (default: `undefined`)
   * - `--track-width`: The width of the track. (default: `undefined`)
   * - `--track-color`: The color of the track. (default: `undefined`)
   * - `--indicator-width`: The width of the indicator. Defaults to the track width. (default: `undefined`)
   * - `--indicator-color`: The color of the indicator. (default: `undefined`)
   * - `--indicator-transition-duration`: The duration of the indicator's transition when the value changes. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `label`: The progress ring label.
   */
  "wa-progress-ring": Partial<
    SlProgressRingProps &
      SlProgressRingSolidJsProps &
      BaseProps<SlProgressRing> &
      BaseEvents
  >;

  /**
   * Radios allow the user to select a single option from a group.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The radio's value. When selected, the radio group will receive this value.
   * - `size`: The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
   * attribute can typically be omitted.
   * - `disabled`: Disables the radio.
   * - `checked`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-focus`: Emitted when the control gains focus.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The radio's label.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleCheckedChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `control`: The circular container that wraps the radio's checked state.
   * - `control--checked`: The radio control when the radio is checked.
   * - `checked-icon`: The checked icon, an `<sl-icon>` element.
   * - `label`: The container that wraps the radio's label.
   */
  "wa-radio": Partial<
    SlRadioProps & SlRadioSolidJsProps & BaseProps<SlRadio> & BaseEvents
  >;

  /**
   * Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The QR code's value.
   * - `label`: The label for assistive devices to announce. If unspecified, the value will be used instead.
   * - `size`: The size of the QR code, in pixels.
   * - `fill`: The fill color. This can be any valid CSS color, but not a CSS custom property.
   * - `background`: The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property.
   * - `radius`: The edge radius of each module. Must be between 0 and 0.5.
   * - `error-correction`/`errorCorrection`: The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html)
   * - `canvas`: undefined (property only)
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `generate() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-qr-code": Partial<
    SlQrCodeProps & SlQrCodeSolidJsProps & BaseProps<SlQrCode> & BaseEvents
  >;

  /**
   * Radios buttons allow the user to select a single option from a group using a button-like control.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The radio's value. When selected, the radio group will receive this value.
   * - `disabled`: Disables the radio button.
   * - `size`: The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so
   * this attribute can typically be omitted.
   * - `pill`: Draws a pill-style radio button with rounded edges.
   * - `input`: undefined (property only)
   * - `hiddenInput`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the button loses focus.
   * - `sl-focus`: Emitted when the button gains focus.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The radio button's label.
   * - `prefix`: A presentational prefix icon or similar element.
   * - `suffix`: A presentational suffix icon or similar element.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the radio button.
   * - `blur() => void`: Removes focus from the radio button.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `button`: The internal `<button>` element.
   * - `button--checked`: The internal button element when the radio button is checked.
   * - `prefix`: The container that wraps the prefix.
   * - `label`: The container that wraps the radio button's label.
   * - `suffix`: The container that wraps the suffix.
   */
  "wa-radio-button": Partial<
    SlRadioButtonProps &
      SlRadioButtonSolidJsProps &
      BaseProps<SlRadioButton> &
      BaseEvents
  >;

  /**
   * Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   * - `help-text`/`helpText`: The radio groups's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `name`: The name of the radio group, submitted as a name/value pair with form data.
   * - `value`: The current value of the radio group, submitted as a name/value pair with form data.
   * - `size`: The radio group's size. This size will be applied to all child radios and radio buttons.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Ensures a child radio is checked before allowing the containing form to submit.
   * - `defaultSlot`: undefined (property only)
   * - `validationInput`: undefined (property only)
   * - `defaultValue`: undefined (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-change`: Emitted when the radio group's selected value changes.
   * - `sl-input`: Emitted when the radio group receives user input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The default slot where `<sl-radio>` or `<sl-radio-button>` elements are placed.
   * - `label`: The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
   * - `help-text`: Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleSizeChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => boolean`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message = '') => void`: Sets a custom validation message. Pass an empty string to restore validity.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the radio-group.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and help text.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The input's wrapper.
   * - `form-control-help-text`: The help text's wrapper.
   * - `button-group`: The button group that wraps radio buttons.
   * - `button-group__base`: The button group's `base` part.
   */
  "wa-radio-group": Partial<
    SlRadioGroupProps &
      SlRadioGroupSolidJsProps &
      BaseProps<SlRadioGroup> &
      BaseEvents
  >;

  /**
   * Ranges allow the user to select a single value within a given range using a slider.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the range, submitted as a name/value pair with form data.
   * - `value`: The current value of the range, submitted as a name/value pair with form data.
   * - `label`: The range's label. If you need to display HTML, use the `label` slot instead.
   * - `help-text`/`helpText`: The range's help text. If you need to display HTML, use the help-text slot instead.
   * - `disabled`: Disables the range.
   * - `min`: The minimum acceptable value of the range.
   * - `max`: The maximum acceptable value of the range.
   * - `step`: The interval at which the range will increase and decrease.
   * - `tooltip`: The preferred placement of the range's tooltip.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `input`: undefined (property only)
   * - `output`: undefined (property only)
   * - `tooltipFormatter`: A function used to format the tooltip's value. The range's value is passed as the first and only argument. The
   * function should return a string to display in the tooltip. (property only)
   * - `defaultValue`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-change`: Emitted when an alteration to the control's value is committed by the user.
   * - `sl-focus`: Emitted when the control gains focus.
   * - `sl-input`: Emitted when the control receives input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The range's label. Alternatively, you can use the `label` attribute.
   * - `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleValueChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `syncRange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the range.
   * - `blur() => void`: Removes focus from the range.
   * - `stepUp() => void`: Increments the value of the range by the value of the step attribute.
   * - `stepDown() => void`: Decrements the value of the range by the value of the step attribute.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--thumb-size`: The size of the thumb. (default: `undefined`)
   * - `--tooltip-offset`: The vertical distance the tooltip is offset from the track. (default: `undefined`)
   * - `--track-color-active`: The color of the portion of the track that represents the current value. (default: `undefined`)
   * - `--track-color-inactive`: The of the portion of the track that represents the remaining value. (default: `undefined`)
   * - `--track-height`: The height of the track. (default: `undefined`)
   * - `--track-active-offset`: The point of origin of the active track. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and help text.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The range's wrapper.
   * - `form-control-help-text`: The help text's wrapper.
   * - `base`: The component's base wrapper.
   * - `input`: The internal `<input>` element.
   * - `tooltip`: The range's tooltip.
   */
  "wa-range": Partial<
    SlRangeProps & SlRangeSolidJsProps & BaseProps<SlRange> & BaseEvents
  >;

  /**
   * Ratings give users a way to quickly view and provide feedback.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: A label that describes the rating to assistive devices.
   * - `value`: The current rating.
   * - `max`: The highest rating to show.
   * - `precision`: The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
   * attribute to `0.5`.
   * - `readonly`: Makes the rating readonly.
   * - `disabled`: Disables the rating.
   * - `getSymbol`: A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
   * The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
   * well with `<sl-icon>` elements.
   * - `rating`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-change`: Emitted when the rating's value changes.
   * - `sl-hover`: Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleHoverValueChange() => void`: undefined
   * - `handleIsHoveringChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the rating.
   * - `blur() => void`: Removes focus from the rating.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--symbol-color`: The inactive color for symbols. (default: `undefined`)
   * - `--symbol-color-active`: The active color for symbols. (default: `undefined`)
   * - `--symbol-size`: The size of symbols. (default: `undefined`)
   * - `--symbol-spacing`: The spacing to use around symbols. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-rating": Partial<
    SlRatingProps & SlRatingSolidJsProps & BaseProps<SlRating> & BaseEvents
  >;

  /**
   * Outputs a localized time phrase relative to the current date and time.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `date`: The date from which to calculate time from. If not set, the current date and time will be used. When passing a
   * string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
   * a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
   * - `format`: The formatting style to use.
   * - `numeric`: When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
   * "1 day ago" and "in 1 day" will be shown.
   * - `sync`: Keep the displayed value up to date as time passes.
   */
  "wa-relative-time": Partial<
    SlRelativeTimeProps &
      SlRelativeTimeSolidJsProps &
      BaseProps<SlRelativeTime> &
      BaseEvents
  >;

  /**
   * The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `disabled`: Disables the observer.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-resize`: Emitted when the element is resized.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: One or more elements to watch for resizing.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   */
  "wa-resize-observer": Partial<
    SlResizeObserverProps &
      SlResizeObserverSolidJsProps &
      BaseProps<SlResizeObserver> &
      BaseEvents
  >;

  /**
   * Skeletons are used to provide a visual representation of where content will eventually be drawn.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `effect`: Determines which effect the skeleton will use.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--border-radius`: The skeleton's border radius. (default: `undefined`)
   * - `--color`: The color of the skeleton. (default: `undefined`)
   * - `--sheen-color`: The sheen color when the skeleton is in its loading state. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `indicator`: The skeleton's indicator which is responsible for its color and animation.
   */
  "wa-skeleton": Partial<
    SlSkeletonProps &
      SlSkeletonSolidJsProps &
      BaseProps<SlSkeleton> &
      BaseEvents
  >;

  /**
   * Selects allow you to choose items from a menu of predefined options.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the select, submitted as a name/value pair with form data.
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `size`: The select's size.
   * - `placeholder`: Placeholder text to show as a hint when the select is empty.
   * - `multiple`: Allows more than one option to be selected.
   * - `max-options-visible`/`maxOptionsVisible`: The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
   * indicate the number of additional items that are selected. Set to 0 to remove the limit.
   * - `disabled`: Disables the select control.
   * - `clearable`: Adds a clear button when the select is not empty.
   * - `open`: Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
   * - `hoist`: Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   * - `filled`: Draws a filled select.
   * - `pill`: Draws a pill-style select with rounded edges.
   * - `label`: The select's label. If you need to display HTML, use the `label` slot instead.
   * - `placement`: The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   * - `help-text`/`helpText`: The select's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: The select's required attribute.
   * - `getTag`: A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
   * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
   * the specified value.
   * - `popup`: undefined (property only)
   * - `combobox`: undefined (property only)
   * - `displayInput`: undefined (property only)
   * - `valueInput`: undefined (property only)
   * - `listbox`: undefined (property only)
   * - `displayLabel`: undefined (property only)
   * - `currentOption`: undefined (property only)
   * - `selectedOptions`: undefined (property only)
   * - `value`: The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
   * value attribute will be a space-delimited list of values based on the options selected, and the value property will
   * be an array. **For this reason, values must not contain spaces.** (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-change`: Emitted when the control's value changes.
   * - `sl-clear`: Emitted when the control's value is cleared.
   * - `sl-input`: Emitted when the control receives input.
   * - `sl-focus`: Emitted when the control gains focus.
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-show`: Emitted when the select's menu opens.
   * - `sl-after-show`: Emitted after the select's menu opens and all animations are complete.
   * - `sl-hide`: Emitted when the select's menu closes.
   * - `sl-after-hide`: Emitted after the select's menu closes and all animations are complete.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The listbox options. Must be `<sl-option>` elements. You can use `<sl-divider>` to group items visually.
   * - `label`: The input's label. Alternatively, you can use the `label` attribute.
   * - `prefix`: Used to prepend a presentational icon or similar element to the combobox.
   * - `suffix`: Used to append a presentational icon or similar element to the combobox.
   * - `clear-icon`: An icon to use in lieu of the default clear icon.
   * - `expand-icon`: The icon to show when the control is expanded and collapsed. Rotates on open and close.
   * - `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDefaultSlotChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `handleOpenChange() => void`: undefined
   * - `show() => void`: Shows the listbox.
   * - `hide() => void`: Hides the listbox.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the control.
   * - `blur() => void`: Removes focus from the control.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and help text.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The select's wrapper.
   * - `form-control-help-text`: The help text's wrapper.
   * - `combobox`: The container the wraps the prefix, suffix, combobox, clear icon, and expand button.
   * - `prefix`: The container that wraps the prefix slot.
   * - `suffix`: The container that wraps the suffix slot.
   * - `display-input`: The element that displays the selected option's label, an `<input>` element.
   * - `listbox`: The listbox container where options are slotted.
   * - `tags`: The container that houses option tags when `multiselect` is used.
   * - `tag`: The individual tags that represent each multiselect option.
   * - `tag__base`: The tag's base part.
   * - `tag__content`: The tag's content part.
   * - `tag__remove-button`: The tag's remove button.
   * - `tag__remove-button__base`: The tag's remove button base part.
   * - `clear-button`: The clear button.
   * - `expand-icon`: The container that wraps the expand icon.
   */
  "wa-select": Partial<
    SlSelectProps & SlSelectSolidJsProps & BaseProps<SlSelect> & BaseEvents
  >;

  /**
   * Spinners are used to show the progress of an indeterminate operation.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--track-width`: The width of the track. (default: `undefined`)
   * - `--track-color`: The color of the track. (default: `undefined`)
   * - `--indicator-color`: The color of the spinner's indicator. (default: `undefined`)
   * - `--speed`: The time it takes for the spinner to complete one animation cycle. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-spinner": Partial<
    SlSpinnerProps & SlSpinnerSolidJsProps & BaseProps<SlSpinner> & BaseEvents
  >;

  /**
   * Switches allow the user to toggle an option on or off.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the switch, submitted as a name/value pair with form data.
   * - `value`: The current value of the switch, submitted as a name/value pair with form data.
   * - `size`: The switch's size.
   * - `disabled`: Disables the switch.
   * - `checked`: Draws the switch in a checked state.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Makes the switch a required field.
   * - `help-text`/`helpText`: The switch's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `input`: undefined (property only)
   * - `defaultChecked`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-change`: Emitted when the control's checked state changes.
   * - `sl-input`: Emitted when the control receives input.
   * - `sl-focus`: Emitted when the control gains focus.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The switch's label.
   * - `help-text`: Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleCheckedChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `click() => void`: Simulates a click on the switch.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the switch.
   * - `blur() => void`: Removes focus from the switch.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--width`: The width of the switch. (default: `undefined`)
   * - `--height`: The height of the switch. (default: `undefined`)
   * - `--thumb-size`: The size of the thumb. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `control`: The control that houses the switch's thumb.
   * - `thumb`: The switch's thumb.
   * - `label`: The switch's label.
   * - `form-control-help-text`: The help text's wrapper.
   */
  "wa-switch": Partial<
    SlSwitchProps & SlSwitchSolidJsProps & BaseProps<SlSwitch> & BaseEvents
  >;

  /**
   * Split panels display two adjacent panels, allowing the user to reposition them.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `position`: The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
   * container's initial size.
   * - `position-in-pixels`/`positionInPixels`: The current position of the divider from the primary panel's edge in pixels.
   * - `vertical`: Draws the split panel in a vertical orientation with the start and end panels stacked.
   * - `disabled`: Disables resizing. Note that the position may still change as a result of resizing the host element.
   * - `primary`: If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
   * primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
   * host element is resized.
   * - `snap`: Either one or more space-separated values at which the divider should snap, in pixels, percentages, or repeat expressions e.g. `'100px 50% 500px' or `repeat(50%) 10px`,
   * or a function which takes in a `SnapFunctionParams`, and returns a position to snap to, e.g. `({ pos }) => Math.round(pos / 8) * 8`.
   * - `snap-threshold`/`snapThreshold`: How close the divider must be to a snap point until snapping occurs.
   * - `divider`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-reposition`: Emitted when the divider's position changes.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `start`: Content to place in the start panel.
   * - `end`: Content to place in the end panel.
   * - `divider`: The divider. Useful for slotting in a custom icon that renders as a handle.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handlePositionChange() => void`: undefined
   * - `handlePositionInPixelsChange() => void`: undefined
   * - `handleVerticalChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--divider-width`: The width of the visible divider. (default: `4px`)
   * - `--divider-hit-area`: The invisible region around the divider where dragging can occur. This is usually wider than the divider to facilitate easier dragging. (default: `12px`)
   * - `--min`: The minimum allowed size of the primary panel. (default: `0`)
   * - `--max`: The maximum allowed size of the primary panel. (default: `100%`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `start`: The start panel.
   * - `end`: The end panel.
   * - `panel`: Targets both the start and end panels.
   * - `divider`: The divider that separates the start and end panels.
   */
  "wa-split-panel": Partial<
    SlSplitPanelProps &
      SlSplitPanelSolidJsProps &
      BaseProps<SlSplitPanel> &
      BaseEvents
  >;

  /**
   * Tab groups organize content into a container that shows one section at a time.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `placement`: The placement of the tabs.
   * - `activation`: When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
   * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
   * - `no-scroll-controls`/`noScrollControls`: Disables the scroll arrows that appear when tabs overflow.
   * - `fixed-scroll-controls`/`fixedScrollControls`: Prevent scroll buttons from being hidden when inactive.
   * - `tabGroup`: undefined (property only)
   * - `body`: undefined (property only)
   * - `nav`: undefined (property only)
   * - `indicator`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-tab-show`: Emitted when a tab is shown.
   * - `sl-tab-hide`: Emitted when a tab is hidden.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Used for grouping tab panels in the tab group. Must be `<sl-tab-panel>` elements.
   * - `nav`: Used for grouping tabs in the tab group. Must be `<sl-tab>` elements.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `updateScrollControls() => void`: undefined
   * - `syncIndicator() => void`: undefined
   * - `show(panel: string) => void`: Shows the specified tab panel.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--indicator-color`: The color of the active tab indicator. (default: `undefined`)
   * - `--track-color`: The color of the indicator's track (the line that separates tabs from panels). (default: `undefined`)
   * - `--track-width`: The width of the indicator's track (the line that separates tabs from panels). (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `nav`: The tab group's navigation container where tabs are slotted in.
   * - `tabs`: The container that wraps the tabs.
   * - `active-tab-indicator`: The line that highlights the currently selected tab.
   * - `body`: The tab group's body where tab panels are slotted in.
   * - `scroll-button`: The previous/next scroll buttons that show when tabs are scrollable, an `<sl-icon-button>`.
   * - `scroll-button--start`: The starting scroll button.
   * - `scroll-button--end`: The ending scroll button.
   * - `scroll-button__base`: The scroll button's exported `base` part.
   */
  "wa-tab-group": Partial<
    SlTabGroupProps &
      SlTabGroupSolidJsProps &
      BaseProps<SlTabGroup> &
      BaseEvents
  >;

  /**
   * Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `panel`: The name of the tab panel this tab is associated with. The panel must be located in the same tab group.
   * - `active`: Draws the tab in an active state.
   * - `closable`: Makes the tab closable and shows a close button.
   * - `disabled`: Disables the tab and prevents selection.
   * - `tab`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-close`: Emitted when the tab is closable and the close button is activated.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The tab's label.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleActiveChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `close-button`: The close button, an `<sl-icon-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   */
  "wa-tab": Partial<
    SlTabProps & SlTabSolidJsProps & BaseProps<SlTab> & BaseEvents
  >;

  /**
   * Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The tab panel's name.
   * - `active`: When true, the tab panel will be shown.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The tab panel's content.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleActiveChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--padding`: The tab panel's padding. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-tab-panel": Partial<
    SlTabPanelProps &
      SlTabPanelSolidJsProps &
      BaseProps<SlTabPanel> &
      BaseEvents
  >;

  /**
   * Textareas collect data from the user and allow multiple lines of text.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the textarea, submitted as a name/value pair with form data.
   * - `value`: The current value of the textarea, submitted as a name/value pair with form data.
   * - `size`: The textarea's size.
   * - `filled`: Draws a filled textarea.
   * - `label`: The textarea's label. If you need to display HTML, use the `label` slot instead.
   * - `help-text`/`helpText`: The textarea's help text. If you need to display HTML, use the `help-text` slot instead.
   * - `placeholder`: Placeholder text to show as a hint when the input is empty.
   * - `rows`: The number of rows to display by default.
   * - `resize`: Controls how the textarea can be resized.
   * - `disabled`: Disables the textarea.
   * - `readonly`: Makes the textarea readonly.
   * - `form`: By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   * - `required`: Makes the textarea a required field.
   * - `minlength`: The minimum length of input that will be considered valid.
   * - `maxlength`: The maximum length of input that will be considered valid.
   * - `autocapitalize`: Controls whether and how text input is automatically capitalized as it is entered by the user.
   * - `autocorrect`: Indicates whether the browser's autocorrect feature is on or off.
   * - `autocomplete`: Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   * - `autofocus`: Indicates that the input should receive focus on page load.
   * - `enterkeyhint`: Used to customize the label or icon of the Enter key on virtual keyboards.
   * - `spellcheck`: Enables spell checking on the textarea.
   * - `inputmode`: Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   * - `input`: undefined (property only)
   * - `sizeAdjuster`: undefined (property only)
   * - `defaultValue`: The default value of the form control. Primarily used for resetting the form control. (property only)
   * - `validity`: Gets the validity state object (property only) (readonly)
   * - `validationMessage`: Gets the validation message (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-blur`: Emitted when the control loses focus.
   * - `sl-change`: Emitted when an alteration to the control's value is committed by the user.
   * - `sl-focus`: Emitted when the control gains focus.
   * - `sl-input`: Emitted when the control receives input.
   * - `sl-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The textarea's label. Alternatively, you can use the `label` attribute.
   * - `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleRowsChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the textarea.
   * - `blur() => void`: Removes focus from the textarea.
   * - `select() => void`: Selects all the text in the textarea.
   * - `scrollPosition(position?: { top?: number; left?: number }) => { top: number; left: number } | undefined`: Gets or sets the textarea's scroll position.
   * - `setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the text selection (0-based).
   * - `setRangeText(replacement: string, start?: number, end?: number, selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve') => void`: Replaces a range of text with a new string.
   * - `checkValidity() => void`: Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - `getForm() => HTMLFormElement | null`: Gets the associated form, if one exists.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `setCustomValidity(message: string) => void`: Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and help text.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The input's wrapper.
   * - `form-control-help-text`: The help text's wrapper.
   * - `base`: The component's base wrapper.
   * - `textarea`: The internal `<textarea>` control.
   */
  "wa-textarea": Partial<
    SlTextareaProps &
      SlTextareaSolidJsProps &
      BaseProps<SlTextarea> &
      BaseEvents
  >;

  /**
   * Tags are used as labels to organize things or to indicate a selection.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The tag's theme variant.
   * - `size`: The tag's size.
   * - `pill`: Draws a pill-style tag with rounded edges.
   * - `removable`: Makes the tag removable and shows a remove button.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-remove`: Emitted when the remove button is activated.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The tag's content.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `content`: The tag's content.
   * - `remove-button`: The tag's remove button, an `<sl-icon-button>`.
   * - `remove-button__base`: The remove button's exported `base` part.
   */
  "wa-tag": Partial<
    SlTagProps & SlTagSolidJsProps & BaseProps<SlTag> & BaseEvents
  >;

  /**
   * Tooltips display additional information based on a specific action.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `content`: The tooltip's content. If you need to display HTML, use the `content` slot instead.
   * - `placement`: The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
   * inside of the viewport.
   * - `disabled`: Disables the tooltip so it won't show when triggered.
   * - `distance`: The distance in pixels from which to offset the tooltip away from its target.
   * - `open`: Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.
   * - `skidding`: The distance in pixels from which to offset the tooltip along its target.
   * - `trigger`: Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
   * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
   * programmatically.
   * - `hoist`: Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
   * `overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
   * scenarios.
   * - `defaultSlot`: undefined (property only)
   * - `body`: undefined (property only)
   * - `popup`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-show`: Emitted when the tooltip begins to show.
   * - `sl-after-show`: Emitted after the tooltip has shown and all animations are complete.
   * - `sl-hide`: Emitted when the tooltip begins to hide.
   * - `sl-after-hide`: Emitted after the tooltip has hidden and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
   * - `content`: The content to render in the tooltip. Alternatively, you can use the `content` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `handleOptionsChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `show() => void`: Shows the tooltip.
   * - `hide() => void`: Hides the tooltip
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--max-width`: The maximum width of the tooltip before its content will wrap. (default: `undefined`)
   * - `--hide-delay`: The amount of time to wait before hiding the tooltip when hovering. (default: `undefined`)
   * - `--show-delay`: The amount of time to wait before showing the tooltip when hovering. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper, an `<sl-popup>` element.
   * - `base__popup`: The popup's exported `popup` part. Use this to target the tooltip's popup container.
   * - `base__arrow`: The popup's exported `arrow` part. Use this to target the tooltip's arrow.
   * - `body`: The tooltip's body where its content is rendered.
   */
  "wa-tooltip": Partial<
    SlTooltipProps & SlTooltipSolidJsProps & BaseProps<SlTooltip> & BaseEvents
  >;

  /**
   * Trees allow you to display a hierarchical list of selectable [tree items](/components/tree-item). Items with children can be expanded and collapsed as desired by the user.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `selection`: The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
   * displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.
   * - `defaultSlot`: undefined (property only)
   * - `expandedIconSlot`: undefined (property only)
   * - `collapsedIconSlot`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-selection-change`: Emitted when a tree item is selected or deselected.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The default slot.
   * - `expand-icon`: The icon to show when the tree item is expanded. Works best with `<sl-icon>`.
   * - `collapse-icon`: The icon to show when the tree item is collapsed. Works best with `<sl-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleMouseDown(event: MouseEvent) => void`: undefined
   * - `handleSelectionChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--indent-size`: The size of the indentation for nested items. (default: `var(--sl-spacing-medium)`)
   * - `--indent-guide-color`: The color of the indentation line. (default: `var(--sl-color-neutral-200)`)
   * - `--indent-guide-offset`: The amount of vertical spacing to leave between the top and bottom of the indentation line's starting position. (default: `0`)
   * - `--indent-guide-style`: The style of the indentation line, e.g. solid, dotted, dashed. (default: `solid`)
   * - `--indent-guide-width`: The width of the indentation line. (default: `0`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-tree": Partial<
    SlTreeProps & SlTreeSolidJsProps & BaseProps<SlTree> & BaseEvents
  >;

  /**
   * A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `expanded`: Expands the tree item.
   * - `selected`: Draws the tree item in a selected state.
   * - `disabled`: Disables the tree item.
   * - `lazy`: Enables lazy loading behavior.
   * - `indeterminate`: undefined (property only)
   * - `isLeaf`: undefined (property only)
   * - `loading`: undefined (property only)
   * - `selectable`: undefined (property only)
   * - `defaultSlot`: undefined (property only)
   * - `childrenSlot`: undefined (property only)
   * - `itemElement`: undefined (property only)
   * - `childrenContainer`: undefined (property only)
   * - `expandButtonSlot`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `sl-expand`: Emitted when the tree item expands.
   * - `sl-after-expand`: Emitted after the tree item expands and all animations are complete.
   * - `sl-collapse`: Emitted when the tree item collapses.
   * - `sl-after-collapse`: Emitted after the tree item collapses and all animations are complete.
   * - `sl-lazy-change`: Emitted when the tree item's lazy state changes.
   * - `sl-lazy-load`: Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The default slot.
   * - `expand-icon`: The icon to show when the tree item is expanded.
   * - `collapse-icon`: The icon to show when the tree item is collapsed.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `isTreeItem(node: Node) => void`: undefined
   * - `handleLoadingChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `handleSelectedChange() => void`: undefined
   * - `handleExpandedChange() => void`: undefined
   * - `handleExpandAnimation() => void`: undefined
   * - `handleLazyChange() => void`: undefined
   * - `getChildrenItems({ includeDisabled = true }: { includeDisabled?: boolean } = {}) => SlTreeItem[]`: Gets all the nested tree items in this node.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `item`: The tree item's container. This element wraps everything except slotted tree item children.
   * - `item--disabled`: Applied when the tree item is disabled.
   * - `item--expanded`: Applied when the tree item is expanded.
   * - `item--indeterminate`: Applied when the selection is indeterminate.
   * - `item--selected`: Applied when the tree item is selected.
   * - `indentation`: The tree item's indentation container.
   * - `expand-button`: The container that wraps the tree item's expand button and spinner.
   * - `spinner`: The spinner that shows when a lazy tree item is in the loading state.
   * - `spinner__base`: The spinner's base part.
   * - `label`: The tree item's label.
   * - `children`: The container that wraps the tree item's nested children.
   * - `checkbox`: The checkbox that shows when using multiselect.
   * - `checkbox__base`: The checkbox's exported `base` part.
   * - `checkbox__control`: The checkbox's exported `control` part.
   * - `checkbox__control--checked`: The checkbox's exported `control--checked` part.
   * - `checkbox__control--indeterminate`: The checkbox's exported `control--indeterminate` part.
   * - `checkbox__checked-icon`: The checkbox's exported `checked-icon` part.
   * - `checkbox__indeterminate-icon`: The checkbox's exported `indeterminate-icon` part.
   * - `checkbox__label`: The checkbox's exported `label` part.
   */
  "wa-tree-item": Partial<
    SlTreeItemProps &
      SlTreeItemSolidJsProps &
      BaseProps<SlTreeItem> &
      BaseEvents
  >;

  /**
   * The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content to be visually hidden.
   */
  "wa-visually-hidden": Partial<
    SlVisuallyHiddenProps &
      SlVisuallyHiddenSolidJsProps &
      BaseProps<SlVisuallyHidden> &
      BaseEvents
  >;
};

export type CustomCssProperties = {
  /** The size of the icon box. */
  "--control-box-size"?: string;
  /** The size of the play/pause icons. */
  "--icon-size"?: string;
  /** The size of the avatar. */
  "--size"?: string;
  /** The card's border color, including borders that occur inside the card. */
  "--border-color"?: string;
  /** The border radius for the card's edges. */
  "--border-radius"?: string;
  /** The width of the card's borders. */
  "--border-width"?: string;
  /** The padding to use for the card's sections. */
  "--padding"?: string;
  /** The space between each slide. */
  "--slide-gap"?: string;
  /** The aspect ratio of each slide. */
  "--aspect-ratio"?: string;
  /** The amount of padding to apply to the scroll area, allowing adjacent slides to become partially visible as a scroll hint. */
  "--scroll-hint"?: string;
  /** The width of the color grid. */
  "--grid-width"?: string;
  /** The height of the color grid. */
  "--grid-height"?: string;
  /** The size of the color grid's handle. */
  "--grid-handle-size"?: string;
  /** The height of the hue and alpha sliders. */
  "--slider-height"?: string;
  /** The diameter of the slider's handle. */
  "--slider-handle-size"?: string;
  /** The size of each predefined color swatch. */
  "--swatch-size"?: string;
  /** The color to use for success feedback. */
  "--success-color"?: string;
  /** The color to use for error feedback. */
  "--error-color"?: string;
  /** The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. */
  "--width"?: string;
  /** The amount of padding to use for the header. */
  "--header-spacing"?: string;
  /** The amount of padding to use for the body. */
  "--body-spacing"?: string;
  /** The amount of padding to use for the footer. */
  "--footer-spacing"?: string;
  /** The color of the divider. */
  "--color"?: string;
  /** The spacing of the divider. */
  "--spacing"?: string;
  /** The width of the dividing line. */
  "--divider-width"?: string;
  /** The size of the compare handle. */
  "--handle-size"?: string;
  /** The distance submenus shift to overlap the parent menu. */
  "--submenu-offset"?: string;
  /** The size of the arrow. Note that an arrow won't be shown unless the `arrow` attribute is used. */
  "--arrow-size"?: string;
  /** The color of the arrow. */
  "--arrow-color"?: string;
  /** A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. */
  "--auto-size-available-width"?: string;
  /** A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. */
  "--auto-size-available-height"?: string;
  /** The progress bar's height. */
  "--height"?: string;
  /** The color of the track. */
  "--track-color"?: string;
  /** The color of the indicator. */
  "--indicator-color"?: string;
  /** The color of the label. */
  "--label-color"?: string;
  /** The width of the track. */
  "--track-width"?: string;
  /** The width of the indicator. Defaults to the track width. */
  "--indicator-width"?: string;
  /** The duration of the indicator's transition when the value changes. */
  "--indicator-transition-duration"?: string;
  /** The size of the thumb. */
  "--thumb-size"?: string;
  /** The vertical distance the tooltip is offset from the track. */
  "--tooltip-offset"?: string;
  /** The color of the portion of the track that represents the current value. */
  "--track-color-active"?: string;
  /** The of the portion of the track that represents the remaining value. */
  "--track-color-inactive"?: string;
  /** The height of the track. */
  "--track-height"?: string;
  /** The point of origin of the active track. */
  "--track-active-offset"?: string;
  /** The inactive color for symbols. */
  "--symbol-color"?: string;
  /** The active color for symbols. */
  "--symbol-color-active"?: string;
  /** The size of symbols. */
  "--symbol-size"?: string;
  /** The spacing to use around symbols. */
  "--symbol-spacing"?: string;
  /** The sheen color when the skeleton is in its loading state. */
  "--sheen-color"?: string;
  /** The time it takes for the spinner to complete one animation cycle. */
  "--speed"?: string;
  /** The invisible region around the divider where dragging can occur. This is usually wider than the divider to facilitate easier dragging. */
  "--divider-hit-area"?: string;
  /** The minimum allowed size of the primary panel. */
  "--min"?: string;
  /** The maximum allowed size of the primary panel. */
  "--max"?: string;
  /** The maximum width of the tooltip before its content will wrap. */
  "--max-width"?: string;
  /** The amount of time to wait before hiding the tooltip when hovering. */
  "--hide-delay"?: string;
  /** The amount of time to wait before showing the tooltip when hovering. */
  "--show-delay"?: string;
  /** The size of the indentation for nested items. */
  "--indent-size"?: string;
  /** The color of the indentation line. */
  "--indent-guide-color"?: string;
  /** The amount of vertical spacing to leave between the top and bottom of the indentation line's starting position. */
  "--indent-guide-offset"?: string;
  /** The style of the indentation line, e.g. solid, dotted, dashed. */
  "--indent-guide-style"?: string;
  /** The width of the indentation line. */
  "--indent-guide-width"?: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module "@stencil/core" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module "hono/jsx" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module "react-native" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements extends CustomElementsSolidJs {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

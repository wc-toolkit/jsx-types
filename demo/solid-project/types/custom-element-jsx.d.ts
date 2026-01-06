/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { default as WaAnimatedImage } from "@awesome.me/webawesome/dist/components/animated-image/animated-image.js";
import type { default as WaAnimation } from "@awesome.me/webawesome/dist/components/animation/animation.js";
import type { default as WaAvatar } from "@awesome.me/webawesome/dist/components/avatar/avatar.js";
import type { default as WaBadge } from "@awesome.me/webawesome/dist/components/badge/badge.js";
import type { default as WaButton } from "@awesome.me/webawesome/dist/components/button/button.js";
import type { default as WaBreadcrumbItem } from "@awesome.me/webawesome/dist/components/breadcrumb-item/breadcrumb-item.js";
import type { default as WaButtonGroup } from "@awesome.me/webawesome/dist/components/button-group/button-group.js";
import type { default as WaBreadcrumb } from "@awesome.me/webawesome/dist/components/breadcrumb/breadcrumb.js";
import type { default as WaCallout } from "@awesome.me/webawesome/dist/components/callout/callout.js";
import type { default as WaCard } from "@awesome.me/webawesome/dist/components/card/card.js";
import type { default as WaCarousel } from "@awesome.me/webawesome/dist/components/carousel/carousel.js";
import type { default as WaCarouselItem } from "@awesome.me/webawesome/dist/components/carousel-item/carousel-item.js";
import type { default as WaCheckbox } from "@awesome.me/webawesome/dist/components/checkbox/checkbox.js";
import type { default as WaColorPicker } from "@awesome.me/webawesome/dist/components/color-picker/color-picker.js";
import type { default as WaComparison } from "@awesome.me/webawesome/dist/components/comparison/comparison.js";
import type { default as WaCopyButton } from "@awesome.me/webawesome/dist/components/copy-button/copy-button.js";
import type { default as WaDetails } from "@awesome.me/webawesome/dist/components/details/details.js";
import type { default as WaDialog } from "@awesome.me/webawesome/dist/components/dialog/dialog.js";
import type { default as WaDivider } from "@awesome.me/webawesome/dist/components/divider/divider.js";
import type { default as WaDrawer } from "@awesome.me/webawesome/dist/components/drawer/drawer.js";
import type { default as WaDropdown } from "@awesome.me/webawesome/dist/components/dropdown/dropdown.js";
import type { default as WaDropdownItem } from "@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js";
import type { default as WaFormatBytes } from "@awesome.me/webawesome/dist/components/format-bytes/format-bytes.js";
import type { default as WaFormatDate } from "@awesome.me/webawesome/dist/components/format-date/format-date.js";
import type { default as WaFormatNumber } from "@awesome.me/webawesome/dist/components/format-number/format-number.js";
import type { default as WaIcon } from "@awesome.me/webawesome/dist/components/icon/icon.js";
import type { default as WaInclude } from "@awesome.me/webawesome/dist/components/include/include.js";
import type { default as WaInput } from "@awesome.me/webawesome/dist/components/input/input.js";
import type { default as WaIntersectionObserver } from "@awesome.me/webawesome/dist/components/intersection-observer/intersection-observer.js";
import type { default as WaMutationObserver } from "@awesome.me/webawesome/dist/components/mutation-observer/mutation-observer.js";
import type { default as WaOption } from "@awesome.me/webawesome/dist/components/option/option.js";
import type { default as WaPopover } from "@awesome.me/webawesome/dist/components/popover/popover.js";
import type { default as WaPopup } from "@awesome.me/webawesome/dist/components/popup/popup.js";
import type { default as WaProgressBar } from "@awesome.me/webawesome/dist/components/progress-bar/progress-bar.js";
import type { default as WaQrCode } from "@awesome.me/webawesome/dist/components/qr-code/qr-code.js";
import type { default as WaRadio } from "@awesome.me/webawesome/dist/components/radio/radio.js";
import type { default as WaRadioGroup } from "@awesome.me/webawesome/dist/components/radio-group/radio-group.js";
import type { default as WaRating } from "@awesome.me/webawesome/dist/components/rating/rating.js";
import type { default as WaRelativeTime } from "@awesome.me/webawesome/dist/components/relative-time/relative-time.js";
import type { default as WaResizeObserver } from "@awesome.me/webawesome/dist/components/resize-observer/resize-observer.js";
import type { default as WaProgressRing } from "@awesome.me/webawesome/dist/components/progress-ring/progress-ring.js";
import type { default as WaScroller } from "@awesome.me/webawesome/dist/components/scroller/scroller.js";
import type { default as WaSelect } from "@awesome.me/webawesome/dist/components/select/select.js";
import type { default as WaSkeleton } from "@awesome.me/webawesome/dist/components/skeleton/skeleton.js";
import type { default as WaSlider } from "@awesome.me/webawesome/dist/components/slider/slider.js";
import type { default as WaSpinner } from "@awesome.me/webawesome/dist/components/spinner/spinner.js";
import type { default as WaSplitPanel } from "@awesome.me/webawesome/dist/components/split-panel/split-panel.js";
import type { default as WaSwitch } from "@awesome.me/webawesome/dist/components/switch/switch.js";
import type { default as WaTab } from "@awesome.me/webawesome/dist/components/tab/tab.js";
import type { default as WaTabGroup } from "@awesome.me/webawesome/dist/components/tab-group/tab-group.js";
import type { default as WaTabPanel } from "@awesome.me/webawesome/dist/components/tab-panel/tab-panel.js";
import type { default as WaTag } from "@awesome.me/webawesome/dist/components/tag/tag.js";
import type { default as WaTooltip } from "@awesome.me/webawesome/dist/components/tooltip/tooltip.js";
import type { default as WaTextarea } from "@awesome.me/webawesome/dist/components/textarea/textarea.js";
import type { default as WaTree } from "@awesome.me/webawesome/dist/components/tree/tree.js";
import type { default as WaTreeItem } from "@awesome.me/webawesome/dist/components/tree-item/tree-item.js";
import type { default as WaZoomableFrame } from "@awesome.me/webawesome/dist/components/zoomable-frame/zoomable-frame.js";

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
};

type BaseEvents = {};

/** `WaAnimatedImage` component event */
export type WaAnimatedImageEvent<E = Event> = TypedEvent<WaAnimatedImage, E>;

export type WaAnimatedImageProps = {
  /** The path to the image to load. */
  src?: WaAnimatedImage["src"];
  /** A description of the image used by assistive devices. */
  alt?: WaAnimatedImage["alt"];
  /** Plays the animation. When this attribute is remove, the animation will pause. */
  play?: WaAnimatedImage["play"];
  /**  */
  animatedImage?: WaAnimatedImage["animatedImage"];
  /**  */
  frozenFrame?: WaAnimatedImage["frozenFrame"];
  /**  */
  isLoaded?: WaAnimatedImage["isLoaded"];

  /** Emitted when the image loads successfully. */
  "onwa-load"?: (e: WaAnimatedImageEvent) => void;
  /** Emitted when the image fails to load. */
  "onwa-error"?: (e: WaAnimatedImageEvent) => void;
};

export type WaAnimatedImageSolidJsProps = {
  /** The path to the image to load. */
  "prop:src"?: WaAnimatedImage["src"];
  /** A description of the image used by assistive devices. */
  "prop:alt"?: WaAnimatedImage["alt"];
  /** Plays the animation. When this attribute is remove, the animation will pause. */
  "prop:play"?: WaAnimatedImage["play"];
  /**  */
  "prop:animatedImage"?: WaAnimatedImage["animatedImage"];
  /**  */
  "prop:frozenFrame"?: WaAnimatedImage["frozenFrame"];
  /**  */
  "prop:isLoaded"?: WaAnimatedImage["isLoaded"];
  /** Emitted when the image loads successfully. */
  "on:wa-load"?: (e: WaAnimatedImageEvent) => void;
  /** Emitted when the image fails to load. */
  "on:wa-error"?: (e: WaAnimatedImageEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaAnimation` component event */
export type WaAnimationEvent<E = Event> = TypedEvent<WaAnimation, E>;

export type WaAnimationProps = {
  /** The name of the built-in animation to use. For custom animations, use the `keyframes` prop. */
  name?: WaAnimation["name"];
  /** Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
the animation finishes or gets canceled. */
  play?: WaAnimation["play"];
  /** The number of milliseconds to delay the start of the animation. */
  delay?: WaAnimation["delay"];
  /** Determines the direction of playback as well as the behavior when reaching the end of an iteration.
[Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) */
  direction?: WaAnimation["direction"];
  /** The number of milliseconds each iteration of the animation takes to complete. */
  duration?: WaAnimation["duration"];
  /** The easing function to use for the animation. This can be a Web Awesome easing function or a custom easing function
such as `cubic-bezier(0, 1, .76, 1.14)`. */
  easing?: WaAnimation["easing"];
  /** The number of milliseconds to delay after the active period of an animation sequence. */
  "end-delay"?: WaAnimation["endDelay"];
  /** The number of milliseconds to delay after the active period of an animation sequence. */
  endDelay?: WaAnimation["endDelay"];
  /** Sets how the animation applies styles to its target before and after its execution. */
  fill?: WaAnimation["fill"];
  /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
  iterations?: WaAnimation["iterations"];
  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  "iteration-start"?: WaAnimation["iterationStart"];
  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  iterationStart?: WaAnimation["iterationStart"];
  /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
value can be changed without causing the animation to restart. */
  "playback-rate"?: WaAnimation["playbackRate"];
  /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
value can be changed without causing the animation to restart. */
  playbackRate?: WaAnimation["playbackRate"];
  /**  */
  defaultSlot?: WaAnimation["defaultSlot"];
  /** The keyframes to use for the animation. If this is set, `name` will be ignored. */
  keyframes?: WaAnimation["keyframes"];
  /** Gets and sets the current animation time. */
  currentTime?: WaAnimation["currentTime"];

  /** Emitted when the animation is canceled. */
  "onwa-cancel"?: (e: WaAnimationEvent) => void;
  /** Emitted when the animation finishes. */
  "onwa-finish"?: (e: WaAnimationEvent) => void;
  /** Emitted when the animation starts or restarts. */
  "onwa-start"?: (e: WaAnimationEvent) => void;
};

export type WaAnimationSolidJsProps = {
  /** The name of the built-in animation to use. For custom animations, use the `keyframes` prop. */
  "prop:name"?: WaAnimation["name"];
  /** Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
the animation finishes or gets canceled. */
  "prop:play"?: WaAnimation["play"];
  /** The number of milliseconds to delay the start of the animation. */
  "prop:delay"?: WaAnimation["delay"];
  /** Determines the direction of playback as well as the behavior when reaching the end of an iteration.
[Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) */
  "prop:direction"?: WaAnimation["direction"];
  /** The number of milliseconds each iteration of the animation takes to complete. */
  "prop:duration"?: WaAnimation["duration"];
  /** The easing function to use for the animation. This can be a Web Awesome easing function or a custom easing function
such as `cubic-bezier(0, 1, .76, 1.14)`. */
  "prop:easing"?: WaAnimation["easing"];
  /** The number of milliseconds to delay after the active period of an animation sequence. */
  "attr:end-delay"?: WaAnimation["endDelay"];
  /** The number of milliseconds to delay after the active period of an animation sequence. */
  "prop:endDelay"?: WaAnimation["endDelay"];
  /** Sets how the animation applies styles to its target before and after its execution. */
  "prop:fill"?: WaAnimation["fill"];
  /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
  "prop:iterations"?: WaAnimation["iterations"];
  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  "attr:iteration-start"?: WaAnimation["iterationStart"];
  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  "prop:iterationStart"?: WaAnimation["iterationStart"];
  /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
value can be changed without causing the animation to restart. */
  "attr:playback-rate"?: WaAnimation["playbackRate"];
  /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
value can be changed without causing the animation to restart. */
  "prop:playbackRate"?: WaAnimation["playbackRate"];
  /**  */
  "prop:defaultSlot"?: WaAnimation["defaultSlot"];
  /** The keyframes to use for the animation. If this is set, `name` will be ignored. */
  "prop:keyframes"?: WaAnimation["keyframes"];
  /** Gets and sets the current animation time. */
  "prop:currentTime"?: WaAnimation["currentTime"];
  /** Emitted when the animation is canceled. */
  "on:wa-cancel"?: (e: WaAnimationEvent) => void;
  /** Emitted when the animation finishes. */
  "on:wa-finish"?: (e: WaAnimationEvent) => void;
  /** Emitted when the animation starts or restarts. */
  "on:wa-start"?: (e: WaAnimationEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaAvatar` component event */
export type WaAvatarEvent<E = Event> = TypedEvent<WaAvatar, E>;

export type WaAvatarProps = {
  /** The image source to use for the avatar. */
  image?: WaAvatar["image"];
  /** A label to use to describe the avatar to assistive devices. */
  label?: WaAvatar["label"];
  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  initials?: WaAvatar["initials"];
  /** Indicates how the browser should load the image. */
  loading?: WaAvatar["loading"];
  /** The shape of the avatar. */
  shape?: WaAvatar["shape"];

  /** The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause. */
  "onwa-error"?: (e: WaAvatarEvent) => void;
};

export type WaAvatarSolidJsProps = {
  /** The image source to use for the avatar. */
  "prop:image"?: WaAvatar["image"];
  /** A label to use to describe the avatar to assistive devices. */
  "prop:label"?: WaAvatar["label"];
  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  "prop:initials"?: WaAvatar["initials"];
  /** Indicates how the browser should load the image. */
  "prop:loading"?: WaAvatar["loading"];
  /** The shape of the avatar. */
  "prop:shape"?: WaAvatar["shape"];
  /** The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause. */
  "on:wa-error"?: (e: WaAvatarEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaBadgeProps = {
  /** The badge's theme variant. Defaults to `brand` if not within another element with a variant. */
  variant?: WaBadge["variant"];
  /** The badge's visual appearance. */
  appearance?: WaBadge["appearance"];
  /** Draws a pill-style badge with rounded edges. */
  pill?: WaBadge["pill"];
  /** Adds an animation to draw attention to the badge. */
  attention?: WaBadge["attention"];
};

export type WaBadgeSolidJsProps = {
  /** The badge's theme variant. Defaults to `brand` if not within another element with a variant. */
  "prop:variant"?: WaBadge["variant"];
  /** The badge's visual appearance. */
  "prop:appearance"?: WaBadge["appearance"];
  /** Draws a pill-style badge with rounded edges. */
  "prop:pill"?: WaBadge["pill"];
  /** Adds an animation to draw attention to the badge. */
  "prop:attention"?: WaBadge["attention"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaButton` component event */
export type WaButtonEvent<E = Event> = TypedEvent<WaButton, E>;

export type WaButtonProps = {
  /**  */
  title?: WaButton["title"];
  /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. */
  variant?: WaButton["variant"];
  /** The button's visual appearance. */
  appearance?: WaButton["appearance"];
  /** The button's size. */
  size?: WaButton["size"];
  /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
  "with-caret"?: WaButton["withCaret"];
  /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
  withCaret?: WaButton["withCaret"];
  /** Disables the button. Does not apply to link buttons. */
  disabled?: WaButton["disabled"];
  /** Draws the button in a loading state. */
  loading?: WaButton["loading"];
  /** Draws a pill-style button with rounded edges. */
  pill?: WaButton["pill"];
  /** The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. */
  type?: WaButton["type"];
  /** The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
This attribute is ignored when `href` is present. */
  name?: WaButton["name"];
  /** The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
button is the submitter. This attribute is ignored when `href` is present. */
  value?: WaButton["value"];
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  href?: WaButton["href"];
  /** Tells the browser where to open the link. Only used when `href` is present. */
  target?: WaButton["target"];
  /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
  rel?: WaButton["rel"];
  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  download?: WaButton["download"];
  /** Used to override the form owner's `action` attribute. */
  formaction?: WaButton["formAction"];
  /** Used to override the form owner's `action` attribute. */
  formAction?: WaButton["formAction"];
  /** Used to override the form owner's `enctype` attribute. */
  formenctype?: WaButton["formEnctype"];
  /** Used to override the form owner's `enctype` attribute. */
  formEnctype?: WaButton["formEnctype"];
  /** Used to override the form owner's `method` attribute. */
  formmethod?: WaButton["formMethod"];
  /** Used to override the form owner's `method` attribute. */
  formMethod?: WaButton["formMethod"];
  /** Used to override the form owner's `novalidate` attribute. */
  formnovalidate?: WaButton["formNoValidate"];
  /** Used to override the form owner's `novalidate` attribute. */
  formNoValidate?: WaButton["formNoValidate"];
  /** Used to override the form owner's `target` attribute. */
  formtarget?: WaButton["formTarget"];
  /** Used to override the form owner's `target` attribute. */
  formTarget?: WaButton["formTarget"];
  /**  */
  assumeInteractionOn?: WaButton["assumeInteractionOn"];
  /**  */
  button?: WaButton["button"];
  /**  */
  labelSlot?: WaButton["labelSlot"];
  /**  */
  invalid?: WaButton["invalid"];
  /**  */
  isIconButton?: WaButton["isIconButton"];

  /** Emitted when the button loses focus. */
  onblur?: (e: WaButtonEvent) => void;
  /** Emitted when the button gains focus. */
  onfocus?: (e: WaButtonEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onwa-invalid"?: (e: WaButtonEvent) => void;
};

export type WaButtonSolidJsProps = {
  /**  */
  "prop:title"?: WaButton["title"];
  /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. */
  "prop:variant"?: WaButton["variant"];
  /** The button's visual appearance. */
  "prop:appearance"?: WaButton["appearance"];
  /** The button's size. */
  "prop:size"?: WaButton["size"];
  /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
  "bool:with-caret"?: WaButton["withCaret"];
  /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
  "prop:withCaret"?: WaButton["withCaret"];
  /** Disables the button. Does not apply to link buttons. */
  "prop:disabled"?: WaButton["disabled"];
  /** Draws the button in a loading state. */
  "prop:loading"?: WaButton["loading"];
  /** Draws a pill-style button with rounded edges. */
  "prop:pill"?: WaButton["pill"];
  /** The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. */
  "prop:type"?: WaButton["type"];
  /** The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
This attribute is ignored when `href` is present. */
  "prop:name"?: WaButton["name"];
  /** The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
button is the submitter. This attribute is ignored when `href` is present. */
  "prop:value"?: WaButton["value"];
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  "prop:href"?: WaButton["href"];
  /** Tells the browser where to open the link. Only used when `href` is present. */
  "prop:target"?: WaButton["target"];
  /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
  "prop:rel"?: WaButton["rel"];
  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  "prop:download"?: WaButton["download"];
  /** Used to override the form owner's `action` attribute. */
  "attr:formaction"?: WaButton["formAction"];
  /** Used to override the form owner's `action` attribute. */
  "prop:formAction"?: WaButton["formAction"];
  /** Used to override the form owner's `enctype` attribute. */
  "attr:formenctype"?: WaButton["formEnctype"];
  /** Used to override the form owner's `enctype` attribute. */
  "prop:formEnctype"?: WaButton["formEnctype"];
  /** Used to override the form owner's `method` attribute. */
  "attr:formmethod"?: WaButton["formMethod"];
  /** Used to override the form owner's `method` attribute. */
  "prop:formMethod"?: WaButton["formMethod"];
  /** Used to override the form owner's `novalidate` attribute. */
  "bool:formnovalidate"?: WaButton["formNoValidate"];
  /** Used to override the form owner's `novalidate` attribute. */
  "prop:formNoValidate"?: WaButton["formNoValidate"];
  /** Used to override the form owner's `target` attribute. */
  "attr:formtarget"?: WaButton["formTarget"];
  /** Used to override the form owner's `target` attribute. */
  "prop:formTarget"?: WaButton["formTarget"];
  /**  */
  "prop:assumeInteractionOn"?: WaButton["assumeInteractionOn"];
  /**  */
  "prop:button"?: WaButton["button"];
  /**  */
  "prop:labelSlot"?: WaButton["labelSlot"];
  /**  */
  "prop:invalid"?: WaButton["invalid"];
  /**  */
  "prop:isIconButton"?: WaButton["isIconButton"];
  /** Emitted when the button loses focus. */
  "on:blur"?: (e: WaButtonEvent) => void;
  /** Emitted when the button gains focus. */
  "on:focus"?: (e: WaButtonEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:wa-invalid"?: (e: WaButtonEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaBreadcrumbItemProps = {
  /** Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
internally. When unset, a button will be rendered instead. */
  href?: WaBreadcrumbItem["href"];
  /** Tells the browser where to open the link. Only used when `href` is set. */
  target?: WaBreadcrumbItem["target"];
  /** The `rel` attribute to use on the link. Only used when `href` is set. */
  rel?: WaBreadcrumbItem["rel"];
  /**  */
  defaultSlot?: WaBreadcrumbItem["defaultSlot"];
};

export type WaBreadcrumbItemSolidJsProps = {
  /** Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
internally. When unset, a button will be rendered instead. */
  "prop:href"?: WaBreadcrumbItem["href"];
  /** Tells the browser where to open the link. Only used when `href` is set. */
  "prop:target"?: WaBreadcrumbItem["target"];
  /** The `rel` attribute to use on the link. Only used when `href` is set. */
  "prop:rel"?: WaBreadcrumbItem["rel"];
  /**  */
  "prop:defaultSlot"?: WaBreadcrumbItem["defaultSlot"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaButtonGroupProps = {
  /** A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended. */
  label?: WaButtonGroup["label"];
  /** The button group's orientation. */
  orientation?: WaButtonGroup["orientation"];
  /**  */
  defaultSlot?: WaButtonGroup["defaultSlot"];
  /**  */
  disableRole?: WaButtonGroup["disableRole"];
  /**  */
  hasOutlined?: WaButtonGroup["hasOutlined"];
};

export type WaButtonGroupSolidJsProps = {
  /** A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended. */
  "prop:label"?: WaButtonGroup["label"];
  /** The button group's orientation. */
  "prop:orientation"?: WaButtonGroup["orientation"];
  /**  */
  "prop:defaultSlot"?: WaButtonGroup["defaultSlot"];
  /**  */
  "prop:disableRole"?: WaButtonGroup["disableRole"];
  /**  */
  "prop:hasOutlined"?: WaButtonGroup["hasOutlined"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaBreadcrumbProps = {
  /** The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
screen readers and other assistive devices to provide more context for users. */
  label?: WaBreadcrumb["label"];
  /**  */
  defaultSlot?: WaBreadcrumb["defaultSlot"];
  /**  */
  separatorSlot?: WaBreadcrumb["separatorSlot"];
};

export type WaBreadcrumbSolidJsProps = {
  /** The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
screen readers and other assistive devices to provide more context for users. */
  "prop:label"?: WaBreadcrumb["label"];
  /**  */
  "prop:defaultSlot"?: WaBreadcrumb["defaultSlot"];
  /**  */
  "prop:separatorSlot"?: WaBreadcrumb["separatorSlot"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaCalloutProps = {
  /** The callout's theme variant. Defaults to `brand` if not within another element with a variant. */
  variant?: WaCallout["variant"];
  /** The callout's visual appearance. */
  appearance?: WaCallout["appearance"];
  /** The callout's size. */
  size?: WaCallout["size"];
};

export type WaCalloutSolidJsProps = {
  /** The callout's theme variant. Defaults to `brand` if not within another element with a variant. */
  "prop:variant"?: WaCallout["variant"];
  /** The callout's visual appearance. */
  "prop:appearance"?: WaCallout["appearance"];
  /** The callout's size. */
  "prop:size"?: WaCallout["size"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaCardProps = {
  /** The card's visual appearance. */
  appearance?: WaCard["appearance"];
  /** Renders the card with a header. Only needed for SSR, otherwise is automatically added. */
  "with-header"?: WaCard["withHeader"];
  /** Renders the card with a header. Only needed for SSR, otherwise is automatically added. */
  withHeader?: WaCard["withHeader"];
  /** Renders the card with an image. Only needed for SSR, otherwise is automatically added. */
  "with-media"?: WaCard["withMedia"];
  /** Renders the card with an image. Only needed for SSR, otherwise is automatically added. */
  withMedia?: WaCard["withMedia"];
  /** Renders the card with a footer. Only needed for SSR, otherwise is automatically added. */
  "with-footer"?: WaCard["withFooter"];
  /** Renders the card with a footer. Only needed for SSR, otherwise is automatically added. */
  withFooter?: WaCard["withFooter"];
  /** Renders the card's orientation * */
  orientation?: WaCard["orientation"];
};

export type WaCardSolidJsProps = {
  /** The card's visual appearance. */
  "prop:appearance"?: WaCard["appearance"];
  /** Renders the card with a header. Only needed for SSR, otherwise is automatically added. */
  "bool:with-header"?: WaCard["withHeader"];
  /** Renders the card with a header. Only needed for SSR, otherwise is automatically added. */
  "prop:withHeader"?: WaCard["withHeader"];
  /** Renders the card with an image. Only needed for SSR, otherwise is automatically added. */
  "bool:with-media"?: WaCard["withMedia"];
  /** Renders the card with an image. Only needed for SSR, otherwise is automatically added. */
  "prop:withMedia"?: WaCard["withMedia"];
  /** Renders the card with a footer. Only needed for SSR, otherwise is automatically added. */
  "bool:with-footer"?: WaCard["withFooter"];
  /** Renders the card with a footer. Only needed for SSR, otherwise is automatically added. */
  "prop:withFooter"?: WaCard["withFooter"];
  /** Renders the card's orientation * */
  "prop:orientation"?: WaCard["orientation"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaCarousel` component event */
export type WaCarouselEvent<E = Event> = TypedEvent<WaCarousel, E>;
/** `wa-slide-change` event type */
export type WaCarouselWaSlideChangeEvent = WaCarouselEvent<
  CustomEvent<{ index: number; slide: WaCarouselItem }>
>;

export type WaCarouselProps = {
  /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
  loop?: WaCarousel["loop"];
  /**  */
  slides?: WaCarousel["slides"];
  /**  */
  currentSlide?: WaCarousel["currentSlide"];
  /** When set, show the carousel's navigation. */
  navigation?: WaCarousel["navigation"];
  /** When set, show the carousel's pagination indicators. */
  pagination?: WaCarousel["pagination"];
  /** When set, the slides will scroll automatically when the user is not interacting with them. */
  autoplay?: WaCarousel["autoplay"];
  /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
  "autoplay-interval"?: WaCarousel["autoplayInterval"];
  /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
  autoplayInterval?: WaCarousel["autoplayInterval"];
  /** Specifies how many slides should be shown at a given time. */
  "slides-per-page"?: WaCarousel["slidesPerPage"];
  /** Specifies how many slides should be shown at a given time. */
  slidesPerPage?: WaCarousel["slidesPerPage"];
  /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
greater than one. It can't be higher than `slides-per-page`. */
  "slides-per-move"?: WaCarousel["slidesPerMove"];
  /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
greater than one. It can't be higher than `slides-per-page`. */
  slidesPerMove?: WaCarousel["slidesPerMove"];
  /** Specifies the orientation in which the carousel will lay out. */
  orientation?: WaCarousel["orientation"];
  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  "mouse-dragging"?: WaCarousel["mouseDragging"];
  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  mouseDragging?: WaCarousel["mouseDragging"];
  /**  */
  scrollContainer?: WaCarousel["scrollContainer"];
  /**  */
  paginationContainer?: WaCarousel["paginationContainer"];
  /**  */
  activeSlide?: WaCarousel["activeSlide"];
  /**  */
  scrolling?: WaCarousel["scrolling"];
  /**  */
  dragging?: WaCarousel["dragging"];

  /** Emitted when the active slide changes. */
  "onwa-slide-change"?: (e: WaCarouselWaSlideChangeEvent) => void;
};

export type WaCarouselSolidJsProps = {
  /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
  "prop:loop"?: WaCarousel["loop"];
  /**  */
  "prop:slides"?: WaCarousel["slides"];
  /**  */
  "prop:currentSlide"?: WaCarousel["currentSlide"];
  /** When set, show the carousel's navigation. */
  "prop:navigation"?: WaCarousel["navigation"];
  /** When set, show the carousel's pagination indicators. */
  "prop:pagination"?: WaCarousel["pagination"];
  /** When set, the slides will scroll automatically when the user is not interacting with them. */
  "prop:autoplay"?: WaCarousel["autoplay"];
  /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
  "attr:autoplay-interval"?: WaCarousel["autoplayInterval"];
  /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
  "prop:autoplayInterval"?: WaCarousel["autoplayInterval"];
  /** Specifies how many slides should be shown at a given time. */
  "attr:slides-per-page"?: WaCarousel["slidesPerPage"];
  /** Specifies how many slides should be shown at a given time. */
  "prop:slidesPerPage"?: WaCarousel["slidesPerPage"];
  /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
greater than one. It can't be higher than `slides-per-page`. */
  "attr:slides-per-move"?: WaCarousel["slidesPerMove"];
  /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
greater than one. It can't be higher than `slides-per-page`. */
  "prop:slidesPerMove"?: WaCarousel["slidesPerMove"];
  /** Specifies the orientation in which the carousel will lay out. */
  "prop:orientation"?: WaCarousel["orientation"];
  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  "bool:mouse-dragging"?: WaCarousel["mouseDragging"];
  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  "prop:mouseDragging"?: WaCarousel["mouseDragging"];
  /**  */
  "prop:scrollContainer"?: WaCarousel["scrollContainer"];
  /**  */
  "prop:paginationContainer"?: WaCarousel["paginationContainer"];
  /**  */
  "prop:activeSlide"?: WaCarousel["activeSlide"];
  /**  */
  "prop:scrolling"?: WaCarousel["scrolling"];
  /**  */
  "prop:dragging"?: WaCarousel["dragging"];
  /** Emitted when the active slide changes. */
  "on:wa-slide-change"?: (e: WaCarouselWaSlideChangeEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaCarouselItemProps = {};

export type WaCarouselItemSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaCheckbox` component event */
export type WaCheckboxEvent<E = Event> = TypedEvent<WaCheckbox, E>;

export type WaCheckboxProps = {
  /**  */
  title?: WaCheckbox["title"];
  /** The name of the checkbox, submitted as a name/value pair with form data. */
  name?: WaCheckbox["name"];
  /** The value of the checkbox, submitted as a name/value pair with form data. */
  value?: WaCheckbox["value"];
  /** The checkbox's size. */
  size?: WaCheckbox["size"];
  /** Disables the checkbox. */
  disabled?: WaCheckbox["disabled"];
  /** Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
all/none" behavior when associated checkboxes have a mix of checked and unchecked states. */
  indeterminate?: WaCheckbox["indeterminate"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  checked?: WaCheckbox["defaultChecked"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultChecked?: WaCheckbox["defaultChecked"];
  /** Makes the checkbox a required field. */
  required?: WaCheckbox["required"];
  /** The checkbox's hint. If you need to display HTML, use the `hint` slot instead. */
  hint?: WaCheckbox["hint"];
  /**  */
  input?: WaCheckbox["input"];

  /** Emitted when the checked state changes. */
  onchange?: (e: WaCheckboxEvent) => void;
  /** Emitted when the checkbox loses focus. */
  onblur?: (e: WaCheckboxEvent) => void;
  /** Emitted when the checkbox gains focus. */
  onfocus?: (e: WaCheckboxEvent) => void;
  /** Emitted when the checkbox receives input. */
  oninput?: (e: WaCheckboxEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onwa-invalid"?: (e: WaCheckboxEvent) => void;
};

export type WaCheckboxSolidJsProps = {
  /**  */
  "prop:title"?: WaCheckbox["title"];
  /** The name of the checkbox, submitted as a name/value pair with form data. */
  "prop:name"?: WaCheckbox["name"];
  /** The value of the checkbox, submitted as a name/value pair with form data. */
  "prop:value"?: WaCheckbox["value"];
  /** The checkbox's size. */
  "prop:size"?: WaCheckbox["size"];
  /** Disables the checkbox. */
  "prop:disabled"?: WaCheckbox["disabled"];
  /** Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
all/none" behavior when associated checkboxes have a mix of checked and unchecked states. */
  "prop:indeterminate"?: WaCheckbox["indeterminate"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "bool:checked"?: WaCheckbox["defaultChecked"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultChecked"?: WaCheckbox["defaultChecked"];
  /** Makes the checkbox a required field. */
  "prop:required"?: WaCheckbox["required"];
  /** The checkbox's hint. If you need to display HTML, use the `hint` slot instead. */
  "prop:hint"?: WaCheckbox["hint"];
  /**  */
  "prop:input"?: WaCheckbox["input"];
  /** Emitted when the checked state changes. */
  "on:change"?: (e: WaCheckboxEvent) => void;
  /** Emitted when the checkbox loses focus. */
  "on:blur"?: (e: WaCheckboxEvent) => void;
  /** Emitted when the checkbox gains focus. */
  "on:focus"?: (e: WaCheckboxEvent) => void;
  /** Emitted when the checkbox receives input. */
  "on:input"?: (e: WaCheckboxEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:wa-invalid"?: (e: WaCheckboxEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaColorPicker` component event */
export type WaColorPickerEvent<E = Event> = TypedEvent<WaColorPicker, E>;
/** `input` event type */
export type WaColorPickerInputEvent = WaColorPickerEvent<InputEvent>;

export type WaColorPickerProps = {
  /** The default value of the form control. Primarily used for resetting the form control. */
  value?: WaColorPicker["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: WaColorPicker["defaultValue"];
  /**  */
  "with-label"?: WaColorPicker["withLabel"];
  /**  */
  withLabel?: WaColorPicker["withLabel"];
  /**  */
  "with-hint"?: WaColorPicker["withHint"];
  /**  */
  withHint?: WaColorPicker["withHint"];
  /** The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
display HTML, you can use the `label` slot` instead. */
  label?: WaColorPicker["label"];
  /** The color picker's hint. If you need to display HTML, use the `hint` slot instead. */
  hint?: WaColorPicker["hint"];
  /** The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
picker will accept user input in any format (including CSS color names) and convert it to the desired format. */
  format?: WaColorPicker["format"];
  /** Determines the size of the color picker's trigger */
  size?: WaColorPicker["size"];
  /** Removes the button that lets users toggle between format. */
  "without-format-toggle"?: WaColorPicker["withoutFormatToggle"];
  /** Removes the button that lets users toggle between format. */
  withoutFormatToggle?: WaColorPicker["withoutFormatToggle"];
  /** The name of the form control, submitted as a name/value pair with form data. */
  name?: WaColorPicker["name"];
  /** Disables the color picker. */
  disabled?: WaColorPicker["disabled"];
  /** Indicates whether or not the popup is open. You can toggle this attribute to show and hide the popup, or you
can use the `show()` and `hide()` methods and this attribute will reflect the popup's open state. */
  open?: WaColorPicker["open"];
  /** Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA. */
  opacity?: WaColorPicker["opacity"];
  /** By default, values are lowercase. With this attribute, values will be uppercase instead. */
  uppercase?: WaColorPicker["uppercase"];
  /** One or more predefined color swatches to display as presets in the color picker. Can include any format the color
picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript. */
  swatches?: WaColorPicker["swatches"];
  /** Makes the color picker a required field. */
  required?: WaColorPicker["required"];
  /**  */
  base?: WaColorPicker["base"];
  /**  */
  input?: WaColorPicker["input"];
  /**  */
  triggerLabel?: WaColorPicker["triggerLabel"];
  /**  */
  triggerButton?: WaColorPicker["triggerButton"];
  /**  */
  popup?: WaColorPicker["popup"];
  /**  */
  previewButton?: WaColorPicker["previewButton"];
  /**  */
  trigger?: WaColorPicker["trigger"];

  /** Emitted when the color picker's value changes. */
  onchange?: (e: WaColorPickerEvent) => void;
  /** Emitted when the color picker receives input. */
  oninput?: (e: WaColorPickerInputEvent) => void;
  /**  */
  "onwa-show"?: (e: WaColorPickerEvent) => void;
  /**  */
  "onwa-after-show"?: (e: WaColorPickerEvent) => void;
  /**  */
  "onwa-hide"?: (e: WaColorPickerEvent) => void;
  /**  */
  "onwa-after-hide"?: (e: WaColorPickerEvent) => void;
  /** Emitted when the color picker loses focus. */
  onblur?: (e: WaColorPickerEvent) => void;
  /** Emitted when the color picker receives focus. */
  onfocus?: (e: WaColorPickerEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onwa-invalid"?: (e: WaColorPickerEvent) => void;
};

export type WaColorPickerSolidJsProps = {
  /** The default value of the form control. Primarily used for resetting the form control. */
  "attr:value"?: WaColorPicker["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultValue"?: WaColorPicker["defaultValue"];
  /**  */
  "bool:with-label"?: WaColorPicker["withLabel"];
  /**  */
  "prop:withLabel"?: WaColorPicker["withLabel"];
  /**  */
  "bool:with-hint"?: WaColorPicker["withHint"];
  /**  */
  "prop:withHint"?: WaColorPicker["withHint"];
  /** The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
display HTML, you can use the `label` slot` instead. */
  "prop:label"?: WaColorPicker["label"];
  /** The color picker's hint. If you need to display HTML, use the `hint` slot instead. */
  "prop:hint"?: WaColorPicker["hint"];
  /** The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
picker will accept user input in any format (including CSS color names) and convert it to the desired format. */
  "prop:format"?: WaColorPicker["format"];
  /** Determines the size of the color picker's trigger */
  "prop:size"?: WaColorPicker["size"];
  /** Removes the button that lets users toggle between format. */
  "bool:without-format-toggle"?: WaColorPicker["withoutFormatToggle"];
  /** Removes the button that lets users toggle between format. */
  "prop:withoutFormatToggle"?: WaColorPicker["withoutFormatToggle"];
  /** The name of the form control, submitted as a name/value pair with form data. */
  "prop:name"?: WaColorPicker["name"];
  /** Disables the color picker. */
  "prop:disabled"?: WaColorPicker["disabled"];
  /** Indicates whether or not the popup is open. You can toggle this attribute to show and hide the popup, or you
can use the `show()` and `hide()` methods and this attribute will reflect the popup's open state. */
  "prop:open"?: WaColorPicker["open"];
  /** Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA. */
  "prop:opacity"?: WaColorPicker["opacity"];
  /** By default, values are lowercase. With this attribute, values will be uppercase instead. */
  "prop:uppercase"?: WaColorPicker["uppercase"];
  /** One or more predefined color swatches to display as presets in the color picker. Can include any format the color
picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript. */
  "prop:swatches"?: WaColorPicker["swatches"];
  /** Makes the color picker a required field. */
  "prop:required"?: WaColorPicker["required"];
  /**  */
  "prop:base"?: WaColorPicker["base"];
  /**  */
  "prop:input"?: WaColorPicker["input"];
  /**  */
  "prop:triggerLabel"?: WaColorPicker["triggerLabel"];
  /**  */
  "prop:triggerButton"?: WaColorPicker["triggerButton"];
  /**  */
  "prop:popup"?: WaColorPicker["popup"];
  /**  */
  "prop:previewButton"?: WaColorPicker["previewButton"];
  /**  */
  "prop:trigger"?: WaColorPicker["trigger"];
  /** Emitted when the color picker's value changes. */
  "on:change"?: (e: WaColorPickerEvent) => void;
  /** Emitted when the color picker receives input. */
  "on:input"?: (e: WaColorPickerInputEvent) => void;
  /**  */
  "on:wa-show"?: (e: WaColorPickerEvent) => void;
  /**  */
  "on:wa-after-show"?: (e: WaColorPickerEvent) => void;
  /**  */
  "on:wa-hide"?: (e: WaColorPickerEvent) => void;
  /**  */
  "on:wa-after-hide"?: (e: WaColorPickerEvent) => void;
  /** Emitted when the color picker loses focus. */
  "on:blur"?: (e: WaColorPickerEvent) => void;
  /** Emitted when the color picker receives focus. */
  "on:focus"?: (e: WaColorPickerEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:wa-invalid"?: (e: WaColorPickerEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaComparison` component event */
export type WaComparisonEvent<E = Event> = TypedEvent<WaComparison, E>;

export type WaComparisonProps = {
  /** The position of the divider as a percentage. */
  position?: WaComparison["position"];
  /**  */
  handle?: WaComparison["handle"];

  /** Emitted when the position changes. */
  onchange?: (e: WaComparisonEvent) => void;
};

export type WaComparisonSolidJsProps = {
  /** The position of the divider as a percentage. */
  "prop:position"?: WaComparison["position"];
  /**  */
  "prop:handle"?: WaComparison["handle"];
  /** Emitted when the position changes. */
  "on:change"?: (e: WaComparisonEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaCopyButton` component event */
export type WaCopyButtonEvent<E = Event> = TypedEvent<WaCopyButton, E>;

export type WaCopyButtonProps = {
  /** The text value to copy. */
  value?: WaCopyButton["value"];
  /** An id that references an element in the same document from which data will be copied. If both this and `value` are
present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an
attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
append a dot and the property name, e.g. `from="el.value"`. */
  from?: WaCopyButton["from"];
  /** Disables the copy button. */
  disabled?: WaCopyButton["disabled"];
  /** A custom label to show in the tooltip. */
  "copy-label"?: WaCopyButton["copyLabel"];
  /** A custom label to show in the tooltip. */
  copyLabel?: WaCopyButton["copyLabel"];
  /** A custom label to show in the tooltip after copying. */
  "success-label"?: WaCopyButton["successLabel"];
  /** A custom label to show in the tooltip after copying. */
  successLabel?: WaCopyButton["successLabel"];
  /** A custom label to show in the tooltip when a copy error occurs. */
  "error-label"?: WaCopyButton["errorLabel"];
  /** A custom label to show in the tooltip when a copy error occurs. */
  errorLabel?: WaCopyButton["errorLabel"];
  /** The length of time to show feedback before restoring the default trigger. */
  "feedback-duration"?: WaCopyButton["feedbackDuration"];
  /** The length of time to show feedback before restoring the default trigger. */
  feedbackDuration?: WaCopyButton["feedbackDuration"];
  /** The preferred placement of the tooltip. */
  "tooltip-placement"?: WaCopyButton["tooltipPlacement"];
  /** The preferred placement of the tooltip. */
  tooltipPlacement?: WaCopyButton["tooltipPlacement"];
  /**  */
  copyIcon?: WaCopyButton["copyIcon"];
  /**  */
  successIcon?: WaCopyButton["successIcon"];
  /**  */
  errorIcon?: WaCopyButton["errorIcon"];
  /**  */
  tooltip?: WaCopyButton["tooltip"];
  /**  */
  isCopying?: WaCopyButton["isCopying"];
  /**  */
  status?: WaCopyButton["status"];

  /** Emitted when the data has been copied. */
  "onwa-copy"?: (e: WaCopyButtonEvent) => void;
  /** Emitted when the data could not be copied. */
  "onwa-error"?: (e: WaCopyButtonEvent) => void;
};

export type WaCopyButtonSolidJsProps = {
  /** The text value to copy. */
  "prop:value"?: WaCopyButton["value"];
  /** An id that references an element in the same document from which data will be copied. If both this and `value` are
present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an
attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
append a dot and the property name, e.g. `from="el.value"`. */
  "prop:from"?: WaCopyButton["from"];
  /** Disables the copy button. */
  "prop:disabled"?: WaCopyButton["disabled"];
  /** A custom label to show in the tooltip. */
  "attr:copy-label"?: WaCopyButton["copyLabel"];
  /** A custom label to show in the tooltip. */
  "prop:copyLabel"?: WaCopyButton["copyLabel"];
  /** A custom label to show in the tooltip after copying. */
  "attr:success-label"?: WaCopyButton["successLabel"];
  /** A custom label to show in the tooltip after copying. */
  "prop:successLabel"?: WaCopyButton["successLabel"];
  /** A custom label to show in the tooltip when a copy error occurs. */
  "attr:error-label"?: WaCopyButton["errorLabel"];
  /** A custom label to show in the tooltip when a copy error occurs. */
  "prop:errorLabel"?: WaCopyButton["errorLabel"];
  /** The length of time to show feedback before restoring the default trigger. */
  "attr:feedback-duration"?: WaCopyButton["feedbackDuration"];
  /** The length of time to show feedback before restoring the default trigger. */
  "prop:feedbackDuration"?: WaCopyButton["feedbackDuration"];
  /** The preferred placement of the tooltip. */
  "attr:tooltip-placement"?: WaCopyButton["tooltipPlacement"];
  /** The preferred placement of the tooltip. */
  "prop:tooltipPlacement"?: WaCopyButton["tooltipPlacement"];
  /**  */
  "prop:copyIcon"?: WaCopyButton["copyIcon"];
  /**  */
  "prop:successIcon"?: WaCopyButton["successIcon"];
  /**  */
  "prop:errorIcon"?: WaCopyButton["errorIcon"];
  /**  */
  "prop:tooltip"?: WaCopyButton["tooltip"];
  /**  */
  "prop:isCopying"?: WaCopyButton["isCopying"];
  /**  */
  "prop:status"?: WaCopyButton["status"];
  /** Emitted when the data has been copied. */
  "on:wa-copy"?: (e: WaCopyButtonEvent) => void;
  /** Emitted when the data could not be copied. */
  "on:wa-error"?: (e: WaCopyButtonEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaDetails` component event */
export type WaDetailsEvent<E = Event> = TypedEvent<WaDetails, E>;

export type WaDetailsProps = {
  /** Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
can use the `show()` and `hide()` methods and this attribute will reflect the details' open state. */
  open?: WaDetails["open"];
  /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
  summary?: WaDetails["summary"];
  /** Groups related details elements. When one opens, others with the same name will close. */
  name?: WaDetails["name"];
  /** Disables the details so it can't be toggled. */
  disabled?: WaDetails["disabled"];
  /** The element's visual appearance. */
  appearance?: WaDetails["appearance"];
  /** The location of the expand/collapse icon. */
  "icon-placement"?: WaDetails["iconPlacement"];
  /** The location of the expand/collapse icon. */
  iconPlacement?: WaDetails["iconPlacement"];
  /**  */
  details?: WaDetails["details"];
  /**  */
  header?: WaDetails["header"];
  /**  */
  body?: WaDetails["body"];
  /**  */
  expandIconSlot?: WaDetails["expandIconSlot"];
  /**  */
  isAnimating?: WaDetails["isAnimating"];

  /** Emitted when the details opens. */
  "onwa-show"?: (e: WaDetailsEvent) => void;
  /** Emitted after the details opens and all animations are complete. */
  "onwa-after-show"?: (e: WaDetailsEvent) => void;
  /** Emitted when the details closes. */
  "onwa-hide"?: (e: WaDetailsEvent) => void;
  /** Emitted after the details closes and all animations are complete. */
  "onwa-after-hide"?: (e: WaDetailsEvent) => void;
};

export type WaDetailsSolidJsProps = {
  /** Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
can use the `show()` and `hide()` methods and this attribute will reflect the details' open state. */
  "prop:open"?: WaDetails["open"];
  /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
  "prop:summary"?: WaDetails["summary"];
  /** Groups related details elements. When one opens, others with the same name will close. */
  "prop:name"?: WaDetails["name"];
  /** Disables the details so it can't be toggled. */
  "prop:disabled"?: WaDetails["disabled"];
  /** The element's visual appearance. */
  "prop:appearance"?: WaDetails["appearance"];
  /** The location of the expand/collapse icon. */
  "attr:icon-placement"?: WaDetails["iconPlacement"];
  /** The location of the expand/collapse icon. */
  "prop:iconPlacement"?: WaDetails["iconPlacement"];
  /**  */
  "prop:details"?: WaDetails["details"];
  /**  */
  "prop:header"?: WaDetails["header"];
  /**  */
  "prop:body"?: WaDetails["body"];
  /**  */
  "prop:expandIconSlot"?: WaDetails["expandIconSlot"];
  /**  */
  "prop:isAnimating"?: WaDetails["isAnimating"];
  /** Emitted when the details opens. */
  "on:wa-show"?: (e: WaDetailsEvent) => void;
  /** Emitted after the details opens and all animations are complete. */
  "on:wa-after-show"?: (e: WaDetailsEvent) => void;
  /** Emitted when the details closes. */
  "on:wa-hide"?: (e: WaDetailsEvent) => void;
  /** Emitted after the details closes and all animations are complete. */
  "on:wa-after-hide"?: (e: WaDetailsEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaDialog` component event */
export type WaDialogEvent<E = Event> = TypedEvent<WaDialog, E>;
/** `wa-hide` event type */
export type WaDialogWaHideEvent = WaDialogEvent<
  CustomEvent<{ source: Element }>
>;

export type WaDialogProps = {
  /** Indicates whether or not the dialog is open. Toggle this attribute to show and hide the dialog. */
  open?: WaDialog["open"];
  /** The dialog's label as displayed in the header. You should always include a relevant label, as it is required for
proper accessibility. If you need to display HTML, use the `label` slot instead. */
  label?: WaDialog["label"];
  /** Disables the header. This will also remove the default close button. */
  "without-header"?: WaDialog["withoutHeader"];
  /** Disables the header. This will also remove the default close button. */
  withoutHeader?: WaDialog["withoutHeader"];
  /** When enabled, the dialog will be closed when the user clicks outside of it. */
  "light-dismiss"?: WaDialog["lightDismiss"];
  /** When enabled, the dialog will be closed when the user clicks outside of it. */
  lightDismiss?: WaDialog["lightDismiss"];
  /**  */
  dialog?: WaDialog["dialog"];

  /** Emitted when the dialog opens. */
  "onwa-show"?: (e: WaDialogEvent) => void;
  /** Emitted after the dialog opens and all animations are complete. */
  "onwa-after-show"?: (e: WaDialogEvent) => void;
  /** Emitted when the dialog is requested to close. Calling `event.preventDefault()` will prevent the dialog from closing. You can inspect `event.detail.source` to see which element caused the dialog to close. If the source is the dialog element itself, the user has pressed [[Escape]] or the dialog has been closed programmatically. Avoid using this unless closing the dialog will result in destructive behavior such as data loss. */
  "onwa-hide"?: (e: WaDialogWaHideEvent) => void;
  /** Emitted after the dialog closes and all animations are complete. */
  "onwa-after-hide"?: (e: WaDialogEvent) => void;
};

export type WaDialogSolidJsProps = {
  /** Indicates whether or not the dialog is open. Toggle this attribute to show and hide the dialog. */
  "prop:open"?: WaDialog["open"];
  /** The dialog's label as displayed in the header. You should always include a relevant label, as it is required for
proper accessibility. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: WaDialog["label"];
  /** Disables the header. This will also remove the default close button. */
  "bool:without-header"?: WaDialog["withoutHeader"];
  /** Disables the header. This will also remove the default close button. */
  "prop:withoutHeader"?: WaDialog["withoutHeader"];
  /** When enabled, the dialog will be closed when the user clicks outside of it. */
  "bool:light-dismiss"?: WaDialog["lightDismiss"];
  /** When enabled, the dialog will be closed when the user clicks outside of it. */
  "prop:lightDismiss"?: WaDialog["lightDismiss"];
  /**  */
  "prop:dialog"?: WaDialog["dialog"];
  /** Emitted when the dialog opens. */
  "on:wa-show"?: (e: WaDialogEvent) => void;
  /** Emitted after the dialog opens and all animations are complete. */
  "on:wa-after-show"?: (e: WaDialogEvent) => void;
  /** Emitted when the dialog is requested to close. Calling `event.preventDefault()` will prevent the dialog from closing. You can inspect `event.detail.source` to see which element caused the dialog to close. If the source is the dialog element itself, the user has pressed [[Escape]] or the dialog has been closed programmatically. Avoid using this unless closing the dialog will result in destructive behavior such as data loss. */
  "on:wa-hide"?: (e: WaDialogWaHideEvent) => void;
  /** Emitted after the dialog closes and all animations are complete. */
  "on:wa-after-hide"?: (e: WaDialogEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaDividerProps = {
  /** Sets the divider's orientation. */
  orientation?: WaDivider["orientation"];
};

export type WaDividerSolidJsProps = {
  /** Sets the divider's orientation. */
  "prop:orientation"?: WaDivider["orientation"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaDrawer` component event */
export type WaDrawerEvent<E = Event> = TypedEvent<WaDrawer, E>;
/** `wa-hide` event type */
export type WaDrawerWaHideEvent = WaDrawerEvent<
  CustomEvent<{ source: Element }>
>;

export type WaDrawerProps = {
  /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
  open?: WaDrawer["open"];
  /** The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
proper accessibility. If you need to display HTML, use the `label` slot instead. */
  label?: WaDrawer["label"];
  /** The direction from which the drawer will open. */
  placement?: WaDrawer["placement"];
  /** Disables the header. This will also remove the default close button. */
  "without-header"?: WaDrawer["withoutHeader"];
  /** Disables the header. This will also remove the default close button. */
  withoutHeader?: WaDrawer["withoutHeader"];
  /** When enabled, the drawer will be closed when the user clicks outside of it. */
  "light-dismiss"?: WaDrawer["lightDismiss"];
  /** When enabled, the drawer will be closed when the user clicks outside of it. */
  lightDismiss?: WaDrawer["lightDismiss"];
  /**  */
  drawer?: WaDrawer["drawer"];
  /** Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. */
  modal?: WaDrawer["modal"];

  /** Emitted when the drawer opens. */
  "onwa-show"?: (e: WaDrawerEvent) => void;
  /** Emitted after the drawer opens and all animations are complete. */
  "onwa-after-show"?: (e: WaDrawerEvent) => void;
  /** Emitted when the drawer is requesting to close. Calling `event.preventDefault()` will prevent the drawer from closing. You can inspect `event.detail.source` to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed [[Escape]] or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
  "onwa-hide"?: (e: WaDrawerWaHideEvent) => void;
  /** Emitted after the drawer closes and all animations are complete. */
  "onwa-after-hide"?: (e: WaDrawerEvent) => void;
};

export type WaDrawerSolidJsProps = {
  /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
  "prop:open"?: WaDrawer["open"];
  /** The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
proper accessibility. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: WaDrawer["label"];
  /** The direction from which the drawer will open. */
  "prop:placement"?: WaDrawer["placement"];
  /** Disables the header. This will also remove the default close button. */
  "bool:without-header"?: WaDrawer["withoutHeader"];
  /** Disables the header. This will also remove the default close button. */
  "prop:withoutHeader"?: WaDrawer["withoutHeader"];
  /** When enabled, the drawer will be closed when the user clicks outside of it. */
  "bool:light-dismiss"?: WaDrawer["lightDismiss"];
  /** When enabled, the drawer will be closed when the user clicks outside of it. */
  "prop:lightDismiss"?: WaDrawer["lightDismiss"];
  /**  */
  "prop:drawer"?: WaDrawer["drawer"];
  /** Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. */
  "prop:modal"?: WaDrawer["modal"];
  /** Emitted when the drawer opens. */
  "on:wa-show"?: (e: WaDrawerEvent) => void;
  /** Emitted after the drawer opens and all animations are complete. */
  "on:wa-after-show"?: (e: WaDrawerEvent) => void;
  /** Emitted when the drawer is requesting to close. Calling `event.preventDefault()` will prevent the drawer from closing. You can inspect `event.detail.source` to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed [[Escape]] or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
  "on:wa-hide"?: (e: WaDrawerWaHideEvent) => void;
  /** Emitted after the drawer closes and all animations are complete. */
  "on:wa-after-hide"?: (e: WaDrawerEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaDropdown` component event */
export type WaDropdownEvent<E = Event> = TypedEvent<WaDropdown, E>;

export type WaDropdownProps = {
  /** Opens or closes the dropdown. */
  open?: WaDropdown["open"];
  /** The dropdown's size. */
  size?: WaDropdown["size"];
  /** The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
the preferred placement doesn't have enough room. */
  placement?: WaDropdown["placement"];
  /** The distance of the dropdown menu from its trigger. */
  distance?: WaDropdown["distance"];
  /** The offset of the dropdown menu along its trigger. */
  skidding?: WaDropdown["skidding"];
  /**  */
  defaultSlot?: WaDropdown["defaultSlot"];

  /** Emitted when the dropdown is about to show. */
  "onwa-show"?: (e: WaDropdownEvent) => void;
  /** Emitted after the dropdown has been shown. */
  "onwa-after-show"?: (e: WaDropdownEvent) => void;
  /** Emitted when the dropdown is about to hide. */
  "onwa-hide"?: (e: WaDropdownEvent) => void;
  /** Emitted after the dropdown has been hidden. */
  "onwa-after-hide"?: (e: WaDropdownEvent) => void;
  /** Emitted when an item in the dropdown is selected. */
  "onwa-select"?: (e: WaDropdownEvent) => void;
};

export type WaDropdownSolidJsProps = {
  /** Opens or closes the dropdown. */
  "prop:open"?: WaDropdown["open"];
  /** The dropdown's size. */
  "prop:size"?: WaDropdown["size"];
  /** The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
the preferred placement doesn't have enough room. */
  "prop:placement"?: WaDropdown["placement"];
  /** The distance of the dropdown menu from its trigger. */
  "prop:distance"?: WaDropdown["distance"];
  /** The offset of the dropdown menu along its trigger. */
  "prop:skidding"?: WaDropdown["skidding"];
  /**  */
  "prop:defaultSlot"?: WaDropdown["defaultSlot"];
  /** Emitted when the dropdown is about to show. */
  "on:wa-show"?: (e: WaDropdownEvent) => void;
  /** Emitted after the dropdown has been shown. */
  "on:wa-after-show"?: (e: WaDropdownEvent) => void;
  /** Emitted when the dropdown is about to hide. */
  "on:wa-hide"?: (e: WaDropdownEvent) => void;
  /** Emitted after the dropdown has been hidden. */
  "on:wa-after-hide"?: (e: WaDropdownEvent) => void;
  /** Emitted when an item in the dropdown is selected. */
  "on:wa-select"?: (e: WaDropdownEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaDropdownItem` component event */
export type WaDropdownItemEvent<E = Event> = TypedEvent<WaDropdownItem, E>;

export type WaDropdownItemProps = {
  /** The type of menu item to render. */
  variant?: WaDropdownItem["variant"];
  /** An optional value for the menu item. This is useful for determining which item was selected when listening to the
dropdown's `wa-select` event. */
  value?: WaDropdownItem["value"];
  /** Set to `checkbox` to make the item a checkbox. */
  type?: WaDropdownItem["type"];
  /** Set to true to check the dropdown item. Only valid when `type` is `checkbox`. */
  checked?: WaDropdownItem["checked"];
  /** Disables the dropdown item. */
  disabled?: WaDropdownItem["disabled"];
  /** Whether the submenu is currently open. */
  submenuOpen?: WaDropdownItem["submenuOpen"];
  /**  */
  submenuElement?: WaDropdownItem["submenuElement"];

  /** Emitted when the dropdown item loses focus. */
  onblur?: (e: WaDropdownItemEvent) => void;
  /** Emitted when the dropdown item gains focus. */
  onfocus?: (e: WaDropdownItemEvent) => void;
};

export type WaDropdownItemSolidJsProps = {
  /** The type of menu item to render. */
  "prop:variant"?: WaDropdownItem["variant"];
  /** An optional value for the menu item. This is useful for determining which item was selected when listening to the
dropdown's `wa-select` event. */
  "prop:value"?: WaDropdownItem["value"];
  /** Set to `checkbox` to make the item a checkbox. */
  "prop:type"?: WaDropdownItem["type"];
  /** Set to true to check the dropdown item. Only valid when `type` is `checkbox`. */
  "prop:checked"?: WaDropdownItem["checked"];
  /** Disables the dropdown item. */
  "prop:disabled"?: WaDropdownItem["disabled"];
  /** Whether the submenu is currently open. */
  "prop:submenuOpen"?: WaDropdownItem["submenuOpen"];
  /**  */
  "prop:submenuElement"?: WaDropdownItem["submenuElement"];
  /** Emitted when the dropdown item loses focus. */
  "on:blur"?: (e: WaDropdownItemEvent) => void;
  /** Emitted when the dropdown item gains focus. */
  "on:focus"?: (e: WaDropdownItemEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaFormatBytesProps = {
  /** The number to format in bytes. */
  value?: WaFormatBytes["value"];
  /** The type of unit to display. */
  unit?: WaFormatBytes["unit"];
  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
  display?: WaFormatBytes["display"];
};

export type WaFormatBytesSolidJsProps = {
  /** The number to format in bytes. */
  "prop:value"?: WaFormatBytes["value"];
  /** The type of unit to display. */
  "prop:unit"?: WaFormatBytes["unit"];
  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
  "prop:display"?: WaFormatBytes["display"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaFormatDateProps = {
  /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  date?: WaFormatDate["date"];
  /** The format for displaying the weekday. */
  weekday?: WaFormatDate["weekday"];
  /** The format for displaying the era. */
  era?: WaFormatDate["era"];
  /** The format for displaying the year. */
  year?: WaFormatDate["year"];
  /** The format for displaying the month. */
  month?: WaFormatDate["month"];
  /** The format for displaying the day. */
  day?: WaFormatDate["day"];
  /** The format for displaying the hour. */
  hour?: WaFormatDate["hour"];
  /** The format for displaying the minute. */
  minute?: WaFormatDate["minute"];
  /** The format for displaying the second. */
  second?: WaFormatDate["second"];
  /** The format for displaying the time. */
  "time-zone-name"?: WaFormatDate["timeZoneName"];
  /** The format for displaying the time. */
  timeZoneName?: WaFormatDate["timeZoneName"];
  /** The time zone to express the time in. */
  "time-zone"?: WaFormatDate["timeZone"];
  /** The time zone to express the time in. */
  timeZone?: WaFormatDate["timeZone"];
  /** The format for displaying the hour. */
  "hour-format"?: WaFormatDate["hourFormat"];
  /** The format for displaying the hour. */
  hourFormat?: WaFormatDate["hourFormat"];
};

export type WaFormatDateSolidJsProps = {
  /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  "prop:date"?: WaFormatDate["date"];
  /** The format for displaying the weekday. */
  "prop:weekday"?: WaFormatDate["weekday"];
  /** The format for displaying the era. */
  "prop:era"?: WaFormatDate["era"];
  /** The format for displaying the year. */
  "prop:year"?: WaFormatDate["year"];
  /** The format for displaying the month. */
  "prop:month"?: WaFormatDate["month"];
  /** The format for displaying the day. */
  "prop:day"?: WaFormatDate["day"];
  /** The format for displaying the hour. */
  "prop:hour"?: WaFormatDate["hour"];
  /** The format for displaying the minute. */
  "prop:minute"?: WaFormatDate["minute"];
  /** The format for displaying the second. */
  "prop:second"?: WaFormatDate["second"];
  /** The format for displaying the time. */
  "attr:time-zone-name"?: WaFormatDate["timeZoneName"];
  /** The format for displaying the time. */
  "prop:timeZoneName"?: WaFormatDate["timeZoneName"];
  /** The time zone to express the time in. */
  "attr:time-zone"?: WaFormatDate["timeZone"];
  /** The time zone to express the time in. */
  "prop:timeZone"?: WaFormatDate["timeZone"];
  /** The format for displaying the hour. */
  "attr:hour-format"?: WaFormatDate["hourFormat"];
  /** The format for displaying the hour. */
  "prop:hourFormat"?: WaFormatDate["hourFormat"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaFormatNumberProps = {
  /** The number to format. */
  value?: WaFormatNumber["value"];
  /** The formatting style to use. */
  type?: WaFormatNumber["type"];
  /** Turns off grouping separators. */
  "without-grouping"?: WaFormatNumber["withoutGrouping"];
  /** Turns off grouping separators. */
  withoutGrouping?: WaFormatNumber["withoutGrouping"];
  /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
  currency?: WaFormatNumber["currency"];
  /** How to display the currency. */
  "currency-display"?: WaFormatNumber["currencyDisplay"];
  /** How to display the currency. */
  currencyDisplay?: WaFormatNumber["currencyDisplay"];
  /** The minimum number of integer digits to use. Possible values are 1-21. */
  "minimum-integer-digits"?: WaFormatNumber["minimumIntegerDigits"];
  /** The minimum number of integer digits to use. Possible values are 1-21. */
  minimumIntegerDigits?: WaFormatNumber["minimumIntegerDigits"];
  /** The minimum number of fraction digits to use. Possible values are 0-100. */
  "minimum-fraction-digits"?: WaFormatNumber["minimumFractionDigits"];
  /** The minimum number of fraction digits to use. Possible values are 0-100. */
  minimumFractionDigits?: WaFormatNumber["minimumFractionDigits"];
  /** The maximum number of fraction digits to use. Possible values are 0-100. */
  "maximum-fraction-digits"?: WaFormatNumber["maximumFractionDigits"];
  /** The maximum number of fraction digits to use. Possible values are 0-100. */
  maximumFractionDigits?: WaFormatNumber["maximumFractionDigits"];
  /** The minimum number of significant digits to use. Possible values are 1-21. */
  "minimum-significant-digits"?: WaFormatNumber["minimumSignificantDigits"];
  /** The minimum number of significant digits to use. Possible values are 1-21. */
  minimumSignificantDigits?: WaFormatNumber["minimumSignificantDigits"];
  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  "maximum-significant-digits"?: WaFormatNumber["maximumSignificantDigits"];
  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  maximumSignificantDigits?: WaFormatNumber["maximumSignificantDigits"];
};

export type WaFormatNumberSolidJsProps = {
  /** The number to format. */
  "prop:value"?: WaFormatNumber["value"];
  /** The formatting style to use. */
  "prop:type"?: WaFormatNumber["type"];
  /** Turns off grouping separators. */
  "bool:without-grouping"?: WaFormatNumber["withoutGrouping"];
  /** Turns off grouping separators. */
  "prop:withoutGrouping"?: WaFormatNumber["withoutGrouping"];
  /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
  "prop:currency"?: WaFormatNumber["currency"];
  /** How to display the currency. */
  "attr:currency-display"?: WaFormatNumber["currencyDisplay"];
  /** How to display the currency. */
  "prop:currencyDisplay"?: WaFormatNumber["currencyDisplay"];
  /** The minimum number of integer digits to use. Possible values are 1-21. */
  "attr:minimum-integer-digits"?: WaFormatNumber["minimumIntegerDigits"];
  /** The minimum number of integer digits to use. Possible values are 1-21. */
  "prop:minimumIntegerDigits"?: WaFormatNumber["minimumIntegerDigits"];
  /** The minimum number of fraction digits to use. Possible values are 0-100. */
  "attr:minimum-fraction-digits"?: WaFormatNumber["minimumFractionDigits"];
  /** The minimum number of fraction digits to use. Possible values are 0-100. */
  "prop:minimumFractionDigits"?: WaFormatNumber["minimumFractionDigits"];
  /** The maximum number of fraction digits to use. Possible values are 0-100. */
  "attr:maximum-fraction-digits"?: WaFormatNumber["maximumFractionDigits"];
  /** The maximum number of fraction digits to use. Possible values are 0-100. */
  "prop:maximumFractionDigits"?: WaFormatNumber["maximumFractionDigits"];
  /** The minimum number of significant digits to use. Possible values are 1-21. */
  "attr:minimum-significant-digits"?: WaFormatNumber["minimumSignificantDigits"];
  /** The minimum number of significant digits to use. Possible values are 1-21. */
  "prop:minimumSignificantDigits"?: WaFormatNumber["minimumSignificantDigits"];
  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  "attr:maximum-significant-digits"?: WaFormatNumber["maximumSignificantDigits"];
  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  "prop:maximumSignificantDigits"?: WaFormatNumber["maximumSignificantDigits"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaIcon` component event */
export type WaIconEvent<E = Event> = TypedEvent<WaIcon, E>;

export type WaIconProps = {
  /** The name of the icon to draw. Available names depend on the icon library being used. */
  name?: WaIcon["name"];
  /** The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For
Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`.
A valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code="...">` to provide
one. */
  family?: WaIcon["family"];
  /** The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for
the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon libraries
may or may not use this property. */
  variant?: WaIcon["variant"];
  /** Sets the width of the icon to match the cropped SVG viewBox. This operates like the Font `fa-width-auto` class. */
  "auto-width"?: WaIcon["autoWidth"];
  /** Sets the width of the icon to match the cropped SVG viewBox. This operates like the Font `fa-width-auto` class. */
  autoWidth?: WaIcon["autoWidth"];
  /** Swaps the opacity of duotone icons. */
  "swap-opacity"?: WaIcon["swapOpacity"];
  /** Swaps the opacity of duotone icons. */
  swapOpacity?: WaIcon["swapOpacity"];
  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks. */
  src?: WaIcon["src"];
  /** An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
ignored by assistive devices. */
  label?: WaIcon["label"];
  /** The name of a registered custom icon library. */
  library?: WaIcon["library"];

  /** Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit. */
  "onwa-load"?: (e: WaIconEvent) => void;
  /** Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit. */
  "onwa-error"?: (e: WaIconEvent) => void;
};

export type WaIconSolidJsProps = {
  /** The name of the icon to draw. Available names depend on the icon library being used. */
  "prop:name"?: WaIcon["name"];
  /** The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For
Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`.
A valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code="...">` to provide
one. */
  "prop:family"?: WaIcon["family"];
  /** The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for
the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon libraries
may or may not use this property. */
  "prop:variant"?: WaIcon["variant"];
  /** Sets the width of the icon to match the cropped SVG viewBox. This operates like the Font `fa-width-auto` class. */
  "bool:auto-width"?: WaIcon["autoWidth"];
  /** Sets the width of the icon to match the cropped SVG viewBox. This operates like the Font `fa-width-auto` class. */
  "prop:autoWidth"?: WaIcon["autoWidth"];
  /** Swaps the opacity of duotone icons. */
  "bool:swap-opacity"?: WaIcon["swapOpacity"];
  /** Swaps the opacity of duotone icons. */
  "prop:swapOpacity"?: WaIcon["swapOpacity"];
  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks. */
  "prop:src"?: WaIcon["src"];
  /** An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
ignored by assistive devices. */
  "prop:label"?: WaIcon["label"];
  /** The name of a registered custom icon library. */
  "prop:library"?: WaIcon["library"];
  /** Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit. */
  "on:wa-load"?: (e: WaIconEvent) => void;
  /** Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit. */
  "on:wa-error"?: (e: WaIconEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaInclude` component event */
export type WaIncludeEvent<E = Event> = TypedEvent<WaInclude, E>;
/** `wa-include-error` event type */
export type WaIncludeWaIncludeErrorEvent = WaIncludeEvent<
  CustomEvent<{ status: number }>
>;

export type WaIncludeProps = {
  /** The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  src?: WaInclude["src"];
  /** The fetch mode to use. */
  mode?: WaInclude["mode"];
  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  "allow-scripts"?: WaInclude["allowScripts"];
  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  allowScripts?: WaInclude["allowScripts"];

  /** Emitted when the included file is loaded. */
  "onwa-load"?: (e: WaIncludeEvent) => void;
  /** Emitted when the included file fails to load due to an error. */
  "onwa-include-error"?: (e: WaIncludeWaIncludeErrorEvent) => void;
};

export type WaIncludeSolidJsProps = {
  /** The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  "prop:src"?: WaInclude["src"];
  /** The fetch mode to use. */
  "prop:mode"?: WaInclude["mode"];
  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  "bool:allow-scripts"?: WaInclude["allowScripts"];
  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  "prop:allowScripts"?: WaInclude["allowScripts"];
  /** Emitted when the included file is loaded. */
  "on:wa-load"?: (e: WaIncludeEvent) => void;
  /** Emitted when the included file fails to load due to an error. */
  "on:wa-include-error"?: (e: WaIncludeWaIncludeErrorEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaInput` component event */
export type WaInputEvent<E = Event> = TypedEvent<WaInput, E>;
/** `input` event type */
export type WaInputInputEvent = WaInputEvent<InputEvent>;

export type WaInputProps = {
  /**  */
  title?: WaInput["title"];
  /** The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
to `text`. */
  type?: WaInput["type"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  value?: WaInput["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: WaInput["defaultValue"];
  /** The input's size. */
  size?: WaInput["size"];
  /** The input's visual appearance. */
  appearance?: WaInput["appearance"];
  /** Draws a pill-style input with rounded edges. */
  pill?: WaInput["pill"];
  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  label?: WaInput["label"];
  /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
  hint?: WaInput["hint"];
  /** Adds a clear button when the input is not empty. */
  "with-clear"?: WaInput["withClear"];
  /** Adds a clear button when the input is not empty. */
  withClear?: WaInput["withClear"];
  /** Placeholder text to show as a hint when the input is empty. */
  placeholder?: WaInput["placeholder"];
  /** Makes the input readonly. */
  readonly?: WaInput["readonly"];
  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  "password-toggle"?: WaInput["passwordToggle"];
  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  passwordToggle?: WaInput["passwordToggle"];
  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  "password-visible"?: WaInput["passwordVisible"];
  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  passwordVisible?: WaInput["passwordVisible"];
  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  "without-spin-buttons"?: WaInput["withoutSpinButtons"];
  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  withoutSpinButtons?: WaInput["withoutSpinButtons"];
  /** Makes the input a required field. */
  required?: WaInput["required"];
  /** A regular expression pattern to validate input against. */
  pattern?: WaInput["pattern"];
  /** The minimum length of input that will be considered valid. */
  minlength?: WaInput["minlength"];
  /** The maximum length of input that will be considered valid. */
  maxlength?: WaInput["maxlength"];
  /** The input's minimum value. Only applies to date and number input types. */
  min?: WaInput["min"];
  /** The input's maximum value. Only applies to date and number input types. */
  max?: WaInput["max"];
  /** Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
implied, allowing any numeric value. Only applies to date and number input types. */
  step?: WaInput["step"];
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  autocapitalize?: WaInput["autocapitalize"];
  /** Indicates whether the browser's autocorrect feature is on or off. */
  autocorrect?: WaInput["autocorrect"];
  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  autocomplete?: WaInput["autocomplete"];
  /** Indicates that the input should receive focus on page load. */
  autofocus?: WaInput["autofocus"];
  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  enterkeyhint?: WaInput["enterkeyhint"];
  /** Enables spell checking on the input. */
  spellcheck?: WaInput["spellcheck"];
  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices. */
  inputmode?: WaInput["inputmode"];
  /** Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint. */
  "with-label"?: WaInput["withLabel"];
  /** Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint. */
  withLabel?: WaInput["withLabel"];
  /** Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint. */
  "with-hint"?: WaInput["withHint"];
  /** Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint. */
  withHint?: WaInput["withHint"];
  /**  */
  assumeInteractionOn?: WaInput["assumeInteractionOn"];
  /**  */
  input?: WaInput["input"];

  /** Emitted when the control receives input. */
  oninput?: (e: WaInputInputEvent) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  onchange?: (e: WaInputEvent) => void;
  /** Emitted when the control loses focus. */
  onblur?: (e: WaInputEvent) => void;
  /** Emitted when the control gains focus. */
  onfocus?: (e: WaInputEvent) => void;
  /** Emitted when the clear button is activated. */
  "onwa-clear"?: (e: WaInputEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onwa-invalid"?: (e: WaInputEvent) => void;
};

export type WaInputSolidJsProps = {
  /**  */
  "prop:title"?: WaInput["title"];
  /** The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
to `text`. */
  "prop:type"?: WaInput["type"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "attr:value"?: WaInput["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultValue"?: WaInput["defaultValue"];
  /** The input's size. */
  "prop:size"?: WaInput["size"];
  /** The input's visual appearance. */
  "prop:appearance"?: WaInput["appearance"];
  /** Draws a pill-style input with rounded edges. */
  "prop:pill"?: WaInput["pill"];
  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: WaInput["label"];
  /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
  "prop:hint"?: WaInput["hint"];
  /** Adds a clear button when the input is not empty. */
  "bool:with-clear"?: WaInput["withClear"];
  /** Adds a clear button when the input is not empty. */
  "prop:withClear"?: WaInput["withClear"];
  /** Placeholder text to show as a hint when the input is empty. */
  "prop:placeholder"?: WaInput["placeholder"];
  /** Makes the input readonly. */
  "prop:readonly"?: WaInput["readonly"];
  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  "bool:password-toggle"?: WaInput["passwordToggle"];
  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  "prop:passwordToggle"?: WaInput["passwordToggle"];
  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  "bool:password-visible"?: WaInput["passwordVisible"];
  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  "prop:passwordVisible"?: WaInput["passwordVisible"];
  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  "bool:without-spin-buttons"?: WaInput["withoutSpinButtons"];
  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  "prop:withoutSpinButtons"?: WaInput["withoutSpinButtons"];
  /** Makes the input a required field. */
  "prop:required"?: WaInput["required"];
  /** A regular expression pattern to validate input against. */
  "prop:pattern"?: WaInput["pattern"];
  /** The minimum length of input that will be considered valid. */
  "prop:minlength"?: WaInput["minlength"];
  /** The maximum length of input that will be considered valid. */
  "prop:maxlength"?: WaInput["maxlength"];
  /** The input's minimum value. Only applies to date and number input types. */
  "prop:min"?: WaInput["min"];
  /** The input's maximum value. Only applies to date and number input types. */
  "prop:max"?: WaInput["max"];
  /** Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
implied, allowing any numeric value. Only applies to date and number input types. */
  "prop:step"?: WaInput["step"];
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  "prop:autocapitalize"?: WaInput["autocapitalize"];
  /** Indicates whether the browser's autocorrect feature is on or off. */
  "prop:autocorrect"?: WaInput["autocorrect"];
  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  "prop:autocomplete"?: WaInput["autocomplete"];
  /** Indicates that the input should receive focus on page load. */
  "prop:autofocus"?: WaInput["autofocus"];
  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  "prop:enterkeyhint"?: WaInput["enterkeyhint"];
  /** Enables spell checking on the input. */
  "prop:spellcheck"?: WaInput["spellcheck"];
  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices. */
  "prop:inputmode"?: WaInput["inputmode"];
  /** Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint. */
  "bool:with-label"?: WaInput["withLabel"];
  /** Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint. */
  "prop:withLabel"?: WaInput["withLabel"];
  /** Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint. */
  "bool:with-hint"?: WaInput["withHint"];
  /** Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint. */
  "prop:withHint"?: WaInput["withHint"];
  /**  */
  "prop:assumeInteractionOn"?: WaInput["assumeInteractionOn"];
  /**  */
  "prop:input"?: WaInput["input"];
  /** Emitted when the control receives input. */
  "on:input"?: (e: WaInputInputEvent) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "on:change"?: (e: WaInputEvent) => void;
  /** Emitted when the control loses focus. */
  "on:blur"?: (e: WaInputEvent) => void;
  /** Emitted when the control gains focus. */
  "on:focus"?: (e: WaInputEvent) => void;
  /** Emitted when the clear button is activated. */
  "on:wa-clear"?: (e: WaInputEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:wa-invalid"?: (e: WaInputEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaIntersectionObserver` component event */
export type WaIntersectionObserverEvent<E = Event> = TypedEvent<
  WaIntersectionObserver,
  E
>;
/** `wa-intersect` event type */
export type WaIntersectionObserverWaIntersectEvent =
  WaIntersectionObserverEvent<
    CustomEvent<{ entry: IntersectionObserverEntry }>
  >;

export type WaIntersectionObserverProps = {
  /** Element ID to define the viewport boundaries for tracked targets. */
  root?: WaIntersectionObserver["root"];
  /** Offset space around the root boundary. Accepts values like CSS margin syntax. */
  "root-margin"?: WaIntersectionObserver["rootMargin"];
  /** Offset space around the root boundary. Accepts values like CSS margin syntax. */
  rootMargin?: WaIntersectionObserver["rootMargin"];
  /** One or more space-separated values representing visibility percentages that trigger the observer callback. */
  threshold?: WaIntersectionObserver["threshold"];
  /** CSS class applied to elements during intersection. Automatically removed when elements leave
the viewport, enabling pure CSS styling based on visibility state. */
  "intersect-class"?: WaIntersectionObserver["intersectClass"];
  /** CSS class applied to elements during intersection. Automatically removed when elements leave
the viewport, enabling pure CSS styling based on visibility state. */
  intersectClass?: WaIntersectionObserver["intersectClass"];
  /** If enabled, observation ceases after initial intersection. */
  once?: WaIntersectionObserver["once"];
  /** Deactivates the intersection observer functionality. */
  disabled?: WaIntersectionObserver["disabled"];

  /** Fired when a tracked element begins or ceases intersecting. */
  "onwa-intersect"?: (e: WaIntersectionObserverWaIntersectEvent) => void;
};

export type WaIntersectionObserverSolidJsProps = {
  /** Element ID to define the viewport boundaries for tracked targets. */
  "prop:root"?: WaIntersectionObserver["root"];
  /** Offset space around the root boundary. Accepts values like CSS margin syntax. */
  "attr:root-margin"?: WaIntersectionObserver["rootMargin"];
  /** Offset space around the root boundary. Accepts values like CSS margin syntax. */
  "prop:rootMargin"?: WaIntersectionObserver["rootMargin"];
  /** One or more space-separated values representing visibility percentages that trigger the observer callback. */
  "prop:threshold"?: WaIntersectionObserver["threshold"];
  /** CSS class applied to elements during intersection. Automatically removed when elements leave
the viewport, enabling pure CSS styling based on visibility state. */
  "attr:intersect-class"?: WaIntersectionObserver["intersectClass"];
  /** CSS class applied to elements during intersection. Automatically removed when elements leave
the viewport, enabling pure CSS styling based on visibility state. */
  "prop:intersectClass"?: WaIntersectionObserver["intersectClass"];
  /** If enabled, observation ceases after initial intersection. */
  "prop:once"?: WaIntersectionObserver["once"];
  /** Deactivates the intersection observer functionality. */
  "prop:disabled"?: WaIntersectionObserver["disabled"];
  /** Fired when a tracked element begins or ceases intersecting. */
  "on:wa-intersect"?: (e: WaIntersectionObserverWaIntersectEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaMutationObserver` component event */
export type WaMutationObserverEvent<E = Event> = TypedEvent<
  WaMutationObserver,
  E
>;
/** `wa-mutation` event type */
export type WaMutationObserverWaMutationEvent = WaMutationObserverEvent<
  CustomEvent<{ mutationList: MutationRecord[] }>
>;

export type WaMutationObserverProps = {
  /** Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
`attr="class id title"`. To watch all attributes, use `*`. */
  attr?: WaMutationObserver["attr"];
  /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
  "attr-old-value"?: WaMutationObserver["attrOldValue"];
  /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
  attrOldValue?: WaMutationObserver["attrOldValue"];
  /** Watches for changes to the character data contained within the node. */
  "char-data"?: WaMutationObserver["charData"];
  /** Watches for changes to the character data contained within the node. */
  charData?: WaMutationObserver["charData"];
  /** Indicates whether or not the previous value of the node's text should be recorded. */
  "char-data-old-value"?: WaMutationObserver["charDataOldValue"];
  /** Indicates whether or not the previous value of the node's text should be recorded. */
  charDataOldValue?: WaMutationObserver["charDataOldValue"];
  /** Watches for the addition or removal of new child nodes. */
  "child-list"?: WaMutationObserver["childList"];
  /** Watches for the addition or removal of new child nodes. */
  childList?: WaMutationObserver["childList"];
  /** Disables the observer. */
  disabled?: WaMutationObserver["disabled"];

  /** Emitted when a mutation occurs. */
  "onwa-mutation"?: (e: WaMutationObserverWaMutationEvent) => void;
};

export type WaMutationObserverSolidJsProps = {
  /** Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
`attr="class id title"`. To watch all attributes, use `*`. */
  "prop:attr"?: WaMutationObserver["attr"];
  /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
  "bool:attr-old-value"?: WaMutationObserver["attrOldValue"];
  /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
  "prop:attrOldValue"?: WaMutationObserver["attrOldValue"];
  /** Watches for changes to the character data contained within the node. */
  "bool:char-data"?: WaMutationObserver["charData"];
  /** Watches for changes to the character data contained within the node. */
  "prop:charData"?: WaMutationObserver["charData"];
  /** Indicates whether or not the previous value of the node's text should be recorded. */
  "bool:char-data-old-value"?: WaMutationObserver["charDataOldValue"];
  /** Indicates whether or not the previous value of the node's text should be recorded. */
  "prop:charDataOldValue"?: WaMutationObserver["charDataOldValue"];
  /** Watches for the addition or removal of new child nodes. */
  "bool:child-list"?: WaMutationObserver["childList"];
  /** Watches for the addition or removal of new child nodes. */
  "prop:childList"?: WaMutationObserver["childList"];
  /** Disables the observer. */
  "prop:disabled"?: WaMutationObserver["disabled"];
  /** Emitted when a mutation occurs. */
  "on:wa-mutation"?: (e: WaMutationObserverWaMutationEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaOptionProps = {
  /** The option's value. When selected, the containing form control will receive this value. The value must be unique
from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
multiple values. */
  value?: WaOption["value"];
  /** Draws the option in a disabled state, preventing selection. */
  disabled?: WaOption["disabled"];
  /** Selects an option initially. */
  selected?: WaOption["defaultSelected"];
  /** Selects an option initially. */
  defaultSelected?: WaOption["defaultSelected"];
  /** The option’s plain text label.
Usually automatically generated, but can be useful to provide manually for cases involving complex content. */
  label?: WaOption["label"];
  /**  */
  defaultSlot?: WaOption["defaultSlot"];
  /**  */
  current?: WaOption["current"];
  /**  */
  _label?: WaOption["_label"];
  /** The default label, generated from the element contents. Will be equal to `label` in most cases. */
  defaultLabel?: WaOption["defaultLabel"];
};

export type WaOptionSolidJsProps = {
  /** The option's value. When selected, the containing form control will receive this value. The value must be unique
from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
multiple values. */
  "prop:value"?: WaOption["value"];
  /** Draws the option in a disabled state, preventing selection. */
  "prop:disabled"?: WaOption["disabled"];
  /** Selects an option initially. */
  "bool:selected"?: WaOption["defaultSelected"];
  /** Selects an option initially. */
  "prop:defaultSelected"?: WaOption["defaultSelected"];
  /** The option’s plain text label.
Usually automatically generated, but can be useful to provide manually for cases involving complex content. */
  "prop:label"?: WaOption["label"];
  /**  */
  "prop:defaultSlot"?: WaOption["defaultSlot"];
  /**  */
  "prop:current"?: WaOption["current"];
  /**  */
  "prop:_label"?: WaOption["_label"];
  /** The default label, generated from the element contents. Will be equal to `label` in most cases. */
  "prop:defaultLabel"?: WaOption["defaultLabel"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaPopover` component event */
export type WaPopoverEvent<E = Event> = TypedEvent<WaPopover, E>;

export type WaPopoverProps = {
  /** The preferred placement of the popover. Note that the actual placement may vary as needed to keep the popover
inside of the viewport. */
  placement?: WaPopover["placement"];
  /** Shows or hides the popover. */
  open?: WaPopover["open"];
  /** The distance in pixels from which to offset the popover away from its target. */
  distance?: WaPopover["distance"];
  /** The distance in pixels from which to offset the popover along its target. */
  skidding?: WaPopover["skidding"];
  /** The ID of the popover's anchor element. This must be an interactive/focusable element such as a button. */
  for?: WaPopover["for"];
  /** Removes the arrow from the popover. */
  "without-arrow"?: WaPopover["withoutArrow"];
  /** Removes the arrow from the popover. */
  withoutArrow?: WaPopover["withoutArrow"];
  /**  */
  dialog?: WaPopover["dialog"];
  /**  */
  body?: WaPopover["body"];
  /**  */
  popup?: WaPopover["popup"];
  /**  */
  anchor?: WaPopover["anchor"];

  /** Emitted when the popover begins to show. Canceling this event will stop the popover from showing. */
  "onwa-show"?: (e: WaPopoverEvent) => void;
  /** Emitted after the popover has shown and all animations are complete. */
  "onwa-after-show"?: (e: WaPopoverEvent) => void;
  /** Emitted when the popover begins to hide. Canceling this event will stop the popover from hiding. */
  "onwa-hide"?: (e: WaPopoverEvent) => void;
  /** Emitted after the popover has hidden and all animations are complete. */
  "onwa-after-hide"?: (e: WaPopoverEvent) => void;
};

export type WaPopoverSolidJsProps = {
  /** The preferred placement of the popover. Note that the actual placement may vary as needed to keep the popover
inside of the viewport. */
  "prop:placement"?: WaPopover["placement"];
  /** Shows or hides the popover. */
  "prop:open"?: WaPopover["open"];
  /** The distance in pixels from which to offset the popover away from its target. */
  "prop:distance"?: WaPopover["distance"];
  /** The distance in pixels from which to offset the popover along its target. */
  "prop:skidding"?: WaPopover["skidding"];
  /** The ID of the popover's anchor element. This must be an interactive/focusable element such as a button. */
  "prop:for"?: WaPopover["for"];
  /** Removes the arrow from the popover. */
  "bool:without-arrow"?: WaPopover["withoutArrow"];
  /** Removes the arrow from the popover. */
  "prop:withoutArrow"?: WaPopover["withoutArrow"];
  /**  */
  "prop:dialog"?: WaPopover["dialog"];
  /**  */
  "prop:body"?: WaPopover["body"];
  /**  */
  "prop:popup"?: WaPopover["popup"];
  /**  */
  "prop:anchor"?: WaPopover["anchor"];
  /** Emitted when the popover begins to show. Canceling this event will stop the popover from showing. */
  "on:wa-show"?: (e: WaPopoverEvent) => void;
  /** Emitted after the popover has shown and all animations are complete. */
  "on:wa-after-show"?: (e: WaPopoverEvent) => void;
  /** Emitted when the popover begins to hide. Canceling this event will stop the popover from hiding. */
  "on:wa-hide"?: (e: WaPopoverEvent) => void;
  /** Emitted after the popover has hidden and all animations are complete. */
  "on:wa-after-hide"?: (e: WaPopoverEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaPopup` component event */
export type WaPopupEvent<E = Event> = TypedEvent<WaPopup, E>;

export type WaPopupProps = {
  /** The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
`anchor` slot instead. */
  anchor?: WaPopup["anchor"];
  /** Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
down and the popup will be hidden. */
  active?: WaPopup["active"];
  /** The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
panel inside of the viewport. */
  placement?: WaPopup["placement"];
  /** The bounding box to use for flipping, shifting, and auto-sizing. */
  boundary?: WaPopup["boundary"];
  /** The distance in pixels from which to offset the panel away from its anchor. */
  distance?: WaPopup["distance"];
  /** The distance in pixels from which to offset the panel along its anchor. */
  skidding?: WaPopup["skidding"];
  /** Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
`--arrow-color` custom properties. For additional customizations, you can also target the arrow using
`::part(arrow)` in your stylesheet. */
  arrow?: WaPopup["arrow"];
  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead. */
  "arrow-placement"?: WaPopup["arrowPlacement"];
  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead. */
  arrowPlacement?: WaPopup["arrowPlacement"];
  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners. */
  "arrow-padding"?: WaPopup["arrowPadding"];
  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners. */
  arrowPadding?: WaPopup["arrowPadding"];
  /** When set, placement of the popup will flip to the opposite site to keep it in view. You can use
`flipFallbackPlacements` to further configure how the fallback placement is determined. */
  flip?: WaPopup["flip"];
  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead. */
  "flip-fallback-placements"?: WaPopup["flipFallbackPlacements"];
  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead. */
  flipFallbackPlacements?: WaPopup["flipFallbackPlacements"];
  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred. */
  "flip-fallback-strategy"?: WaPopup["flipFallbackStrategy"];
  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred. */
  flipFallbackStrategy?: WaPopup["flipFallbackStrategy"];
  /** The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  flipBoundary?: WaPopup["flipBoundary"];
  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  "flip-padding"?: WaPopup["flipPadding"];
  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  flipPadding?: WaPopup["flipPadding"];
  /** Moves the popup along the axis to keep it in view when clipped. */
  shift?: WaPopup["shift"];
  /** The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  shiftBoundary?: WaPopup["shiftBoundary"];
  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  "shift-padding"?: WaPopup["shiftPadding"];
  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  shiftPadding?: WaPopup["shiftPadding"];
  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  "auto-size"?: WaPopup["autoSize"];
  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  autoSize?: WaPopup["autoSize"];
  /** Syncs the popup's width or height to that of the anchor element. */
  sync?: WaPopup["sync"];
  /** The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  autoSizeBoundary?: WaPopup["autoSizeBoundary"];
  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  "auto-size-padding"?: WaPopup["autoSizePadding"];
  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  autoSizePadding?: WaPopup["autoSizePadding"];
  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active. */
  "hover-bridge"?: WaPopup["hoverBridge"];
  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active. */
  hoverBridge?: WaPopup["hoverBridge"];
  /** A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. */
  popup?: WaPopup["popup"];

  /** Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it. */
  "onwa-reposition"?: (e: WaPopupEvent) => void;
};

export type WaPopupSolidJsProps = {
  /** The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
`anchor` slot instead. */
  "prop:anchor"?: WaPopup["anchor"];
  /** Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
down and the popup will be hidden. */
  "prop:active"?: WaPopup["active"];
  /** The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
panel inside of the viewport. */
  "prop:placement"?: WaPopup["placement"];
  /** The bounding box to use for flipping, shifting, and auto-sizing. */
  "prop:boundary"?: WaPopup["boundary"];
  /** The distance in pixels from which to offset the panel away from its anchor. */
  "prop:distance"?: WaPopup["distance"];
  /** The distance in pixels from which to offset the panel along its anchor. */
  "prop:skidding"?: WaPopup["skidding"];
  /** Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
`--arrow-color` custom properties. For additional customizations, you can also target the arrow using
`::part(arrow)` in your stylesheet. */
  "prop:arrow"?: WaPopup["arrow"];
  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead. */
  "attr:arrow-placement"?: WaPopup["arrowPlacement"];
  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead. */
  "prop:arrowPlacement"?: WaPopup["arrowPlacement"];
  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners. */
  "attr:arrow-padding"?: WaPopup["arrowPadding"];
  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners. */
  "prop:arrowPadding"?: WaPopup["arrowPadding"];
  /** When set, placement of the popup will flip to the opposite site to keep it in view. You can use
`flipFallbackPlacements` to further configure how the fallback placement is determined. */
  "prop:flip"?: WaPopup["flip"];
  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead. */
  "attr:flip-fallback-placements"?: WaPopup["flipFallbackPlacements"];
  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead. */
  "prop:flipFallbackPlacements"?: WaPopup["flipFallbackPlacements"];
  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred. */
  "attr:flip-fallback-strategy"?: WaPopup["flipFallbackStrategy"];
  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred. */
  "prop:flipFallbackStrategy"?: WaPopup["flipFallbackStrategy"];
  /** The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  "prop:flipBoundary"?: WaPopup["flipBoundary"];
  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  "attr:flip-padding"?: WaPopup["flipPadding"];
  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  "prop:flipPadding"?: WaPopup["flipPadding"];
  /** Moves the popup along the axis to keep it in view when clipped. */
  "prop:shift"?: WaPopup["shift"];
  /** The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  "prop:shiftBoundary"?: WaPopup["shiftBoundary"];
  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  "attr:shift-padding"?: WaPopup["shiftPadding"];
  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  "prop:shiftPadding"?: WaPopup["shiftPadding"];
  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  "attr:auto-size"?: WaPopup["autoSize"];
  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  "prop:autoSize"?: WaPopup["autoSize"];
  /** Syncs the popup's width or height to that of the anchor element. */
  "prop:sync"?: WaPopup["sync"];
  /** The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  "prop:autoSizeBoundary"?: WaPopup["autoSizeBoundary"];
  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  "attr:auto-size-padding"?: WaPopup["autoSizePadding"];
  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  "prop:autoSizePadding"?: WaPopup["autoSizePadding"];
  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active. */
  "bool:hover-bridge"?: WaPopup["hoverBridge"];
  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active. */
  "prop:hoverBridge"?: WaPopup["hoverBridge"];
  /** A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. */
  "prop:popup"?: WaPopup["popup"];
  /** Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it. */
  "on:wa-reposition"?: (e: WaPopupEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaProgressBarProps = {
  /** The current progress as a percentage, 0 to 100. */
  value?: WaProgressBar["value"];
  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  indeterminate?: WaProgressBar["indeterminate"];
  /** A custom label for assistive devices. */
  label?: WaProgressBar["label"];
};

export type WaProgressBarSolidJsProps = {
  /** The current progress as a percentage, 0 to 100. */
  "prop:value"?: WaProgressBar["value"];
  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  "prop:indeterminate"?: WaProgressBar["indeterminate"];
  /** A custom label for assistive devices. */
  "prop:label"?: WaProgressBar["label"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaQrCodeProps = {
  /** The QR code's value. */
  value?: WaQrCode["value"];
  /** The label for assistive devices to announce. If unspecified, the value will be used instead. */
  label?: WaQrCode["label"];
  /** The size of the QR code, in pixels. */
  size?: WaQrCode["size"];
  /** The fill color. This can be any valid CSS color, but not a CSS custom property. */
  fill?: WaQrCode["fill"];
  /** The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property. */
  background?: WaQrCode["background"];
  /** The edge radius of each module. Must be between 0 and 0.5. */
  radius?: WaQrCode["radius"];
  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
  "error-correction"?: WaQrCode["errorCorrection"];
  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
  errorCorrection?: WaQrCode["errorCorrection"];
  /**  */
  canvas?: WaQrCode["canvas"];
};

export type WaQrCodeSolidJsProps = {
  /** The QR code's value. */
  "prop:value"?: WaQrCode["value"];
  /** The label for assistive devices to announce. If unspecified, the value will be used instead. */
  "prop:label"?: WaQrCode["label"];
  /** The size of the QR code, in pixels. */
  "prop:size"?: WaQrCode["size"];
  /** The fill color. This can be any valid CSS color, but not a CSS custom property. */
  "prop:fill"?: WaQrCode["fill"];
  /** The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property. */
  "prop:background"?: WaQrCode["background"];
  /** The edge radius of each module. Must be between 0 and 0.5. */
  "prop:radius"?: WaQrCode["radius"];
  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
  "attr:error-correction"?: WaQrCode["errorCorrection"];
  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
  "prop:errorCorrection"?: WaQrCode["errorCorrection"];
  /**  */
  "prop:canvas"?: WaQrCode["canvas"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaRadio` component event */
export type WaRadioEvent<E = Event> = TypedEvent<WaRadio, E>;

export type WaRadioProps = {
  /** The radio's value. When selected, the radio group will receive this value. */
  value?: WaRadio["value"];
  /** The radio's visual appearance. */
  appearance?: WaRadio["appearance"];
  /** The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
attribute can typically be omitted. */
  size?: WaRadio["size"];
  /** Disables the radio. */
  disabled?: WaRadio["disabled"];
  /**  */
  checked?: WaRadio["checked"];

  /** Emitted when the control loses focus. */
  onblur?: (e: WaRadioEvent) => void;
  /** Emitted when the control gains focus. */
  onfocus?: (e: WaRadioEvent) => void;
};

export type WaRadioSolidJsProps = {
  /** The radio's value. When selected, the radio group will receive this value. */
  "prop:value"?: WaRadio["value"];
  /** The radio's visual appearance. */
  "prop:appearance"?: WaRadio["appearance"];
  /** The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
attribute can typically be omitted. */
  "prop:size"?: WaRadio["size"];
  /** Disables the radio. */
  "prop:disabled"?: WaRadio["disabled"];
  /**  */
  "prop:checked"?: WaRadio["checked"];
  /** Emitted when the control loses focus. */
  "on:blur"?: (e: WaRadioEvent) => void;
  /** Emitted when the control gains focus. */
  "on:focus"?: (e: WaRadioEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaRadioGroup` component event */
export type WaRadioGroupEvent<E = Event> = TypedEvent<WaRadioGroup, E>;
/** `input` event type */
export type WaRadioGroupInputEvent = WaRadioGroupEvent<InputEvent>;

export type WaRadioGroupProps = {
  /** The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
instead. */
  label?: WaRadioGroup["label"];
  /** The radio groups's hint. If you need to display HTML, use the `hint` slot instead. */
  hint?: WaRadioGroup["hint"];
  /** The name of the radio group, submitted as a name/value pair with form data. */
  name?: WaRadioGroup["name"];
  /** Disables the radio group and all child radios. */
  disabled?: WaRadioGroup["disabled"];
  /** The orientation in which to show radio items. */
  orientation?: WaRadioGroup["orientation"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  value?: WaRadioGroup["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: WaRadioGroup["defaultValue"];
  /** The radio group's size. This size will be applied to all child radios and radio buttons, except when explicitly overridden. */
  size?: WaRadioGroup["size"];
  /** Ensures a child radio is checked before allowing the containing form to submit. */
  required?: WaRadioGroup["required"];
  /** Used for SSR. if true, will show slotted label on initial render. */
  "with-label"?: WaRadioGroup["withLabel"];
  /** Used for SSR. if true, will show slotted label on initial render. */
  withLabel?: WaRadioGroup["withLabel"];
  /** Used for SSR. if true, will show slotted hint on initial render. */
  "with-hint"?: WaRadioGroup["withHint"];
  /** Used for SSR. if true, will show slotted hint on initial render. */
  withHint?: WaRadioGroup["withHint"];
  /**  */
  defaultSlot?: WaRadioGroup["defaultSlot"];

  /** Emitted when the radio group receives user input. */
  oninput?: (e: WaRadioGroupInputEvent) => void;
  /** Emitted when the radio group's selected value changes. */
  onchange?: (e: WaRadioGroupEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onwa-invalid"?: (e: WaRadioGroupEvent) => void;
};

export type WaRadioGroupSolidJsProps = {
  /** The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
instead. */
  "prop:label"?: WaRadioGroup["label"];
  /** The radio groups's hint. If you need to display HTML, use the `hint` slot instead. */
  "prop:hint"?: WaRadioGroup["hint"];
  /** The name of the radio group, submitted as a name/value pair with form data. */
  "prop:name"?: WaRadioGroup["name"];
  /** Disables the radio group and all child radios. */
  "prop:disabled"?: WaRadioGroup["disabled"];
  /** The orientation in which to show radio items. */
  "prop:orientation"?: WaRadioGroup["orientation"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "attr:value"?: WaRadioGroup["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultValue"?: WaRadioGroup["defaultValue"];
  /** The radio group's size. This size will be applied to all child radios and radio buttons, except when explicitly overridden. */
  "prop:size"?: WaRadioGroup["size"];
  /** Ensures a child radio is checked before allowing the containing form to submit. */
  "prop:required"?: WaRadioGroup["required"];
  /** Used for SSR. if true, will show slotted label on initial render. */
  "bool:with-label"?: WaRadioGroup["withLabel"];
  /** Used for SSR. if true, will show slotted label on initial render. */
  "prop:withLabel"?: WaRadioGroup["withLabel"];
  /** Used for SSR. if true, will show slotted hint on initial render. */
  "bool:with-hint"?: WaRadioGroup["withHint"];
  /** Used for SSR. if true, will show slotted hint on initial render. */
  "prop:withHint"?: WaRadioGroup["withHint"];
  /**  */
  "prop:defaultSlot"?: WaRadioGroup["defaultSlot"];
  /** Emitted when the radio group receives user input. */
  "on:input"?: (e: WaRadioGroupInputEvent) => void;
  /** Emitted when the radio group's selected value changes. */
  "on:change"?: (e: WaRadioGroupEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:wa-invalid"?: (e: WaRadioGroupEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaRating` component event */
export type WaRatingEvent<E = Event> = TypedEvent<WaRating, E>;
/** `wa-hover` event type */
export type WaRatingWaHoverEvent = WaRatingEvent<
  CustomEvent<{ phase: "start" | "move" | "end"; value: number }>
>;

export type WaRatingProps = {
  /** A label that describes the rating to assistive devices. */
  label?: WaRating["label"];
  /** The current rating. */
  value?: WaRating["value"];
  /** The highest rating to show. */
  max?: WaRating["max"];
  /** The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
attribute to `0.5`. */
  precision?: WaRating["precision"];
  /** Makes the rating readonly. */
  readonly?: WaRating["readonly"];
  /** Disables the rating. */
  disabled?: WaRating["disabled"];
  /** A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
well with `<wa-icon>` elements. */
  getSymbol?: WaRating["getSymbol"];
  /** The component's size. */
  size?: WaRating["size"];
  /**  */
  rating?: WaRating["rating"];

  /** Emitted when the rating's value changes. */
  onchange?: (e: WaRatingEvent) => void;
  /** Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value. */
  "onwa-hover"?: (e: WaRatingWaHoverEvent) => void;
};

export type WaRatingSolidJsProps = {
  /** A label that describes the rating to assistive devices. */
  "prop:label"?: WaRating["label"];
  /** The current rating. */
  "prop:value"?: WaRating["value"];
  /** The highest rating to show. */
  "prop:max"?: WaRating["max"];
  /** The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
attribute to `0.5`. */
  "prop:precision"?: WaRating["precision"];
  /** Makes the rating readonly. */
  "prop:readonly"?: WaRating["readonly"];
  /** Disables the rating. */
  "prop:disabled"?: WaRating["disabled"];
  /** A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
well with `<wa-icon>` elements. */
  "prop:getSymbol"?: WaRating["getSymbol"];
  /** The component's size. */
  "prop:size"?: WaRating["size"];
  /**  */
  "prop:rating"?: WaRating["rating"];
  /** Emitted when the rating's value changes. */
  "on:change"?: (e: WaRatingEvent) => void;
  /** Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value. */
  "on:wa-hover"?: (e: WaRatingWaHoverEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaRelativeTimeProps = {
  /** The date from which to calculate time from. If not set, the current date and time will be used. When passing a
string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  date?: WaRelativeTime["date"];
  /** The formatting style to use. */
  format?: WaRelativeTime["format"];
  /** When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
"1 day ago" and "in 1 day" will be shown. */
  numeric?: WaRelativeTime["numeric"];
  /** Keep the displayed value up to date as time passes. */
  sync?: WaRelativeTime["sync"];
};

export type WaRelativeTimeSolidJsProps = {
  /** The date from which to calculate time from. If not set, the current date and time will be used. When passing a
string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  "prop:date"?: WaRelativeTime["date"];
  /** The formatting style to use. */
  "prop:format"?: WaRelativeTime["format"];
  /** When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
"1 day ago" and "in 1 day" will be shown. */
  "prop:numeric"?: WaRelativeTime["numeric"];
  /** Keep the displayed value up to date as time passes. */
  "prop:sync"?: WaRelativeTime["sync"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaResizeObserver` component event */
export type WaResizeObserverEvent<E = Event> = TypedEvent<WaResizeObserver, E>;
/** `wa-resize` event type */
export type WaResizeObserverWaResizeEvent = WaResizeObserverEvent<
  CustomEvent<{ entries: ResizeObserverEntry[] }>
>;

export type WaResizeObserverProps = {
  /** Disables the observer. */
  disabled?: WaResizeObserver["disabled"];

  /** Emitted when the element is resized. */
  "onwa-resize"?: (e: WaResizeObserverWaResizeEvent) => void;
};

export type WaResizeObserverSolidJsProps = {
  /** Disables the observer. */
  "prop:disabled"?: WaResizeObserver["disabled"];
  /** Emitted when the element is resized. */
  "on:wa-resize"?: (e: WaResizeObserverWaResizeEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaProgressRingProps = {
  /** The current progress as a percentage, 0 to 100. */
  value?: WaProgressRing["value"];
  /** A custom label for assistive devices. */
  label?: WaProgressRing["label"];
  /**  */
  indicator?: WaProgressRing["indicator"];
  /**  */
  indicatorOffset?: WaProgressRing["indicatorOffset"];
};

export type WaProgressRingSolidJsProps = {
  /** The current progress as a percentage, 0 to 100. */
  "prop:value"?: WaProgressRing["value"];
  /** A custom label for assistive devices. */
  "prop:label"?: WaProgressRing["label"];
  /**  */
  "prop:indicator"?: WaProgressRing["indicator"];
  /**  */
  "prop:indicatorOffset"?: WaProgressRing["indicatorOffset"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaScrollerProps = {
  /** The scroller's orientation. */
  orientation?: WaScroller["orientation"];
  /** Removes the visible scrollbar. */
  "without-scrollbar"?: WaScroller["withoutScrollbar"];
  /** Removes the visible scrollbar. */
  withoutScrollbar?: WaScroller["withoutScrollbar"];
  /** Removes the shadows. */
  "without-shadow"?: WaScroller["withoutShadow"];
  /** Removes the shadows. */
  withoutShadow?: WaScroller["withoutShadow"];
  /**  */
  content?: WaScroller["content"];
  /**  */
  canScroll?: WaScroller["canScroll"];
};

export type WaScrollerSolidJsProps = {
  /** The scroller's orientation. */
  "prop:orientation"?: WaScroller["orientation"];
  /** Removes the visible scrollbar. */
  "bool:without-scrollbar"?: WaScroller["withoutScrollbar"];
  /** Removes the visible scrollbar. */
  "prop:withoutScrollbar"?: WaScroller["withoutScrollbar"];
  /** Removes the shadows. */
  "bool:without-shadow"?: WaScroller["withoutShadow"];
  /** Removes the shadows. */
  "prop:withoutShadow"?: WaScroller["withoutShadow"];
  /**  */
  "prop:content"?: WaScroller["content"];
  /**  */
  "prop:canScroll"?: WaScroller["canScroll"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaSelect` component event */
export type WaSelectEvent<E = Event> = TypedEvent<WaSelect, E>;
/** `input` event type */
export type WaSelectInputEvent = WaSelectEvent<InputEvent>;

export type WaSelectProps = {
  /** The name of the select, submitted as a name/value pair with form data. */
  name?: WaSelect["name"];
  /** The select's value. This will be a string for single select or an array for multi-select. */
  value?: WaSelect["value"];
  /** The select's size. */
  size?: WaSelect["size"];
  /** Placeholder text to show as a hint when the select is empty. */
  placeholder?: WaSelect["placeholder"];
  /** Allows more than one option to be selected. */
  multiple?: WaSelect["multiple"];
  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  "max-options-visible"?: WaSelect["maxOptionsVisible"];
  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  maxOptionsVisible?: WaSelect["maxOptionsVisible"];
  /** Disables the select control. */
  disabled?: WaSelect["disabled"];
  /** Adds a clear button when the select is not empty. */
  "with-clear"?: WaSelect["withClear"];
  /** Adds a clear button when the select is not empty. */
  withClear?: WaSelect["withClear"];
  /** Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
use the `show()` and `hide()` methods and this attribute will reflect the select's open state. */
  open?: WaSelect["open"];
  /** The select's visual appearance. */
  appearance?: WaSelect["appearance"];
  /** Draws a pill-style select with rounded edges. */
  pill?: WaSelect["pill"];
  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  label?: WaSelect["label"];
  /** The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
inside of the viewport. */
  placement?: WaSelect["placement"];
  /** The select's hint. If you need to display HTML, use the `hint` slot instead. */
  hint?: WaSelect["hint"];
  /** Used for SSR purposes when a label is slotted in. Will show the label on first render. */
  "with-label"?: WaSelect["withLabel"];
  /** Used for SSR purposes when a label is slotted in. Will show the label on first render. */
  withLabel?: WaSelect["withLabel"];
  /** Used for SSR purposes when hint is slotted in. Will show the hint on first render. */
  "with-hint"?: WaSelect["withHint"];
  /** Used for SSR purposes when hint is slotted in. Will show the hint on first render. */
  withHint?: WaSelect["withHint"];
  /** The select's required attribute. */
  required?: WaSelect["required"];
  /**  */
  assumeInteractionOn?: WaSelect["assumeInteractionOn"];
  /**  */
  popup?: WaSelect["popup"];
  /**  */
  combobox?: WaSelect["combobox"];
  /**  */
  displayInput?: WaSelect["displayInput"];
  /**  */
  valueInput?: WaSelect["valueInput"];
  /**  */
  listbox?: WaSelect["listbox"];
  /**  */
  displayLabel?: WaSelect["displayLabel"];
  /**  */
  currentOption?: WaSelect["currentOption"];
  /**  */
  selectedOptions?: WaSelect["selectedOptions"];
  /**  */
  optionValues?: WaSelect["optionValues"];
  /**  */
  defaultValue?: WaSelect["defaultValue"];
  /** A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted
HTML of the symbol to render at the specified value. */
  getTag?: WaSelect["getTag"];

  /** Emitted when the control receives input. */
  oninput?: (e: WaSelectInputEvent) => void;
  /** Emitted when the control's value changes. */
  onchange?: (e: WaSelectEvent) => void;
  /** Emitted when the control gains focus. */
  onfocus?: (e: WaSelectEvent) => void;
  /** Emitted when the control loses focus. */
  onblur?: (e: WaSelectEvent) => void;
  /** Emitted when the control's value is cleared. */
  "onwa-clear"?: (e: WaSelectEvent) => void;
  /** Emitted when the select's menu opens. */
  "onwa-show"?: (e: WaSelectEvent) => void;
  /** Emitted after the select's menu opens and all animations are complete. */
  "onwa-after-show"?: (e: WaSelectEvent) => void;
  /** Emitted when the select's menu closes. */
  "onwa-hide"?: (e: WaSelectEvent) => void;
  /** Emitted after the select's menu closes and all animations are complete. */
  "onwa-after-hide"?: (e: WaSelectEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onwa-invalid"?: (e: WaSelectEvent) => void;
};

export type WaSelectSolidJsProps = {
  /** The name of the select, submitted as a name/value pair with form data. */
  "prop:name"?: WaSelect["name"];
  /** The select's value. This will be a string for single select or an array for multi-select. */
  "prop:value"?: WaSelect["value"];
  /** The select's size. */
  "prop:size"?: WaSelect["size"];
  /** Placeholder text to show as a hint when the select is empty. */
  "prop:placeholder"?: WaSelect["placeholder"];
  /** Allows more than one option to be selected. */
  "prop:multiple"?: WaSelect["multiple"];
  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  "attr:max-options-visible"?: WaSelect["maxOptionsVisible"];
  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  "prop:maxOptionsVisible"?: WaSelect["maxOptionsVisible"];
  /** Disables the select control. */
  "prop:disabled"?: WaSelect["disabled"];
  /** Adds a clear button when the select is not empty. */
  "bool:with-clear"?: WaSelect["withClear"];
  /** Adds a clear button when the select is not empty. */
  "prop:withClear"?: WaSelect["withClear"];
  /** Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
use the `show()` and `hide()` methods and this attribute will reflect the select's open state. */
  "prop:open"?: WaSelect["open"];
  /** The select's visual appearance. */
  "prop:appearance"?: WaSelect["appearance"];
  /** Draws a pill-style select with rounded edges. */
  "prop:pill"?: WaSelect["pill"];
  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: WaSelect["label"];
  /** The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
inside of the viewport. */
  "prop:placement"?: WaSelect["placement"];
  /** The select's hint. If you need to display HTML, use the `hint` slot instead. */
  "prop:hint"?: WaSelect["hint"];
  /** Used for SSR purposes when a label is slotted in. Will show the label on first render. */
  "bool:with-label"?: WaSelect["withLabel"];
  /** Used for SSR purposes when a label is slotted in. Will show the label on first render. */
  "prop:withLabel"?: WaSelect["withLabel"];
  /** Used for SSR purposes when hint is slotted in. Will show the hint on first render. */
  "bool:with-hint"?: WaSelect["withHint"];
  /** Used for SSR purposes when hint is slotted in. Will show the hint on first render. */
  "prop:withHint"?: WaSelect["withHint"];
  /** The select's required attribute. */
  "prop:required"?: WaSelect["required"];
  /**  */
  "prop:assumeInteractionOn"?: WaSelect["assumeInteractionOn"];
  /**  */
  "prop:popup"?: WaSelect["popup"];
  /**  */
  "prop:combobox"?: WaSelect["combobox"];
  /**  */
  "prop:displayInput"?: WaSelect["displayInput"];
  /**  */
  "prop:valueInput"?: WaSelect["valueInput"];
  /**  */
  "prop:listbox"?: WaSelect["listbox"];
  /**  */
  "prop:displayLabel"?: WaSelect["displayLabel"];
  /**  */
  "prop:currentOption"?: WaSelect["currentOption"];
  /**  */
  "prop:selectedOptions"?: WaSelect["selectedOptions"];
  /**  */
  "prop:optionValues"?: WaSelect["optionValues"];
  /**  */
  "prop:defaultValue"?: WaSelect["defaultValue"];
  /** A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted
HTML of the symbol to render at the specified value. */
  "prop:getTag"?: WaSelect["getTag"];
  /** Emitted when the control receives input. */
  "on:input"?: (e: WaSelectInputEvent) => void;
  /** Emitted when the control's value changes. */
  "on:change"?: (e: WaSelectEvent) => void;
  /** Emitted when the control gains focus. */
  "on:focus"?: (e: WaSelectEvent) => void;
  /** Emitted when the control loses focus. */
  "on:blur"?: (e: WaSelectEvent) => void;
  /** Emitted when the control's value is cleared. */
  "on:wa-clear"?: (e: WaSelectEvent) => void;
  /** Emitted when the select's menu opens. */
  "on:wa-show"?: (e: WaSelectEvent) => void;
  /** Emitted after the select's menu opens and all animations are complete. */
  "on:wa-after-show"?: (e: WaSelectEvent) => void;
  /** Emitted when the select's menu closes. */
  "on:wa-hide"?: (e: WaSelectEvent) => void;
  /** Emitted after the select's menu closes and all animations are complete. */
  "on:wa-after-hide"?: (e: WaSelectEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:wa-invalid"?: (e: WaSelectEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaSkeletonProps = {
  /** Determines which effect the skeleton will use. */
  effect?: WaSkeleton["effect"];
};

export type WaSkeletonSolidJsProps = {
  /** Determines which effect the skeleton will use. */
  "prop:effect"?: WaSkeleton["effect"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaSlider` component event */
export type WaSliderEvent<E = Event> = TypedEvent<WaSlider, E>;
/** `blur` event type */
export type WaSliderBlurEvent = WaSliderEvent<FocusEvent>;
/** `focus` event type */
export type WaSliderFocusEvent = WaSliderEvent<FocusEvent>;
/** `input` event type */
export type WaSliderInputEvent = WaSliderEvent<InputEvent>;

export type WaSliderProps = {
  /** The slider's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: WaSlider["label"];
  /** The slider hint. If you need to display HTML, use the hint slot instead. */
  hint?: WaSlider["hint"];
  /** The name of the slider. This will be submitted with the form as a name/value pair. */
  name?: WaSlider["name"];
  /** The minimum value of a range selection. Used only when range attribute is set. */
  "min-value"?: WaSlider["minValue"];
  /** The minimum value of a range selection. Used only when range attribute is set. */
  minValue?: WaSlider["minValue"];
  /** The maximum value of a range selection. Used only when range attribute is set. */
  "max-value"?: WaSlider["maxValue"];
  /** The maximum value of a range selection. Used only when range attribute is set. */
  maxValue?: WaSlider["maxValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  value?: WaSlider["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: WaSlider["defaultValue"];
  /** Converts the slider to a range slider with two thumbs. */
  range?: WaSlider["range"];
  /** Disables the slider. */
  disabled?: WaSlider["disabled"];
  /** Makes the slider a read-only field. */
  readonly?: WaSlider["readonly"];
  /** The orientation of the slider. */
  orientation?: WaSlider["orientation"];
  /** The slider's size. */
  size?: WaSlider["size"];
  /** The starting value from which to draw the slider's fill, which is based on its current value. */
  "indicator-offset"?: WaSlider["indicatorOffset"];
  /** The starting value from which to draw the slider's fill, which is based on its current value. */
  indicatorOffset?: WaSlider["indicatorOffset"];
  /** The minimum value allowed. */
  min?: WaSlider["min"];
  /** The maximum value allowed. */
  max?: WaSlider["max"];
  /** The granularity the value must adhere to when incrementing and decrementing. */
  step?: WaSlider["step"];
  /** Makes the slider a required field. */
  required?: WaSlider["required"];
  /** Tells the browser to focus the slider when the page loads or a dialog is shown. */
  autofocus?: WaSlider["autofocus"];
  /** The distance of the tooltip from the slider's thumb. */
  "tooltip-distance"?: WaSlider["tooltipDistance"];
  /** The distance of the tooltip from the slider's thumb. */
  tooltipDistance?: WaSlider["tooltipDistance"];
  /** The placement of the tooltip in reference to the slider's thumb. */
  "tooltip-placement"?: WaSlider["tooltipPlacement"];
  /** The placement of the tooltip in reference to the slider's thumb. */
  tooltipPlacement?: WaSlider["tooltipPlacement"];
  /** Draws markers at each step along the slider. */
  "with-markers"?: WaSlider["withMarkers"];
  /** Draws markers at each step along the slider. */
  withMarkers?: WaSlider["withMarkers"];
  /** Draws a tooltip above the thumb when the control has focus or is dragged. */
  "with-tooltip"?: WaSlider["withTooltip"];
  /** Draws a tooltip above the thumb when the control has focus or is dragged. */
  withTooltip?: WaSlider["withTooltip"];
  /**  */
  slider?: WaSlider["slider"];
  /**  */
  thumb?: WaSlider["thumb"];
  /**  */
  thumbMin?: WaSlider["thumbMin"];
  /**  */
  thumbMax?: WaSlider["thumbMax"];
  /**  */
  track?: WaSlider["track"];
  /**  */
  tooltip?: WaSlider["tooltip"];
  /** A custom formatting function to apply to the value. This will be shown in the tooltip and announced by screen
readers. Must be set with JavaScript. Property only. */
  valueFormatter?: WaSlider["valueFormatter"];

  /** Emitted when an alteration to the control's value is committed by the user. */
  onchange?: (e: WaSliderEvent) => void;
  /** Emitted when the control loses focus. */
  onblur?: (e: WaSliderBlurEvent) => void;
  /** Emitted when the control gains focus. */
  onfocus?: (e: WaSliderFocusEvent) => void;
  /** Emitted when the control receives input. */
  oninput?: (e: WaSliderInputEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onwa-invalid"?: (e: WaSliderEvent) => void;
};

export type WaSliderSolidJsProps = {
  /** The slider's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "prop:label"?: WaSlider["label"];
  /** The slider hint. If you need to display HTML, use the hint slot instead. */
  "prop:hint"?: WaSlider["hint"];
  /** The name of the slider. This will be submitted with the form as a name/value pair. */
  "prop:name"?: WaSlider["name"];
  /** The minimum value of a range selection. Used only when range attribute is set. */
  "attr:min-value"?: WaSlider["minValue"];
  /** The minimum value of a range selection. Used only when range attribute is set. */
  "prop:minValue"?: WaSlider["minValue"];
  /** The maximum value of a range selection. Used only when range attribute is set. */
  "attr:max-value"?: WaSlider["maxValue"];
  /** The maximum value of a range selection. Used only when range attribute is set. */
  "prop:maxValue"?: WaSlider["maxValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "attr:value"?: WaSlider["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultValue"?: WaSlider["defaultValue"];
  /** Converts the slider to a range slider with two thumbs. */
  "prop:range"?: WaSlider["range"];
  /** Disables the slider. */
  "prop:disabled"?: WaSlider["disabled"];
  /** Makes the slider a read-only field. */
  "prop:readonly"?: WaSlider["readonly"];
  /** The orientation of the slider. */
  "prop:orientation"?: WaSlider["orientation"];
  /** The slider's size. */
  "prop:size"?: WaSlider["size"];
  /** The starting value from which to draw the slider's fill, which is based on its current value. */
  "attr:indicator-offset"?: WaSlider["indicatorOffset"];
  /** The starting value from which to draw the slider's fill, which is based on its current value. */
  "prop:indicatorOffset"?: WaSlider["indicatorOffset"];
  /** The minimum value allowed. */
  "prop:min"?: WaSlider["min"];
  /** The maximum value allowed. */
  "prop:max"?: WaSlider["max"];
  /** The granularity the value must adhere to when incrementing and decrementing. */
  "prop:step"?: WaSlider["step"];
  /** Makes the slider a required field. */
  "prop:required"?: WaSlider["required"];
  /** Tells the browser to focus the slider when the page loads or a dialog is shown. */
  "prop:autofocus"?: WaSlider["autofocus"];
  /** The distance of the tooltip from the slider's thumb. */
  "attr:tooltip-distance"?: WaSlider["tooltipDistance"];
  /** The distance of the tooltip from the slider's thumb. */
  "prop:tooltipDistance"?: WaSlider["tooltipDistance"];
  /** The placement of the tooltip in reference to the slider's thumb. */
  "attr:tooltip-placement"?: WaSlider["tooltipPlacement"];
  /** The placement of the tooltip in reference to the slider's thumb. */
  "prop:tooltipPlacement"?: WaSlider["tooltipPlacement"];
  /** Draws markers at each step along the slider. */
  "bool:with-markers"?: WaSlider["withMarkers"];
  /** Draws markers at each step along the slider. */
  "prop:withMarkers"?: WaSlider["withMarkers"];
  /** Draws a tooltip above the thumb when the control has focus or is dragged. */
  "bool:with-tooltip"?: WaSlider["withTooltip"];
  /** Draws a tooltip above the thumb when the control has focus or is dragged. */
  "prop:withTooltip"?: WaSlider["withTooltip"];
  /**  */
  "prop:slider"?: WaSlider["slider"];
  /**  */
  "prop:thumb"?: WaSlider["thumb"];
  /**  */
  "prop:thumbMin"?: WaSlider["thumbMin"];
  /**  */
  "prop:thumbMax"?: WaSlider["thumbMax"];
  /**  */
  "prop:track"?: WaSlider["track"];
  /**  */
  "prop:tooltip"?: WaSlider["tooltip"];
  /** A custom formatting function to apply to the value. This will be shown in the tooltip and announced by screen
readers. Must be set with JavaScript. Property only. */
  "prop:valueFormatter"?: WaSlider["valueFormatter"];
  /** Emitted when an alteration to the control's value is committed by the user. */
  "on:change"?: (e: WaSliderEvent) => void;
  /** Emitted when the control loses focus. */
  "on:blur"?: (e: WaSliderBlurEvent) => void;
  /** Emitted when the control gains focus. */
  "on:focus"?: (e: WaSliderFocusEvent) => void;
  /** Emitted when the control receives input. */
  "on:input"?: (e: WaSliderInputEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:wa-invalid"?: (e: WaSliderEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaSpinnerProps = {};

export type WaSpinnerSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaSplitPanel` component event */
export type WaSplitPanelEvent<E = Event> = TypedEvent<WaSplitPanel, E>;

export type WaSplitPanelProps = {
  /** The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
container's initial size. */
  position?: WaSplitPanel["position"];
  /** The current position of the divider from the primary panel's edge in pixels. */
  "position-in-pixels"?: WaSplitPanel["positionInPixels"];
  /** The current position of the divider from the primary panel's edge in pixels. */
  positionInPixels?: WaSplitPanel["positionInPixels"];
  /** Sets the split panel's orientation. */
  orientation?: WaSplitPanel["orientation"];
  /** Disables resizing. Note that the position may still change as a result of resizing the host element. */
  disabled?: WaSplitPanel["disabled"];
  /** If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
host element is resized. */
  primary?: WaSplitPanel["primary"];
  /** One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.
`"100px 50%"`. */
  snap?: WaSplitPanel["snap"];
  /** How close the divider must be to a snap point until snapping occurs. */
  "snap-threshold"?: WaSplitPanel["snapThreshold"];
  /** How close the divider must be to a snap point until snapping occurs. */
  snapThreshold?: WaSplitPanel["snapThreshold"];
  /**  */
  divider?: WaSplitPanel["divider"];

  /** Emitted when the divider's position changes. */
  "onwa-reposition"?: (e: WaSplitPanelEvent) => void;
};

export type WaSplitPanelSolidJsProps = {
  /** The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
container's initial size. */
  "prop:position"?: WaSplitPanel["position"];
  /** The current position of the divider from the primary panel's edge in pixels. */
  "attr:position-in-pixels"?: WaSplitPanel["positionInPixels"];
  /** The current position of the divider from the primary panel's edge in pixels. */
  "prop:positionInPixels"?: WaSplitPanel["positionInPixels"];
  /** Sets the split panel's orientation. */
  "prop:orientation"?: WaSplitPanel["orientation"];
  /** Disables resizing. Note that the position may still change as a result of resizing the host element. */
  "prop:disabled"?: WaSplitPanel["disabled"];
  /** If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
host element is resized. */
  "prop:primary"?: WaSplitPanel["primary"];
  /** One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.
`"100px 50%"`. */
  "prop:snap"?: WaSplitPanel["snap"];
  /** How close the divider must be to a snap point until snapping occurs. */
  "attr:snap-threshold"?: WaSplitPanel["snapThreshold"];
  /** How close the divider must be to a snap point until snapping occurs. */
  "prop:snapThreshold"?: WaSplitPanel["snapThreshold"];
  /**  */
  "prop:divider"?: WaSplitPanel["divider"];
  /** Emitted when the divider's position changes. */
  "on:wa-reposition"?: (e: WaSplitPanelEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaSwitch` component event */
export type WaSwitchEvent<E = Event> = TypedEvent<WaSwitch, E>;
/** `input` event type */
export type WaSwitchInputEvent = WaSwitchEvent<InputEvent>;

export type WaSwitchProps = {
  /**  */
  title?: WaSwitch["title"];
  /** The name of the switch, submitted as a name/value pair with form data. */
  name?: WaSwitch["name"];
  /** The value of the switch, submitted as a name/value pair with form data. */
  value?: WaSwitch["value"];
  /** The switch's size. */
  size?: WaSwitch["size"];
  /** Disables the switch. */
  disabled?: WaSwitch["disabled"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  checked?: WaSwitch["defaultChecked"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultChecked?: WaSwitch["defaultChecked"];
  /** Makes the switch a required field. */
  required?: WaSwitch["required"];
  /** The switch's hint. If you need to display HTML, use the `hint` slot instead. */
  hint?: WaSwitch["hint"];
  /** Used for SSR. If you slot in hint, make sure to add `with-hint` to your component to get it to properly render with SSR. */
  "with-hint"?: WaSwitch["withHint"];
  /** Used for SSR. If you slot in hint, make sure to add `with-hint` to your component to get it to properly render with SSR. */
  withHint?: WaSwitch["withHint"];
  /**  */
  input?: WaSwitch["input"];

  /** Emitted when the control's checked state changes. */
  onchange?: (e: WaSwitchEvent) => void;
  /** Emitted when the control receives input. */
  oninput?: (e: WaSwitchInputEvent) => void;
  /** Emitted when the control loses focus. */
  onblur?: (e: WaSwitchEvent) => void;
  /** Emitted when the control gains focus. */
  onfocus?: (e: WaSwitchEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onwa-invalid"?: (e: WaSwitchEvent) => void;
};

export type WaSwitchSolidJsProps = {
  /**  */
  "prop:title"?: WaSwitch["title"];
  /** The name of the switch, submitted as a name/value pair with form data. */
  "prop:name"?: WaSwitch["name"];
  /** The value of the switch, submitted as a name/value pair with form data. */
  "prop:value"?: WaSwitch["value"];
  /** The switch's size. */
  "prop:size"?: WaSwitch["size"];
  /** Disables the switch. */
  "prop:disabled"?: WaSwitch["disabled"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "bool:checked"?: WaSwitch["defaultChecked"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultChecked"?: WaSwitch["defaultChecked"];
  /** Makes the switch a required field. */
  "prop:required"?: WaSwitch["required"];
  /** The switch's hint. If you need to display HTML, use the `hint` slot instead. */
  "prop:hint"?: WaSwitch["hint"];
  /** Used for SSR. If you slot in hint, make sure to add `with-hint` to your component to get it to properly render with SSR. */
  "bool:with-hint"?: WaSwitch["withHint"];
  /** Used for SSR. If you slot in hint, make sure to add `with-hint` to your component to get it to properly render with SSR. */
  "prop:withHint"?: WaSwitch["withHint"];
  /**  */
  "prop:input"?: WaSwitch["input"];
  /** Emitted when the control's checked state changes. */
  "on:change"?: (e: WaSwitchEvent) => void;
  /** Emitted when the control receives input. */
  "on:input"?: (e: WaSwitchInputEvent) => void;
  /** Emitted when the control loses focus. */
  "on:blur"?: (e: WaSwitchEvent) => void;
  /** Emitted when the control gains focus. */
  "on:focus"?: (e: WaSwitchEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:wa-invalid"?: (e: WaSwitchEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaTabProps = {
  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  panel?: WaTab["panel"];
  /** Disables the tab and prevents selection. */
  disabled?: WaTab["disabled"];
  /**  */
  tab?: WaTab["tab"];
};

export type WaTabSolidJsProps = {
  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  "prop:panel"?: WaTab["panel"];
  /** Disables the tab and prevents selection. */
  "prop:disabled"?: WaTab["disabled"];
  /**  */
  "prop:tab"?: WaTab["tab"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaTabGroup` component event */
export type WaTabGroupEvent<E = Event> = TypedEvent<WaTabGroup, E>;
/** `wa-tab-show` event type */
export type WaTabGroupWaTabShowEvent = WaTabGroupEvent<
  CustomEvent<{ name: String }>
>;
/** `wa-tab-hide` event type */
export type WaTabGroupWaTabHideEvent = WaTabGroupEvent<
  CustomEvent<{ name: String }>
>;

export type WaTabGroupProps = {
  /** Sets the active tab. */
  active?: WaTabGroup["active"];
  /** The placement of the tabs. */
  placement?: WaTabGroup["placement"];
  /** When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
manual, the tab will receive focus but will not show until the user presses spacebar or enter. */
  activation?: WaTabGroup["activation"];
  /** Disables the scroll arrows that appear when tabs overflow. */
  "without-scroll-controls"?: WaTabGroup["withoutScrollControls"];
  /** Disables the scroll arrows that appear when tabs overflow. */
  withoutScrollControls?: WaTabGroup["withoutScrollControls"];
  /**  */
  tabGroup?: WaTabGroup["tabGroup"];
  /**  */
  body?: WaTabGroup["body"];
  /**  */
  nav?: WaTabGroup["nav"];

  /** Emitted when a tab is shown. */
  "onwa-tab-show"?: (e: WaTabGroupWaTabShowEvent) => void;
  /** Emitted when a tab is hidden. */
  "onwa-tab-hide"?: (e: WaTabGroupWaTabHideEvent) => void;
};

export type WaTabGroupSolidJsProps = {
  /** Sets the active tab. */
  "prop:active"?: WaTabGroup["active"];
  /** The placement of the tabs. */
  "prop:placement"?: WaTabGroup["placement"];
  /** When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
manual, the tab will receive focus but will not show until the user presses spacebar or enter. */
  "prop:activation"?: WaTabGroup["activation"];
  /** Disables the scroll arrows that appear when tabs overflow. */
  "bool:without-scroll-controls"?: WaTabGroup["withoutScrollControls"];
  /** Disables the scroll arrows that appear when tabs overflow. */
  "prop:withoutScrollControls"?: WaTabGroup["withoutScrollControls"];
  /**  */
  "prop:tabGroup"?: WaTabGroup["tabGroup"];
  /**  */
  "prop:body"?: WaTabGroup["body"];
  /**  */
  "prop:nav"?: WaTabGroup["nav"];
  /** Emitted when a tab is shown. */
  "on:wa-tab-show"?: (e: WaTabGroupWaTabShowEvent) => void;
  /** Emitted when a tab is hidden. */
  "on:wa-tab-hide"?: (e: WaTabGroupWaTabHideEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type WaTabPanelProps = {
  /** The tab panel's name. */
  name?: WaTabPanel["name"];
  /** When true, the tab panel will be shown. */
  active?: WaTabPanel["active"];
};

export type WaTabPanelSolidJsProps = {
  /** The tab panel's name. */
  "prop:name"?: WaTabPanel["name"];
  /** When true, the tab panel will be shown. */
  "prop:active"?: WaTabPanel["active"];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaTag` component event */
export type WaTagEvent<E = Event> = TypedEvent<WaTag, E>;

export type WaTagProps = {
  /** The tag's theme variant. Defaults to `neutral` if not within another element with a variant. */
  variant?: WaTag["variant"];
  /** The tag's visual appearance. */
  appearance?: WaTag["appearance"];
  /** The tag's size. */
  size?: WaTag["size"];
  /** Draws a pill-style tag with rounded edges. */
  pill?: WaTag["pill"];
  /** Makes the tag removable and shows a remove button. */
  "with-remove"?: WaTag["withRemove"];
  /** Makes the tag removable and shows a remove button. */
  withRemove?: WaTag["withRemove"];

  /** Emitted when the remove button is activated. */
  "onwa-remove"?: (e: WaTagEvent) => void;
};

export type WaTagSolidJsProps = {
  /** The tag's theme variant. Defaults to `neutral` if not within another element with a variant. */
  "prop:variant"?: WaTag["variant"];
  /** The tag's visual appearance. */
  "prop:appearance"?: WaTag["appearance"];
  /** The tag's size. */
  "prop:size"?: WaTag["size"];
  /** Draws a pill-style tag with rounded edges. */
  "prop:pill"?: WaTag["pill"];
  /** Makes the tag removable and shows a remove button. */
  "bool:with-remove"?: WaTag["withRemove"];
  /** Makes the tag removable and shows a remove button. */
  "prop:withRemove"?: WaTag["withRemove"];
  /** Emitted when the remove button is activated. */
  "on:wa-remove"?: (e: WaTagEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaTooltip` component event */
export type WaTooltipEvent<E = Event> = TypedEvent<WaTooltip, E>;

export type WaTooltipProps = {
  /** The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
inside of the viewport. */
  placement?: WaTooltip["placement"];
  /** Disables the tooltip so it won't show when triggered. */
  disabled?: WaTooltip["disabled"];
  /** The distance in pixels from which to offset the tooltip away from its target. */
  distance?: WaTooltip["distance"];
  /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
  open?: WaTooltip["open"];
  /** The distance in pixels from which to offset the tooltip along its target. */
  skidding?: WaTooltip["skidding"];
  /** The amount of time to wait before showing the tooltip when the user mouses in. */
  "show-delay"?: WaTooltip["showDelay"];
  /** The amount of time to wait before showing the tooltip when the user mouses in. */
  showDelay?: WaTooltip["showDelay"];
  /** The amount of time to wait before hiding the tooltip when the user mouses out.. */
  "hide-delay"?: WaTooltip["hideDelay"];
  /** The amount of time to wait before hiding the tooltip when the user mouses out.. */
  hideDelay?: WaTooltip["hideDelay"];
  /** Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
options can be passed by separating them with a space. When manual is used, the tooltip must be activated
programmatically. */
  trigger?: WaTooltip["trigger"];
  /** Removes the arrow from the tooltip. */
  "without-arrow"?: WaTooltip["withoutArrow"];
  /** Removes the arrow from the tooltip. */
  withoutArrow?: WaTooltip["withoutArrow"];
  /**  */
  for?: WaTooltip["for"];
  /**  */
  defaultSlot?: WaTooltip["defaultSlot"];
  /**  */
  body?: WaTooltip["body"];
  /**  */
  popup?: WaTooltip["popup"];
  /**  */
  anchor?: WaTooltip["anchor"];

  /** Emitted when the tooltip begins to show. */
  "onwa-show"?: (e: WaTooltipEvent) => void;
  /** Emitted after the tooltip has shown and all animations are complete. */
  "onwa-after-show"?: (e: WaTooltipEvent) => void;
  /** Emitted when the tooltip begins to hide. */
  "onwa-hide"?: (e: WaTooltipEvent) => void;
  /** Emitted after the tooltip has hidden and all animations are complete. */
  "onwa-after-hide"?: (e: WaTooltipEvent) => void;
};

export type WaTooltipSolidJsProps = {
  /** The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
inside of the viewport. */
  "prop:placement"?: WaTooltip["placement"];
  /** Disables the tooltip so it won't show when triggered. */
  "prop:disabled"?: WaTooltip["disabled"];
  /** The distance in pixels from which to offset the tooltip away from its target. */
  "prop:distance"?: WaTooltip["distance"];
  /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
  "prop:open"?: WaTooltip["open"];
  /** The distance in pixels from which to offset the tooltip along its target. */
  "prop:skidding"?: WaTooltip["skidding"];
  /** The amount of time to wait before showing the tooltip when the user mouses in. */
  "attr:show-delay"?: WaTooltip["showDelay"];
  /** The amount of time to wait before showing the tooltip when the user mouses in. */
  "prop:showDelay"?: WaTooltip["showDelay"];
  /** The amount of time to wait before hiding the tooltip when the user mouses out.. */
  "attr:hide-delay"?: WaTooltip["hideDelay"];
  /** The amount of time to wait before hiding the tooltip when the user mouses out.. */
  "prop:hideDelay"?: WaTooltip["hideDelay"];
  /** Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
options can be passed by separating them with a space. When manual is used, the tooltip must be activated
programmatically. */
  "prop:trigger"?: WaTooltip["trigger"];
  /** Removes the arrow from the tooltip. */
  "bool:without-arrow"?: WaTooltip["withoutArrow"];
  /** Removes the arrow from the tooltip. */
  "prop:withoutArrow"?: WaTooltip["withoutArrow"];
  /**  */
  "prop:for"?: WaTooltip["for"];
  /**  */
  "prop:defaultSlot"?: WaTooltip["defaultSlot"];
  /**  */
  "prop:body"?: WaTooltip["body"];
  /**  */
  "prop:popup"?: WaTooltip["popup"];
  /**  */
  "prop:anchor"?: WaTooltip["anchor"];
  /** Emitted when the tooltip begins to show. */
  "on:wa-show"?: (e: WaTooltipEvent) => void;
  /** Emitted after the tooltip has shown and all animations are complete. */
  "on:wa-after-show"?: (e: WaTooltipEvent) => void;
  /** Emitted when the tooltip begins to hide. */
  "on:wa-hide"?: (e: WaTooltipEvent) => void;
  /** Emitted after the tooltip has hidden and all animations are complete. */
  "on:wa-after-hide"?: (e: WaTooltipEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaTextarea` component event */
export type WaTextareaEvent<E = Event> = TypedEvent<WaTextarea, E>;

export type WaTextareaProps = {
  /**  */
  title?: WaTextarea["title"];
  /** The name of the textarea, submitted as a name/value pair with form data. */
  name?: WaTextarea["name"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  value?: WaTextarea["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: WaTextarea["defaultValue"];
  /** The textarea's size. */
  size?: WaTextarea["size"];
  /** The textarea's visual appearance. */
  appearance?: WaTextarea["appearance"];
  /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
  label?: WaTextarea["label"];
  /** The textarea's hint. If you need to display HTML, use the `hint` slot instead. */
  hint?: WaTextarea["hint"];
  /** Placeholder text to show as a hint when the input is empty. */
  placeholder?: WaTextarea["placeholder"];
  /** The number of rows to display by default. */
  rows?: WaTextarea["rows"];
  /** Controls how the textarea can be resized. */
  resize?: WaTextarea["resize"];
  /** Disables the textarea. */
  disabled?: WaTextarea["disabled"];
  /** Makes the textarea readonly. */
  readonly?: WaTextarea["readonly"];
  /** Makes the textarea a required field. */
  required?: WaTextarea["required"];
  /** The minimum length of input that will be considered valid. */
  minlength?: WaTextarea["minlength"];
  /** The maximum length of input that will be considered valid. */
  maxlength?: WaTextarea["maxlength"];
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  autocapitalize?: WaTextarea["autocapitalize"];
  /** Indicates whether the browser's autocorrect feature is on or off. */
  autocorrect?: WaTextarea["autocorrect"];
  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  autocomplete?: WaTextarea["autocomplete"];
  /** Indicates that the input should receive focus on page load. */
  autofocus?: WaTextarea["autofocus"];
  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  enterkeyhint?: WaTextarea["enterkeyhint"];
  /** Enables spell checking on the textarea. */
  spellcheck?: WaTextarea["spellcheck"];
  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices. */
  inputmode?: WaTextarea["inputmode"];
  /** Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`. */
  "with-label"?: WaTextarea["withLabel"];
  /** Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`. */
  withLabel?: WaTextarea["withLabel"];
  /** Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`. */
  "with-hint"?: WaTextarea["withHint"];
  /** Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`. */
  withHint?: WaTextarea["withHint"];
  /**  */
  assumeInteractionOn?: WaTextarea["assumeInteractionOn"];
  /**  */
  input?: WaTextarea["input"];
  /**  */
  base?: WaTextarea["base"];
  /**  */
  sizeAdjuster?: WaTextarea["sizeAdjuster"];

  /** Emitted when the control loses focus. */
  onblur?: (e: WaTextareaEvent) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  onchange?: (e: WaTextareaEvent) => void;
  /** Emitted when the control gains focus. */
  onfocus?: (e: WaTextareaEvent) => void;
  /** Emitted when the control receives input. */
  oninput?: (e: WaTextareaEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onwa-invalid"?: (e: WaTextareaEvent) => void;
};

export type WaTextareaSolidJsProps = {
  /**  */
  "prop:title"?: WaTextarea["title"];
  /** The name of the textarea, submitted as a name/value pair with form data. */
  "prop:name"?: WaTextarea["name"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "attr:value"?: WaTextarea["defaultValue"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  "prop:defaultValue"?: WaTextarea["defaultValue"];
  /** The textarea's size. */
  "prop:size"?: WaTextarea["size"];
  /** The textarea's visual appearance. */
  "prop:appearance"?: WaTextarea["appearance"];
  /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
  "prop:label"?: WaTextarea["label"];
  /** The textarea's hint. If you need to display HTML, use the `hint` slot instead. */
  "prop:hint"?: WaTextarea["hint"];
  /** Placeholder text to show as a hint when the input is empty. */
  "prop:placeholder"?: WaTextarea["placeholder"];
  /** The number of rows to display by default. */
  "prop:rows"?: WaTextarea["rows"];
  /** Controls how the textarea can be resized. */
  "prop:resize"?: WaTextarea["resize"];
  /** Disables the textarea. */
  "prop:disabled"?: WaTextarea["disabled"];
  /** Makes the textarea readonly. */
  "prop:readonly"?: WaTextarea["readonly"];
  /** Makes the textarea a required field. */
  "prop:required"?: WaTextarea["required"];
  /** The minimum length of input that will be considered valid. */
  "prop:minlength"?: WaTextarea["minlength"];
  /** The maximum length of input that will be considered valid. */
  "prop:maxlength"?: WaTextarea["maxlength"];
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  "prop:autocapitalize"?: WaTextarea["autocapitalize"];
  /** Indicates whether the browser's autocorrect feature is on or off. */
  "prop:autocorrect"?: WaTextarea["autocorrect"];
  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  "prop:autocomplete"?: WaTextarea["autocomplete"];
  /** Indicates that the input should receive focus on page load. */
  "prop:autofocus"?: WaTextarea["autofocus"];
  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  "prop:enterkeyhint"?: WaTextarea["enterkeyhint"];
  /** Enables spell checking on the textarea. */
  "prop:spellcheck"?: WaTextarea["spellcheck"];
  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices. */
  "prop:inputmode"?: WaTextarea["inputmode"];
  /** Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`. */
  "bool:with-label"?: WaTextarea["withLabel"];
  /** Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`. */
  "prop:withLabel"?: WaTextarea["withLabel"];
  /** Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`. */
  "bool:with-hint"?: WaTextarea["withHint"];
  /** Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`. */
  "prop:withHint"?: WaTextarea["withHint"];
  /**  */
  "prop:assumeInteractionOn"?: WaTextarea["assumeInteractionOn"];
  /**  */
  "prop:input"?: WaTextarea["input"];
  /**  */
  "prop:base"?: WaTextarea["base"];
  /**  */
  "prop:sizeAdjuster"?: WaTextarea["sizeAdjuster"];
  /** Emitted when the control loses focus. */
  "on:blur"?: (e: WaTextareaEvent) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "on:change"?: (e: WaTextareaEvent) => void;
  /** Emitted when the control gains focus. */
  "on:focus"?: (e: WaTextareaEvent) => void;
  /** Emitted when the control receives input. */
  "on:input"?: (e: WaTextareaEvent) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "on:wa-invalid"?: (e: WaTextareaEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaTree` component event */
export type WaTreeEvent<E = Event> = TypedEvent<WaTree, E>;
/** `wa-selection-change` event type */
export type WaTreeWaSelectionChangeEvent = WaTreeEvent<
  CustomEvent<{ selection: WaTreeItem[] }>
>;

export type WaTreeProps = {
  /** The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected. */
  selection?: WaTree["selection"];
  /**  */
  defaultSlot?: WaTree["defaultSlot"];
  /**  */
  expandedIconSlot?: WaTree["expandedIconSlot"];
  /**  */
  collapsedIconSlot?: WaTree["collapsedIconSlot"];

  /** Emitted when a tree item is selected or deselected. */
  "onwa-selection-change"?: (e: WaTreeWaSelectionChangeEvent) => void;
};

export type WaTreeSolidJsProps = {
  /** The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected. */
  "prop:selection"?: WaTree["selection"];
  /**  */
  "prop:defaultSlot"?: WaTree["defaultSlot"];
  /**  */
  "prop:expandedIconSlot"?: WaTree["expandedIconSlot"];
  /**  */
  "prop:collapsedIconSlot"?: WaTree["collapsedIconSlot"];
  /** Emitted when a tree item is selected or deselected. */
  "on:wa-selection-change"?: (e: WaTreeWaSelectionChangeEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaTreeItem` component event */
export type WaTreeItemEvent<E = Event> = TypedEvent<WaTreeItem, E>;

export type WaTreeItemProps = {
  /** Expands the tree item. */
  expanded?: WaTreeItem["expanded"];
  /** Draws the tree item in a selected state. */
  selected?: WaTreeItem["selected"];
  /** Disables the tree item. */
  disabled?: WaTreeItem["disabled"];
  /** Enables lazy loading behavior. */
  lazy?: WaTreeItem["lazy"];
  /**  */
  indeterminate?: WaTreeItem["indeterminate"];
  /**  */
  isLeaf?: WaTreeItem["isLeaf"];
  /**  */
  loading?: WaTreeItem["loading"];
  /**  */
  selectable?: WaTreeItem["selectable"];
  /**  */
  defaultSlot?: WaTreeItem["defaultSlot"];
  /**  */
  childrenSlot?: WaTreeItem["childrenSlot"];
  /**  */
  itemElement?: WaTreeItem["itemElement"];
  /**  */
  childrenContainer?: WaTreeItem["childrenContainer"];
  /**  */
  expandButtonSlot?: WaTreeItem["expandButtonSlot"];

  /** Emitted when the tree item expands. */
  "onwa-expand"?: (e: WaTreeItemEvent) => void;
  /** Emitted after the tree item expands and all animations are complete. */
  "onwa-after-expand"?: (e: WaTreeItemEvent) => void;
  /** Emitted when the tree item collapses. */
  "onwa-collapse"?: (e: WaTreeItemEvent) => void;
  /** Emitted after the tree item collapses and all animations are complete. */
  "onwa-after-collapse"?: (e: WaTreeItemEvent) => void;
  /** Emitted when the tree item's lazy state changes. */
  "onwa-lazy-change"?: (e: WaTreeItemEvent) => void;
  /** Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree. */
  "onwa-lazy-load"?: (e: WaTreeItemEvent) => void;
};

export type WaTreeItemSolidJsProps = {
  /** Expands the tree item. */
  "prop:expanded"?: WaTreeItem["expanded"];
  /** Draws the tree item in a selected state. */
  "prop:selected"?: WaTreeItem["selected"];
  /** Disables the tree item. */
  "prop:disabled"?: WaTreeItem["disabled"];
  /** Enables lazy loading behavior. */
  "prop:lazy"?: WaTreeItem["lazy"];
  /**  */
  "prop:indeterminate"?: WaTreeItem["indeterminate"];
  /**  */
  "prop:isLeaf"?: WaTreeItem["isLeaf"];
  /**  */
  "prop:loading"?: WaTreeItem["loading"];
  /**  */
  "prop:selectable"?: WaTreeItem["selectable"];
  /**  */
  "prop:defaultSlot"?: WaTreeItem["defaultSlot"];
  /**  */
  "prop:childrenSlot"?: WaTreeItem["childrenSlot"];
  /**  */
  "prop:itemElement"?: WaTreeItem["itemElement"];
  /**  */
  "prop:childrenContainer"?: WaTreeItem["childrenContainer"];
  /**  */
  "prop:expandButtonSlot"?: WaTreeItem["expandButtonSlot"];
  /** Emitted when the tree item expands. */
  "on:wa-expand"?: (e: WaTreeItemEvent) => void;
  /** Emitted after the tree item expands and all animations are complete. */
  "on:wa-after-expand"?: (e: WaTreeItemEvent) => void;
  /** Emitted when the tree item collapses. */
  "on:wa-collapse"?: (e: WaTreeItemEvent) => void;
  /** Emitted after the tree item collapses and all animations are complete. */
  "on:wa-after-collapse"?: (e: WaTreeItemEvent) => void;
  /** Emitted when the tree item's lazy state changes. */
  "on:wa-lazy-change"?: (e: WaTreeItemEvent) => void;
  /** Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree. */
  "on:wa-lazy-load"?: (e: WaTreeItemEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

/** `WaZoomableFrame` component event */
export type WaZoomableFrameEvent<E = Event> = TypedEvent<WaZoomableFrame, E>;

export type WaZoomableFrameProps = {
  /** The URL of the content to display. */
  src?: WaZoomableFrame["src"];
  /** Inline HTML to display. */
  srcdoc?: WaZoomableFrame["srcdoc"];
  /** Allows fullscreen mode. */
  allowfullscreen?: WaZoomableFrame["allowfullscreen"];
  /** Controls iframe loading behavior. */
  loading?: WaZoomableFrame["loading"];
  /** Controls referrer information. */
  referrerpolicy?: WaZoomableFrame["referrerpolicy"];
  /** Security restrictions for the iframe. */
  sandbox?: WaZoomableFrame["sandbox"];
  /** The current zoom of the frame, e.g. 0 = 0% and 1 = 100%. */
  zoom?: WaZoomableFrame["zoom"];
  /** The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom. */
  "zoom-levels"?: WaZoomableFrame["zoomLevels"];
  /** The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom. */
  zoomLevels?: WaZoomableFrame["zoomLevels"];
  /** Removes the zoom controls. */
  "without-controls"?: WaZoomableFrame["withoutControls"];
  /** Removes the zoom controls. */
  withoutControls?: WaZoomableFrame["withoutControls"];
  /** Disables interaction when present. */
  "without-interaction"?: WaZoomableFrame["withoutInteraction"];
  /** Disables interaction when present. */
  withoutInteraction?: WaZoomableFrame["withoutInteraction"];
  /**  */
  iframe?: WaZoomableFrame["iframe"];

  /** Emitted when the internal iframe when it finishes loading. */
  onload?: (e: WaZoomableFrameEvent) => void;
  /** Emitted from the internal iframe when it fails to load. */
  onerror?: (e: WaZoomableFrameEvent) => void;
};

export type WaZoomableFrameSolidJsProps = {
  /** The URL of the content to display. */
  "prop:src"?: WaZoomableFrame["src"];
  /** Inline HTML to display. */
  "prop:srcdoc"?: WaZoomableFrame["srcdoc"];
  /** Allows fullscreen mode. */
  "prop:allowfullscreen"?: WaZoomableFrame["allowfullscreen"];
  /** Controls iframe loading behavior. */
  "prop:loading"?: WaZoomableFrame["loading"];
  /** Controls referrer information. */
  "prop:referrerpolicy"?: WaZoomableFrame["referrerpolicy"];
  /** Security restrictions for the iframe. */
  "prop:sandbox"?: WaZoomableFrame["sandbox"];
  /** The current zoom of the frame, e.g. 0 = 0% and 1 = 100%. */
  "prop:zoom"?: WaZoomableFrame["zoom"];
  /** The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom. */
  "attr:zoom-levels"?: WaZoomableFrame["zoomLevels"];
  /** The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom. */
  "prop:zoomLevels"?: WaZoomableFrame["zoomLevels"];
  /** Removes the zoom controls. */
  "bool:without-controls"?: WaZoomableFrame["withoutControls"];
  /** Removes the zoom controls. */
  "prop:withoutControls"?: WaZoomableFrame["withoutControls"];
  /** Disables interaction when present. */
  "bool:without-interaction"?: WaZoomableFrame["withoutInteraction"];
  /** Disables interaction when present. */
  "prop:withoutInteraction"?: WaZoomableFrame["withoutInteraction"];
  /**  */
  "prop:iframe"?: WaZoomableFrame["iframe"];
  /** Emitted when the internal iframe when it finishes loading. */
  "on:load"?: (e: WaZoomableFrameEvent) => void;
  /** Emitted from the internal iframe when it fails to load. */
  "on:error"?: (e: WaZoomableFrameEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CustomElements = {
  /**
   *
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
   * - `undefined`: undefined
   * - `wa-load`: Emitted when the image loads successfully.
   * - `wa-error`: Emitted when the image fails to load.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `play-icon`: Optional play icon to use instead of the default. Works best with `<wa-icon>`.
   * - `pause-icon`: Optional pause icon to use instead of the default. Works best with `<wa-icon>`.
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
    WaAnimatedImageProps & BaseProps<WaAnimatedImage> & BaseEvents
  >;

  /**
   *
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
   * - `easing`: The easing function to use for the animation. This can be a Web Awesome easing function or a custom easing function
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
   * - `undefined`: undefined
   * - `wa-cancel`: Emitted when the animation is canceled.
   * - `wa-finish`: Emitted when the animation finishes.
   * - `wa-start`: Emitted when the animation starts or restarts.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To animate multiple elements, either wrap them in a single container or use multiple `<wa-animation>` elements.
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
    WaAnimationProps & BaseProps<WaAnimation> & BaseEvents
  >;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-error`: The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `icon`: The default icon to use when no image or initials are present. Works best with `<wa-icon>`.
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
   * - `icon`: The container that wraps the avatar's icon.
   * - `initials`: The container that wraps the avatar's initials.
   * - `image`: The avatar image. Only shown when the `image` attribute is set.
   */
  "wa-avatar": Partial<WaAvatarProps & BaseProps<WaAvatar> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The badge's theme variant. Defaults to `brand` if not within another element with a variant.
   * - `appearance`: The badge's visual appearance.
   * - `pill`: Draws a pill-style badge with rounded edges.
   * - `attention`: Adds an animation to draw attention to the badge.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The badge's content.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--pulse-color`: The color of the badge's pulse effect when using `attention="pulse"`. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-badge": Partial<WaBadgeProps & BaseProps<WaBadge> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `variant`: The button's theme variant. Defaults to `neutral` if not within another element with a variant.
   * - `appearance`: The button's visual appearance.
   * - `size`: The button's size.
   * - `with-caret`/`withCaret`: Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.
   * - `disabled`: Disables the button. Does not apply to link buttons.
   * - `loading`: Draws the button in a loading state.
   * - `pill`: Draws a pill-style button with rounded edges.
   * - `type`: The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
   * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
   * - `name`: The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
   * This attribute is ignored when `href` is present.
   * - `value`: The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
   * button is the submitter. This attribute is ignored when `href` is present.
   * - `href`: When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   * - `target`: Tells the browser where to open the link. Only used when `href` is present.
   * - `rel`: When using `href`, this attribute will map to the underlying link's `rel` attribute.
   * - `download`: Tells the browser to download the linked file as this filename. Only used when `href` is present.
   * - `formaction`/`formAction`: Used to override the form owner's `action` attribute.
   * - `formenctype`/`formEnctype`: Used to override the form owner's `enctype` attribute.
   * - `formmethod`/`formMethod`: Used to override the form owner's `method` attribute.
   * - `formnovalidate`/`formNoValidate`: Used to override the form owner's `novalidate` attribute.
   * - `formtarget`/`formTarget`: Used to override the form owner's `target` attribute.
   * - `assumeInteractionOn`: undefined (property only)
   * - `button`: undefined (property only)
   * - `labelSlot`: undefined (property only)
   * - `invalid`: undefined (property only)
   * - `isIconButton`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `blur`: Emitted when the button loses focus.
   * - `focus`: Emitted when the button gains focus.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The button's label.
   * - `start`: An element, such as `<wa-icon>`, placed before the label.
   * - `end`: An element, such as `<wa-icon>`, placed after the label.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `setValue(_args: Parameters<WebAwesomeFormAssociatedElement['setValue']>) => void`: undefined
   * - `click() => void`: Simulates a click on the button.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the button.
   * - `blur() => void`: Removes focus from the button.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `start`: The container that wraps the `start` slot.
   * - `label`: The button's label.
   * - `end`: The container that wraps the `end` slot.
   * - `caret`: The button's caret icon, a `<wa-icon>` element.
   * - `spinner`: The spinner that shows when the button is in the loading state.
   */
  "wa-button": Partial<WaButtonProps & BaseProps<WaButton> & BaseEvents>;

  /**
   *
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
   * - `start`: An element, such as `<wa-icon>`, placed before the label.
   * - `end`: An element, such as `<wa-icon>`, placed after the label.
   * - `separator`: The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on `<wa-breadcrumb>` instead.
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
   * - `label`: The breadcrumb item's label.
   * - `start`: The container that wraps the `start` slot.
   * - `end`: The container that wraps the `end` slot.
   * - `separator`: The container that wraps the separator.
   */
  "wa-breadcrumb-item": Partial<
    WaBreadcrumbItemProps & BaseProps<WaBreadcrumbItem> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
   * devices when interacting with the control and is strongly recommended.
   * - `orientation`: The button group's orientation.
   * - `defaultSlot`: undefined (property only)
   * - `disableRole`: undefined (property only)
   * - `hasOutlined`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: One or more `<wa-button>` elements to display in the button group.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-button-group": Partial<
    WaButtonGroupProps & BaseProps<WaButtonGroup> & BaseEvents
  >;

  /**
   *
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
   * - `separator`: The separator to use between breadcrumb items. Works best with `<wa-icon>`.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-breadcrumb": Partial<
    WaBreadcrumbProps & BaseProps<WaBreadcrumb> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The callout's theme variant. Defaults to `brand` if not within another element with a variant.
   * - `appearance`: The callout's visual appearance.
   * - `size`: The callout's size.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The callout's main content.
   * - `icon`: An icon to show in the callout. Works best with `<wa-icon>`.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `icon`: The container that wraps the optional icon.
   * - `message`: The container that wraps the callout's main content.
   */
  "wa-callout": Partial<WaCalloutProps & BaseProps<WaCallout> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `appearance`: The card's visual appearance.
   * - `with-header`/`withHeader`: Renders the card with a header. Only needed for SSR, otherwise is automatically added.
   * - `with-media`/`withMedia`: Renders the card with an image. Only needed for SSR, otherwise is automatically added.
   * - `with-footer`/`withFooter`: Renders the card with a footer. Only needed for SSR, otherwise is automatically added.
   * - `orientation`: Renders the card's orientation *
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The card's main content.
   * - `header`: An optional header for the card.
   * - `footer`: An optional footer for the card.
   * - `media`: An optional media section to render at the start of the card.
   * - `actions`: An optional actions section to render at the end for the horizontal card.
   * - `header-actions`: An optional actions section to render in the header of the vertical card.
   * - `footer-actions`: An optional actions section to render in the footer of the vertical card.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--spacing`: The amount of space around and between sections of the card. Expects a single value. (default: `var(--wa-space-l)`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `media`: The container that wraps the card's media.
   * - `header`: The container that wraps the card's header.
   * - `body`: The container that wraps the card's main content.
   * - `footer`: The container that wraps the card's footer.
   */
  "wa-card": Partial<WaCardProps & BaseProps<WaCard> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `loop`: When set, allows the user to navigate the carousel in the same direction indefinitely.
   * - `slides`: undefined
   * - `currentSlide`: undefined
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
   * - `undefined`: undefined
   * - `wa-slide-change`: Emitted when the active slide changes.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The carousel's main content, one or more `<wa-carousel-item>` elements.
   * - `next-icon`: Optional next icon to use instead of the default. Works best with `<wa-icon>`.
   * - `previous-icon`: Optional previous icon to use instead of the default. Works best with `<wa-icon>`.
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
   * - `--aspect-ratio`: The aspect ratio of each slide. (default: `16/9`)
   * - `--scroll-hint`: The amount of padding to apply to the scroll area, allowing adjacent slides to become partially visible as a scroll hint. (default: `undefined`)
   * - `--slide-gap`: The space between each slide. (default: `var(--wa-space-m)`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The carousel's internal wrapper.
   * - `scroll-container`: The scroll container that wraps the slides.
   * - `pagination`: The pagination indicators wrapper.
   * - `pagination-item`: The pagination indicator.
   * - `pagination-item-active`: Applied when the item is active.
   * - `navigation`: The navigation wrapper.
   * - `navigation-button`: The navigation button.
   * - `navigation-button-previous`: Applied to the previous button.
   * - `navigation-button-next`: Applied to the next button.
   */
  "wa-carousel": Partial<WaCarouselProps & BaseProps<WaCarousel> & BaseEvents>;

  /**
   *
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
    WaCarouselItemProps & BaseProps<WaCarouselItem> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the checkbox, submitted as a name/value pair with form data.
   * - `value`: The value of the checkbox, submitted as a name/value pair with form data.
   * - `size`: The checkbox's size.
   * - `disabled`: Disables the checkbox.
   * - `indeterminate`: Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   * - `checked`/`defaultChecked`: The default value of the form control. Primarily used for resetting the form control.
   * - `required`: Makes the checkbox a required field.
   * - `hint`: The checkbox's hint. If you need to display HTML, use the `hint` slot instead.
   * - `input`: undefined (property only)
   * - `checked`: Draws the checkbox in a checked state. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when the checked state changes.
   * - `blur`: Emitted when the checkbox loses focus.
   * - `focus`: Emitted when the checkbox gains focus.
   * - `input`: Emitted when the checkbox receives input.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The checkbox's label.
   * - `hint`: Text that describes how to use the checkbox. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDefaultCheckedChange() => void`: undefined
   * - `handleValueOrCheckedChange() => void`: undefined
   * - `handleStateChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `formResetCallback() => void`: undefined
   * - `click() => void`: Simulates a click on the checkbox.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the checkbox.
   * - `blur() => void`: Removes focus from the checkbox.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--checked-icon-color`: The color of the checked and indeterminate icons. (default: `undefined`)
   * - `--checked-icon-scale`: The size of the checked and indeterminate icons relative to the checkbox. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's label .
   * - `control`: The square container that wraps the checkbox's checked state.
   * - `checked-icon`: The checked icon, a `<wa-icon>` element.
   * - `indeterminate-icon`: The indeterminate icon, a `<wa-icon>` element.
   * - `label`: The container that wraps the checkbox's label.
   * - `hint`: The hint's wrapper.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `checked`: Applied when the checkbox is checked.
   * - `disabled`: Applied when the checkbox is disabled.
   * - `indeterminate`: Applied when the checkbox is in an indeterminate state.
   */
  "wa-checkbox": Partial<WaCheckboxProps & BaseProps<WaCheckbox> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `with-label`/`withLabel`: undefined
   * - `with-hint`/`withHint`: undefined
   * - `label`: The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
   * display HTML, you can use the `label` slot` instead.
   * - `hint`: The color picker's hint. If you need to display HTML, use the `hint` slot instead.
   * - `format`: The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
   * picker will accept user input in any format (including CSS color names) and convert it to the desired format.
   * - `size`: Determines the size of the color picker's trigger
   * - `without-format-toggle`/`withoutFormatToggle`: Removes the button that lets users toggle between format.
   * - `name`: The name of the form control, submitted as a name/value pair with form data.
   * - `disabled`: Disables the color picker.
   * - `open`: Indicates whether or not the popup is open. You can toggle this attribute to show and hide the popup, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the popup's open state.
   * - `opacity`: Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA.
   * - `uppercase`: By default, values are lowercase. With this attribute, values will be uppercase instead.
   * - `swatches`: One or more predefined color swatches to display as presets in the color picker. Can include any format the color
   * picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
   * semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.
   * - `required`: Makes the color picker a required field.
   * - `base`: undefined (property only)
   * - `input`: undefined (property only)
   * - `triggerLabel`: undefined (property only)
   * - `triggerButton`: undefined (property only)
   * - `validationTarget`: undefined (property only) (readonly)
   * - `popup`: undefined (property only)
   * - `previewButton`: undefined (property only)
   * - `trigger`: undefined (property only)
   * - `value`: The current value of the color picker. The value's format will vary based the `format` attribute. To get the value
   * in a specific format, use the `getFormattedValue()` method. The value is submitted as a name/value pair with form
   * data. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when the color picker's value changes.
   * - `input`: Emitted when the color picker receives input.
   * - `undefined`: undefined
   * - `wa-show`: undefined
   * - `wa-after-show`: undefined
   * - `wa-hide`: undefined
   * - `wa-after-hide`: undefined
   * - `blur`: Emitted when the color picker loses focus.
   * - `focus`: Emitted when the color picker receives focus.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The color picker's form label. Alternatively, you can use the `label` attribute.
   * - `hint`: The color picker's form hint. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `getHexString(hue: number, saturation: number, brightness: number, alpha = 100) => void`: Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100.
   * - `handleFormatChange() => void`: undefined
   * - `handleOpacityChange() => void`: undefined
   * - `handleValueChange(oldValue: string | undefined, newValue: string) => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the color picker.
   * - `blur() => void`: Removes focus from the color picker.
   * - `getFormattedValue(format: 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv' | 'hsva' = 'hex') => void`: Returns the current value as a string in the specified format.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `formResetCallback() => void`: undefined
   * - `handleTriggerClick() => void`: undefined
   * - `handleTriggerKeyDown(event: KeyboardEvent) => void`: undefined
   * - `handleTriggerKeyUp(event: KeyboardEvent) => void`: undefined
   * - `updateAccessibleTrigger() => void`: undefined
   * - `show() => void`: Shows the color picker panel.
   * - `hide() => void`: Hides the color picker panel
   * - `addOpenListeners() => void`: undefined
   * - `removeOpenListeners() => void`: undefined
   * - `handleOpenChange() => void`: undefined
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
   * - `eyedropper-button`: The eye dropper button.
   * - `eyedropper-button__base`: The eye dropper button's exported `button` part.
   * - `eyedropper-button__start`: The eye dropper button's exported `start` part.
   * - `eyedropper-button__label`: The eye dropper button's exported `label` part.
   * - `eyedropper-button__end`: The eye dropper button's exported `end` part.
   * - `eyedropper-button__caret`: The eye dropper button's exported `caret` part.
   * - `format-button`: The format button.
   * - `format-button__base`: The format button's exported `button` part.
   * - `format-button__start`: The format button's exported `start` part.
   * - `format-button__label`: The format button's exported `label` part.
   * - `format-button__end`: The format button's exported `end` part.
   * - `format-button__caret`: The format button's exported `caret` part.
   */
  "wa-color-picker": Partial<
    WaColorPickerProps & BaseProps<WaColorPicker> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `position`: The position of the divider as a percentage.
   * - `handle`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when the position changes.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `before`: The before content, often an `<img>` or `<svg>` element.
   * - `after`: The after content, often an `<img>` or `<svg>` element.
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
   * - `base`: The container that wraps the before and after content.
   * - `before`: The container that wraps the before content.
   * - `after`: The container that wraps the after content.
   * - `divider`: The divider that separates the before and after content.
   * - `handle`: The handle that the user drags to expose the after content.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `dragging`: Applied when the comparison is being dragged.
   */
  "wa-comparison": Partial<
    WaComparisonProps & BaseProps<WaComparison> & BaseEvents
  >;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-copy`: Emitted when the data has been copied.
   * - `wa-error`: Emitted when the data could not be copied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `copy-icon`: The icon to show in the default copy state. Works best with `<wa-icon>`.
   * - `success-icon`: The icon to show when the content is copied. Works best with `<wa-icon>`.
   * - `error-icon`: The icon to show when a copy error occurs. Works best with `<wa-icon>`.
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
    WaCopyButtonProps & BaseProps<WaCopyButton> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
   * - `summary`: The summary to show in the header. If you need to display HTML, use the `summary` slot instead.
   * - `name`: Groups related details elements. When one opens, others with the same name will close.
   * - `disabled`: Disables the details so it can't be toggled.
   * - `appearance`: The element's visual appearance.
   * - `icon-placement`/`iconPlacement`: The location of the expand/collapse icon.
   * - `details`: undefined (property only)
   * - `header`: undefined (property only)
   * - `body`: undefined (property only)
   * - `expandIconSlot`: undefined (property only)
   * - `isAnimating`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the details opens.
   * - `wa-after-show`: Emitted after the details opens and all animations are complete.
   * - `wa-hide`: Emitted when the details closes.
   * - `wa-after-hide`: Emitted after the details closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The details' main content.
   * - `summary`: The details' summary. Alternatively, you can use the `summary` attribute.
   * - `expand-icon`: Optional expand icon to use instead of the default. Works best with `<wa-icon>`.
   * - `collapse-icon`: Optional collapse icon to use instead of the default. Works best with `<wa-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `show() => void`: Shows the details.
   * - `hide() => void`: Hides the details
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--spacing`: The amount of space around and between the details' content. Expects a single value. (default: `undefined`)
   * - `--show-duration`: The show duration to use when applying built-in animation classes. (default: `200ms`)
   * - `--hide-duration`: The hide duration to use when applying built-in animation classes. (default: `200ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The inner `<details>` element used to render the component. Styles you apply to the component are automatically applied to this part, so you usually don't need to deal with it unless you need to set the `display` property.
   * - `header`: The header that wraps both the summary and the expand/collapse icon.
   * - `summary`: The container that wraps the summary.
   * - `icon`: The container that wraps the expand/collapse icons.
   * - `content`: The details content.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `animating`: Applied when the details is animating expand/collapse.
   */
  "wa-details": Partial<WaDetailsProps & BaseProps<WaDetails> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the dialog is open. Toggle this attribute to show and hide the dialog.
   * - `label`: The dialog's label as displayed in the header. You should always include a relevant label, as it is required for
   * proper accessibility. If you need to display HTML, use the `label` slot instead.
   * - `without-header`/`withoutHeader`: Disables the header. This will also remove the default close button.
   * - `light-dismiss`/`lightDismiss`: When enabled, the dialog will be closed when the user clicks outside of it.
   * - `dialog`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the dialog opens.
   * - `wa-after-show`: Emitted after the dialog opens and all animations are complete.
   * - `wa-hide`: Emitted when the dialog is requested to close. Calling `event.preventDefault()` will prevent the dialog from closing. You can inspect `event.detail.source` to see which element caused the dialog to close. If the source is the dialog element itself, the user has pressed [[Escape]] or the dialog has been closed programmatically. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
   * - `wa-after-hide`: Emitted after the dialog closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The dialog's main content.
   * - `label`: The dialog's label. Alternatively, you can use the `label` attribute.
   * - `header-actions`: Optional actions to add to the header. Works best with `<wa-button>`.
   * - `footer`: The dialog's footer, usually one or more buttons representing various options.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--spacing`: The amount of space around and between the dialog's content. (default: `undefined`)
   * - `--width`: The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. (default: `undefined`)
   * - `--show-duration`: The animation duration when showing the dialog. (default: `200ms`)
   * - `--hide-duration`: The animation duration when hiding the dialog. (default: `200ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `dialog`: The dialog's internal `<dialog>` element.
   * - `header`: The dialog's header. This element wraps the title and header actions.
   * - `header-actions`: Optional actions to add to the header. Works best with `<wa-button>`.
   * - `title`: The dialog's title.
   * - `close-button`: The close button, a `<wa-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   * - `body`: The dialog's body.
   * - `footer`: The dialog's footer.
   */
  "wa-dialog": Partial<WaDialogProps & BaseProps<WaDialog> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `orientation`: Sets the divider's orientation.
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
  "wa-divider": Partial<WaDividerProps & BaseProps<WaDivider> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer.
   * - `label`: The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
   * proper accessibility. If you need to display HTML, use the `label` slot instead.
   * - `placement`: The direction from which the drawer will open.
   * - `without-header`/`withoutHeader`: Disables the header. This will also remove the default close button.
   * - `light-dismiss`/`lightDismiss`: When enabled, the drawer will be closed when the user clicks outside of it.
   * - `drawer`: undefined (property only)
   * - `modal`: Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the drawer opens.
   * - `wa-after-show`: Emitted after the drawer opens and all animations are complete.
   * - `wa-hide`: Emitted when the drawer is requesting to close. Calling `event.preventDefault()` will prevent the drawer from closing. You can inspect `event.detail.source` to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed [[Escape]] or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.
   * - `wa-after-hide`: Emitted after the drawer closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The drawer's main content.
   * - `label`: The drawer's label. Alternatively, you can use the `label` attribute.
   * - `header-actions`: Optional actions to add to the header. Works best with `<wa-button>`.
   * - `footer`: The drawer's footer, usually one or more buttons representing various options.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--spacing`: The amount of space around and between the drawer's content. (default: `undefined`)
   * - `--size`: The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens. (default: `undefined`)
   * - `--show-duration`: The animation duration when showing the drawer. (default: `200ms`)
   * - `--hide-duration`: The animation duration when hiding the drawer. (default: `200ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `dialog`: The drawer's internal `<dialog>` element.
   * - `header`: The drawer's header. This element wraps the title and header actions.
   * - `header-actions`: Optional actions to add to the header. Works best with `<wa-button>`.
   * - `title`: The drawer's title.
   * - `close-button`: The close button, a `<wa-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   * - `body`: The drawer's body.
   * - `footer`: The drawer's footer.
   */
  "wa-drawer": Partial<WaDrawerProps & BaseProps<WaDrawer> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Opens or closes the dropdown.
   * - `size`: The dropdown's size.
   * - `placement`: The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
   * the preferred placement doesn't have enough room.
   * - `distance`: The distance of the dropdown menu from its trigger.
   * - `skidding`: The offset of the dropdown menu along its trigger.
   * - `defaultSlot`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the dropdown is about to show.
   * - `wa-after-show`: Emitted after the dropdown has been shown.
   * - `wa-hide`: Emitted when the dropdown is about to hide.
   * - `wa-after-hide`: Emitted after the dropdown has been hidden.
   * - `wa-select`: Emitted when an item in the dropdown is selected.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The dropdown's items, typically `<wa-dropdown-item>` elements.
   * - `trigger`: The element that triggers the dropdown, such as a `<wa-button>` or `<button>`.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--show-duration`: The duration of the show animation. (default: `undefined`)
   * - `--hide-duration`: The duration of the hide animation. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's host element.
   * - `menu`: The dropdown menu container.
   */
  "wa-dropdown": Partial<WaDropdownProps & BaseProps<WaDropdown> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The type of menu item to render.
   * - `value`: An optional value for the menu item. This is useful for determining which item was selected when listening to the
   * dropdown's `wa-select` event.
   * - `type`: Set to `checkbox` to make the item a checkbox.
   * - `checked`: Set to true to check the dropdown item. Only valid when `type` is `checkbox`.
   * - `disabled`: Disables the dropdown item.
   * - `submenuOpen`: Whether the submenu is currently open.
   * - `submenuElement`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `blur`: Emitted when the dropdown item loses focus.
   * - `focus`: Emitted when the dropdown item gains focus.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The dropdown item's label.
   * - `icon`: An optional icon to display before the label.
   * - `details`: Additional content or details to display after the label.
   * - `submenu`: Submenu items, typically `<wa-dropdown-item>` elements, to create a nested menu.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `openSubmenu() => void`: Opens the submenu.
   * - `closeSubmenu() => void`: Closes the submenu.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `checkmark`: The checkmark icon (a `<wa-icon>` element) when the item is a checkbox.
   * - `icon`: The container for the icon slot.
   * - `label`: The container for the label slot.
   * - `details`: The container for the details slot.
   * - `submenu-icon`: The submenu indicator icon (a `<wa-icon>` element).
   * - `submenu`: The submenu container.
   */
  "wa-dropdown-item": Partial<
    WaDropdownItemProps & BaseProps<WaDropdownItem> & BaseEvents
  >;

  /**
   *
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
    WaFormatBytesProps & BaseProps<WaFormatBytes> & BaseEvents
  >;

  /**
   *
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
    WaFormatDateProps & BaseProps<WaFormatDate> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The number to format.
   * - `type`: The formatting style to use.
   * - `without-grouping`/`withoutGrouping`: Turns off grouping separators.
   * - `currency`: The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting.
   * - `currency-display`/`currencyDisplay`: How to display the currency.
   * - `minimum-integer-digits`/`minimumIntegerDigits`: The minimum number of integer digits to use. Possible values are 1-21.
   * - `minimum-fraction-digits`/`minimumFractionDigits`: The minimum number of fraction digits to use. Possible values are 0-100.
   * - `maximum-fraction-digits`/`maximumFractionDigits`: The maximum number of fraction digits to use. Possible values are 0-100.
   * - `minimum-significant-digits`/`minimumSignificantDigits`: The minimum number of significant digits to use. Possible values are 1-21.
   * - `maximum-significant-digits`/`maximumSignificantDigits`: The maximum number of significant digits to use,. Possible values are 1-21.
   */
  "wa-format-number": Partial<
    WaFormatNumberProps & BaseProps<WaFormatNumber> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the icon to draw. Available names depend on the icon library being used.
   * - `family`: The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For
   * Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`.
   * A valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code="...">` to provide
   * one.
   * - `variant`: The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for
   * the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon libraries
   * may or may not use this property.
   * - `auto-width`/`autoWidth`: Sets the width of the icon to match the cropped SVG viewBox. This operates like the Font `fa-width-auto` class.
   * - `swap-opacity`/`swapOpacity`: Swaps the opacity of duotone icons.
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
   * - `undefined`: undefined
   * - `wa-load`: Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
   * - `wa-error`: Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleLabelChange() => void`: undefined
   * - `setIcon() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--primary-color`: Sets a duotone icon's primary color. (default: `currentColor`)
   * - `--primary-opacity`: Sets a duotone icon's primary opacity. (default: `1`)
   * - `--secondary-color`: Sets a duotone icon's secondary color. (default: `currentColor`)
   * - `--secondary-opacity`: Sets a duotone icon's secondary opacity. (default: `0.4`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `svg`: The internal SVG element.
   * - `use`: The `<use>` element generated when using `spriteSheet: true`
   */
  "wa-icon": Partial<WaIconProps & BaseProps<WaIcon> & BaseEvents>;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-load`: Emitted when the included file is loaded.
   * - `wa-include-error`: Emitted when the included file fails to load due to an error.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleSrcChange() => void`: undefined
   */
  "wa-include": Partial<WaIncludeProps & BaseProps<WaInclude> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `type`: The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `size`: The input's size.
   * - `appearance`: The input's visual appearance.
   * - `pill`: Draws a pill-style input with rounded edges.
   * - `label`: The input's label. If you need to display HTML, use the `label` slot instead.
   * - `hint`: The input's hint. If you need to display HTML, use the `hint` slot instead.
   * - `with-clear`/`withClear`: Adds a clear button when the input is not empty.
   * - `placeholder`: Placeholder text to show as a hint when the input is empty.
   * - `readonly`: Makes the input readonly.
   * - `password-toggle`/`passwordToggle`: Adds a button to toggle the password's visibility. Only applies to password types.
   * - `password-visible`/`passwordVisible`: Determines whether or not the password is currently visible. Only applies to password input types.
   * - `without-spin-buttons`/`withoutSpinButtons`: Hides the browser's built-in increment/decrement spin buttons for number inputs.
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
   * - `with-label`/`withLabel`: Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint.
   * - `with-hint`/`withHint`: Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint.
   * - `assumeInteractionOn`: undefined (property only)
   * - `input`: undefined (property only)
   * - `value`: The current value of the input, submitted as a name/value pair with form data. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `input`: Emitted when the control receives input.
   * - `change`: Emitted when an alteration to the control's value is committed by the user.
   * - `blur`: Emitted when the control loses focus.
   * - `focus`: Emitted when the control gains focus.
   * - `wa-clear`: Emitted when the clear button is activated.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The input's label. Alternatively, you can use the `label` attribute.
   * - `start`: An element, such as `<wa-icon>`, placed at the start of the input control.
   * - `end`: An element, such as `<wa-icon>`, placed at the end of the input control.
   * - `clear-icon`: An icon to use in lieu of the default clear icon.
   * - `show-password-icon`: An icon to use in lieu of the default show password icon.
   * - `hide-password-icon`: An icon to use in lieu of the default hide password icon.
   * - `hint`: Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleStepChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the input.
   * - `blur() => void`: Removes focus from the input.
   * - `select() => void`: Selects all the text in the input.
   * - `setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the text selection (0-based).
   * - `setRangeText(replacement: string, start?: number, end?: number, selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve') => void`: Replaces a range of text with a new string.
   * - `showPicker() => void`: Displays the browser picker for an input element (only works if the browser supports it for the input type).
   * - `stepUp() => void`: Increments the value of a numeric input type by the value of the step attribute.
   * - `stepDown() => void`: Decrements the value of a numeric input type by the value of the step attribute.
   * - `formResetCallback() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `label`: The label
   * - `hint`: The hint's wrapper.
   * - `base`: The wrapper being rendered as an input
   * - `input`: The internal `<input>` control.
   * - `start`: The container that wraps the `start` slot.
   * - `clear-button`: The clear button.
   * - `password-toggle-button`: The password toggle button.
   * - `end`: The container that wraps the `end` slot.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `blank`: The input is empty.
   */
  "wa-input": Partial<WaInputProps & BaseProps<WaInput> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `root`: Element ID to define the viewport boundaries for tracked targets.
   * - `root-margin`/`rootMargin`: Offset space around the root boundary. Accepts values like CSS margin syntax.
   * - `threshold`: One or more space-separated values representing visibility percentages that trigger the observer callback.
   * - `intersect-class`/`intersectClass`: CSS class applied to elements during intersection. Automatically removed when elements leave
   * the viewport, enabling pure CSS styling based on visibility state.
   * - `once`: If enabled, observation ceases after initial intersection.
   * - `disabled`: Deactivates the intersection observer functionality.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `wa-intersect`: Fired when a tracked element begins or ceases intersecting.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Elements to track. Only immediate children of the host are monitored.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleOptionsChange() => void`: undefined
   */
  "wa-intersection-observer": Partial<
    WaIntersectionObserverProps & BaseProps<WaIntersectionObserver> & BaseEvents
  >;

  /**
   *
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
   * - `wa-mutation`: Emitted when a mutation occurs.
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
    WaMutationObserverProps & BaseProps<WaMutationObserver> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The option's value. When selected, the containing form control will receive this value. The value must be unique
   * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
   * multiple values.
   * - `disabled`: Draws the option in a disabled state, preventing selection.
   * - `selected`/`defaultSelected`: Selects an option initially.
   * - `label`: The option’s plain text label.
   * Usually automatically generated, but can be useful to provide manually for cases involving complex content.
   * - `defaultSlot`: undefined (property only)
   * - `current`: undefined (property only)
   * - `_label`: undefined (property only)
   * - `defaultLabel`: The default label, generated from the element contents. Will be equal to `label` in most cases. (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The option's label.
   * - `start`: An element, such as `<wa-icon>`, placed before the label.
   * - `end`: An element, such as `<wa-icon>`, placed after the label.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `checked-icon`: The checked icon, a `<wa-icon>` element.
   * - `label`: The option's label.
   * - `start`: The container that wraps the `start` slot.
   * - `end`: The container that wraps the `end` slot.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `current`: The user has keyed into the option, but hasn't selected it yet (shows a highlight)
   * - `selected`: The option is selected and has aria-selected="true"
   * - `hover`: Like `:hover` but works while dragging in Safari
   */
  "wa-option": Partial<WaOptionProps & BaseProps<WaOption> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `placement`: The preferred placement of the popover. Note that the actual placement may vary as needed to keep the popover
   * inside of the viewport.
   * - `open`: Shows or hides the popover.
   * - `distance`: The distance in pixels from which to offset the popover away from its target.
   * - `skidding`: The distance in pixels from which to offset the popover along its target.
   * - `for`: The ID of the popover's anchor element. This must be an interactive/focusable element such as a button.
   * - `without-arrow`/`withoutArrow`: Removes the arrow from the popover.
   * - `dialog`: undefined (property only)
   * - `body`: undefined (property only)
   * - `popup`: undefined (property only)
   * - `anchor`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the popover begins to show. Canceling this event will stop the popover from showing.
   * - `wa-after-show`: Emitted after the popover has shown and all animations are complete.
   * - `wa-hide`: Emitted when the popover begins to hide. Canceling this event will stop the popover from hiding.
   * - `wa-after-hide`: Emitted after the popover has hidden and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The popover's content. Interactive elements such as buttons and links are supported.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `handleForChange() => void`: undefined
   * - `handleOptionsChange() => void`: undefined
   * - `show() => void`: Shows the popover.
   * - `hide() => void`: Hides the popover.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--arrow-size`: The size of the tiny arrow that points to the popover (set to zero to remove). (default: `0.375rem`)
   * - `--max-width`: The maximum width of the popover's body content. (default: `25rem`)
   * - `--show-duration`: The speed of the show animation. (default: `100ms`)
   * - `--hide-duration`: The speed of the hide animation. (default: `100ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `dialog`: The native dialog element that contains the popover content.
   * - `body`: The popover's body where its content is rendered.
   * - `popup`: The internal `<wa-popup>` element that positions the popover.
   * - `popup__popup`: The popup's exported `popup` part. Use this to target the popover's popup container.
   * - `popup__arrow`: The popup's exported `arrow` part. Use this to target the popover's arrow.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `open`: Applied when the popover is open.
   */
  "wa-popover": Partial<WaPopoverProps & BaseProps<WaPopover> & BaseEvents>;

  /**
   *
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
   * - `boundary`: The bounding box to use for flipping, shifting, and auto-sizing.
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
   * - `undefined`: undefined
   * - `wa-reposition`: Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.
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
   * - `--arrow-color`: The color of the arrow. (default: `black`)
   * - `--auto-size-available-width`: A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. (default: `undefined`)
   * - `--auto-size-available-height`: A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. (default: `undefined`)
   * - `--show-duration`: The show duration to use when applying built-in animation classes. (default: `100ms`)
   * - `--hide-duration`: The hide duration to use when applying built-in animation classes. (default: `100ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `arrow`: The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and maybe a border or box shadow.
   * - `popup`: The popup's container. Useful for setting a background color, box shadow, etc.
   * - `hover-bridge`: The hover bridge element. Only available when the `hover-bridge` option is enabled.
   */
  "wa-popup": Partial<WaPopupProps & BaseProps<WaPopup> & BaseEvents>;

  /**
   *
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
   * - `--track-height`: The color of the track. (default: `1rem`)
   * - `--track-color`: The color of the track. (default: `var(--wa-color-neutral-fill-normal)`)
   * - `--indicator-color`: The color of the indicator. (default: `var(--wa-color-brand-fill-loud)`)
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
    WaProgressBarProps & BaseProps<WaProgressBar> & BaseEvents
  >;

  /**
   *
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
  "wa-qr-code": Partial<WaQrCodeProps & BaseProps<WaQrCode> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The radio's value. When selected, the radio group will receive this value.
   * - `appearance`: The radio's visual appearance.
   * - `size`: The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
   * attribute can typically be omitted.
   * - `disabled`: Disables the radio.
   * - `checked`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `blur`: Emitted when the control loses focus.
   * - `focus`: Emitted when the control gains focus.
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
   * - `setValue() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--checked-icon-color`: The color of the checked icon. (default: `undefined`)
   * - `--checked-icon-scale`: The size of the checked icon relative to the radio. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `control`: The circular container that wraps the radio's checked state.
   * - `checked-icon`: The checked icon.
   * - `label`: The container that wraps the radio's label.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `checked`: Applied when the control is checked.
   * - `disabled`: Applied when the control is disabled.
   */
  "wa-radio": Partial<WaRadioProps & BaseProps<WaRadio> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   * - `hint`: The radio groups's hint. If you need to display HTML, use the `hint` slot instead.
   * - `name`: The name of the radio group, submitted as a name/value pair with form data.
   * - `disabled`: Disables the radio group and all child radios.
   * - `orientation`: The orientation in which to show radio items.
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `size`: The radio group's size. This size will be applied to all child radios and radio buttons, except when explicitly overridden.
   * - `required`: Ensures a child radio is checked before allowing the containing form to submit.
   * - `with-label`/`withLabel`: Used for SSR. if true, will show slotted label on initial render.
   * - `with-hint`/`withHint`: Used for SSR. if true, will show slotted hint on initial render.
   * - `defaultSlot`: undefined (property only)
   * - `value`: The current value of the radio group, submitted as a name/value pair with form data. (property only)
   * - `validationTarget`: We use the first available radio as the validationTarget similar to native HTML that shows the validation popup on
   * the first radio element. (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `input`: Emitted when the radio group receives user input.
   * - `change`: Emitted when the radio group's selected value changes.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The default slot where `<wa-radio>` elements are placed.
   * - `label`: The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
   * - `hint`: Text that describes how to use the radio group. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `formResetCallback(args: Parameters<WebAwesomeFormAssociatedElement['formResetCallback']>) => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the radio group.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and hint.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The input's wrapper.
   * - `radios`: The wrapper than surrounds radio items, styled as a flex container by default.
   * - `hint`: The hint's wrapper.
   */
  "wa-radio-group": Partial<
    WaRadioGroupProps & BaseProps<WaRadioGroup> & BaseEvents
  >;

  /**
   *
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
   * well with `<wa-icon>` elements.
   * - `size`: The component's size.
   * - `rating`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when the rating's value changes.
   * - `undefined`: undefined
   * - `wa-hover`: Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.
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
   * - `--symbol-spacing`: The spacing to use around symbols. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-rating": Partial<WaRatingProps & BaseProps<WaRating> & BaseEvents>;

  /**
   *
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
    WaRelativeTimeProps & BaseProps<WaRelativeTime> & BaseEvents
  >;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-resize`: Emitted when the element is resized.
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
    WaResizeObserverProps & BaseProps<WaResizeObserver> & BaseEvents
  >;

  /**
   *
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
    WaProgressRingProps & BaseProps<WaProgressRing> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `orientation`: The scroller's orientation.
   * - `without-scrollbar`/`withoutScrollbar`: Removes the visible scrollbar.
   * - `without-shadow`/`withoutShadow`: Removes the shadows.
   * - `content`: undefined (property only)
   * - `canScroll`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content to show inside the scroller.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--shadow-color`: The base color of the shadow. (default: `var(--wa-color-surface-default)`)
   * - `--shadow-size`: The size of the shadow. (default: `2rem`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `content`: The container that wraps the slotted content.
   */
  "wa-scroller": Partial<WaScrollerProps & BaseProps<WaScroller> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the select, submitted as a name/value pair with form data.
   * - `value`: The select's value. This will be a string for single select or an array for multi-select.
   * - `size`: The select's size.
   * - `placeholder`: Placeholder text to show as a hint when the select is empty.
   * - `multiple`: Allows more than one option to be selected.
   * - `max-options-visible`/`maxOptionsVisible`: The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
   * indicate the number of additional items that are selected. Set to 0 to remove the limit.
   * - `disabled`: Disables the select control.
   * - `with-clear`/`withClear`: Adds a clear button when the select is not empty.
   * - `open`: Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
   * - `appearance`: The select's visual appearance.
   * - `pill`: Draws a pill-style select with rounded edges.
   * - `label`: The select's label. If you need to display HTML, use the `label` slot instead.
   * - `placement`: The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   * - `hint`: The select's hint. If you need to display HTML, use the `hint` slot instead.
   * - `with-label`/`withLabel`: Used for SSR purposes when a label is slotted in. Will show the label on first render.
   * - `with-hint`/`withHint`: Used for SSR purposes when hint is slotted in. Will show the hint on first render.
   * - `required`: The select's required attribute.
   * - `assumeInteractionOn`: undefined (property only)
   * - `popup`: undefined (property only)
   * - `combobox`: undefined (property only)
   * - `displayInput`: undefined (property only)
   * - `valueInput`: undefined (property only)
   * - `listbox`: undefined (property only)
   * - `validationTarget`: Where to anchor native constraint validation (property only) (readonly)
   * - `displayLabel`: undefined (property only)
   * - `currentOption`: undefined (property only)
   * - `selectedOptions`: undefined (property only)
   * - `optionValues`: undefined (property only)
   * - `defaultValue`: undefined (property only)
   * - `getTag`: A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
   * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted
   * HTML of the symbol to render at the specified value. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `input`: Emitted when the control receives input.
   * - `change`: Emitted when the control's value changes.
   * - `focus`: Emitted when the control gains focus.
   * - `blur`: Emitted when the control loses focus.
   * - `wa-clear`: Emitted when the control's value is cleared.
   * - `wa-show`: Emitted when the select's menu opens.
   * - `wa-after-show`: Emitted after the select's menu opens and all animations are complete.
   * - `wa-hide`: Emitted when the select's menu closes.
   * - `wa-after-hide`: Emitted after the select's menu closes and all animations are complete.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The listbox options. Must be `<wa-option>` elements. You can use `<wa-divider>` to group items visually.
   * - `label`: The input's label. Alternatively, you can use the `label` attribute.
   * - `start`: An element, such as `<wa-icon>`, placed at the start of the combobox.
   * - `end`: An element, such as `<wa-icon>`, placed at the end of the combobox.
   * - `clear-icon`: An icon to use in lieu of the default clear icon.
   * - `expand-icon`: The icon to show when the control is expanded and collapsed. Rotates on open and close.
   * - `hint`: Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDefaultSlotChange() => void`: undefined
   * - `selectionChanged() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `handleOpenChange() => void`: undefined
   * - `show() => void`: Shows the listbox.
   * - `hide() => void`: Hides the listbox.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the control.
   * - `blur() => void`: Removes focus from the control.
   * - `formResetCallback() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--show-duration`: The duration of the show animation. (default: `100ms`)
   * - `--hide-duration`: The duration of the hide animation. (default: `100ms`)
   * - `--tag-max-size`: When using `multiple`, the max size of tags before their content is truncated. (default: `10ch`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and hint.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The select's wrapper.
   * - `hint`: The hint's wrapper.
   * - `combobox`: The container the wraps the start, end, value, clear icon, and expand button.
   * - `start`: The container that wraps the `start` slot.
   * - `end`: The container that wraps the `end` slot.
   * - `display-input`: The element that displays the selected option's label, an `<input>` element.
   * - `listbox`: The listbox container where options are slotted.
   * - `tags`: The container that houses option tags when `multiselect` is used.
   * - `tag`: The individual tags that represent each multiselect option.
   * - `tag__content`: The tag's content part.
   * - `tag__remove-button`: The tag's remove button.
   * - `tag__remove-button__base`: The tag's remove button base part.
   * - `clear-button`: The clear button.
   * - `expand-icon`: The container that wraps the expand icon.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `blank`: The select is empty.
   */
  "wa-select": Partial<WaSelectProps & BaseProps<WaSelect> & BaseEvents>;

  /**
   *
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
   * - `--color`: The color of the skeleton. (default: `undefined`)
   * - `--sheen-color`: The sheen color when the skeleton is in its loading state. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `indicator`: The skeleton's indicator which is responsible for its color and animation.
   */
  "wa-skeleton": Partial<WaSkeletonProps & BaseProps<WaSkeleton> & BaseEvents>;

  /**
   * <wa-slider>
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: The slider's label. If you need to provide HTML in the label, use the `label` slot instead.
   * - `hint`: The slider hint. If you need to display HTML, use the hint slot instead.
   * - `name`: The name of the slider. This will be submitted with the form as a name/value pair.
   * - `min-value`/`minValue`: The minimum value of a range selection. Used only when range attribute is set.
   * - `max-value`/`maxValue`: The maximum value of a range selection. Used only when range attribute is set.
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `range`: Converts the slider to a range slider with two thumbs.
   * - `disabled`: Disables the slider.
   * - `readonly`: Makes the slider a read-only field.
   * - `orientation`: The orientation of the slider.
   * - `size`: The slider's size.
   * - `indicator-offset`/`indicatorOffset`: The starting value from which to draw the slider's fill, which is based on its current value.
   * - `min`: The minimum value allowed.
   * - `max`: The maximum value allowed.
   * - `step`: The granularity the value must adhere to when incrementing and decrementing.
   * - `required`: Makes the slider a required field.
   * - `autofocus`: Tells the browser to focus the slider when the page loads or a dialog is shown.
   * - `tooltip-distance`/`tooltipDistance`: The distance of the tooltip from the slider's thumb.
   * - `tooltip-placement`/`tooltipPlacement`: The placement of the tooltip in reference to the slider's thumb.
   * - `with-markers`/`withMarkers`: Draws markers at each step along the slider.
   * - `with-tooltip`/`withTooltip`: Draws a tooltip above the thumb when the control has focus or is dragged.
   * - `validationTarget`: Override validation target to point to the focusable element (property only) (readonly)
   * - `slider`: undefined (property only)
   * - `thumb`: undefined (property only)
   * - `thumbMin`: undefined (property only)
   * - `thumbMax`: undefined (property only)
   * - `track`: undefined (property only)
   * - `tooltip`: undefined (property only)
   * - `value`: The current value of the slider, submitted as a name/value pair with form data. (property only)
   * - `isRange`: Get if this is a range slider (property only) (readonly)
   * - `valueFormatter`: A custom formatting function to apply to the value. This will be shown in the tooltip and announced by screen
   * readers. Must be set with JavaScript. Property only. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when an alteration to the control's value is committed by the user.
   * - `blur`: Emitted when the control loses focus.
   * - `focus`: Emitted when the control gains focus.
   * - `input`: Emitted when the control receives input.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The slider label. Alternatively, you can use the `label` attribute.
   * - `hint`: Text that describes how to use the input. Alternatively, you can use the `hint` attribute. instead.
   * - `reference`: One or more reference labels to show visually below the slider.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: Sets focus to the slider.
   * - `blur() => void`: Removes focus from the slider.
   * - `stepDown() => void`: Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   * - `stepUp() => void`: Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--track-size`: The height or width of the slider's track. (default: `0.75em`)
   * - `--marker-width`: The width of each individual marker. (default: `0.1875em`)
   * - `--marker-height`: The height of each individual marker. (default: `0.1875em`)
   * - `--thumb-width`: The width of the thumb. (default: `1.25em`)
   * - `--thumb-height`: The height of the thumb. (default: `1.25em`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `label`: The element that contains the sliders's label.
   * - `hint`: The element that contains the slider's description.
   * - `slider`: The focusable element with `role="slider"`. Contains the track and reference slot.
   * - `track`: The slider's track.
   * - `indicator`: The colored indicator that shows from the start of the slider to the current value.
   * - `markers`: The container that holds all the markers when `with-markers` is used.
   * - `marker`: The individual markers that are shown when `with-markers` is used.
   * - `references`: The container that holds references that get slotted in.
   * - `thumb`: The slider's thumb.
   * - `thumb-min`: The min value thumb in a range slider.
   * - `thumb-max`: The max value thumb in a range slider.
   * - `tooltip`: The tooltip, a `<wa-tooltip>` element.
   * - `tooltip__tooltip`: The tooltip's `tooltip` part.
   * - `tooltip__content`: The tooltip's `content` part.
   * - `tooltip__arrow`: The tooltip's `arrow` part.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `disabled`: Applied when the slider is disabled.
   * - `dragging`: Applied when the slider is being dragged.
   * - `focused`: Applied when the slider has focus.
   * - `user-valid`: Applied when the slider is valid and the user has sufficiently interacted with it.
   * - `user-invalid`: Applied when the slider is invalid and the user has sufficiently interacted with it.
   */
  "wa-slider": Partial<WaSliderProps & BaseProps<WaSlider> & BaseEvents>;

  /**
   *
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
  "wa-spinner": Partial<WaSpinnerProps & BaseProps<WaSpinner> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `position`: The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
   * container's initial size.
   * - `position-in-pixels`/`positionInPixels`: The current position of the divider from the primary panel's edge in pixels.
   * - `orientation`: Sets the split panel's orientation.
   * - `disabled`: Disables resizing. Note that the position may still change as a result of resizing the host element.
   * - `primary`: If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
   * primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
   * host element is resized.
   * - `snap`: One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.
   * `"100px 50%"`.
   * - `snap-threshold`/`snapThreshold`: How close the divider must be to a snap point until snapping occurs.
   * - `divider`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-reposition`: Emitted when the divider's position changes.
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
    WaSplitPanelProps & BaseProps<WaSplitPanel> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the switch, submitted as a name/value pair with form data.
   * - `value`: The value of the switch, submitted as a name/value pair with form data.
   * - `size`: The switch's size.
   * - `disabled`: Disables the switch.
   * - `checked`/`defaultChecked`: The default value of the form control. Primarily used for resetting the form control.
   * - `required`: Makes the switch a required field.
   * - `hint`: The switch's hint. If you need to display HTML, use the `hint` slot instead.
   * - `with-hint`/`withHint`: Used for SSR. If you slot in hint, make sure to add `with-hint` to your component to get it to properly render with SSR.
   * - `input`: undefined (property only)
   * - `checked`: Draws the switch in a checked state. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when the control's checked state changes.
   * - `input`: Emitted when the control receives input.
   * - `blur`: Emitted when the control loses focus.
   * - `focus`: Emitted when the control gains focus.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The switch's label.
   * - `hint`: Text that describes how to use the switch. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleValueOrCheckedChange() => void`: undefined
   * - `handleDefaultCheckedChange() => void`: undefined
   * - `handleStateChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `click() => void`: Simulates a click on the switch.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the switch.
   * - `blur() => void`: Removes focus from the switch.
   * - `setValue(value: string | File | FormData | null, stateValue?: string | File | FormData | null | undefined) => void`: undefined
   * - `formResetCallback() => void`: undefined
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
   * - `hint`: The hint's wrapper.
   */
  "wa-switch": Partial<WaSwitchProps & BaseProps<WaSwitch> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `panel`: The name of the tab panel this tab is associated with. The panel must be located in the same tab group.
   * - `disabled`: Disables the tab and prevents selection.
   * - `tab`: undefined (property only)
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
   */
  "wa-tab": Partial<WaTabProps & BaseProps<WaTab> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `active`: Sets the active tab.
   * - `placement`: The placement of the tabs.
   * - `activation`: When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
   * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
   * - `without-scroll-controls`/`withoutScrollControls`: Disables the scroll arrows that appear when tabs overflow.
   * - `tabGroup`: undefined (property only)
   * - `body`: undefined (property only)
   * - `nav`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-tab-show`: Emitted when a tab is shown.
   * - `wa-tab-hide`: Emitted when a tab is hidden.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Used for grouping tab panels in the tab group. Must be `<wa-tab-panel>` elements.
   * - `nav`: Used for grouping tabs in the tab group. Must be `<wa-tab>` elements. Note that `<wa-tab>` will set this slot on itself automatically.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `updateActiveTab() => void`: undefined
   * - `updateScrollControls() => void`: undefined
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
   * - `body`: The tab group's body where tab panels are slotted in.
   * - `scroll-button`: The previous/next scroll buttons that show when tabs are scrollable, a `<wa-button>`.
   * - `scroll-button-start`: The starting scroll button.
   * - `scroll-button-end`: The ending scroll button.
   * - `scroll-button__base`: The scroll button's exported `base` part.
   */
  "wa-tab-group": Partial<WaTabGroupProps & BaseProps<WaTabGroup> & BaseEvents>;

  /**
   *
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
  "wa-tab-panel": Partial<WaTabPanelProps & BaseProps<WaTabPanel> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The tag's theme variant. Defaults to `neutral` if not within another element with a variant.
   * - `appearance`: The tag's visual appearance.
   * - `size`: The tag's size.
   * - `pill`: Draws a pill-style tag with rounded edges.
   * - `with-remove`/`withRemove`: Makes the tag removable and shows a remove button.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-remove`: Emitted when the remove button is activated.
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
   * - `remove-button`: The tag's remove button, a `<wa-button>`.
   * - `remove-button__base`: The remove button's exported `base` part.
   */
  "wa-tag": Partial<WaTagProps & BaseProps<WaTag> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `placement`: The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
   * inside of the viewport.
   * - `disabled`: Disables the tooltip so it won't show when triggered.
   * - `distance`: The distance in pixels from which to offset the tooltip away from its target.
   * - `open`: Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.
   * - `skidding`: The distance in pixels from which to offset the tooltip along its target.
   * - `show-delay`/`showDelay`: The amount of time to wait before showing the tooltip when the user mouses in.
   * - `hide-delay`/`hideDelay`: The amount of time to wait before hiding the tooltip when the user mouses out..
   * - `trigger`: Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
   * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
   * programmatically.
   * - `without-arrow`/`withoutArrow`: Removes the arrow from the tooltip.
   * - `for`: undefined
   * - `defaultSlot`: undefined (property only)
   * - `body`: undefined (property only)
   * - `popup`: undefined (property only)
   * - `anchor`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the tooltip begins to show.
   * - `wa-after-show`: Emitted after the tooltip has shown and all animations are complete.
   * - `wa-hide`: Emitted when the tooltip begins to hide.
   * - `wa-after-hide`: Emitted after the tooltip has hidden and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The tooltip's default slot where any content should live. Interactive content should be avoided.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `handleForChange() => void`: undefined
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
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper, an `<wa-popup>` element.
   * - `base__popup`: The popup's exported `popup` part. Use this to target the tooltip's popup container.
   * - `base__arrow`: The popup's exported `arrow` part. Use this to target the tooltip's arrow.
   * - `body`: The tooltip's body where its content is rendered.
   */
  "wa-tooltip": Partial<WaTooltipProps & BaseProps<WaTooltip> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the textarea, submitted as a name/value pair with form data.
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `size`: The textarea's size.
   * - `appearance`: The textarea's visual appearance.
   * - `label`: The textarea's label. If you need to display HTML, use the `label` slot instead.
   * - `hint`: The textarea's hint. If you need to display HTML, use the `hint` slot instead.
   * - `placeholder`: Placeholder text to show as a hint when the input is empty.
   * - `rows`: The number of rows to display by default.
   * - `resize`: Controls how the textarea can be resized.
   * - `disabled`: Disables the textarea.
   * - `readonly`: Makes the textarea readonly.
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
   * - `with-label`/`withLabel`: Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`.
   * - `with-hint`/`withHint`: Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`.
   * - `assumeInteractionOn`: undefined (property only)
   * - `input`: undefined (property only)
   * - `base`: undefined (property only)
   * - `sizeAdjuster`: undefined (property only)
   * - `value`: The current value of the input, submitted as a name/value pair with form data. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `blur`: Emitted when the control loses focus.
   * - `change`: Emitted when an alteration to the control's value is committed by the user.
   * - `focus`: Emitted when the control gains focus.
   * - `input`: Emitted when the control receives input.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The textarea's label. Alternatively, you can use the `label` attribute.
   * - `hint`: Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleRowsChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the textarea.
   * - `blur() => void`: Removes focus from the textarea.
   * - `select() => void`: Selects all the text in the textarea.
   * - `scrollPosition(position?: { top?: number; left?: number }) => { top: number; left: number } | undefined`: Gets or sets the textarea's scroll position.
   * - `setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the text selection (0-based).
   * - `setRangeText(replacement: string, start?: number, end?: number, selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve') => void`: Replaces a range of text with a new string.
   * - `formResetCallback() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `label`: The label
   * - `form-control-input`: The input's wrapper.
   * - `hint`: The hint's wrapper.
   * - `textarea`: The internal `<textarea>` control.
   * - `base`: The wrapper around the `<textarea>` control.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `blank`: The textarea is empty.
   */
  "wa-textarea": Partial<WaTextareaProps & BaseProps<WaTextarea> & BaseEvents>;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-selection-change`: Emitted when a tree item is selected or deselected.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The default slot.
   * - `expand-icon`: The icon to show when the tree item is expanded. Works best with `<wa-icon>`.
   * - `collapse-icon`: The icon to show when the tree item is collapsed. Works best with `<wa-icon>`.
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
   * - `--indent-size`: The size of the indentation for nested items. (default: `var(--wa-space-m)`)
   * - `--indent-guide-color`: The color of the indentation line. (default: `var(--wa-color-surface-border)`)
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
  "wa-tree": Partial<WaTreeProps & BaseProps<WaTree> & BaseEvents>;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-expand`: Emitted when the tree item expands.
   * - `wa-after-expand`: Emitted after the tree item expands and all animations are complete.
   * - `wa-collapse`: Emitted when the tree item collapses.
   * - `wa-after-collapse`: Emitted after the tree item collapses and all animations are complete.
   * - `wa-lazy-change`: Emitted when the tree item's lazy state changes.
   * - `wa-lazy-load`: Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree.
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
   * - `handleExpandedState() => void`: undefined
   * - `handleIndeterminateStateChange() => void`: undefined
   * - `handleSelectedChange() => void`: undefined
   * - `handleExpandedChange() => void`: undefined
   * - `handleExpandAnimation() => void`: undefined
   * - `handleLazyChange() => void`: undefined
   * - `getChildrenItems({ includeDisabled = true }: { includeDisabled?: boolean } = {}) => WaTreeItem[]`: Gets all the nested tree items in this node.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--show-duration`: The animation duration when expanding tree items. (default: `200ms`)
   * - `--hide-duration`: The animation duration when collapsing tree items. (default: `200ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `item`: The tree item's container. This element wraps everything except slotted tree item children.
   * - `indentation`: The tree item's indentation container.
   * - `expand-button`: The container that wraps the tree item's expand button and spinner.
   * - `spinner`: The spinner that shows when a lazy tree item is in the loading state.
   * - `spinner__base`: The spinner's base part.
   * - `label`: The tree item's label.
   * - `children`: The container that wraps the tree item's nested children.
   * - `checkbox`: The checkbox that shows when using multiselect.
   * - `checkbox__base`: The checkbox's exported `base` part.
   * - `checkbox__control`: The checkbox's exported `control` part.
   * - `checkbox__checked-icon`: The checkbox's exported `checked-icon` part.
   * - `checkbox__indeterminate-icon`: The checkbox's exported `indeterminate-icon` part.
   * - `checkbox__label`: The checkbox's exported `label` part.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `disabled`: Applied when the tree item is disabled.
   * - `expanded`: Applied when the tree item is expanded.
   * - `indeterminate`: Applied when the selection is indeterminate.
   * - `selected`: Applied when the tree item is selected.
   */
  "wa-tree-item": Partial<WaTreeItemProps & BaseProps<WaTreeItem> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `src`: The URL of the content to display.
   * - `srcdoc`: Inline HTML to display.
   * - `allowfullscreen`: Allows fullscreen mode.
   * - `loading`: Controls iframe loading behavior.
   * - `referrerpolicy`: Controls referrer information.
   * - `sandbox`: Security restrictions for the iframe.
   * - `zoom`: The current zoom of the frame, e.g. 0 = 0% and 1 = 100%.
   * - `zoom-levels`/`zoomLevels`: The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom.
   * - `without-controls`/`withoutControls`: Removes the zoom controls.
   * - `without-interaction`/`withoutInteraction`: Disables interaction when present.
   * - `iframe`: undefined (property only)
   * - `contentWindow`: Returns the internal iframe's `window` object. (Readonly property) (property only) (readonly)
   * - `contentDocument`: Returns the internal iframe's `document` object. (Readonly property) (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `load`: Emitted when the internal iframe when it finishes loading.
   * - `error`: Emitted from the internal iframe when it fails to load.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `zoom-in-icon`: The slot that contains the zoom in icon.
   * - `zoom-out-icon`: The slot that contains the zoom out icon.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `zoomIn() => void`: Zooms in to the next available zoom level.
   * - `zoomOut() => void`: Zooms out to the previous available zoom level.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `iframe`: The internal `<iframe>` element.
   * - `controls`: The container that surrounds zoom control buttons.
   * - `zoom-in-button`: The zoom in button.
   * - `zoom-out-button`: The zoom out button.
   */
  "wa-zoomable-frame": Partial<
    WaZoomableFrameProps & BaseProps<WaZoomableFrame> & BaseEvents
  >;
};

export type CustomElementsSolidJs = {
  /**
   *
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
   * - `undefined`: undefined
   * - `wa-load`: Emitted when the image loads successfully.
   * - `wa-error`: Emitted when the image fails to load.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `play-icon`: Optional play icon to use instead of the default. Works best with `<wa-icon>`.
   * - `pause-icon`: Optional pause icon to use instead of the default. Works best with `<wa-icon>`.
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
    WaAnimatedImageProps &
      WaAnimatedImageSolidJsProps &
      BaseProps<WaAnimatedImage> &
      BaseEvents
  >;

  /**
   *
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
   * - `easing`: The easing function to use for the animation. This can be a Web Awesome easing function or a custom easing function
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
   * - `undefined`: undefined
   * - `wa-cancel`: Emitted when the animation is canceled.
   * - `wa-finish`: Emitted when the animation finishes.
   * - `wa-start`: Emitted when the animation starts or restarts.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To animate multiple elements, either wrap them in a single container or use multiple `<wa-animation>` elements.
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
    WaAnimationProps &
      WaAnimationSolidJsProps &
      BaseProps<WaAnimation> &
      BaseEvents
  >;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-error`: The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `icon`: The default icon to use when no image or initials are present. Works best with `<wa-icon>`.
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
   * - `icon`: The container that wraps the avatar's icon.
   * - `initials`: The container that wraps the avatar's initials.
   * - `image`: The avatar image. Only shown when the `image` attribute is set.
   */
  "wa-avatar": Partial<
    WaAvatarProps & WaAvatarSolidJsProps & BaseProps<WaAvatar> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The badge's theme variant. Defaults to `brand` if not within another element with a variant.
   * - `appearance`: The badge's visual appearance.
   * - `pill`: Draws a pill-style badge with rounded edges.
   * - `attention`: Adds an animation to draw attention to the badge.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The badge's content.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--pulse-color`: The color of the badge's pulse effect when using `attention="pulse"`. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-badge": Partial<
    WaBadgeProps & WaBadgeSolidJsProps & BaseProps<WaBadge> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `variant`: The button's theme variant. Defaults to `neutral` if not within another element with a variant.
   * - `appearance`: The button's visual appearance.
   * - `size`: The button's size.
   * - `with-caret`/`withCaret`: Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.
   * - `disabled`: Disables the button. Does not apply to link buttons.
   * - `loading`: Draws the button in a loading state.
   * - `pill`: Draws a pill-style button with rounded edges.
   * - `type`: The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
   * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
   * - `name`: The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
   * This attribute is ignored when `href` is present.
   * - `value`: The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
   * button is the submitter. This attribute is ignored when `href` is present.
   * - `href`: When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   * - `target`: Tells the browser where to open the link. Only used when `href` is present.
   * - `rel`: When using `href`, this attribute will map to the underlying link's `rel` attribute.
   * - `download`: Tells the browser to download the linked file as this filename. Only used when `href` is present.
   * - `formaction`/`formAction`: Used to override the form owner's `action` attribute.
   * - `formenctype`/`formEnctype`: Used to override the form owner's `enctype` attribute.
   * - `formmethod`/`formMethod`: Used to override the form owner's `method` attribute.
   * - `formnovalidate`/`formNoValidate`: Used to override the form owner's `novalidate` attribute.
   * - `formtarget`/`formTarget`: Used to override the form owner's `target` attribute.
   * - `assumeInteractionOn`: undefined (property only)
   * - `button`: undefined (property only)
   * - `labelSlot`: undefined (property only)
   * - `invalid`: undefined (property only)
   * - `isIconButton`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `blur`: Emitted when the button loses focus.
   * - `focus`: Emitted when the button gains focus.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The button's label.
   * - `start`: An element, such as `<wa-icon>`, placed before the label.
   * - `end`: An element, such as `<wa-icon>`, placed after the label.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `setValue(_args: Parameters<WebAwesomeFormAssociatedElement['setValue']>) => void`: undefined
   * - `click() => void`: Simulates a click on the button.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the button.
   * - `blur() => void`: Removes focus from the button.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `start`: The container that wraps the `start` slot.
   * - `label`: The button's label.
   * - `end`: The container that wraps the `end` slot.
   * - `caret`: The button's caret icon, a `<wa-icon>` element.
   * - `spinner`: The spinner that shows when the button is in the loading state.
   */
  "wa-button": Partial<
    WaButtonProps & WaButtonSolidJsProps & BaseProps<WaButton> & BaseEvents
  >;

  /**
   *
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
   * - `start`: An element, such as `<wa-icon>`, placed before the label.
   * - `end`: An element, such as `<wa-icon>`, placed after the label.
   * - `separator`: The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on `<wa-breadcrumb>` instead.
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
   * - `label`: The breadcrumb item's label.
   * - `start`: The container that wraps the `start` slot.
   * - `end`: The container that wraps the `end` slot.
   * - `separator`: The container that wraps the separator.
   */
  "wa-breadcrumb-item": Partial<
    WaBreadcrumbItemProps &
      WaBreadcrumbItemSolidJsProps &
      BaseProps<WaBreadcrumbItem> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
   * devices when interacting with the control and is strongly recommended.
   * - `orientation`: The button group's orientation.
   * - `defaultSlot`: undefined (property only)
   * - `disableRole`: undefined (property only)
   * - `hasOutlined`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: One or more `<wa-button>` elements to display in the button group.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-button-group": Partial<
    WaButtonGroupProps &
      WaButtonGroupSolidJsProps &
      BaseProps<WaButtonGroup> &
      BaseEvents
  >;

  /**
   *
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
   * - `separator`: The separator to use between breadcrumb items. Works best with `<wa-icon>`.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-breadcrumb": Partial<
    WaBreadcrumbProps &
      WaBreadcrumbSolidJsProps &
      BaseProps<WaBreadcrumb> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The callout's theme variant. Defaults to `brand` if not within another element with a variant.
   * - `appearance`: The callout's visual appearance.
   * - `size`: The callout's size.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The callout's main content.
   * - `icon`: An icon to show in the callout. Works best with `<wa-icon>`.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `icon`: The container that wraps the optional icon.
   * - `message`: The container that wraps the callout's main content.
   */
  "wa-callout": Partial<
    WaCalloutProps & WaCalloutSolidJsProps & BaseProps<WaCallout> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `appearance`: The card's visual appearance.
   * - `with-header`/`withHeader`: Renders the card with a header. Only needed for SSR, otherwise is automatically added.
   * - `with-media`/`withMedia`: Renders the card with an image. Only needed for SSR, otherwise is automatically added.
   * - `with-footer`/`withFooter`: Renders the card with a footer. Only needed for SSR, otherwise is automatically added.
   * - `orientation`: Renders the card's orientation *
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The card's main content.
   * - `header`: An optional header for the card.
   * - `footer`: An optional footer for the card.
   * - `media`: An optional media section to render at the start of the card.
   * - `actions`: An optional actions section to render at the end for the horizontal card.
   * - `header-actions`: An optional actions section to render in the header of the vertical card.
   * - `footer-actions`: An optional actions section to render in the footer of the vertical card.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--spacing`: The amount of space around and between sections of the card. Expects a single value. (default: `var(--wa-space-l)`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `media`: The container that wraps the card's media.
   * - `header`: The container that wraps the card's header.
   * - `body`: The container that wraps the card's main content.
   * - `footer`: The container that wraps the card's footer.
   */
  "wa-card": Partial<
    WaCardProps & WaCardSolidJsProps & BaseProps<WaCard> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `loop`: When set, allows the user to navigate the carousel in the same direction indefinitely.
   * - `slides`: undefined
   * - `currentSlide`: undefined
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
   * - `undefined`: undefined
   * - `wa-slide-change`: Emitted when the active slide changes.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The carousel's main content, one or more `<wa-carousel-item>` elements.
   * - `next-icon`: Optional next icon to use instead of the default. Works best with `<wa-icon>`.
   * - `previous-icon`: Optional previous icon to use instead of the default. Works best with `<wa-icon>`.
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
   * - `--aspect-ratio`: The aspect ratio of each slide. (default: `16/9`)
   * - `--scroll-hint`: The amount of padding to apply to the scroll area, allowing adjacent slides to become partially visible as a scroll hint. (default: `undefined`)
   * - `--slide-gap`: The space between each slide. (default: `var(--wa-space-m)`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The carousel's internal wrapper.
   * - `scroll-container`: The scroll container that wraps the slides.
   * - `pagination`: The pagination indicators wrapper.
   * - `pagination-item`: The pagination indicator.
   * - `pagination-item-active`: Applied when the item is active.
   * - `navigation`: The navigation wrapper.
   * - `navigation-button`: The navigation button.
   * - `navigation-button-previous`: Applied to the previous button.
   * - `navigation-button-next`: Applied to the next button.
   */
  "wa-carousel": Partial<
    WaCarouselProps &
      WaCarouselSolidJsProps &
      BaseProps<WaCarousel> &
      BaseEvents
  >;

  /**
   *
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
    WaCarouselItemProps &
      WaCarouselItemSolidJsProps &
      BaseProps<WaCarouselItem> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the checkbox, submitted as a name/value pair with form data.
   * - `value`: The value of the checkbox, submitted as a name/value pair with form data.
   * - `size`: The checkbox's size.
   * - `disabled`: Disables the checkbox.
   * - `indeterminate`: Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   * - `checked`/`defaultChecked`: The default value of the form control. Primarily used for resetting the form control.
   * - `required`: Makes the checkbox a required field.
   * - `hint`: The checkbox's hint. If you need to display HTML, use the `hint` slot instead.
   * - `input`: undefined (property only)
   * - `checked`: Draws the checkbox in a checked state. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when the checked state changes.
   * - `blur`: Emitted when the checkbox loses focus.
   * - `focus`: Emitted when the checkbox gains focus.
   * - `input`: Emitted when the checkbox receives input.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The checkbox's label.
   * - `hint`: Text that describes how to use the checkbox. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDefaultCheckedChange() => void`: undefined
   * - `handleValueOrCheckedChange() => void`: undefined
   * - `handleStateChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `formResetCallback() => void`: undefined
   * - `click() => void`: Simulates a click on the checkbox.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the checkbox.
   * - `blur() => void`: Removes focus from the checkbox.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--checked-icon-color`: The color of the checked and indeterminate icons. (default: `undefined`)
   * - `--checked-icon-scale`: The size of the checked and indeterminate icons relative to the checkbox. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's label .
   * - `control`: The square container that wraps the checkbox's checked state.
   * - `checked-icon`: The checked icon, a `<wa-icon>` element.
   * - `indeterminate-icon`: The indeterminate icon, a `<wa-icon>` element.
   * - `label`: The container that wraps the checkbox's label.
   * - `hint`: The hint's wrapper.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `checked`: Applied when the checkbox is checked.
   * - `disabled`: Applied when the checkbox is disabled.
   * - `indeterminate`: Applied when the checkbox is in an indeterminate state.
   */
  "wa-checkbox": Partial<
    WaCheckboxProps &
      WaCheckboxSolidJsProps &
      BaseProps<WaCheckbox> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `with-label`/`withLabel`: undefined
   * - `with-hint`/`withHint`: undefined
   * - `label`: The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
   * display HTML, you can use the `label` slot` instead.
   * - `hint`: The color picker's hint. If you need to display HTML, use the `hint` slot instead.
   * - `format`: The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
   * picker will accept user input in any format (including CSS color names) and convert it to the desired format.
   * - `size`: Determines the size of the color picker's trigger
   * - `without-format-toggle`/`withoutFormatToggle`: Removes the button that lets users toggle between format.
   * - `name`: The name of the form control, submitted as a name/value pair with form data.
   * - `disabled`: Disables the color picker.
   * - `open`: Indicates whether or not the popup is open. You can toggle this attribute to show and hide the popup, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the popup's open state.
   * - `opacity`: Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA.
   * - `uppercase`: By default, values are lowercase. With this attribute, values will be uppercase instead.
   * - `swatches`: One or more predefined color swatches to display as presets in the color picker. Can include any format the color
   * picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
   * semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.
   * - `required`: Makes the color picker a required field.
   * - `base`: undefined (property only)
   * - `input`: undefined (property only)
   * - `triggerLabel`: undefined (property only)
   * - `triggerButton`: undefined (property only)
   * - `validationTarget`: undefined (property only) (readonly)
   * - `popup`: undefined (property only)
   * - `previewButton`: undefined (property only)
   * - `trigger`: undefined (property only)
   * - `value`: The current value of the color picker. The value's format will vary based the `format` attribute. To get the value
   * in a specific format, use the `getFormattedValue()` method. The value is submitted as a name/value pair with form
   * data. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when the color picker's value changes.
   * - `input`: Emitted when the color picker receives input.
   * - `undefined`: undefined
   * - `wa-show`: undefined
   * - `wa-after-show`: undefined
   * - `wa-hide`: undefined
   * - `wa-after-hide`: undefined
   * - `blur`: Emitted when the color picker loses focus.
   * - `focus`: Emitted when the color picker receives focus.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The color picker's form label. Alternatively, you can use the `label` attribute.
   * - `hint`: The color picker's form hint. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `getHexString(hue: number, saturation: number, brightness: number, alpha = 100) => void`: Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100.
   * - `handleFormatChange() => void`: undefined
   * - `handleOpacityChange() => void`: undefined
   * - `handleValueChange(oldValue: string | undefined, newValue: string) => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the color picker.
   * - `blur() => void`: Removes focus from the color picker.
   * - `getFormattedValue(format: 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv' | 'hsva' = 'hex') => void`: Returns the current value as a string in the specified format.
   * - `reportValidity() => void`: Checks for validity and shows the browser's validation message if the control is invalid.
   * - `formResetCallback() => void`: undefined
   * - `handleTriggerClick() => void`: undefined
   * - `handleTriggerKeyDown(event: KeyboardEvent) => void`: undefined
   * - `handleTriggerKeyUp(event: KeyboardEvent) => void`: undefined
   * - `updateAccessibleTrigger() => void`: undefined
   * - `show() => void`: Shows the color picker panel.
   * - `hide() => void`: Hides the color picker panel
   * - `addOpenListeners() => void`: undefined
   * - `removeOpenListeners() => void`: undefined
   * - `handleOpenChange() => void`: undefined
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
   * - `eyedropper-button`: The eye dropper button.
   * - `eyedropper-button__base`: The eye dropper button's exported `button` part.
   * - `eyedropper-button__start`: The eye dropper button's exported `start` part.
   * - `eyedropper-button__label`: The eye dropper button's exported `label` part.
   * - `eyedropper-button__end`: The eye dropper button's exported `end` part.
   * - `eyedropper-button__caret`: The eye dropper button's exported `caret` part.
   * - `format-button`: The format button.
   * - `format-button__base`: The format button's exported `button` part.
   * - `format-button__start`: The format button's exported `start` part.
   * - `format-button__label`: The format button's exported `label` part.
   * - `format-button__end`: The format button's exported `end` part.
   * - `format-button__caret`: The format button's exported `caret` part.
   */
  "wa-color-picker": Partial<
    WaColorPickerProps &
      WaColorPickerSolidJsProps &
      BaseProps<WaColorPicker> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `position`: The position of the divider as a percentage.
   * - `handle`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when the position changes.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `before`: The before content, often an `<img>` or `<svg>` element.
   * - `after`: The after content, often an `<img>` or `<svg>` element.
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
   * - `base`: The container that wraps the before and after content.
   * - `before`: The container that wraps the before content.
   * - `after`: The container that wraps the after content.
   * - `divider`: The divider that separates the before and after content.
   * - `handle`: The handle that the user drags to expose the after content.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `dragging`: Applied when the comparison is being dragged.
   */
  "wa-comparison": Partial<
    WaComparisonProps &
      WaComparisonSolidJsProps &
      BaseProps<WaComparison> &
      BaseEvents
  >;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-copy`: Emitted when the data has been copied.
   * - `wa-error`: Emitted when the data could not be copied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `copy-icon`: The icon to show in the default copy state. Works best with `<wa-icon>`.
   * - `success-icon`: The icon to show when the content is copied. Works best with `<wa-icon>`.
   * - `error-icon`: The icon to show when a copy error occurs. Works best with `<wa-icon>`.
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
    WaCopyButtonProps &
      WaCopyButtonSolidJsProps &
      BaseProps<WaCopyButton> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
   * - `summary`: The summary to show in the header. If you need to display HTML, use the `summary` slot instead.
   * - `name`: Groups related details elements. When one opens, others with the same name will close.
   * - `disabled`: Disables the details so it can't be toggled.
   * - `appearance`: The element's visual appearance.
   * - `icon-placement`/`iconPlacement`: The location of the expand/collapse icon.
   * - `details`: undefined (property only)
   * - `header`: undefined (property only)
   * - `body`: undefined (property only)
   * - `expandIconSlot`: undefined (property only)
   * - `isAnimating`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the details opens.
   * - `wa-after-show`: Emitted after the details opens and all animations are complete.
   * - `wa-hide`: Emitted when the details closes.
   * - `wa-after-hide`: Emitted after the details closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The details' main content.
   * - `summary`: The details' summary. Alternatively, you can use the `summary` attribute.
   * - `expand-icon`: Optional expand icon to use instead of the default. Works best with `<wa-icon>`.
   * - `collapse-icon`: Optional collapse icon to use instead of the default. Works best with `<wa-icon>`.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `show() => void`: Shows the details.
   * - `hide() => void`: Hides the details
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--spacing`: The amount of space around and between the details' content. Expects a single value. (default: `undefined`)
   * - `--show-duration`: The show duration to use when applying built-in animation classes. (default: `200ms`)
   * - `--hide-duration`: The hide duration to use when applying built-in animation classes. (default: `200ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The inner `<details>` element used to render the component. Styles you apply to the component are automatically applied to this part, so you usually don't need to deal with it unless you need to set the `display` property.
   * - `header`: The header that wraps both the summary and the expand/collapse icon.
   * - `summary`: The container that wraps the summary.
   * - `icon`: The container that wraps the expand/collapse icons.
   * - `content`: The details content.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `animating`: Applied when the details is animating expand/collapse.
   */
  "wa-details": Partial<
    WaDetailsProps & WaDetailsSolidJsProps & BaseProps<WaDetails> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the dialog is open. Toggle this attribute to show and hide the dialog.
   * - `label`: The dialog's label as displayed in the header. You should always include a relevant label, as it is required for
   * proper accessibility. If you need to display HTML, use the `label` slot instead.
   * - `without-header`/`withoutHeader`: Disables the header. This will also remove the default close button.
   * - `light-dismiss`/`lightDismiss`: When enabled, the dialog will be closed when the user clicks outside of it.
   * - `dialog`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the dialog opens.
   * - `wa-after-show`: Emitted after the dialog opens and all animations are complete.
   * - `wa-hide`: Emitted when the dialog is requested to close. Calling `event.preventDefault()` will prevent the dialog from closing. You can inspect `event.detail.source` to see which element caused the dialog to close. If the source is the dialog element itself, the user has pressed [[Escape]] or the dialog has been closed programmatically. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
   * - `wa-after-hide`: Emitted after the dialog closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The dialog's main content.
   * - `label`: The dialog's label. Alternatively, you can use the `label` attribute.
   * - `header-actions`: Optional actions to add to the header. Works best with `<wa-button>`.
   * - `footer`: The dialog's footer, usually one or more buttons representing various options.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--spacing`: The amount of space around and between the dialog's content. (default: `undefined`)
   * - `--width`: The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. (default: `undefined`)
   * - `--show-duration`: The animation duration when showing the dialog. (default: `200ms`)
   * - `--hide-duration`: The animation duration when hiding the dialog. (default: `200ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `dialog`: The dialog's internal `<dialog>` element.
   * - `header`: The dialog's header. This element wraps the title and header actions.
   * - `header-actions`: Optional actions to add to the header. Works best with `<wa-button>`.
   * - `title`: The dialog's title.
   * - `close-button`: The close button, a `<wa-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   * - `body`: The dialog's body.
   * - `footer`: The dialog's footer.
   */
  "wa-dialog": Partial<
    WaDialogProps & WaDialogSolidJsProps & BaseProps<WaDialog> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `orientation`: Sets the divider's orientation.
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
    WaDividerProps & WaDividerSolidJsProps & BaseProps<WaDivider> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer.
   * - `label`: The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
   * proper accessibility. If you need to display HTML, use the `label` slot instead.
   * - `placement`: The direction from which the drawer will open.
   * - `without-header`/`withoutHeader`: Disables the header. This will also remove the default close button.
   * - `light-dismiss`/`lightDismiss`: When enabled, the drawer will be closed when the user clicks outside of it.
   * - `drawer`: undefined (property only)
   * - `modal`: Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the drawer opens.
   * - `wa-after-show`: Emitted after the drawer opens and all animations are complete.
   * - `wa-hide`: Emitted when the drawer is requesting to close. Calling `event.preventDefault()` will prevent the drawer from closing. You can inspect `event.detail.source` to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed [[Escape]] or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.
   * - `wa-after-hide`: Emitted after the drawer closes and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The drawer's main content.
   * - `label`: The drawer's label. Alternatively, you can use the `label` attribute.
   * - `header-actions`: Optional actions to add to the header. Works best with `<wa-button>`.
   * - `footer`: The drawer's footer, usually one or more buttons representing various options.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--spacing`: The amount of space around and between the drawer's content. (default: `undefined`)
   * - `--size`: The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens. (default: `undefined`)
   * - `--show-duration`: The animation duration when showing the drawer. (default: `200ms`)
   * - `--hide-duration`: The animation duration when hiding the drawer. (default: `200ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `dialog`: The drawer's internal `<dialog>` element.
   * - `header`: The drawer's header. This element wraps the title and header actions.
   * - `header-actions`: Optional actions to add to the header. Works best with `<wa-button>`.
   * - `title`: The drawer's title.
   * - `close-button`: The close button, a `<wa-button>`.
   * - `close-button__base`: The close button's exported `base` part.
   * - `body`: The drawer's body.
   * - `footer`: The drawer's footer.
   */
  "wa-drawer": Partial<
    WaDrawerProps & WaDrawerSolidJsProps & BaseProps<WaDrawer> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`: Opens or closes the dropdown.
   * - `size`: The dropdown's size.
   * - `placement`: The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
   * the preferred placement doesn't have enough room.
   * - `distance`: The distance of the dropdown menu from its trigger.
   * - `skidding`: The offset of the dropdown menu along its trigger.
   * - `defaultSlot`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the dropdown is about to show.
   * - `wa-after-show`: Emitted after the dropdown has been shown.
   * - `wa-hide`: Emitted when the dropdown is about to hide.
   * - `wa-after-hide`: Emitted after the dropdown has been hidden.
   * - `wa-select`: Emitted when an item in the dropdown is selected.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The dropdown's items, typically `<wa-dropdown-item>` elements.
   * - `trigger`: The element that triggers the dropdown, such as a `<wa-button>` or `<button>`.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--show-duration`: The duration of the show animation. (default: `undefined`)
   * - `--hide-duration`: The duration of the hide animation. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's host element.
   * - `menu`: The dropdown menu container.
   */
  "wa-dropdown": Partial<
    WaDropdownProps &
      WaDropdownSolidJsProps &
      BaseProps<WaDropdown> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The type of menu item to render.
   * - `value`: An optional value for the menu item. This is useful for determining which item was selected when listening to the
   * dropdown's `wa-select` event.
   * - `type`: Set to `checkbox` to make the item a checkbox.
   * - `checked`: Set to true to check the dropdown item. Only valid when `type` is `checkbox`.
   * - `disabled`: Disables the dropdown item.
   * - `submenuOpen`: Whether the submenu is currently open.
   * - `submenuElement`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `blur`: Emitted when the dropdown item loses focus.
   * - `focus`: Emitted when the dropdown item gains focus.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The dropdown item's label.
   * - `icon`: An optional icon to display before the label.
   * - `details`: Additional content or details to display after the label.
   * - `submenu`: Submenu items, typically `<wa-dropdown-item>` elements, to create a nested menu.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `openSubmenu() => void`: Opens the submenu.
   * - `closeSubmenu() => void`: Closes the submenu.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `checkmark`: The checkmark icon (a `<wa-icon>` element) when the item is a checkbox.
   * - `icon`: The container for the icon slot.
   * - `label`: The container for the label slot.
   * - `details`: The container for the details slot.
   * - `submenu-icon`: The submenu indicator icon (a `<wa-icon>` element).
   * - `submenu`: The submenu container.
   */
  "wa-dropdown-item": Partial<
    WaDropdownItemProps &
      WaDropdownItemSolidJsProps &
      BaseProps<WaDropdownItem> &
      BaseEvents
  >;

  /**
   *
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
    WaFormatBytesProps &
      WaFormatBytesSolidJsProps &
      BaseProps<WaFormatBytes> &
      BaseEvents
  >;

  /**
   *
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
    WaFormatDateProps &
      WaFormatDateSolidJsProps &
      BaseProps<WaFormatDate> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The number to format.
   * - `type`: The formatting style to use.
   * - `without-grouping`/`withoutGrouping`: Turns off grouping separators.
   * - `currency`: The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting.
   * - `currency-display`/`currencyDisplay`: How to display the currency.
   * - `minimum-integer-digits`/`minimumIntegerDigits`: The minimum number of integer digits to use. Possible values are 1-21.
   * - `minimum-fraction-digits`/`minimumFractionDigits`: The minimum number of fraction digits to use. Possible values are 0-100.
   * - `maximum-fraction-digits`/`maximumFractionDigits`: The maximum number of fraction digits to use. Possible values are 0-100.
   * - `minimum-significant-digits`/`minimumSignificantDigits`: The minimum number of significant digits to use. Possible values are 1-21.
   * - `maximum-significant-digits`/`maximumSignificantDigits`: The maximum number of significant digits to use,. Possible values are 1-21.
   */
  "wa-format-number": Partial<
    WaFormatNumberProps &
      WaFormatNumberSolidJsProps &
      BaseProps<WaFormatNumber> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the icon to draw. Available names depend on the icon library being used.
   * - `family`: The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For
   * Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`.
   * A valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code="...">` to provide
   * one.
   * - `variant`: The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for
   * the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon libraries
   * may or may not use this property.
   * - `auto-width`/`autoWidth`: Sets the width of the icon to match the cropped SVG viewBox. This operates like the Font `fa-width-auto` class.
   * - `swap-opacity`/`swapOpacity`: Swaps the opacity of duotone icons.
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
   * - `undefined`: undefined
   * - `wa-load`: Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
   * - `wa-error`: Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleLabelChange() => void`: undefined
   * - `setIcon() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--primary-color`: Sets a duotone icon's primary color. (default: `currentColor`)
   * - `--primary-opacity`: Sets a duotone icon's primary opacity. (default: `1`)
   * - `--secondary-color`: Sets a duotone icon's secondary color. (default: `currentColor`)
   * - `--secondary-opacity`: Sets a duotone icon's secondary opacity. (default: `0.4`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `svg`: The internal SVG element.
   * - `use`: The `<use>` element generated when using `spriteSheet: true`
   */
  "wa-icon": Partial<
    WaIconProps & WaIconSolidJsProps & BaseProps<WaIcon> & BaseEvents
  >;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-load`: Emitted when the included file is loaded.
   * - `wa-include-error`: Emitted when the included file fails to load due to an error.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleSrcChange() => void`: undefined
   */
  "wa-include": Partial<
    WaIncludeProps & WaIncludeSolidJsProps & BaseProps<WaInclude> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `type`: The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `size`: The input's size.
   * - `appearance`: The input's visual appearance.
   * - `pill`: Draws a pill-style input with rounded edges.
   * - `label`: The input's label. If you need to display HTML, use the `label` slot instead.
   * - `hint`: The input's hint. If you need to display HTML, use the `hint` slot instead.
   * - `with-clear`/`withClear`: Adds a clear button when the input is not empty.
   * - `placeholder`: Placeholder text to show as a hint when the input is empty.
   * - `readonly`: Makes the input readonly.
   * - `password-toggle`/`passwordToggle`: Adds a button to toggle the password's visibility. Only applies to password types.
   * - `password-visible`/`passwordVisible`: Determines whether or not the password is currently visible. Only applies to password input types.
   * - `without-spin-buttons`/`withoutSpinButtons`: Hides the browser's built-in increment/decrement spin buttons for number inputs.
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
   * - `with-label`/`withLabel`: Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint.
   * - `with-hint`/`withHint`: Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint.
   * - `assumeInteractionOn`: undefined (property only)
   * - `input`: undefined (property only)
   * - `value`: The current value of the input, submitted as a name/value pair with form data. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `input`: Emitted when the control receives input.
   * - `change`: Emitted when an alteration to the control's value is committed by the user.
   * - `blur`: Emitted when the control loses focus.
   * - `focus`: Emitted when the control gains focus.
   * - `wa-clear`: Emitted when the clear button is activated.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The input's label. Alternatively, you can use the `label` attribute.
   * - `start`: An element, such as `<wa-icon>`, placed at the start of the input control.
   * - `end`: An element, such as `<wa-icon>`, placed at the end of the input control.
   * - `clear-icon`: An icon to use in lieu of the default clear icon.
   * - `show-password-icon`: An icon to use in lieu of the default show password icon.
   * - `hide-password-icon`: An icon to use in lieu of the default hide password icon.
   * - `hint`: Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleStepChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the input.
   * - `blur() => void`: Removes focus from the input.
   * - `select() => void`: Selects all the text in the input.
   * - `setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the text selection (0-based).
   * - `setRangeText(replacement: string, start?: number, end?: number, selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve') => void`: Replaces a range of text with a new string.
   * - `showPicker() => void`: Displays the browser picker for an input element (only works if the browser supports it for the input type).
   * - `stepUp() => void`: Increments the value of a numeric input type by the value of the step attribute.
   * - `stepDown() => void`: Decrements the value of a numeric input type by the value of the step attribute.
   * - `formResetCallback() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `label`: The label
   * - `hint`: The hint's wrapper.
   * - `base`: The wrapper being rendered as an input
   * - `input`: The internal `<input>` control.
   * - `start`: The container that wraps the `start` slot.
   * - `clear-button`: The clear button.
   * - `password-toggle-button`: The password toggle button.
   * - `end`: The container that wraps the `end` slot.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `blank`: The input is empty.
   */
  "wa-input": Partial<
    WaInputProps & WaInputSolidJsProps & BaseProps<WaInput> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `root`: Element ID to define the viewport boundaries for tracked targets.
   * - `root-margin`/`rootMargin`: Offset space around the root boundary. Accepts values like CSS margin syntax.
   * - `threshold`: One or more space-separated values representing visibility percentages that trigger the observer callback.
   * - `intersect-class`/`intersectClass`: CSS class applied to elements during intersection. Automatically removed when elements leave
   * the viewport, enabling pure CSS styling based on visibility state.
   * - `once`: If enabled, observation ceases after initial intersection.
   * - `disabled`: Deactivates the intersection observer functionality.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `wa-intersect`: Fired when a tracked element begins or ceases intersecting.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Elements to track. Only immediate children of the host are monitored.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDisabledChange() => void`: undefined
   * - `handleOptionsChange() => void`: undefined
   */
  "wa-intersection-observer": Partial<
    WaIntersectionObserverProps &
      WaIntersectionObserverSolidJsProps &
      BaseProps<WaIntersectionObserver> &
      BaseEvents
  >;

  /**
   *
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
   * - `wa-mutation`: Emitted when a mutation occurs.
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
    WaMutationObserverProps &
      WaMutationObserverSolidJsProps &
      BaseProps<WaMutationObserver> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The option's value. When selected, the containing form control will receive this value. The value must be unique
   * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
   * multiple values.
   * - `disabled`: Draws the option in a disabled state, preventing selection.
   * - `selected`/`defaultSelected`: Selects an option initially.
   * - `label`: The option’s plain text label.
   * Usually automatically generated, but can be useful to provide manually for cases involving complex content.
   * - `defaultSlot`: undefined (property only)
   * - `current`: undefined (property only)
   * - `_label`: undefined (property only)
   * - `defaultLabel`: The default label, generated from the element contents. Will be equal to `label` in most cases. (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The option's label.
   * - `start`: An element, such as `<wa-icon>`, placed before the label.
   * - `end`: An element, such as `<wa-icon>`, placed after the label.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `checked-icon`: The checked icon, a `<wa-icon>` element.
   * - `label`: The option's label.
   * - `start`: The container that wraps the `start` slot.
   * - `end`: The container that wraps the `end` slot.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `current`: The user has keyed into the option, but hasn't selected it yet (shows a highlight)
   * - `selected`: The option is selected and has aria-selected="true"
   * - `hover`: Like `:hover` but works while dragging in Safari
   */
  "wa-option": Partial<
    WaOptionProps & WaOptionSolidJsProps & BaseProps<WaOption> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `placement`: The preferred placement of the popover. Note that the actual placement may vary as needed to keep the popover
   * inside of the viewport.
   * - `open`: Shows or hides the popover.
   * - `distance`: The distance in pixels from which to offset the popover away from its target.
   * - `skidding`: The distance in pixels from which to offset the popover along its target.
   * - `for`: The ID of the popover's anchor element. This must be an interactive/focusable element such as a button.
   * - `without-arrow`/`withoutArrow`: Removes the arrow from the popover.
   * - `dialog`: undefined (property only)
   * - `body`: undefined (property only)
   * - `popup`: undefined (property only)
   * - `anchor`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the popover begins to show. Canceling this event will stop the popover from showing.
   * - `wa-after-show`: Emitted after the popover has shown and all animations are complete.
   * - `wa-hide`: Emitted when the popover begins to hide. Canceling this event will stop the popover from hiding.
   * - `wa-after-hide`: Emitted after the popover has hidden and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The popover's content. Interactive elements such as buttons and links are supported.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `handleForChange() => void`: undefined
   * - `handleOptionsChange() => void`: undefined
   * - `show() => void`: Shows the popover.
   * - `hide() => void`: Hides the popover.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--arrow-size`: The size of the tiny arrow that points to the popover (set to zero to remove). (default: `0.375rem`)
   * - `--max-width`: The maximum width of the popover's body content. (default: `25rem`)
   * - `--show-duration`: The speed of the show animation. (default: `100ms`)
   * - `--hide-duration`: The speed of the hide animation. (default: `100ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `dialog`: The native dialog element that contains the popover content.
   * - `body`: The popover's body where its content is rendered.
   * - `popup`: The internal `<wa-popup>` element that positions the popover.
   * - `popup__popup`: The popup's exported `popup` part. Use this to target the popover's popup container.
   * - `popup__arrow`: The popup's exported `arrow` part. Use this to target the popover's arrow.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `open`: Applied when the popover is open.
   */
  "wa-popover": Partial<
    WaPopoverProps & WaPopoverSolidJsProps & BaseProps<WaPopover> & BaseEvents
  >;

  /**
   *
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
   * - `boundary`: The bounding box to use for flipping, shifting, and auto-sizing.
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
   * - `undefined`: undefined
   * - `wa-reposition`: Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.
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
   * - `--arrow-color`: The color of the arrow. (default: `black`)
   * - `--auto-size-available-width`: A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. (default: `undefined`)
   * - `--auto-size-available-height`: A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. (default: `undefined`)
   * - `--show-duration`: The show duration to use when applying built-in animation classes. (default: `100ms`)
   * - `--hide-duration`: The hide duration to use when applying built-in animation classes. (default: `100ms`)
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
    WaPopupProps & WaPopupSolidJsProps & BaseProps<WaPopup> & BaseEvents
  >;

  /**
   *
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
   * - `--track-height`: The color of the track. (default: `1rem`)
   * - `--track-color`: The color of the track. (default: `var(--wa-color-neutral-fill-normal)`)
   * - `--indicator-color`: The color of the indicator. (default: `var(--wa-color-brand-fill-loud)`)
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
    WaProgressBarProps &
      WaProgressBarSolidJsProps &
      BaseProps<WaProgressBar> &
      BaseEvents
  >;

  /**
   *
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
    WaQrCodeProps & WaQrCodeSolidJsProps & BaseProps<WaQrCode> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`: The radio's value. When selected, the radio group will receive this value.
   * - `appearance`: The radio's visual appearance.
   * - `size`: The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
   * attribute can typically be omitted.
   * - `disabled`: Disables the radio.
   * - `checked`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `blur`: Emitted when the control loses focus.
   * - `focus`: Emitted when the control gains focus.
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
   * - `setValue() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--checked-icon-color`: The color of the checked icon. (default: `undefined`)
   * - `--checked-icon-scale`: The size of the checked icon relative to the radio. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `control`: The circular container that wraps the radio's checked state.
   * - `checked-icon`: The checked icon.
   * - `label`: The container that wraps the radio's label.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `checked`: Applied when the control is checked.
   * - `disabled`: Applied when the control is disabled.
   */
  "wa-radio": Partial<
    WaRadioProps & WaRadioSolidJsProps & BaseProps<WaRadio> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   * - `hint`: The radio groups's hint. If you need to display HTML, use the `hint` slot instead.
   * - `name`: The name of the radio group, submitted as a name/value pair with form data.
   * - `disabled`: Disables the radio group and all child radios.
   * - `orientation`: The orientation in which to show radio items.
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `size`: The radio group's size. This size will be applied to all child radios and radio buttons, except when explicitly overridden.
   * - `required`: Ensures a child radio is checked before allowing the containing form to submit.
   * - `with-label`/`withLabel`: Used for SSR. if true, will show slotted label on initial render.
   * - `with-hint`/`withHint`: Used for SSR. if true, will show slotted hint on initial render.
   * - `defaultSlot`: undefined (property only)
   * - `value`: The current value of the radio group, submitted as a name/value pair with form data. (property only)
   * - `validationTarget`: We use the first available radio as the validationTarget similar to native HTML that shows the validation popup on
   * the first radio element. (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `input`: Emitted when the radio group receives user input.
   * - `change`: Emitted when the radio group's selected value changes.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The default slot where `<wa-radio>` elements are placed.
   * - `label`: The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
   * - `hint`: Text that describes how to use the radio group. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `formResetCallback(args: Parameters<WebAwesomeFormAssociatedElement['formResetCallback']>) => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the radio group.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and hint.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The input's wrapper.
   * - `radios`: The wrapper than surrounds radio items, styled as a flex container by default.
   * - `hint`: The hint's wrapper.
   */
  "wa-radio-group": Partial<
    WaRadioGroupProps &
      WaRadioGroupSolidJsProps &
      BaseProps<WaRadioGroup> &
      BaseEvents
  >;

  /**
   *
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
   * well with `<wa-icon>` elements.
   * - `size`: The component's size.
   * - `rating`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when the rating's value changes.
   * - `undefined`: undefined
   * - `wa-hover`: Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.
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
   * - `--symbol-spacing`: The spacing to use around symbols. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   */
  "wa-rating": Partial<
    WaRatingProps & WaRatingSolidJsProps & BaseProps<WaRating> & BaseEvents
  >;

  /**
   *
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
    WaRelativeTimeProps &
      WaRelativeTimeSolidJsProps &
      BaseProps<WaRelativeTime> &
      BaseEvents
  >;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-resize`: Emitted when the element is resized.
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
    WaResizeObserverProps &
      WaResizeObserverSolidJsProps &
      BaseProps<WaResizeObserver> &
      BaseEvents
  >;

  /**
   *
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
    WaProgressRingProps &
      WaProgressRingSolidJsProps &
      BaseProps<WaProgressRing> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `orientation`: The scroller's orientation.
   * - `without-scrollbar`/`withoutScrollbar`: Removes the visible scrollbar.
   * - `without-shadow`/`withoutShadow`: Removes the shadows.
   * - `content`: undefined (property only)
   * - `canScroll`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content to show inside the scroller.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--shadow-color`: The base color of the shadow. (default: `var(--wa-color-surface-default)`)
   * - `--shadow-size`: The size of the shadow. (default: `2rem`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `content`: The container that wraps the slotted content.
   */
  "wa-scroller": Partial<
    WaScrollerProps &
      WaScrollerSolidJsProps &
      BaseProps<WaScroller> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the select, submitted as a name/value pair with form data.
   * - `value`: The select's value. This will be a string for single select or an array for multi-select.
   * - `size`: The select's size.
   * - `placeholder`: Placeholder text to show as a hint when the select is empty.
   * - `multiple`: Allows more than one option to be selected.
   * - `max-options-visible`/`maxOptionsVisible`: The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
   * indicate the number of additional items that are selected. Set to 0 to remove the limit.
   * - `disabled`: Disables the select control.
   * - `with-clear`/`withClear`: Adds a clear button when the select is not empty.
   * - `open`: Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
   * - `appearance`: The select's visual appearance.
   * - `pill`: Draws a pill-style select with rounded edges.
   * - `label`: The select's label. If you need to display HTML, use the `label` slot instead.
   * - `placement`: The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   * - `hint`: The select's hint. If you need to display HTML, use the `hint` slot instead.
   * - `with-label`/`withLabel`: Used for SSR purposes when a label is slotted in. Will show the label on first render.
   * - `with-hint`/`withHint`: Used for SSR purposes when hint is slotted in. Will show the hint on first render.
   * - `required`: The select's required attribute.
   * - `assumeInteractionOn`: undefined (property only)
   * - `popup`: undefined (property only)
   * - `combobox`: undefined (property only)
   * - `displayInput`: undefined (property only)
   * - `valueInput`: undefined (property only)
   * - `listbox`: undefined (property only)
   * - `validationTarget`: Where to anchor native constraint validation (property only) (readonly)
   * - `displayLabel`: undefined (property only)
   * - `currentOption`: undefined (property only)
   * - `selectedOptions`: undefined (property only)
   * - `optionValues`: undefined (property only)
   * - `defaultValue`: undefined (property only)
   * - `getTag`: A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
   * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted
   * HTML of the symbol to render at the specified value. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `input`: Emitted when the control receives input.
   * - `change`: Emitted when the control's value changes.
   * - `focus`: Emitted when the control gains focus.
   * - `blur`: Emitted when the control loses focus.
   * - `wa-clear`: Emitted when the control's value is cleared.
   * - `wa-show`: Emitted when the select's menu opens.
   * - `wa-after-show`: Emitted after the select's menu opens and all animations are complete.
   * - `wa-hide`: Emitted when the select's menu closes.
   * - `wa-after-hide`: Emitted after the select's menu closes and all animations are complete.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The listbox options. Must be `<wa-option>` elements. You can use `<wa-divider>` to group items visually.
   * - `label`: The input's label. Alternatively, you can use the `label` attribute.
   * - `start`: An element, such as `<wa-icon>`, placed at the start of the combobox.
   * - `end`: An element, such as `<wa-icon>`, placed at the end of the combobox.
   * - `clear-icon`: An icon to use in lieu of the default clear icon.
   * - `expand-icon`: The icon to show when the control is expanded and collapsed. Rotates on open and close.
   * - `hint`: Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleDefaultSlotChange() => void`: undefined
   * - `selectionChanged() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `handleOpenChange() => void`: undefined
   * - `show() => void`: Shows the listbox.
   * - `hide() => void`: Hides the listbox.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the control.
   * - `blur() => void`: Removes focus from the control.
   * - `formResetCallback() => void`: undefined
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--show-duration`: The duration of the show animation. (default: `100ms`)
   * - `--hide-duration`: The duration of the hide animation. (default: `100ms`)
   * - `--tag-max-size`: When using `multiple`, the max size of tags before their content is truncated. (default: `10ch`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `form-control`: The form control that wraps the label, input, and hint.
   * - `form-control-label`: The label's wrapper.
   * - `form-control-input`: The select's wrapper.
   * - `hint`: The hint's wrapper.
   * - `combobox`: The container the wraps the start, end, value, clear icon, and expand button.
   * - `start`: The container that wraps the `start` slot.
   * - `end`: The container that wraps the `end` slot.
   * - `display-input`: The element that displays the selected option's label, an `<input>` element.
   * - `listbox`: The listbox container where options are slotted.
   * - `tags`: The container that houses option tags when `multiselect` is used.
   * - `tag`: The individual tags that represent each multiselect option.
   * - `tag__content`: The tag's content part.
   * - `tag__remove-button`: The tag's remove button.
   * - `tag__remove-button__base`: The tag's remove button base part.
   * - `clear-button`: The clear button.
   * - `expand-icon`: The container that wraps the expand icon.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `blank`: The select is empty.
   */
  "wa-select": Partial<
    WaSelectProps & WaSelectSolidJsProps & BaseProps<WaSelect> & BaseEvents
  >;

  /**
   *
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
   * - `--color`: The color of the skeleton. (default: `undefined`)
   * - `--sheen-color`: The sheen color when the skeleton is in its loading state. (default: `undefined`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `indicator`: The skeleton's indicator which is responsible for its color and animation.
   */
  "wa-skeleton": Partial<
    WaSkeletonProps &
      WaSkeletonSolidJsProps &
      BaseProps<WaSkeleton> &
      BaseEvents
  >;

  /**
   * <wa-slider>
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `label`: The slider's label. If you need to provide HTML in the label, use the `label` slot instead.
   * - `hint`: The slider hint. If you need to display HTML, use the hint slot instead.
   * - `name`: The name of the slider. This will be submitted with the form as a name/value pair.
   * - `min-value`/`minValue`: The minimum value of a range selection. Used only when range attribute is set.
   * - `max-value`/`maxValue`: The maximum value of a range selection. Used only when range attribute is set.
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `range`: Converts the slider to a range slider with two thumbs.
   * - `disabled`: Disables the slider.
   * - `readonly`: Makes the slider a read-only field.
   * - `orientation`: The orientation of the slider.
   * - `size`: The slider's size.
   * - `indicator-offset`/`indicatorOffset`: The starting value from which to draw the slider's fill, which is based on its current value.
   * - `min`: The minimum value allowed.
   * - `max`: The maximum value allowed.
   * - `step`: The granularity the value must adhere to when incrementing and decrementing.
   * - `required`: Makes the slider a required field.
   * - `autofocus`: Tells the browser to focus the slider when the page loads or a dialog is shown.
   * - `tooltip-distance`/`tooltipDistance`: The distance of the tooltip from the slider's thumb.
   * - `tooltip-placement`/`tooltipPlacement`: The placement of the tooltip in reference to the slider's thumb.
   * - `with-markers`/`withMarkers`: Draws markers at each step along the slider.
   * - `with-tooltip`/`withTooltip`: Draws a tooltip above the thumb when the control has focus or is dragged.
   * - `validationTarget`: Override validation target to point to the focusable element (property only) (readonly)
   * - `slider`: undefined (property only)
   * - `thumb`: undefined (property only)
   * - `thumbMin`: undefined (property only)
   * - `thumbMax`: undefined (property only)
   * - `track`: undefined (property only)
   * - `tooltip`: undefined (property only)
   * - `value`: The current value of the slider, submitted as a name/value pair with form data. (property only)
   * - `isRange`: Get if this is a range slider (property only) (readonly)
   * - `valueFormatter`: A custom formatting function to apply to the value. This will be shown in the tooltip and announced by screen
   * readers. Must be set with JavaScript. Property only. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when an alteration to the control's value is committed by the user.
   * - `blur`: Emitted when the control loses focus.
   * - `focus`: Emitted when the control gains focus.
   * - `input`: Emitted when the control receives input.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The slider label. Alternatively, you can use the `label` attribute.
   * - `hint`: Text that describes how to use the input. Alternatively, you can use the `hint` attribute. instead.
   * - `reference`: One or more reference labels to show visually below the slider.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: Sets focus to the slider.
   * - `blur() => void`: Removes focus from the slider.
   * - `stepDown() => void`: Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   * - `stepUp() => void`: Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--track-size`: The height or width of the slider's track. (default: `0.75em`)
   * - `--marker-width`: The width of each individual marker. (default: `0.1875em`)
   * - `--marker-height`: The height of each individual marker. (default: `0.1875em`)
   * - `--thumb-width`: The width of the thumb. (default: `1.25em`)
   * - `--thumb-height`: The height of the thumb. (default: `1.25em`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `label`: The element that contains the sliders's label.
   * - `hint`: The element that contains the slider's description.
   * - `slider`: The focusable element with `role="slider"`. Contains the track and reference slot.
   * - `track`: The slider's track.
   * - `indicator`: The colored indicator that shows from the start of the slider to the current value.
   * - `markers`: The container that holds all the markers when `with-markers` is used.
   * - `marker`: The individual markers that are shown when `with-markers` is used.
   * - `references`: The container that holds references that get slotted in.
   * - `thumb`: The slider's thumb.
   * - `thumb-min`: The min value thumb in a range slider.
   * - `thumb-max`: The max value thumb in a range slider.
   * - `tooltip`: The tooltip, a `<wa-tooltip>` element.
   * - `tooltip__tooltip`: The tooltip's `tooltip` part.
   * - `tooltip__content`: The tooltip's `content` part.
   * - `tooltip__arrow`: The tooltip's `arrow` part.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `disabled`: Applied when the slider is disabled.
   * - `dragging`: Applied when the slider is being dragged.
   * - `focused`: Applied when the slider has focus.
   * - `user-valid`: Applied when the slider is valid and the user has sufficiently interacted with it.
   * - `user-invalid`: Applied when the slider is invalid and the user has sufficiently interacted with it.
   */
  "wa-slider": Partial<
    WaSliderProps & WaSliderSolidJsProps & BaseProps<WaSlider> & BaseEvents
  >;

  /**
   *
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
    WaSpinnerProps & WaSpinnerSolidJsProps & BaseProps<WaSpinner> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `position`: The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
   * container's initial size.
   * - `position-in-pixels`/`positionInPixels`: The current position of the divider from the primary panel's edge in pixels.
   * - `orientation`: Sets the split panel's orientation.
   * - `disabled`: Disables resizing. Note that the position may still change as a result of resizing the host element.
   * - `primary`: If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
   * primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
   * host element is resized.
   * - `snap`: One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.
   * `"100px 50%"`.
   * - `snap-threshold`/`snapThreshold`: How close the divider must be to a snap point until snapping occurs.
   * - `divider`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-reposition`: Emitted when the divider's position changes.
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
    WaSplitPanelProps &
      WaSplitPanelSolidJsProps &
      BaseProps<WaSplitPanel> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the switch, submitted as a name/value pair with form data.
   * - `value`: The value of the switch, submitted as a name/value pair with form data.
   * - `size`: The switch's size.
   * - `disabled`: Disables the switch.
   * - `checked`/`defaultChecked`: The default value of the form control. Primarily used for resetting the form control.
   * - `required`: Makes the switch a required field.
   * - `hint`: The switch's hint. If you need to display HTML, use the `hint` slot instead.
   * - `with-hint`/`withHint`: Used for SSR. If you slot in hint, make sure to add `with-hint` to your component to get it to properly render with SSR.
   * - `input`: undefined (property only)
   * - `checked`: Draws the switch in a checked state. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: Emitted when the control's checked state changes.
   * - `input`: Emitted when the control receives input.
   * - `blur`: Emitted when the control loses focus.
   * - `focus`: Emitted when the control gains focus.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The switch's label.
   * - `hint`: Text that describes how to use the switch. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleValueOrCheckedChange() => void`: undefined
   * - `handleDefaultCheckedChange() => void`: undefined
   * - `handleStateChange() => void`: undefined
   * - `handleDisabledChange() => void`: undefined
   * - `click() => void`: Simulates a click on the switch.
   * - `focus(options?: FocusOptions) => void`: Sets focus on the switch.
   * - `blur() => void`: Removes focus from the switch.
   * - `setValue(value: string | File | FormData | null, stateValue?: string | File | FormData | null | undefined) => void`: undefined
   * - `formResetCallback() => void`: undefined
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
   * - `hint`: The hint's wrapper.
   */
  "wa-switch": Partial<
    WaSwitchProps & WaSwitchSolidJsProps & BaseProps<WaSwitch> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `panel`: The name of the tab panel this tab is associated with. The panel must be located in the same tab group.
   * - `disabled`: Disables the tab and prevents selection.
   * - `tab`: undefined (property only)
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
   */
  "wa-tab": Partial<
    WaTabProps & WaTabSolidJsProps & BaseProps<WaTab> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `active`: Sets the active tab.
   * - `placement`: The placement of the tabs.
   * - `activation`: When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
   * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
   * - `without-scroll-controls`/`withoutScrollControls`: Disables the scroll arrows that appear when tabs overflow.
   * - `tabGroup`: undefined (property only)
   * - `body`: undefined (property only)
   * - `nav`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-tab-show`: Emitted when a tab is shown.
   * - `wa-tab-hide`: Emitted when a tab is hidden.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Used for grouping tab panels in the tab group. Must be `<wa-tab-panel>` elements.
   * - `nav`: Used for grouping tabs in the tab group. Must be `<wa-tab>` elements. Note that `<wa-tab>` will set this slot on itself automatically.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `updateActiveTab() => void`: undefined
   * - `updateScrollControls() => void`: undefined
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
   * - `body`: The tab group's body where tab panels are slotted in.
   * - `scroll-button`: The previous/next scroll buttons that show when tabs are scrollable, a `<wa-button>`.
   * - `scroll-button-start`: The starting scroll button.
   * - `scroll-button-end`: The ending scroll button.
   * - `scroll-button__base`: The scroll button's exported `base` part.
   */
  "wa-tab-group": Partial<
    WaTabGroupProps &
      WaTabGroupSolidJsProps &
      BaseProps<WaTabGroup> &
      BaseEvents
  >;

  /**
   *
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
    WaTabPanelProps &
      WaTabPanelSolidJsProps &
      BaseProps<WaTabPanel> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `variant`: The tag's theme variant. Defaults to `neutral` if not within another element with a variant.
   * - `appearance`: The tag's visual appearance.
   * - `size`: The tag's size.
   * - `pill`: Draws a pill-style tag with rounded edges.
   * - `with-remove`/`withRemove`: Makes the tag removable and shows a remove button.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-remove`: Emitted when the remove button is activated.
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
   * - `remove-button`: The tag's remove button, a `<wa-button>`.
   * - `remove-button__base`: The remove button's exported `base` part.
   */
  "wa-tag": Partial<
    WaTagProps & WaTagSolidJsProps & BaseProps<WaTag> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `placement`: The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
   * inside of the viewport.
   * - `disabled`: Disables the tooltip so it won't show when triggered.
   * - `distance`: The distance in pixels from which to offset the tooltip away from its target.
   * - `open`: Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.
   * - `skidding`: The distance in pixels from which to offset the tooltip along its target.
   * - `show-delay`/`showDelay`: The amount of time to wait before showing the tooltip when the user mouses in.
   * - `hide-delay`/`hideDelay`: The amount of time to wait before hiding the tooltip when the user mouses out..
   * - `trigger`: Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
   * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
   * programmatically.
   * - `without-arrow`/`withoutArrow`: Removes the arrow from the tooltip.
   * - `for`: undefined
   * - `defaultSlot`: undefined (property only)
   * - `body`: undefined (property only)
   * - `popup`: undefined (property only)
   * - `anchor`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `undefined`: undefined
   * - `wa-show`: Emitted when the tooltip begins to show.
   * - `wa-after-show`: Emitted after the tooltip has shown and all animations are complete.
   * - `wa-hide`: Emitted when the tooltip begins to hide.
   * - `wa-after-hide`: Emitted after the tooltip has hidden and all animations are complete.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The tooltip's default slot where any content should live. Interactive content should be avoided.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleOpenChange() => void`: undefined
   * - `handleForChange() => void`: undefined
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
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper, an `<wa-popup>` element.
   * - `base__popup`: The popup's exported `popup` part. Use this to target the tooltip's popup container.
   * - `base__arrow`: The popup's exported `arrow` part. Use this to target the tooltip's arrow.
   * - `body`: The tooltip's body where its content is rendered.
   */
  "wa-tooltip": Partial<
    WaTooltipProps & WaTooltipSolidJsProps & BaseProps<WaTooltip> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `title`: undefined
   * - `name`: The name of the textarea, submitted as a name/value pair with form data.
   * - `value`/`defaultValue`: The default value of the form control. Primarily used for resetting the form control.
   * - `size`: The textarea's size.
   * - `appearance`: The textarea's visual appearance.
   * - `label`: The textarea's label. If you need to display HTML, use the `label` slot instead.
   * - `hint`: The textarea's hint. If you need to display HTML, use the `hint` slot instead.
   * - `placeholder`: Placeholder text to show as a hint when the input is empty.
   * - `rows`: The number of rows to display by default.
   * - `resize`: Controls how the textarea can be resized.
   * - `disabled`: Disables the textarea.
   * - `readonly`: Makes the textarea readonly.
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
   * - `with-label`/`withLabel`: Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`.
   * - `with-hint`/`withHint`: Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`.
   * - `assumeInteractionOn`: undefined (property only)
   * - `input`: undefined (property only)
   * - `base`: undefined (property only)
   * - `sizeAdjuster`: undefined (property only)
   * - `value`: The current value of the input, submitted as a name/value pair with form data. (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `blur`: Emitted when the control loses focus.
   * - `change`: Emitted when an alteration to the control's value is committed by the user.
   * - `focus`: Emitted when the control gains focus.
   * - `input`: Emitted when the control receives input.
   * - `wa-invalid`: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The textarea's label. Alternatively, you can use the `label` attribute.
   * - `hint`: Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `handleRowsChange() => void`: undefined
   * - `handleValueChange() => void`: undefined
   * - `focus(options?: FocusOptions) => void`: Sets focus on the textarea.
   * - `blur() => void`: Removes focus from the textarea.
   * - `select() => void`: Selects all the text in the textarea.
   * - `scrollPosition(position?: { top?: number; left?: number }) => { top: number; left: number } | undefined`: Gets or sets the textarea's scroll position.
   * - `setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the text selection (0-based).
   * - `setRangeText(replacement: string, start?: number, end?: number, selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve') => void`: Replaces a range of text with a new string.
   * - `formResetCallback() => void`: undefined
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `label`: The label
   * - `form-control-input`: The input's wrapper.
   * - `hint`: The hint's wrapper.
   * - `textarea`: The internal `<textarea>` control.
   * - `base`: The wrapper around the `<textarea>` control.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `blank`: The textarea is empty.
   */
  "wa-textarea": Partial<
    WaTextareaProps &
      WaTextareaSolidJsProps &
      BaseProps<WaTextarea> &
      BaseEvents
  >;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-selection-change`: Emitted when a tree item is selected or deselected.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The default slot.
   * - `expand-icon`: The icon to show when the tree item is expanded. Works best with `<wa-icon>`.
   * - `collapse-icon`: The icon to show when the tree item is collapsed. Works best with `<wa-icon>`.
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
   * - `--indent-size`: The size of the indentation for nested items. (default: `var(--wa-space-m)`)
   * - `--indent-guide-color`: The color of the indentation line. (default: `var(--wa-color-surface-border)`)
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
    WaTreeProps & WaTreeSolidJsProps & BaseProps<WaTree> & BaseEvents
  >;

  /**
   *
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
   * - `undefined`: undefined
   * - `wa-expand`: Emitted when the tree item expands.
   * - `wa-after-expand`: Emitted after the tree item expands and all animations are complete.
   * - `wa-collapse`: Emitted when the tree item collapses.
   * - `wa-after-collapse`: Emitted after the tree item collapses and all animations are complete.
   * - `wa-lazy-change`: Emitted when the tree item's lazy state changes.
   * - `wa-lazy-load`: Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree.
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
   * - `handleExpandedState() => void`: undefined
   * - `handleIndeterminateStateChange() => void`: undefined
   * - `handleSelectedChange() => void`: undefined
   * - `handleExpandedChange() => void`: undefined
   * - `handleExpandAnimation() => void`: undefined
   * - `handleLazyChange() => void`: undefined
   * - `getChildrenItems({ includeDisabled = true }: { includeDisabled?: boolean } = {}) => WaTreeItem[]`: Gets all the nested tree items in this node.
   *
   * ## CSS Custom Properties
   *
   * CSS variables available for styling the component.
   *
   * - `--show-duration`: The animation duration when expanding tree items. (default: `200ms`)
   * - `--hide-duration`: The animation duration when collapsing tree items. (default: `200ms`)
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `base`: The component's base wrapper.
   * - `item`: The tree item's container. This element wraps everything except slotted tree item children.
   * - `indentation`: The tree item's indentation container.
   * - `expand-button`: The container that wraps the tree item's expand button and spinner.
   * - `spinner`: The spinner that shows when a lazy tree item is in the loading state.
   * - `spinner__base`: The spinner's base part.
   * - `label`: The tree item's label.
   * - `children`: The container that wraps the tree item's nested children.
   * - `checkbox`: The checkbox that shows when using multiselect.
   * - `checkbox__base`: The checkbox's exported `base` part.
   * - `checkbox__control`: The checkbox's exported `control` part.
   * - `checkbox__checked-icon`: The checkbox's exported `checked-icon` part.
   * - `checkbox__indeterminate-icon`: The checkbox's exported `indeterminate-icon` part.
   * - `checkbox__label`: The checkbox's exported `label` part.
   *
   * ## CSS States
   *
   * These can be used to apply styling when a component is in a given state.
   *
   * - `disabled`: Applied when the tree item is disabled.
   * - `expanded`: Applied when the tree item is expanded.
   * - `indeterminate`: Applied when the selection is indeterminate.
   * - `selected`: Applied when the tree item is selected.
   */
  "wa-tree-item": Partial<
    WaTreeItemProps &
      WaTreeItemSolidJsProps &
      BaseProps<WaTreeItem> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `src`: The URL of the content to display.
   * - `srcdoc`: Inline HTML to display.
   * - `allowfullscreen`: Allows fullscreen mode.
   * - `loading`: Controls iframe loading behavior.
   * - `referrerpolicy`: Controls referrer information.
   * - `sandbox`: Security restrictions for the iframe.
   * - `zoom`: The current zoom of the frame, e.g. 0 = 0% and 1 = 100%.
   * - `zoom-levels`/`zoomLevels`: The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom.
   * - `without-controls`/`withoutControls`: Removes the zoom controls.
   * - `without-interaction`/`withoutInteraction`: Disables interaction when present.
   * - `iframe`: undefined (property only)
   * - `contentWindow`: Returns the internal iframe's `window` object. (Readonly property) (property only) (readonly)
   * - `contentDocument`: Returns the internal iframe's `document` object. (Readonly property) (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `load`: Emitted when the internal iframe when it finishes loading.
   * - `error`: Emitted from the internal iframe when it fails to load.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `zoom-in-icon`: The slot that contains the zoom in icon.
   * - `zoom-out-icon`: The slot that contains the zoom out icon.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `zoomIn() => void`: Zooms in to the next available zoom level.
   * - `zoomOut() => void`: Zooms out to the previous available zoom level.
   *
   * ## CSS Parts
   *
   * Custom selectors for styling elements within the component.
   *
   * - `iframe`: The internal `<iframe>` element.
   * - `controls`: The container that surrounds zoom control buttons.
   * - `zoom-in-button`: The zoom in button.
   * - `zoom-out-button`: The zoom out button.
   */
  "wa-zoomable-frame": Partial<
    WaZoomableFrameProps &
      WaZoomableFrameSolidJsProps &
      BaseProps<WaZoomableFrame> &
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
  /** The color of the badge's pulse effect when using `attention="pulse"`. */
  "--pulse-color"?: string;
  /** The amount of space around and between sections of the card. Expects a single value. */
  "--spacing"?: string;
  /** The aspect ratio of each slide. */
  "--aspect-ratio"?: string;
  /** The amount of padding to apply to the scroll area, allowing adjacent slides to become partially visible as a scroll hint. */
  "--scroll-hint"?: string;
  /** The space between each slide. */
  "--slide-gap"?: string;
  /** The color of the checked and indeterminate icons. */
  "--checked-icon-color"?: string;
  /** The size of the checked and indeterminate icons relative to the checkbox. */
  "--checked-icon-scale"?: string;
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
  /** The width of the dividing line. */
  "--divider-width"?: string;
  /** The size of the compare handle. */
  "--handle-size"?: string;
  /** The show duration to use when applying built-in animation classes. */
  "--show-duration"?: string;
  /** The hide duration to use when applying built-in animation classes. */
  "--hide-duration"?: string;
  /** The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. */
  "--width"?: string;
  /** The color of the divider. */
  "--color"?: string;
  /** Sets a duotone icon's primary color. */
  "--primary-color"?: string;
  /** Sets a duotone icon's primary opacity. */
  "--primary-opacity"?: string;
  /** Sets a duotone icon's secondary color. */
  "--secondary-color"?: string;
  /** Sets a duotone icon's secondary opacity. */
  "--secondary-opacity"?: string;
  /** The size of the tiny arrow that points to the popover (set to zero to remove). */
  "--arrow-size"?: string;
  /** The maximum width of the popover's body content. */
  "--max-width"?: string;
  /** The color of the arrow. */
  "--arrow-color"?: string;
  /** A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. */
  "--auto-size-available-width"?: string;
  /** A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. */
  "--auto-size-available-height"?: string;
  /** The color of the track. */
  "--track-height"?: string;
  /** The color of the track. */
  "--track-color"?: string;
  /** The color of the indicator. */
  "--indicator-color"?: string;
  /** The inactive color for symbols. */
  "--symbol-color"?: string;
  /** The active color for symbols. */
  "--symbol-color-active"?: string;
  /** The spacing to use around symbols. */
  "--symbol-spacing"?: string;
  /** The width of the track. */
  "--track-width"?: string;
  /** The width of the indicator. Defaults to the track width. */
  "--indicator-width"?: string;
  /** The duration of the indicator's transition when the value changes. */
  "--indicator-transition-duration"?: string;
  /** The base color of the shadow. */
  "--shadow-color"?: string;
  /** The size of the shadow. */
  "--shadow-size"?: string;
  /** When using `multiple`, the max size of tags before their content is truncated. */
  "--tag-max-size"?: string;
  /** The sheen color when the skeleton is in its loading state. */
  "--sheen-color"?: string;
  /** The height or width of the slider's track. */
  "--track-size"?: string;
  /** The width of each individual marker. */
  "--marker-width"?: string;
  /** The height of each individual marker. */
  "--marker-height"?: string;
  /** The width of the thumb. */
  "--thumb-width"?: string;
  /** The height of the thumb. */
  "--thumb-height"?: string;
  /** The time it takes for the spinner to complete one animation cycle. */
  "--speed"?: string;
  /** The invisible region around the divider where dragging can occur. This is usually wider than the divider to facilitate easier dragging. */
  "--divider-hit-area"?: string;
  /** The minimum allowed size of the primary panel. */
  "--min"?: string;
  /** The maximum allowed size of the primary panel. */
  "--max"?: string;
  /** The height of the switch. */
  "--height"?: string;
  /** The size of the thumb. */
  "--thumb-size"?: string;
  /** The tab panel's padding. */
  "--padding"?: string;
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

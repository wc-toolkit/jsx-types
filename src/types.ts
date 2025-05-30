import { ComponentDescriptionOptions } from "@wc-toolkit/cem-utilities";

export interface JsxTypesOptions {
  /** Used to get a specific path for a given component */
  componentTypePath?: (name: string, tag?: string) => string;
  /** Name of the file generated */
  fileName?: string;
  /** Path to output directory */
  outdir?: string;
  /** Component names to exclude form process */
  exclude?: string[];
  /** Used to get global type reference for components */
  globalTypePath?: string;
  /** Indicates if the component classes are a default export rather than a named export */
  defaultExport?: boolean;
  /** Used to add global element props to all component types */
  globalEvents?: string;
  /** Adds a prefix to tag references */
  prefix?: string;
  /** Adds a suffix to tag references */
  suffix?: string;
  /** Available options for configuring the way the components description is rendered */
  componentDescriptionOptions?: ComponentDescriptionOptions;
  /** Uses your custom event type instead of `CustomEvent<T>` */
  overrideCustomEventType?: boolean;
  /** Skips the code from running */
  skip?: boolean;
  /** Shows contextual logs */
  debug?: boolean;
}

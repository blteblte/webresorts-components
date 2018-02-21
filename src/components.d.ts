/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  WrstsCheckbox as WrstsCheckbox
} from './components/wrsts-checkbox/wrsts-checkbox';

declare global {
  interface HTMLWrstsCheckboxElement extends WrstsCheckbox, HTMLStencilElement {
  }
  var HTMLWrstsCheckboxElement: {
    prototype: HTMLWrstsCheckboxElement;
    new (): HTMLWrstsCheckboxElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-checkbox": HTMLWrstsCheckboxElement;
  }
  interface ElementTagNameMap {
    "wrsts-checkbox": HTMLWrstsCheckboxElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-checkbox": JSXElements.WrstsCheckboxAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsCheckboxAttributes extends HTMLAttributes {
      checked?: boolean;
      disabled?: boolean;
      group?: string;
      groupToggler?: string;
      hidden?: boolean;
      id?: string;
      indeterminate?: boolean;
      name?: string;
      value?: string;
    }
  }
}


import {
  WrstsTinymce as WrstsTinymce
} from './components/wrsts-tinymce/wrsts-tinymce';

declare global {
  interface HTMLWrstsTinymceElement extends WrstsTinymce, HTMLStencilElement {
  }
  var HTMLWrstsTinymceElement: {
    prototype: HTMLWrstsTinymceElement;
    new (): HTMLWrstsTinymceElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-tinymce": HTMLWrstsTinymceElement;
  }
  interface ElementTagNameMap {
    "wrsts-tinymce": HTMLWrstsTinymceElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-tinymce": JSXElements.WrstsTinymceAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsTinymceAttributes extends HTMLAttributes {
      id?: string;
      name?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

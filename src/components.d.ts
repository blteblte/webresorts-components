/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}


import {
  WrstsBaseShadow as WrstsBaseShadow
} from './components/wrsts-base-shadow/wrsts-base-shadow';

declare global {
  interface HTMLWrstsBaseShadowElement extends WrstsBaseShadow, HTMLStencilElement {
  }
  var HTMLWrstsBaseShadowElement: {
    prototype: HTMLWrstsBaseShadowElement;
    new (): HTMLWrstsBaseShadowElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-base-shadow": HTMLWrstsBaseShadowElement;
  }
  interface ElementTagNameMap {
    "wrsts-base-shadow": HTMLWrstsBaseShadowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-base-shadow": JSXElements.WrstsBaseShadowAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsBaseShadowAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WrstsButton as WrstsButton
} from './components/wrsts-button/wrsts-button';

declare global {
  interface HTMLWrstsButtonElement extends WrstsButton, HTMLStencilElement {
  }
  var HTMLWrstsButtonElement: {
    prototype: HTMLWrstsButtonElement;
    new (): HTMLWrstsButtonElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-button": HTMLWrstsButtonElement;
  }
  interface ElementTagNameMap {
    "wrsts-button": HTMLWrstsButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-button": JSXElements.WrstsButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsButtonAttributes extends HTMLAttributes {
      formId?: string;
    }
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
  WrstsInput as WrstsInput
} from './components/wrsts-input/wrsts-input';

declare global {
  interface HTMLWrstsInputElement extends WrstsInput, HTMLStencilElement {
  }
  var HTMLWrstsInputElement: {
    prototype: HTMLWrstsInputElement;
    new (): HTMLWrstsInputElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-input": HTMLWrstsInputElement;
  }
  interface ElementTagNameMap {
    "wrsts-input": HTMLWrstsInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-input": JSXElements.WrstsInputAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsInputAttributes extends HTMLAttributes {
      autocomplete?: 'on' | 'off';
      autofocus?: boolean;
      disabled?: boolean;
      formaction?: string;
      formenctype?: string;
      formmethod?: string;
      formnovalidate?: boolean;
      formtarget?: string;
      height?: number;
      id?: string;
      list?: string;
      max?: number;
      maxlength?: number;
      min?: number;
      minlength?: number;
      multiple?: boolean;
      name?: string;
      patern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      size?: number;
      step?: number;
      title?: string;
      type?: string;
      value?: string;
      width?: number;
    }
  }
}


import {
  WrstsJsonForm as WrstsJsonForm
} from './components/wrsts-json-form/wrsts-json-form';

declare global {
  interface HTMLWrstsJsonFormElement extends WrstsJsonForm, HTMLStencilElement {
  }
  var HTMLWrstsJsonFormElement: {
    prototype: HTMLWrstsJsonFormElement;
    new (): HTMLWrstsJsonFormElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-json-form": HTMLWrstsJsonFormElement;
  }
  interface ElementTagNameMap {
    "wrsts-json-form": HTMLWrstsJsonFormElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-json-form": JSXElements.WrstsJsonFormAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsJsonFormAttributes extends HTMLAttributes {
      action?: string;
      ajax?: boolean;
      method?: string;
      target?: string;
    }
  }
}


import {
  WrstsSelectOption as WrstsSelectOption
} from './components/wrsts-select-option/wrsts-select-option';

declare global {
  interface HTMLWrstsSelectOptionElement extends WrstsSelectOption, HTMLStencilElement {
  }
  var HTMLWrstsSelectOptionElement: {
    prototype: HTMLWrstsSelectOptionElement;
    new (): HTMLWrstsSelectOptionElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-select-option": HTMLWrstsSelectOptionElement;
  }
  interface ElementTagNameMap {
    "wrsts-select-option": HTMLWrstsSelectOptionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-select-option": JSXElements.WrstsSelectOptionAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsSelectOptionAttributes extends HTMLAttributes {
      focused?: boolean;
      hidden?: boolean;
      index?: string;
      selected?: boolean;
      value?: string;
    }
  }
}


import {
  WrstsSelect as WrstsSelect
} from './components/wrsts-select/wrsts-select';

declare global {
  interface HTMLWrstsSelectElement extends WrstsSelect, HTMLStencilElement {
  }
  var HTMLWrstsSelectElement: {
    prototype: HTMLWrstsSelectElement;
    new (): HTMLWrstsSelectElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-select": HTMLWrstsSelectElement;
  }
  interface ElementTagNameMap {
    "wrsts-select": HTMLWrstsSelectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-select": JSXElements.WrstsSelectAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsSelectAttributes extends HTMLAttributes {
      focused?: boolean;
      id?: string;
      name?: string;
      placeholder?: string;
      search?: boolean;
      selectedIndex?: string;
      selectedValue?: string;
    }
  }
}


import {
  WrstsTabControlContent as WrstsTabControlContent
} from './components/wrsts-tab-control-content/wrsts-tab-control-content';

declare global {
  interface HTMLWrstsTabControlContentElement extends WrstsTabControlContent, HTMLStencilElement {
  }
  var HTMLWrstsTabControlContentElement: {
    prototype: HTMLWrstsTabControlContentElement;
    new (): HTMLWrstsTabControlContentElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-tab-control-content": HTMLWrstsTabControlContentElement;
  }
  interface ElementTagNameMap {
    "wrsts-tab-control-content": HTMLWrstsTabControlContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-tab-control-content": JSXElements.WrstsTabControlContentAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsTabControlContentAttributes extends HTMLAttributes {
      active?: boolean;
    }
  }
}


import {
  WrstsTabControlContents as WrstsTabControlContents
} from './components/wrsts-tab-control-contents/wrsts-tab-control-contents';

declare global {
  interface HTMLWrstsTabControlContentsElement extends WrstsTabControlContents, HTMLStencilElement {
  }
  var HTMLWrstsTabControlContentsElement: {
    prototype: HTMLWrstsTabControlContentsElement;
    new (): HTMLWrstsTabControlContentsElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-tab-control-contents": HTMLWrstsTabControlContentsElement;
  }
  interface ElementTagNameMap {
    "wrsts-tab-control-contents": HTMLWrstsTabControlContentsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-tab-control-contents": JSXElements.WrstsTabControlContentsAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsTabControlContentsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WrstsTabControlTab as WrstsTabControlTab
} from './components/wrsts-tab-control-tab/wrsts-tab-control-tab';

declare global {
  interface HTMLWrstsTabControlTabElement extends WrstsTabControlTab, HTMLStencilElement {
  }
  var HTMLWrstsTabControlTabElement: {
    prototype: HTMLWrstsTabControlTabElement;
    new (): HTMLWrstsTabControlTabElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-tab-control-tab": HTMLWrstsTabControlTabElement;
  }
  interface ElementTagNameMap {
    "wrsts-tab-control-tab": HTMLWrstsTabControlTabElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-tab-control-tab": JSXElements.WrstsTabControlTabAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsTabControlTabAttributes extends HTMLAttributes {
      active?: boolean;
      historyTitle?: string;
      route?: string;
    }
  }
}


import {
  WrstsTabControlTabs as WrstsTabControlTabs
} from './components/wrsts-tab-control-tabs/wrsts-tab-control-tabs';

declare global {
  interface HTMLWrstsTabControlTabsElement extends WrstsTabControlTabs, HTMLStencilElement {
  }
  var HTMLWrstsTabControlTabsElement: {
    prototype: HTMLWrstsTabControlTabsElement;
    new (): HTMLWrstsTabControlTabsElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-tab-control-tabs": HTMLWrstsTabControlTabsElement;
  }
  interface ElementTagNameMap {
    "wrsts-tab-control-tabs": HTMLWrstsTabControlTabsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-tab-control-tabs": JSXElements.WrstsTabControlTabsAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsTabControlTabsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WrstsTabControl as WrstsTabControl
} from './components/wrsts-tab-control/wrsts-tab-control';

declare global {
  interface HTMLWrstsTabControlElement extends WrstsTabControl, HTMLStencilElement {
  }
  var HTMLWrstsTabControlElement: {
    prototype: HTMLWrstsTabControlElement;
    new (): HTMLWrstsTabControlElement;
  };
  interface HTMLElementTagNameMap {
    "wrsts-tab-control": HTMLWrstsTabControlElement;
  }
  interface ElementTagNameMap {
    "wrsts-tab-control": HTMLWrstsTabControlElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wrsts-tab-control": JSXElements.WrstsTabControlAttributes;
    }
  }
  namespace JSXElements {
    export interface WrstsTabControlAttributes extends HTMLAttributes {
      
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
      baseUrl?: string;
      height?: string;
      id?: string;
      name?: string;
      value?: string;
      width?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

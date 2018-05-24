/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface HelpAndFeedback {
      'background': string;
      'color': string;
    }
  }

  interface HTMLHelpAndFeedbackElement extends StencilComponents.HelpAndFeedback, HTMLStencilElement {}

  var HTMLHelpAndFeedbackElement: {
    prototype: HTMLHelpAndFeedbackElement;
    new (): HTMLHelpAndFeedbackElement;
  };
  interface HTMLElementTagNameMap {
    'help-and-feedback': HTMLHelpAndFeedbackElement;
  }
  interface ElementTagNameMap {
    'help-and-feedback': HTMLHelpAndFeedbackElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'help-and-feedback': JSXElements.HelpAndFeedbackAttributes;
    }
  }
  namespace JSXElements {
    export interface HelpAndFeedbackAttributes extends HTMLAttributes {
      'background'?: string;
      'color'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ModalHelpAndFeedback {
      'backgroundColor': string;
      'isModalOpen': boolean;
    }
  }

  interface HTMLModalHelpAndFeedbackElement extends StencilComponents.ModalHelpAndFeedback, HTMLStencilElement {}

  var HTMLModalHelpAndFeedbackElement: {
    prototype: HTMLModalHelpAndFeedbackElement;
    new (): HTMLModalHelpAndFeedbackElement;
  };
  interface HTMLElementTagNameMap {
    'modal-help-and-feedback': HTMLModalHelpAndFeedbackElement;
  }
  interface ElementTagNameMap {
    'modal-help-and-feedback': HTMLModalHelpAndFeedbackElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'modal-help-and-feedback': JSXElements.ModalHelpAndFeedbackAttributes;
    }
  }
  namespace JSXElements {
    export interface ModalHelpAndFeedbackAttributes extends HTMLAttributes {
      'backgroundColor'?: string;
      'isModalOpen'?: boolean;
      'onClosedModal'?: (event: CustomEvent) => void;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;
import { Component, Element } from '@stencil/core';

@Component({
  tag: 'help-and-feedback',
  styleUrl: 'help-and-feedback.scss',
  shadow: true
})

export class HelpAndFeedback {

    @Element() iconButtonElement: HTMLElement;
  
    render() {
        return (
            <button>help</button>
        );
    }
}
import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'help-and-feedback',
  styleUrl: 'help-and-feedback.scss'
})

export class HelpAndFeedback {

    @Element() iconButtonElement: HTMLElement;
    @Prop() color: string;

    setColors(color: string) {
        // Set the element's colors
        this.iconButtonElement.style.color = color;
    }

    componentWillLoad() {
        this.setColors(this.color);    
    }
  
    render() {
        return (
            <button class='material icon-button'>
                <i class='material-icons'>help</i>
            </button>
        );
    }
}
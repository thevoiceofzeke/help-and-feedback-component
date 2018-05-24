import { Component, Prop, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'help-and-feedback',
  styleUrl: 'help-and-feedback.scss'
})

export class HelpAndFeedback {

    @Element() iconButtonElement: HTMLElement;
    @Prop() color: string;
    @Prop() background: string;
    @State() isModalOpen: boolean = false;
    
    // Event listener
    @Listen('closedModal')
        closedModalHandler(event: UIEvent) {
            console.log('got close modal event');
            console.log(event);
            this.hideModal();
    }

    setColors(color: string) {
        // Set the element's colors
        this.iconButtonElement.style.color = color;
    }

    showModal(event: UIEvent) {
        console.log('clicked the button');
        // Show a modal with static information
        if (this.isModalOpen) {
            event.preventDefault();
        } else {
            this.isModalOpen = true;
            // TODO: Set height of modal container to the window height
        }
    }

    hideModal() {
        // Hide it
        this.isModalOpen = false;
    }

    componentWillLoad() {
        this.setColors(this.color);    
    }
  
    render() {
        return ([
            <button aria-label='help and feedback' class='material icon-button' onClick={ (event: UIEvent) => this.showModal(event) }>
                <i class='material-icons'>help</i>
            </button>,
            <div>
                {this.isModalOpen
                    ? <modal-help-and-feedback onClick={ () => this.hideModal() } 
                        class='modal-container' 
                        is-modal-open='true' 
                        background-color={this.background}>
                    </modal-help-and-feedback>
                    : <modal-help-and-feedback is-modal-open='false' background-color={this.background}></modal-help-and-feedback>
                }
            </div>
        ]);
    }
}
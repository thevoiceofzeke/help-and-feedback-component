import { Component, Prop, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'help-and-feedback',
  styleUrl: 'help-and-feedback.scss'
})

export class HelpAndFeedback {

    // Decorators
    @Element() iconButtonElement: HTMLElement;
    @Prop() color: string;
    @Prop() background: string;
    @Prop() dataUrl: string;
    @State() isModalOpen: boolean = false;

    // Variables
    content = {};
    
    // Event listener
    @Listen('closedModal')
        closedModalHandler() {
            this.hideModal();
    }

    setColors(color: string) {
        // Set the element's colors
        this.iconButtonElement.style.color = color;
    }

    showModal(event: UIEvent) {
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
        if (this.dataUrl) {
            return fetch(this.dataUrl)
            .then(response => response.json())
            .then(data => {
                if (data.content) {
                    this.content = data.content;
                }   
          });
        }
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
                        background-color={this.background}
                        content={this.content}>
                    </modal-help-and-feedback>
                    : <modal-help-and-feedback is-modal-open='false' 
                        background-color={this.background} 
                        content={this.content}>
                    </modal-help-and-feedback>
                }
            </div>
        ]);
    }
}
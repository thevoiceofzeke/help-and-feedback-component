import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'modal-help-and-feedback',
  styleUrl: 'modal.scss'
})

export class ModalHelpAndFeedback {

    @Element() modalElement: HTMLElement;
    @Prop({ mutable: true }) isModalOpen: boolean;
    @Prop() backgroundColor: string;
    @Event() closedModal: EventEmitter;

    // setColors(background: string) {
    //     // Set the toolbar's background color
    // }

    componentWillLoad() {
        // this.setColors(this.backgroundColor);    
    }

    closeModal(event: UIEvent) {
        console.log('emitting closure');
        this.closedModal.emit(event);
    }

    render() {
        if (this.isModalOpen) {
            return (
                <div class='modal__help-and-feedback open'>
                    <div class='modal__toolbar'>
                        <h1 class='modal__title'>
                            Help and feedback
                        </h1>
                        <button class='material icon-button' aria-label='close help and feedback' onClick={ (event: UIEvent) => this.closeModal(event) }>
                            <i class='material-icons'>close</i>
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div class='modal__help-and-feedback'></div>
            );
        }
    }
}
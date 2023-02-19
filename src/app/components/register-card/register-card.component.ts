import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent {
  @Input() title: string = '';
  @Output() clickEvent: EventEmitter<any> = new EventEmitter;

  emitEvent() {
    this.clickEvent.emit();
  }

}

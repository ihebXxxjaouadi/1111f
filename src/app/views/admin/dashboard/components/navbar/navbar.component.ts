import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activated:boolean = false;
  activatedParDate:boolean = false;
  @Output() getSetEvent = new EventEmitter<boolean>() ;
  @Output() getsetactivatedParDateView = new EventEmitter<boolean>() ;

  setFirstView(): void {
    this.activated = true
    this.activatedParDate = false
    this.getsetactivatedParDateView.emit(false)

    this.getSetEvent.emit(this.activated)

  }


  setSecondView(): void {
    this.activated = false
    this.getSetEvent.emit(this.activated)

  }

  setactivatedParDateView(): void {
    
    if (this.activated == false ) {

      this.activatedParDate = !this.activatedParDate
      this.getsetactivatedParDateView.emit(this.activatedParDate)
    }

  }
}

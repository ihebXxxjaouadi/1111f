import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  visible = false ;
  visibleParDate = false ;

  setEvent($event:boolean): void {
    this.visible = $event
  }

  setEventViewStatParDate($event:boolean): void {
    this.visibleParDate = $event
  }
  
}

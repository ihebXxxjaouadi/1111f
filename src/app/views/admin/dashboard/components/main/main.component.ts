import { Component, Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Input() visible:boolean = false ;

  @Input() visibleParDate:boolean = false;

  public nbRecTraiter: any ;
  public nbRecNonTraiter: any ;

  constructor(private http:HttpClient) {}
  ngOnInit(): void {

    this.getRec()
    

  }

  getRec(): void {
    this.http.get('/api/SpringMVC/Rec/reclam/TRAITER').subscribe((data) => {
      this.nbRecTraiter = Object.keys(data).length
      console.log(this.nbRecTraiter)

    })
    this.http.get('/api/SpringMVC/Rec/reclam/NONTRAITER').subscribe((data) => {
      this.nbRecNonTraiter = Object.keys(data).length

      console.log(this.nbRecNonTraiter)
    })
  }

}

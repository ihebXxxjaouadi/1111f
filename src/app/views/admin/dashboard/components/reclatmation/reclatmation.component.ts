import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-reclatmation',
  templateUrl: './reclatmation.component.html',
  styleUrls: ['./reclatmation.component.scss']
})
export class ReclatmationComponent {
  popUpView:boolean = false ;
  popUpViewData:any = {} ;


  public reclamation: any ;

  public nonTraiter: any ;
  public traiter: any ;
  
  public tnt: boolean = true ;
  public isNot: boolean = false ;

  constructor(private http:HttpClient) {}
  ngOnInit(): void {

    this.getRecTraiter()
    this.getRecNonTraiter()
    
  }


  showPassDataView(ri:any) :any {
    this.popUpView = !this.popUpView ;
    console.log(this.popUpViewData, ri)
    this.popUpViewData = ri;
    console.log(this.popUpViewData, ri)
      
  }

  setConfirmedEtat(popUpViewData:any) :void {
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    this.http.post(`/api/SpringMVC/Rec/${popUpViewData.idRec}/send?replays=1&idMod=5`, {}, {headers: header}).subscribe()
    this.isNot = true
    
    setTimeout(() => {
      location.reload()
    }, 2000);
  }

  setTraiterView() :void {
    this.tnt = true
    this.reclamation = this.traiter
  }

  setNTraiterView() :void {
    this.tnt = false
    this.reclamation = this.nonTraiter

  }

  getRecNonTraiter(): void {
    
    this.http.get('/api/SpringMVC/Rec/reclam/NONTRAITER').subscribe((data) => {
      this.nonTraiter = data

    })
  }

  getRecTraiter(): void {
    
    this.http.get('/api/SpringMVC/Rec/reclam/TRAITER').subscribe((data) => {
      this.traiter = data
      this.reclamation = data

    })
  }

}


import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import axios from 'axios';
@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.scss']
})
export class AddReclamationComponent {


  // nmCntr:string = '' ;
  livCntr:string = '' ;
  // pnmCntr:string = '' ;
  emailCntr:string = '' ;
  addCntr:string = '' ;
  refCntr:string = '' ;
  recCntr:string = '' ;
  reclamation:any = [] ;
  reclamationN:any = [] ;
  recdata:any = [] ;
  recdataLivName:any = [] ;
  recdataProduitReference:any = [] ;

  // nm:any = '' ;
  // pnm:any = '' ;
  liv:any = '' ;
  email:any = '' ;
  add:any = '' ;
  ref:any = '' ;
  rec:any = '' ;

  isNot:boolean = false ;


  constructor(private http:HttpClient) {}
  ngOnInit(): void {

    this.getRecTraiter()
    this.getRecNonTraiter()
    setTimeout(() => {
      this.recdata = [...this.reclamation, ...this.reclamationN] 
console.log('fianl',[...this.reclamation, ...this.reclamationN])
      this.getAllLivName()
      this.getAllProduitReference()
    }, 500);
  }
  
  changerecdataLivName(e:any) :void {
    this.liv = e.target.value
  }

  changerecdataRef(e:any) :void {
    this.ref = e.target.value
  }


  // get livreur name


  getAllLivName() :void {
    let newNomUsers = []
    for (let i = 0;  i < this.recdata.length ; i++) {
      console.log(this.recdata[i].livreur.nomUser)
      if (newNomUsers.length == 0) {
        newNomUsers.push({"nm": this.recdata[i].livreur.nomUser, "id" : this.recdata[i].livreur.idUser})
      }  
      else {
        for (let j = 0;  j < newNomUsers.length ; j++) {
          if (newNomUsers[j].id !== this.recdata[i].livreur.idUser ) {
            newNomUsers.push({"nm": this.recdata[i].livreur.nomUser, "id" : this.recdata[i].livreur.idUser})
          }
      }
    }

  }
  console.log('newNomUsers',newNomUsers)
  this.recdataLivName = newNomUsers
  }

  // get produit reference

  getAllProduitReference() :void {
    let newRef = []
    for (let i = 0;  i < this.recdata.length ; i++) {
      if (newRef.length == 0) {

        newRef.push({"ref": this.recdata[i].produit.ref, "id" : this.recdata[i].produit.idProduit})
      }  
      else {
        for (let j = 0;  j < newRef.length ; j++) {
          if (newRef[j].ref !== this.recdata[i].produit.ref ) {

            newRef.push({"ref": this.recdata[i].produit.ref, "id" : this.recdata[i].produit.idProduit})
          }
      }
    }

  }
  this.recdataProduitReference = newRef
  }
  
  // get all reclamation traiter and non traiter


  getRecNonTraiter(): void {
    
    this.http.get('/api/SpringMVC/Rec/reclam/NONTRAITER').subscribe((data) => {
      this.reclamationN = data
    })
  }

  getRecTraiter(): void {
    
    this.http.get('/api/SpringMVC/Rec/reclam/TRAITER').subscribe((data) => {
      this.reclamation = data

    })
  }

  // fillnm(val:any) : void {
  //   this.nm = val ;
  // }
  fillliv(val:any) : void {
    this.liv = val ;
  }

  // fillpnm(val:any) : void {
  //   this.pnm = val ;
  // }


  fillemail(val:any) : void {
    this.email = val ;
  }


  filladd(val:any) : void {
    this.add = val ;
  }


  fillref(val:any) : void {
    this.ref = val ;
  }


  fillrec(val:any) : void {
    this.rec = val ;
  }
  checkSendForm() : void {
    // if (this.nm.length < 1) {
    //   this.nmCntr = "nom au minimum de 4 caractere"
    // }
    // else {
    //   this.nmCntr = ""

    // }
    if (this.liv.length < 1) {
      this.livCntr = "selectioner la livreur"
    }
    else {
      this.livCntr = ""

    }
    // if (this.pnm.length < 4) {
    //   this.pnmCntr = "prenom au minimum de 4 caractere"
    // }
    // else {
    //   this.pnmCntr = ""

    // }

    if (this.rec ==  "esprit" || this.rec == 'ESPRIT') {
      this.recCntr = "description contient un mot interdit"
      alert("description contient un mot interdit")
      
    }
    else {
      this.recCntr = ""

    }

    if (this.email.length < 6) {
      this.emailCntr   = "entrer email valider"
    }
    else {
      this.emailCntr = ""

    }


    if (this.add.length < 1) {
      this.addCntr = "entrer adresse vailder"
    }
    else {
      this.addCntr = ""

    }

    if (this.rec.length < 3) {
      this.recCntr = "entrer votre reclamation au minimun de 3 mots"
    }
    else {
      this.recCntr = ""

    }

    if (this.ref.length < 1) {
      this.refCntr = "entrer reference valider"
    }
    else {
      this.refCntr = ""

    }





    if (this.rec.length >= 3  && this.email.length >= 4 &&  this.add.length >= 1 && this.ref.length >= 1 && this.liv.length >= 1 ) {


      // const header = new HttpHeaders({
      //   contentType: 'application/json'
      // })
      


      let body = {
        "text": this.rec,
        "produit": this.ref,
        "livreur": this.liv,
        "acheteur": 1
      }
      console.log(body)
      
      axios.post('/api/SpringMVC/Rec/', body).then(
        res => {
          console.log(res)
          this.isNot = true

        } 

      ).catch(err=> {
        console.log(err)
        alert('invalide produit ou livreur  ')

      })

      

      // this.http.post('/api/SpringMVC/Rec/', body, {headers: header}).subscribe((data) => {
      //   console.log(data)
      //   console.log(body)
      // })
      
      setTimeout(() => {
        location.reload()
        
      }, 1500);
    }
  }
}

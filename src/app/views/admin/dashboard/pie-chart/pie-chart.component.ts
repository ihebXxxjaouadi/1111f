import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  public chart: any;
  @Input() visibleParDate: boolean = false;
  public nbRecTraiter: any;
  public recTraiter: any;
  public nbRecNonTraiter: any;
  public recNonTraiter: any;
  public date: any;
  public fitredRec: any;
  public fitrednbRecTraiter: any;
  public fitrednbRecNonTraiter: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getRec();
  console.log(localStorage)

    setTimeout(() => {
      console.log(this.nbRecTraiter);
      console.log(this.nbRecNonTraiter);
      this.createChart();
    }, 1000);
  }

  // get chart with date
  
  getChartWithDate($e: any): void {
    this.date = $e.target.value;

    console.log(this.date);

    console.log(this.recNonTraiter);
    let nbNT = 0;
    for (let i = 0; i < this.nbRecNonTraiter; i++) {
      console.log(this.date);

      console.log(this.recNonTraiter[i].date);
      if (this.date == this.recNonTraiter[i].date) {
        console.log(this.date);
        console.log("this.recNonTraiter[i].date");

        console.log(this.recNonTraiter[i].date);
        nbNT += 1;
      }
    }
    let nbT = 0;

    for (let i = 0; i < this.nbRecTraiter; i++) {
      console.log(this.date);

      console.log(this.recTraiter[i].date);
      if (this.date == this.recTraiter[i].date) {
        console.log(this.date);

        console.log("this.recTraiter[i].date");
        console.log(this.recTraiter[i].date);
        nbT += 1;
      }
    }

    console.log(nbNT);
    console.log(nbT);

    localStorage.setItem("nbT", nbT.toString());
    localStorage.setItem("nbNT", nbNT.toString());
    location.reload()

  }

  getRec(): void {
    this.http.get('/api/SpringMVC/Rec/reclam/TRAITER').subscribe((data) => {
      this.nbRecTraiter = Object.keys(data).length;
      this.recTraiter = data;
      console.log(this.nbRecTraiter);
    });
    this.http.get('/api/SpringMVC/Rec/reclam/NONTRAITER').subscribe((data) => {
      this.nbRecNonTraiter = Object.keys(data).length;
      this.recNonTraiter = data;

      console.log(this.nbRecNonTraiter);

    });
  }
  reload() : void {

    localStorage.removeItem('nbT')
    localStorage.removeItem('nbNT')

    location.reload()
  }
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['traiter', 'non traiter'],
        datasets: [
          {
            label: 'les reclamation traiter et non traiter',
            data: [localStorage.getItem('nbT') ? localStorage.getItem('nbT') : this.nbRecTraiter,localStorage.getItem('nbNT') ? localStorage.getItem('nbNT') : this.nbRecNonTraiter],
            backgroundColor: ['#A6D0DD', '#FF6969'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}

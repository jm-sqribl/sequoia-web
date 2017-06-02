import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../layouts/shared-service';

@Component({
  selector: 'page-dashboard-2',
  templateUrl: './dashboard-2.component.html',
  styleUrls: ['./dashboard-2.component.scss']
})
export class PageDashboard2Component implements OnInit {
  pageTitle: string = 'Dashboard';
  lat: number = 50.4664212;
  lng: number = 30.6;
  tableColumns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' },
    { name: 'Age' }
  ];
  tableRows = [];
  loadingIndicator: boolean = true;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
    this.fetch((data) => {
      this.tableRows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  ngOnInit(){
    let mymap: any = L.map('map').setView([this.lat, this.lng], 13);
    let circle:any = L.circle([this.lat, this.lng], {
      color: '#dc143c',
      fillColor: '#dc143c',
      fillOpacity: 0.2,
      radius: 800
    }).addTo(mymap);

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmV4dC1pdGVtIiwiYSI6ImNqMDFlYWRqeTAyNzEyd3FuNjQxdmVvMjgifQ.Ff8pEWrzeJ3uipr78e69uw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(mymap);
  }

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    responsiveAnimationDuration: 500
  };
  public barChartLabels: string[] = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017'
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {
      data: [59, 80, 81, 56, 55, 40],
      label: 'Angular JS',
      borderWidth: 1,
      pointRadius: 1
    },
    {
      data: [48, 40, 19, 86, 27, 90],
      label: 'React JS',
      borderWidth: 1,
      pointRadius: 1
    }
  ];

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/table-data.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  // Pie
  public pieChartLabels: string[] = [
    'Angular',
    'PHP',
    'HTML'
  ];
  public pieChartData: any[] = [
    300,
    500,
    100
  ];
  public pieChartColors: any[] = [
    {
      backgroundColor: [
        "#778391",
        "#5dade0",
        "#3c4e62"
      ],
    }
  ];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    elements: {
      arc : {
        borderWidth: 0
      }
    },
    tooltips: false
  };

  //Doughnut
  public doughnutChartLabels: string[] = [
    'Angular',
    'PHP',
    'HTML'
  ];
  public doughnutChartData: number[] = [
    350,
    450,
    100
  ];
  public doughnutChartColors: any[] = [
    {
      backgroundColor: [
        "#778391",
        "#ff8c00",
        "#3c4e62"
      ],
    }
  ];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartOptions: any = {
    elements: {
      arc : {
        borderWidth: 0
      }
    },
    tooltips: false
  };

  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Angular',
    'PHP',
    'HTML'
  ];
  public polarAreaChartData: number[] = [
    300,
    400,
    500
  ];
  public polarAreaChartColors: any[] = [
    {
      backgroundColor: [
        "#778391",
        "#dc143c",
        "#3c4e62"
      ],
    }
  ];
  public polarAreaChartType: string = 'polarArea';
  public polarAreaChartOptions: any = {
    elements: {
      arc : {
        borderWidth: 0
      }
    },
    tooltips: false
  };
}

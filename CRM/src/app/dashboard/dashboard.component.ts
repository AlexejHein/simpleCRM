import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selected = 'option2';

  constructor() {
  }
  ngOnInit() {
    this.lineChart();
    this.doughnutChart();
  }
  lineChart(){
    let lineChart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Sails',
          data: [2, 6, 1, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  doughnutChart() {
    let doughnutChart = new Chart("doughnutChart", {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow',
          'Pink'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 40],
          backgroundColor: [
            '#3f51b5',
            '#4caf50',
            '#ff9800',
            '#e91e63'
          ],
          hoverOffset: 4
        }]
      },
    });
  }


}

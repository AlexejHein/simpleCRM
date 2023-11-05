import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { UserService} from "../services/user.service";
import { TodosService} from "../services/todos.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selected = 'option2';
  users: any[] = [];
  todos: any[] = [];

  constructor(private userService: UserService, private todosService: TodosService) {
    console.log(this.users.length);
  }
  ngOnInit() {
    this.lineChart();
    this.doughnutChart();
    this.userService.currentUsers.subscribe(users => this.users = users);
    this.todosService.currentTodos.subscribe(todos => this.todos = todos);
  }

  lineChart(){
    let lineChart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Sales',
          data: [12, 1, 11, 15, 12, 13],
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
          'Sales',
          'Todos',
          'Customers',
          'Rockets',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [30, 5, 10, 4],
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

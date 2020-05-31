import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Project } from './app.model.Project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pwa-demo';

  projects: Array<Project>;
  constructor(private apiService: DataService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.fetch();
    this.projects = this.apiService.projects;
  }
}

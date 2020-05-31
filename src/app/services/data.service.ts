import { Injectable, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../app.model.Project';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL = 'http://localhost:8080/listOfProjects/Angular';

  projects: Array<Project> = [];

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  /* fetch(): Observable<Project[]> {
    const headerValues = {
      userID: 'subhrajit',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    return <Observable<Project[]>>this.httpClient.get(this.baseURL, headerValues);
  } */

  fetch() {
    const headerValues = {
      userID: 'subhrajit',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    this.httpClient.get<any>(this.baseURL, { headers: headerValues }).subscribe(data => {
      console.log(data);
      let proj: Project;
      for (const index in data) {
        console.log(data[index].name);
        proj = new Project(data[index].name, data[index].description, this.sanitize(data[index].gitURL), data[index].markdown);
        this.projects.push(proj);
      }
    });
  }

  sanitize(url: string) {
    const santaizedURLResource = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log("Sanatized URL ", santaizedURLResource);
    return santaizedURLResource;
  }
}

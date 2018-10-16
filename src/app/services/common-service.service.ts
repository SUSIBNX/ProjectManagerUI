import { Component, NgModule, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



var apiURL = "http://localhost/ProjectManagerService/api/";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class CommonServiceService {

  constructor(public http: HttpClient) { }

  getParentTask() {
    return this.http.get(apiURL + "Task/GetAllParentTask");
  }

  getTaskManager() {
    return this.http.get(apiURL + "Task/GetAll");
  }

  submitTask(task) {
    return this.http.post(apiURL + "Task/Manage", task, httpOptions);
  }

  updateEndTask(task) {
    return this.http.post(apiURL + "Task/End", task);
  }

  getProjectDetails() {
    return this.http.get(apiURL + "Project/GetAll");
  }

  
  submitProject(project) {
    return this.http.post(apiURL + "Project/Manage", project, httpOptions);
  }

  suspendProject(project) {
    return this.http.post(apiURL + "Project/Suspend", project, httpOptions);
  }

  getManagerDetails() {
    return this.http.get(apiURL + "User/GetAll");
  }

  getUserDetails() {
    return this.http.get(apiURL + "User/GetAll");
  }

  submitUser(user) {
    return this.http.post(apiURL + "User/Manage", user, httpOptions);
  }

  deleteUser(user) {
    return this.http.post(apiURL + "User/Delete", user, httpOptions);
  }
}

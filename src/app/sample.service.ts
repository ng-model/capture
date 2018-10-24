import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }
  url = ' https://www.jsonstore.io/ad39e35646fbc483bf1fb8e9572658ab86588f9e400efeb0d43eecd5247b8c75';

  myData() {
    return this.http.get(`${this.url}/chart`);
  }
}

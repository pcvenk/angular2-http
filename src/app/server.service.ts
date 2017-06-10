import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application.json'});
    return this.http.post('https://ng-http-a127b.firebaseio.com/data.json', servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://ng-http-a127b.firebaseio.com/data.json');
  }
}

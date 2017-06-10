import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application.json'});
    // return this.http.post('https://ng-http-a127b.firebaseio.com/data.json', servers, {headers: headers});

    return this.http.put('https://ng-http-a127b.firebaseio.com/data.json', servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://ng-http-a127b.firebaseio.com/data.json')
    // instead of transforming the data with the request made, you can use the map function
    // (built with rxjs/Rx package and transform data in a centralized space via a service
      .map(
        (res: Response) => {
          const servers = res.json();
          return servers;
        }
      );
  }
}

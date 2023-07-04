import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      // url: `https://mandalorian-store.netlify.app/api${req.url}`,
      // url: `https://api.adviceslip.com/advice/api`,
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      }),
    });

    // const apiReq = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin','https://my-json-server.typicode.com') });
  //   req = req.clone({
  //     setHeaders: {
  //         'Content-Type': 'application/json; charset=utf-8',
  //         Accept: 'application/json'
  //     }
  // });

    return next.handle(apiReq);
  }
}

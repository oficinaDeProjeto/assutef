import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AuthService} from './auth/auth.service';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(public authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.authService.getAuthorization();

        const authReq = req.clone({
            headers:
                req.headers
                    .set('Authorization', `bearer ${token}`)
                    .set('Content-Type', 'application/json')
        });

        const started = Date.now();

        return next
            .handle(authReq)
            .do(event => {
                if (environment.showLogRequestTime) {
                    if (event instanceof HttpResponse) {
                        const elapsed = Date.now() - started;
                        console.log(`>>>>> Request for ${req.urlWithParams} took ${elapsed} ms.`);
                    }
                }
            }, err => {
                if (err.status === 401) {
                    console.log(`>>>>> ${err.status}`);
                    this.authService.logoutAndToHome();
                }
            });
    }

}

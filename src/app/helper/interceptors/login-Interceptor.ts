import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent} from '@angular/common/http';
import { Observable} from 'rxjs';
import { TokenService } from '../services/token/token.service';

const TOKEN_HEADER_KEY = 'access-token';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) { }

    /**
     * This function will intercept the login request and clone the request and set the header with token
     * @param req 
     * @param next 
     */
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        let loginReq = req;
        if (this.tokenService.getToken() != null) {
            loginReq = req.clone({withCredentials:true, headers: req.headers.set(TOKEN_HEADER_KEY, this.tokenService.getToken()) });
        }
        return next.handle(loginReq);
    }
}
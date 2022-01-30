import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { TokenService } from "../services/token/token.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private router: Router) { }
  /**
   * This will intercept the error from the response
   * @param req
   * @param next
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return <any>next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.tokenService.signOut();
          this.router.navigateByUrl("/login/user");
        } else if (err.status === 403) {
          this.router.navigateByUrl("/errors/403");
        } else if (err.status === 503) {
          this.router.navigateByUrl("/errors/maintenance");
        }
        const error = err.error || err.statusText;
        return throwError(error);
      })
    );
  }
}

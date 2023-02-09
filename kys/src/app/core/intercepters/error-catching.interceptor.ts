import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs'; import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackbar: MatSnackBar) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('this is client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            this._snackbar.open(`${error.error.message}`, 'Ok' , {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration : 3000,
            });
            console.log('this is a server side error');
            errorMsg = `Error Code: ${error.status} , Message: ${error.message}`;
          }
          return throwError(errorMsg);
        })
      )
  }
}

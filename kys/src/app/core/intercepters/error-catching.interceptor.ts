import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { LoadingService } from '../services/loading.service';


@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private _snackbar: MatSnackBar, private loader: LoadingService) {

  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request)
      .pipe(
        finalize(() => {
          this.loader.hide();
        }),
        tap(e => {
          if (request.method == "POST" || request.method == "PUT")
            if (e instanceof HttpResponse && e.status == 200) {
              this._snackbar.open('Saved successfully.', 'Ok', { duration: 5000, panelClass: 'successSnack' });
            }
        }),
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            this._snackbar.open(`${error.error.message}`, 'Ok', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 5000,
            });
            errorMsg = `Error: ${error.error.message}`;
          } else {
            this._snackbar.open(`${error.status} ${error.message}`, 'Ok', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 5000,
            });
            errorMsg = `Error Code: ${error.status} , Message: ${error.message}`;
          }
          return throwError(errorMsg);
        })
      )
  }



}

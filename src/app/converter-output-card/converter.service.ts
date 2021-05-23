import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Response } from "./response";
import { catchError } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  getLatestExchangeRates(baseCurrency: string): Observable<Response> {
    return this.http.get<Response>('http://api.exchangeratesapi.io/v1/latest?access_key=a9c3e9d4df9a5fdc3ceba21219f70e03&base='+baseCurrency)
            .pipe(
              catchError(this.handleError())
            );
  }

  getLatestExchangeSymbols(): Observable<any> {
    return this.http.get<Response>('http://api.exchangeratesapi.io/v1/symbols?access_key=a9c3e9d4df9a5fdc3ceba21219f70e03')
            .pipe(
              catchError(this.handleError())
            );
  }

  private handleError() {
    return (error: HttpErrorResponse) => {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error.error.code}`);
          this._snackBar.open(error.error.error.code, 'Ok',{
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }
  }

}

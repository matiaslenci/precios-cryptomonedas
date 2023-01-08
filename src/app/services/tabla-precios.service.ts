import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, retry, throwError, catchError } from 'rxjs';
import { ICoins } from '../models/coins.interface';

@Injectable({
  providedIn: 'root',
})
export class TablaPreciosService {
  constructor(private http: HttpClient) {}

  //? Gestion de errores
  handleError(error: HttpErrorResponse) {
    if (error.status) {
      console.log(`Ha ocurrido un error: ${error.error}`);
    } else {
      console.log(
        `Error en el backend: ${error.status}. El error de la respuesta es: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Error en la petición de lista de criptomonedas')
    );
  }

  //? Peticion GET
  obtenerListaCoins(): Observable<ICoins[]> {
    return this.http
      .get<ICoins[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .pipe(retry(2));
  }
}

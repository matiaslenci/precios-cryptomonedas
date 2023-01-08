import { Component, OnInit } from '@angular/core';
import { ICoins } from 'src/app/models/coins.interface';
//import { MatTableDataSource } from '@angular/material/table';

import { TablaPreciosService } from 'src/app/services/tabla-precios.service';

@Component({
  selector: 'app-tabla-precios',
  templateUrl: './tabla-precios.component.html',
  styleUrls: ['./tabla-precios.component.scss'],
})
export class TablaPreciosComponent implements OnInit  {
  //? Tabla
  dataSource: ICoins[] = [];
  displayedColumns: string[] = [
    'image',
    'name',
    'current_price',
    'price_change_percentage_24h',
    'total_volume',
  ];

  //?Filtro
  value: string = '';
  dataFilter: ICoins[] = [];

  constructor(private tablaPreciosService: TablaPreciosService) {}

  ngOnInit(): void {
    this.subscripcionServicio();
  }

  subscripcionServicio() {
    this.tablaPreciosService.obtenerListaCoins().subscribe({
      next: (response: ICoins[]) => {
        this.dataSource = response;
        this.dataFilter = response;

        
      },
      error: (error: any) => console.error(`${error}`),

      complete: () => console.info('Petición completada'),
    });
  }
  //?Filtro
  limpiarFiltro() {
    this.value = '';
  this.dataFilter= this.dataSource
  }
  /**
   *
   */
  buscarMoneda() {

    this.dataFilter = this.dataSource.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.value.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.value.toLowerCase())
    );
  }
}

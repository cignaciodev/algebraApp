import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-number',
  templateUrl: './convert-number.component.html',
  styleUrls: ['./convert-number.component.css'],
})
export class ConvertNumberComponent implements OnInit {
  bases: number[] = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
  ];
  basesConvertir: number[] = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
  ];
  baseSeleccion: string;
  baseConvertir: string;
  numero: string;
  resultado: string;

  constructor() {}

  ngOnInit(): void {}

  convertir(numero: string, base: string, baseConverter: string) {
    let baseNumero = this.cambiarANumero(base);
    let baseConvertir = this.cambiarANumero(baseConverter);
    let numeroBaseDiez = 0;
    let numeroConvertido = 0;
    if(!numero || !base || !baseConverter){
      alert('Debe ingresar los campos');
    }else {
      if (baseNumero <= 10 || baseConvertir <= 10) { //base numero 2 a 10 , base convertir 2 a 10
        numeroBaseDiez = this.convertirBaseDiez(numero, baseNumero);
        numeroConvertido = this.convertirBaseDiezQ(numeroBaseDiez, baseConvertir); 
        this.resultado = numeroConvertido.toString();
      } else { // base numero 11 12 13... 
          numeroBaseDiez = this.convertirBaseDiez(numero,baseNumero); 
          if(baseConvertir < 10 || baseNumero >= 10){
            numeroConvertido = this.convertirBaseDiezQ(numeroBaseDiez, baseConvertir);
            this.resultado = numeroConvertido.toString();
          } else {
            numeroConvertido = this.convertirBaseDiezQ(numeroBaseDiez,baseConvertir); 
            this.resultado = numeroConvertido.toString();
            console.log(numeroConvertido.toString());
            if(baseConvertir >= 10 ){ //14
              this.resultado = numeroBaseDiez.toString(baseConvertir);
            }
          }   
      }
    }

  }
  /**
   * Convierte un numero en base 10 a base R
   * @param numero == en base 10
   * @param baseConvertir == R
   * @returns
   */
  convertirBaseDiezQ(numero: number, baseConvertir: number): number {
    let restBin = [];
    while (numero > 1) {
      restBin.push(numero % baseConvertir);
      numero = Math.floor(numero / baseConvertir);
    }
    restBin.push(numero);
    numero = parseInt(restBin.reverse().join(''));
    return numero;
  }
  /**
   * Convierte un numero de base Q a un numero base 10
   * @param numero == base 2,3,etc...
   * @param baseNumero == base 10
   * @returns
   */
  convertirBaseDiez(numero: string, baseNumero: number): number {
    let suma = 0;
    for (let i = 0; i < numero.length; i++) {
      suma += +numero[i] * baseNumero ** (numero.length - 1 - i);
    }
    return suma;
  }
  /**
   * Cambia un numero en string a entero
   * @param numero 
   * @returns 
   */
  cambiarANumero(numero: string): number {
    let numeroEntero = parseInt(numero);
    return numeroEntero;
  }
}

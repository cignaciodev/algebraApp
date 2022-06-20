import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-number',
  templateUrl: './sum-number.component.html',
  styleUrls: ['./sum-number.component.css'],
})
export class SumNumberComponent implements OnInit {
  numeroA: string;
  numeroB: string;
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
  resultado: string;
  constructor() {}
  ngOnInit(): void {}

  convertirResultado(numeroA: string,numeroB: string,baseNumero: string,baseConvertir: string){
    let baseSuma = this.cambiarANumero(baseNumero);
    let numero1BaseDiez = this.cambiarANumero(numeroA);
    let numero2BaseDiez = this.cambiarANumero(numeroB);
    let baseConversion = this.cambiarANumero(baseConvertir);
    let resultado = 0;

    if(!numeroA || !numeroB || !baseNumero || !baseConvertir ){
        alert('Debe ingresar todos los campos');
    }else {
        numero1BaseDiez = this.convertirBaseDiez(numero1BaseDiez.toString(),baseSuma);
        numero2BaseDiez = this.convertirBaseDiez(numero2BaseDiez.toString(),baseSuma);
    if (baseSuma <= 10 || baseConversion <= 10) {
          resultado = this.suma(numero1BaseDiez, numero2BaseDiez);
          resultado = this.convertirBaseDiezQ(resultado, baseConversion);
          this.resultado = resultado.toString();
        } else {
          resultado = this.suma(numero1BaseDiez, numero2BaseDiez);
          if (baseConversion >= 10) { //baseconversion > 10
            this.resultado = resultado.toString(baseConversion);
          } else {
            resultado = this.convertirBaseDiezQ(resultado, baseConversion);
            this.resultado = resultado.toString();
          }
        }
    }
  }

  /**
   * Convierte un numero en base 10 a base R
   * @param numero 
   * @param baseNumero 
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
   * Convierte un numero de base Q a un numero base 10
   * @param numero 
   * @param baseConvertir 
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
   * Suma dos numeros en base 10
   * @param numeroA 
   * @param numeroB 
   * @returns 
   */
  suma(numeroA: number, numeroB: number): number {
    let resultado = 0;
    resultado = numeroA + numeroB;
    return resultado;
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

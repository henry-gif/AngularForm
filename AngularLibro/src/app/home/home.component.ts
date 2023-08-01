import { Component, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function filtrarCaracteres(caracter:AbstractControl){
  if (caracter.value== null) return null;
  var contenido=caracter.value;
  for (var i =0 ; i < contenido.lenght; i++) {
    var letra=contenido.substr(i,1);
    var valor=letra.charCodeAt(0);
    if (!(valor >=65 && valor<=90)){
      return {filtrarCaracteres:true};
    }
    
  }
  return null;

}

// @Directive({
//     selector:'filtrar-caracteres',
//     providers:[
//       {
//         provide: NG_VALIDATORS, multi: true, useValue:filtrarCaracteres

//       }
//     ]
// })

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
title:String="Formulario"

codigo: string = "165";
nombre: string="fdfd";
edad: number=15;
opcion:string="2";
comentario:string="";
sexo:string="hombre";
activar:boolean=true;


mostrarVar() {
 console.log(
   "Codigo("+this.codigo+")"+
   "Nombre("+this.nombre+")"+
   "Edad("+this.edad+")"+
   "Opcion("+this.opcion+")"+
   "Comentario("+this.comentario+")"+
   "Sexo("+this.sexo+")"+
   "Activar("+this.activar+")"
   );
 
 }
 onSubmit(){
   console.log("submit")
 }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = '061 formIntro';

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

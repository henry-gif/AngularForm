import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent {
 public title="form reactive";
 public form:FormGroup;
  constructor(private fcttrol:FormBuilder){
    this.form=fcttrol.group({
       codigo:['',Validators.compose([Validators.minLength(3),Validators.maxLength(6)
      ])],
      nombre:['',Validators.required]
      // aficiones:fcttrol.group({
      //   aficion1:'',
      //   aficion2:''
      // })

    })
  }
  onSubmit(){
    console.log("codigo ." +this.form.controls['codigo'].value);
    console.log("codigo ." +this.form.controls['nombre'].value);
    console.log(JSON.stringify(this.form.value));
    
  }
}

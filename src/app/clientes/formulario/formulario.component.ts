import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})


export class FormularioComponent implements OnInit {
  formCliente!: FormGroup;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      name: new FormControl(cliente.name),
      login: new FormControl(cliente.login),
      password: new FormControl(cliente.password),
      email: new FormControl(cliente.email),
      cell: new FormControl(cliente.cell),
          
    })
  }
  
  onSubmit() {
    console.log(this.formCliente.value);
    this.formCliente.reset(new Cliente());

 }
}

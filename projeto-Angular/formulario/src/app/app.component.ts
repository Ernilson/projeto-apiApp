import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormularioServiceService } from './service/formulario-service.service';
import { Cadastro } from './model/cadastro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

cadastros: Cadastro[] = [];

  cadastroForm = this.fb.group({
    id: [],
    nome: [null, Validators.required],
    email: [null, Validators.required],
    zap: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private formularioService: FormularioServiceService
  ) {
this.buscarCadastro();
  }

  buscarCadastro(){
    this.formularioService.buscarTodos().subscribe({
      next: (res) => {
        this.cadastros = res;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  criarCadastro(): Cadastro {
    const rawValues = this.cadastroForm.getRawValue();

    return {
      id: rawValues.id ?? 0,
      nome: rawValues.nome || '',
      email: rawValues.email || '',
      zap: rawValues.zap || ''
    };
  }

  salvar() {
    if(this.cadastroForm.valid){
    const cadastro = this.criarCadastro();
    console.log('cadastro', cadastro);
   
    this.formularioService.salvar(cadastro).subscribe(
      {
        next: (res) =>{
          alert("Cadastro Salvo com sucesso");
          this.cadastroForm.reset();
          this.buscarCadastro();
        },
        error: (error) =>{
          console.log(error);
        }
      }
      
    )
    }
  }

  remover(cadastro: Cadastro){
    const confirmar = confirm("Deseja realmente remover esse cadastro?" + cadastro.nome);
    if(confirmar){
      const id = cadastro.id ?? 0;
this.formularioService.remover(id).subscribe({
  next:(res) => {
    alert("Cadastro removido com sucesso")
  },
  error: (error) => {
    console.log(error);
  }
})
    }
  }
}

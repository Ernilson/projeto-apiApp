import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from '../model/cadastro';

@Injectable({
  providedIn: 'root'
})
export class FormularioServiceService {

  private _URL = environment.url + 'cadastro'
  constructor(private http: HttpClient) { }

  buscarTodos(){
    return this.http.get<Cadastro[]>(this._URL);
  }

  salvar(cadastro: Cadastro){
    return this.http.post<Cadastro>(this._URL, cadastro);
  }

  remover(id: number){
    return this.http.delete(`${this._URL}/${id}`)
  }

}

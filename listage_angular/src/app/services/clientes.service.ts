import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, max } from 'rxjs';
import { Pagination } from '../Pagination';
import { Cliente } from '../Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'https://localhost:7089/api/cliente';
  url = '';

  constructor(private http: HttpClient) { }

  // Listar todos os produtos
  getclientes(search: string, pageSize: number, pageIndex: number): Observable<Pagination> {
    let params = new HttpParams();

    params = params.set('search', search);

    params = params.set('pageSize', pageSize);
    params = params.set('pageIndex', pageIndex);

    return this.http.get<Pagination>(`${this.apiUrl}`, { params }).pipe(
      map(response => {
        return {
          totalItems: response.totalItems,
          items: response.items.map(cliente => ({
            id: cliente.id,
            nome: cliente.nome,
          }))
        }
      })
    );
  }

  getListOfClientes(): Observable<Cliente[]> {

    return this.http.get<Cliente[]>(`${this.apiUrl}/GetAllCustomers`).pipe(
      map(response => {
        return response
      })
    );
  }
  // Obter um produto por ID
  getclienteById(clienteId: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${clienteId}`);
  }

  // Adicionar um novo produto
  addcliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}`, cliente);
  }

  // Atualizar um produto existente
  updatecliente(clienteId: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/${clienteId}`, cliente);
  }

  // Excluir um produto por ID
  deletecliente(clienteId: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.apiUrl}/${clienteId}`);
  }
}

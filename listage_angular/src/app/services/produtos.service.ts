import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pagination } from '../Pagination';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private apiUrl = 'https://localhost:7089/api/produtos';

  constructor(private http: HttpClient) { }

  // Listar todos os produtos
  getProducts(search: string, pageSize: number, pageIndex: number): Observable<Pagination> {
    let params = new HttpParams();

    params = params.set('search', search);

    params = params.set('pageSize', pageSize);
    params = params.set('pageIndex', pageIndex);

    return this.http.get<Pagination>(`${this.apiUrl}`, { params }).pipe(
      map(response => {
        return {
          totalItems: response.totalItems,
          items: response.items.map(produto => ({
            id: produto.id,
            nome: produto.nome,
          }))
        }
      })
    );
  }

  // Obter um produto por ID
  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }

  // Adicionar um novo produto
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, product);
  }

  // Atualizar um produto existente
  updateProduct(productId: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${productId}`, product);
  }

  // Excluir um produto por ID
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${productId}`);
  }
}

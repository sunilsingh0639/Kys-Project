import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBookList() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/book/list', { 'headers': headers })
  }

  deleteBookByid(bookid: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/book/deleteById?id=' + bookid, { 'headers': headers })
  }

  addNewBook(body: any) {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.post('http://103.224.246.103:3004/book', body, { 'headers': headers })
  }

  editBook(body: any) {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.post('http://103.224.246.103:3004/book/update', body, { 'headers': headers })
  }


}

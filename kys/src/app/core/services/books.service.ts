import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBookList() {
    const headers = new HttpHeaders()
    return this.http.get(ApiEnpoints.books()+'list')
  }

  deleteBookByid(bookid: string) {
    return this.http.get(ApiEnpoints.books()+'deleteById?id=' + bookid)
  }

  addNewBook(body: any) {
    return this.http.post(ApiEnpoints.books(), body)
  }

  editBook(body: any) {
    return this.http.post(ApiEnpoints.books()+'update', body)
  }


}

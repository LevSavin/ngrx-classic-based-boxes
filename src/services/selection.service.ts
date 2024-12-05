import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IExample } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  private http = inject(HttpClient);
  getExample(id: number): Observable<IExample> {
    return this.http.get<IExample>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}

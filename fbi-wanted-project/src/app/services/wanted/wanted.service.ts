import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WantedService {
  private apiUrl = 'https://api.fbi.gov/wanted/v1/list';

  constructor(private http: HttpClient) { }

  getWantedList(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }
}

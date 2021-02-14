import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Api } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getTrending(category, period) {
    return this.http.get<Api>(`${env.apiUrl}trending/${category}/${period}?api_key=${env.apiKey}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card, CreateCard, UpdateCard } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class CardService {
  private readonly baseUrl = 'http://localhost:5023/api/cards';

  constructor(private http: HttpClient) {}

  getAll(sectionId?: number, featured?: boolean): Observable<Card[]> {
    let params = new HttpParams();
    if (sectionId !== undefined) params = params.set('sectionId', sectionId);
    if (featured !== undefined) params = params.set('featured', featured);
    return this.http.get<Card[]>(this.baseUrl, { params });
  }

  getById(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.baseUrl}/${id}`);
  }

  create(dto: CreateCard): Observable<Card> {
    return this.http.post<Card>(this.baseUrl, dto);
  }

  update(id: number, dto: UpdateCard): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
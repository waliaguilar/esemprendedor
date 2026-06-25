import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section, CreateSection, UpdateSection } from '../models/section.model';

@Injectable({ providedIn: 'root' })
export class SectionService {
  private readonly baseUrl = 'http://localhost:5023/api/sections';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Section[]> {
    return this.http.get<Section[]>(this.baseUrl);
  }

  getById(id: number): Observable<Section> {
    return this.http.get<Section>(`${this.baseUrl}/${id}`);
  }

  create(dto: CreateSection): Observable<Section> {
    return this.http.post<Section>(this.baseUrl, dto);
  }

  update(id: number, dto: UpdateSection): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
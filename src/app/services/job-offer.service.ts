import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOffer, CreateJobOffer, UpdateJobOffer } from '../models/job-offer.model';

@Injectable({ providedIn: 'root' })
export class JobOfferService {
  private readonly baseUrl = 'http://localhost:5023/api/job-offers';

  constructor(private http: HttpClient) {}

  getAll(category?: string, type?: string, featured?: boolean): Observable<JobOffer[]> {
    let params = new HttpParams();
    if (category) params = params.set('category', category);
    if (type) params = params.set('type', type);
    if (featured !== undefined) params = params.set('featured', featured);
    return this.http.get<JobOffer[]>(this.baseUrl, { params });
  }

  getById(id: number): Observable<JobOffer> {
    return this.http.get<JobOffer>(`${this.baseUrl}/${id}`);
  }

  create(dto: CreateJobOffer): Observable<JobOffer> {
    return this.http.post<JobOffer>(this.baseUrl, dto);
  }

  update(id: number, dto: UpdateJobOffer): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${username}`);
  }

  getUserRepos(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${username}/repos?sort=updated`);
  }
}

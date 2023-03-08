import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  getRepositoriesObservable(): Observable<any[]> {
    return this.http
      .get<any[]>('https://api.github.com/users/taylinsquire/repos')
      .pipe(map((repos) => repos.filter((repo) => repo.has_pages)));
  }
}

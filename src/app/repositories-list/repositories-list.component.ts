import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../services/repository.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent implements OnInit {

  repositories$: Observable<any[]>;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.repositories$ = this.repositoryService.getRepositoriesObservable();
  }

}

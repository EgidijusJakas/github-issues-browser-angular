import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { FiltersService, Filter } from './filters.service';

const BASE_URL = 'https://api.github.com/search/issues';

interface IIssueRepo {
  id: string;
  title: string;
  created_at: string;
  user: { login: string; };
  number: number;
  html_url: string;
}

interface IIssuesRepo {
  items: IIssueRepo[]
  total_count: number;
}

export interface IIssue {
  id: string;
  title: string;
  createdAt: string;
  username: string;
  number: number;
  url: string;
}

const mapIssuesListRepoToState = ({ id, title, created_at, user, number, html_url }: IIssueRepo) => ({
  id,
  title,
  createdAt: new Intl.DateTimeFormat().format(new Date(created_at)),
  username: user.login,
  number,
  url: html_url,
});

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  loadingChange: Subject<boolean> = new Subject<boolean>();
  issuesChange: Subject<IIssue[]> = new Subject<IIssue[]>();
  issuesCountChange: Subject<number> = new Subject<number>();
  noIssuesFoundChange: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private filtersService: FiltersService) {
    this.filtersService.getFilterChange().subscribe((filter: Filter) => {
      this.loadIssues(filter);
    });
  }

  getIssuesLoading() {
    return this.loadingChange;
  }
  
  getIssues() {
    return this.issuesChange;
  }

  getIssuesCount() {
    return this.issuesCountChange;
  }

  isIssuesEmptyState() {
    return this.noIssuesFoundChange
  }

  loadIssues(filter: Filter) {
    const { organization, repository, sortBy, pageNumber } = filter;

    this.loadingChange.next(true);
    this.issuesChange.next([]);
    this.noIssuesFoundChange.next(false);

    return this.http.get<IIssuesRepo>(
      `${BASE_URL}?q=repo:${organization}/${repository}+type:issue+state:open+sort:${sortBy}&page=${pageNumber + 1}`
    ).subscribe({
      next: (data: IIssuesRepo) => {
        this.issuesChange.next(data.items.map(mapIssuesListRepoToState))
        this.issuesCountChange.next(data.total_count);
        this.loadingChange.next(false)
      },
      error: () => {
        this.noIssuesFoundChange.next(true);
        this.loadingChange.next(false)
      },
    });
  }
}

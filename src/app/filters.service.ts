import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Filter {
  organization: string;
  repository: string;
  sortBy: string;
  pageNumber: number;
}

export enum SortBy {
  newest = 'created-desc',
  oldest = 'created-asc',
  mostCommented = 'comments-desc',
  leastCommented = 'comments-asc',
}

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  filterChange: Subject<Filter> = new Subject<Filter>();
  filter: Filter = {
    organization: '',
    repository: '',
    sortBy: SortBy.newest,
    pageNumber: 0,
  }

  constructor() {
    this.filterChange.subscribe((value: Filter) => {
      this.filter = value;
    })
  }
  
  setFilter(value: Filter) {
    this.filterChange.next({ ...this.filter, ...value });
  }

  getFilterChange(): Subject<Filter> {
    return this.filterChange;
  }

  setFilterSortBy(sortBy: string): void {
    this.setFilter({ ...this.filter, sortBy });
  }

  setFilterPageNumber(pageNumber: number): void {
    this.setFilter({ ...this.filter, pageNumber });
  }

  getFilterSortBy(): string {
    return this.filter.sortBy;
  }
}

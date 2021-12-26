import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Filter {
  organization: string;
  repository: string;
  sortBy: string;
}

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  filterChange: Subject<Filter> = new Subject<Filter>();
  filter: Filter = {
    organization: '',
    repository: '',
    sortBy: 'sort1',
  }

  constructor() {
    this.filterChange.subscribe((value: Filter) => {
      this.filter = { ...this.filter, ...value };
    })
  }
  
  setFilter(value: Filter) {
    this.filterChange.next(value);
  }

  getFilterChange(): Subject<Filter> {
    return this.filterChange;
  }

  setFilterSortBy(sortBy: string): void {
    this.filter.sortBy = sortBy;
    console.log(this.filter)
  }

  getFilterSortBy(): string {
    console.log(this.filter)
    return this.filter.sortBy;
  }
}

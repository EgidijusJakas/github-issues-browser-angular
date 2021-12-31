import { Component, OnInit } from '@angular/core';

import { FiltersService, SortBy } from '../filters.service';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issues-list-header',
  templateUrl: './issues-list-header.component.html',
  styleUrls: ['./issues-list-header.component.css']
})
export class IssuesListHeaderComponent implements OnInit {

  organization = '';
  repository = '';
  sortOptions = [
    { value: SortBy.newest, viewValue: 'Newest' },
    { value: SortBy.oldest, viewValue: 'Oldest' },
    { value: SortBy.mostCommented, viewValue: 'Most commennted' },
    { value: SortBy.leastCommented, viewValue: 'Least commented' },
  ];

  constructor(
    private filtersService: FiltersService,
    private issuesService: IssuesService,
  ) { 
    this.filtersService.getFilterChange().subscribe((value) => {
      this.organization = value.organization;
      this.repository = value.repository;
    });
  }

  selected = this.filtersService.getFilterSortBy();

  onSelect(e: any): void {
    this.filtersService.setFilterSortBy(e.value);
  }

  ngOnInit(): void {
  }
}

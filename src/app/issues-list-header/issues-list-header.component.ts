import { Component, OnInit } from '@angular/core';

import { FiltersService } from '../filters.service';

@Component({
  selector: 'app-issues-list-header',
  templateUrl: './issues-list-header.component.html',
  styleUrls: ['./issues-list-header.component.css']
})
export class IssuesListHeaderComponent implements OnInit {

  organization = '';
  repository = '';
  sortOptions = [{ value: 'sort1', viewValue: 'Sort 1' }, { value: 'sort2', viewValue: 'Sort 2' }]

  constructor(
    private filtersService: FiltersService,
  ) { 
    this.filtersService.getFilterChange().subscribe((value) => {
      this.organization = value.organization;
      this.repository = value.repository;
    });
    console.log('ni')
  }

  selected = this.filtersService.getFilterSortBy();

  onSelect(e: any): void {
    this.filtersService.setFilterSortBy(e.value);
  }


  ngOnInit(): void {
  }
}

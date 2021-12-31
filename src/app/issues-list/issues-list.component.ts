import { Component, OnInit } from '@angular/core';

import { IssuesService, IIssue } from '../issues.service';
import { FiltersService } from '../filters.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {

  constructor(
    private issuesService: IssuesService,
    private filtersService: FiltersService,
  ) { 
    this.issuesService.getIssuesLoading().subscribe((value) => {
      this.loading = value;
    });
    this.issuesService.getIssues().subscribe((value) => {
      this.items = value;
    });
    this.issuesService.getIssuesCount().subscribe((value) => {
      this.count = value;
    });
    this.issuesService.isIssuesEmptyState().subscribe((value) => {
      this.isIssuesEmptyState = value;
    });
  }

  loading = false;
  items: IIssue[] = [];
  pageSize = 10;
  count = 0;
  isIssuesEmptyState = false;

  ngOnInit(): void {
  }

  onPageChange(e: any): void {
    this.filtersService.setFilterPageNumber(e.pageIndex);
  }
}

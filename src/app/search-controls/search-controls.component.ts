import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { FiltersService } from '../filters.service';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.component.html',
  styleUrls: ['./search-controls.component.css']
})
export class SearchControlsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private filtersService: FiltersService,
    private issuesService: IssuesService,
  ) { }

  ngOnInit(): void {
  }

  searchControlsForm = this.formBuilder.group({
    organization: new FormControl('', [Validators.required,]),
    repository: new FormControl('', [Validators.required,]),
  });

  onSearch(): void {
    this.filtersService.setFilter(this.searchControlsForm.value);
    this.searchControlsForm.reset();
  }
}

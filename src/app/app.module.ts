import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchControlsComponent } from './search-controls/search-controls.component';
import { IssuesListHeaderComponent } from './issues-list-header/issues-list-header.component';
import { IssuesListComponent } from './issues-list/issues-list.component';

@NgModule({
  imports: [
    BrowserModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    SearchControlsComponent,
    IssuesListHeaderComponent,
    IssuesListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

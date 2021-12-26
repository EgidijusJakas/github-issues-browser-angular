import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesListHeaderComponent } from './issues-list-header.component';

describe('IssuesListHeaderComponent', () => {
  let component: IssuesListHeaderComponent;
  let fixture: ComponentFixture<IssuesListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

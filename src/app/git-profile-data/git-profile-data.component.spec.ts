import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProfileDataComponent } from './git-profile-data.component';

describe('GitProfileDataComponent', () => {
  let component: GitProfileDataComponent;
  let fixture: ComponentFixture<GitProfileDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitProfileDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProfileCardComponent } from './git-profile-card.component';

describe('GitProfileCardComponent', () => {
  let component: GitProfileCardComponent;
  let fixture: ComponentFixture<GitProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

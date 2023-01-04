import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPeopleComponent } from './task-people.component';

describe('TaskPeopleComponent', () => {
  let component: TaskPeopleComponent;
  let fixture: ComponentFixture<TaskPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

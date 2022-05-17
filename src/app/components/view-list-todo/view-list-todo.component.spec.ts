import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListTodoComponent } from './view-list-todo.component';

describe('ViewListTodoComponent', () => {
  let component: ViewListTodoComponent;
  let fixture: ComponentFixture<ViewListTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

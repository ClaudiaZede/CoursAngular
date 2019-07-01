import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeActuComponent } from './liste-actu.component';

describe('ListeActuComponent', () => {
  let component: ListeActuComponent;
  let fixture: ComponentFixture<ListeActuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeActuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

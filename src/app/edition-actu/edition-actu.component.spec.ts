import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionActuComponent } from './edition-actu.component';

describe('EditionActuComponent', () => {
  let component: EditionActuComponent;
  let fixture: ComponentFixture<EditionActuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionActuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

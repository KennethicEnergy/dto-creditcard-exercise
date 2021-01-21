import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegistrationPageComponent } from './card-registration-page.component';

describe('CardRegistrationPageComponent', () => {
  let component: CardRegistrationPageComponent;
  let fixture: ComponentFixture<CardRegistrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRegistrationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

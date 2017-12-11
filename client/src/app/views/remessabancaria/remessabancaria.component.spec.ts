import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemessabancariaComponent } from './remessabancaria.component';

describe('RemessabancariaComponent', () => {
  let component: RemessabancariaComponent;
  let fixture: ComponentFixture<RemessabancariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemessabancariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemessabancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaComponent } from './venda.component';

describe('VendaComponent', () => {
  let component: VendaComponent;
  let fixture: ComponentFixture<VendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

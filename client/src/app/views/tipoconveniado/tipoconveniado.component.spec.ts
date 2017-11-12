import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoconveniadoComponent } from './tipoconveniado.component';

describe('TipoconveniadoComponent', () => {
  let component: TipoconveniadoComponent;
  let fixture: ComponentFixture<TipoconveniadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoconveniadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoconveniadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


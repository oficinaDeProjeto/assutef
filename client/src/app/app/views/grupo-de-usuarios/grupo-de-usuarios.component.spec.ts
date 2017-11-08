import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDeUsuariosComponent } from './grupo-de-usuarios.component';

describe('GrupoDeUsuariosComponent', () => {
  let component: GrupoDeUsuariosComponent;
  let fixture: ComponentFixture<GrupoDeUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoDeUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

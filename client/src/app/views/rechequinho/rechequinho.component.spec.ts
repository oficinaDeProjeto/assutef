import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechequinhoComponent } from './rechequinho.component';

describe('RechequinhoComponent', () => {
  let component: RechequinhoComponent;
  let fixture: ComponentFixture<RechequinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechequinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechequinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

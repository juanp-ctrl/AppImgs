import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoDetallesComponent } from './foto-detalles.component';

describe('FotoDetallesComponent', () => {
  let component: FotoDetallesComponent;
  let fixture: ComponentFixture<FotoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFotosComponent } from './lista-fotos.component';

describe('ListaFotosComponent', () => {
  let component: ListaFotosComponent;
  let fixture: ComponentFixture<ListaFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

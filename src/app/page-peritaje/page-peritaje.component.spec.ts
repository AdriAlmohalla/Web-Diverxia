import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePeritajeComponent } from './page-peritaje.component';

describe('PagePeritajeComponent', () => {
  let component: PagePeritajeComponent;
  let fixture: ComponentFixture<PagePeritajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePeritajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePeritajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

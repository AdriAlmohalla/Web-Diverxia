import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTarifasComponent } from './page-tarifas.component';

describe('PageTarifasComponent', () => {
  let component: PageTarifasComponent;
  let fixture: ComponentFixture<PageTarifasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTarifasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTerapiaOcupacionalComponent } from './page-terapia-ocupacional.component';

describe('PageTerapiaOcupacionalComponent', () => {
  let component: PageTerapiaOcupacionalComponent;
  let fixture: ComponentFixture<PageTerapiaOcupacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTerapiaOcupacionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTerapiaOcupacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

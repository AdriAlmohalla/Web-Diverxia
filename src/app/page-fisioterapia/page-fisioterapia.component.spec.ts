import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFisioterapiaComponent } from './page-fisioterapia.component';

describe('PageFisioterapiaComponent', () => {
  let component: PageFisioterapiaComponent;
  let fixture: ComponentFixture<PageFisioterapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFisioterapiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFisioterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

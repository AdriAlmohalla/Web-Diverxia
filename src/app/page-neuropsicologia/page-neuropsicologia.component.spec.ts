import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNeuropsicologiaComponent } from './page-neuropsicologia.component';

describe('PageNeuropsicologiaComponent', () => {
  let component: PageNeuropsicologiaComponent;
  let fixture: ComponentFixture<PageNeuropsicologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNeuropsicologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNeuropsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

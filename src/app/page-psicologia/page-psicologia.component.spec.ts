import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePsicologiaComponent } from './page-psicologia.component';

describe('PagePsicologiaComponent', () => {
  let component: PagePsicologiaComponent;
  let fixture: ComponentFixture<PagePsicologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePsicologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

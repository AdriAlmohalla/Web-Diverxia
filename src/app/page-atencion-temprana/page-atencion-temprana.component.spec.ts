import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAtencionTempranaComponent } from './page-atencion-temprana.component';

describe('PageAtencionTempranaComponent', () => {
  let component: PageAtencionTempranaComponent;
  let fixture: ComponentFixture<PageAtencionTempranaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAtencionTempranaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAtencionTempranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

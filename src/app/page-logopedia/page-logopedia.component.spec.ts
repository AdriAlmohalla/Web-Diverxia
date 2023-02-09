import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLogopediaComponent } from './page-logopedia.component';

describe('PageLogopediaComponent', () => {
  let component: PageLogopediaComponent;
  let fixture: ComponentFixture<PageLogopediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLogopediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLogopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

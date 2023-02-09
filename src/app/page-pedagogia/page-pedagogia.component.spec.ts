import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePedagogiaComponent } from './page-pedagogia.component';

describe('PagePedagogiaComponent', () => {
  let component: PagePedagogiaComponent;
  let fixture: ComponentFixture<PagePedagogiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePedagogiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePedagogiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

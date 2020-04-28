import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInterfaceComponent } from './product-interface.component';

describe('ProductInterfaceComponent', () => {
  let component: ProductInterfaceComponent;
  let fixture: ComponentFixture<ProductInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

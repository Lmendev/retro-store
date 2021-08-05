import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNftComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsNftComponent;
  let fixture: ComponentFixture<DetailsNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

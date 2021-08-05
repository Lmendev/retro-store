import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftItemListComponent } from './nft-item-list.component';

describe('NftItemListComponent', () => {
  let component: NftItemListComponent;
  let fixture: ComponentFixture<NftItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

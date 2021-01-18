import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdxConvertComponent } from './idx-convert.component';

describe('IdxConvertComponent', () => {
  let component: IdxConvertComponent;
  let fixture: ComponentFixture<IdxConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdxConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdxConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

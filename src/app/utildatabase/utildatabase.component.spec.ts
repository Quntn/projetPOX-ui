import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtildatabaseComponent } from './utildatabase.component';

describe('UtildatabaseComponent', () => {
  let component: UtildatabaseComponent;
  let fixture: ComponentFixture<UtildatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtildatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtildatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtildropboxComponent } from './utildropbox.component';

describe('UtildropboxComponent', () => {
  let component: UtildropboxComponent;
  let fixture: ComponentFixture<UtildropboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtildropboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtildropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgLoginComponent } from './msg-login.component';

describe('MsgLoginComponent', () => {
  let component: MsgLoginComponent;
  let fixture: ComponentFixture<MsgLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

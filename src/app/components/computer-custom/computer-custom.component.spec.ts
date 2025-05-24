import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerCustomComponent } from './computer-custom.component';

describe('ComputerCustomComponent', () => {
  let component: ComputerCustomComponent;
  let fixture: ComponentFixture<ComputerCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

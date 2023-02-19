import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoultComponent } from './default-layoult.component';

describe('DefaultLayoultComponent', () => {
  let component: DefaultLayoultComponent;
  let fixture: ComponentFixture<DefaultLayoultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayoultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLayoultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

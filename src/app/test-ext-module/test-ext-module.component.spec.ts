import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExtModuleComponent } from './test-ext-module.component';

describe('TestExtModuleComponent', () => {
  let component: TestExtModuleComponent;
  let fixture: ComponentFixture<TestExtModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestExtModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestExtModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

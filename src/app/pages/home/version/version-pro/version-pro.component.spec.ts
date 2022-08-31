import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionProComponent } from './version-pro.component';

describe('VersionProComponent', () => {
  let component: VersionProComponent;
  let fixture: ComponentFixture<VersionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

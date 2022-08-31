import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionLiteComponent } from './version-lite.component';

describe('VersionLiteComponent', () => {
  let component: VersionLiteComponent;
  let fixture: ComponentFixture<VersionLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionLiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

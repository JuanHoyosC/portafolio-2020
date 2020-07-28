import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCircularComponent } from './menu-circular.component';

describe('MenuCircularComponent', () => {
  let component: MenuCircularComponent;
  let fixture: ComponentFixture<MenuCircularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCircularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

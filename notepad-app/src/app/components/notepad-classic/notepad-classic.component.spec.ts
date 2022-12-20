import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadClassicComponent } from './notepad-classic.component';

describe('NotepadClassicComponent', () => {
  let component: NotepadClassicComponent;
  let fixture: ComponentFixture<NotepadClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotepadClassicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotepadClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

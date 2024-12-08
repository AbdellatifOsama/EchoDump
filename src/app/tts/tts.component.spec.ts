import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTSComponent } from './tts.component';

describe('TTSComponent', () => {
  let component: TTSComponent;
  let fixture: ComponentFixture<TTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TTSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

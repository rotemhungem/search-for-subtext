import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { By } from '@angular/platform-browser';
import { newEvent } from '../../testing';


describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <span> with "Text is required"', () => {
    const hostElement = fixture.nativeElement;
    const textInput: HTMLInputElement = hostElement.query(By.css('text'));
    const validationDisplay: HTMLElement = hostElement.query(By.css('textValidator'));

    textInput.value = '';
    textInput.dispatchEvent(newEvent('input'));

    fixture.detectChanges();

    expect(validationDisplay.textContent).toBe('Text is required');

  });

  it('should have <span> with "Your subtext is required"', () => {
    const hostElement = fixture.nativeElement;
    const subTextInput: HTMLInputElement = hostElement.query(By.css('subText'));
    const validationDisplay: HTMLElement = hostElement.query(By.css('subTextValidator'));

    subTextInput.value = '';
    subTextInput.dispatchEvent(newEvent('input'));

    fixture.detectChanges();

    expect(validationDisplay.textContent).toBe('Your subtext is required');

  });
});

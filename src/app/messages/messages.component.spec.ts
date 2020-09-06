import { MessageService } from './../message.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './messages.component';
import { MainPageService } from '../main-page.service';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  let mockMainPageService: MainPageService;
  let mockMessageService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageComponent ],
      providers: [
        {provide: mockMainPageService, useClass: MainPageService},
        {provide: mockMessageService, useClass: MessageService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have message "Your subtext starts at index 0"', () => {
    mockMainPageService.findIndexes('aB', 'AabbAa');
    expect(mockMessageService.messages.pop()).toBe('Your subtext starts at index 0');
  });

  it('should have message "The subtext cannot be found in the text"', () => {
    mockMainPageService.findIndexes('aB', 'CbbaCA');

    expect(mockMessageService.messages.pop()).toBe('The subtext cannot be found in the text');
  });

});

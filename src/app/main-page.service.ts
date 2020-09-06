import { Injectable } from '@angular/core';

import {MessageService } from './message.service';

declare var getIndexes: any;

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  constructor(private messageService: MessageService) { }

  findIndexes(subText: string,
              text: string): void{
    this.messageService.clear();
    const indexes: number[] = getIndexes(subText.toLowerCase(), text.toLowerCase());
    this.log(indexes);
  }

  private log(indexes: number[]): void{
    if (indexes !== null && typeof indexes !== 'undefined'){
      if (indexes.length === 0){
        this.messageService.add('The subtext cannot be found in the text');
      } else {
        for (let index of indexes){
          this.messageService.add('Your subtext starts at index ' + index);
        }
      }
    }
  }
}

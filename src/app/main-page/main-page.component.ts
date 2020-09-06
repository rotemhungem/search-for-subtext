import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { MessageService } from './../message.service';
import { MainPageService } from './../main-page.service';
import { AppData } from '../app-data/app-data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit {
  textForm: NgForm;
  data: AppData;

  constructor(private mainPageService: MainPageService,
              private messageService: MessageService) {
    this.data = new AppData();
  }

  ngOnInit(): void {
  }

  onSubmit(subText: string, text: string): void {
    this.mainPageService.findIndexes(subText, text);
  }


}

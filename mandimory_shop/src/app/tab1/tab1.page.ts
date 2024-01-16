import { Component } from '@angular/core';


import { ElementRef, ViewChild } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  logActiveIndex() {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }
}


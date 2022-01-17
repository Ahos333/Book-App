import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: 'Chapter 1 | Beginning',
      url: '/chapter1'
    },
    {
      title: 'Chapter 2',
      url: '/chapter2'
    },
    {
      title: 'Chapter 3 | Middle',
      url: '/chapter3'
    },
    {
      title: 'Chapter 4',
      url: '/chapter4'
    },
    {
      title: 'Chapter 5',
      url: '/chapter5'
    },
    {
      title: 'Chapter 6 | End',
      url: '/chapter6'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

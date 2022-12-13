import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sonab-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PaginationComponent implements OnInit {
  @Input('total') public totalProps: number;
  @Input('limit') public limitProps: number;
  @Input('currentPage') public currentPageProps: number;
  @Input('url') public urlProps: string;

  public pagesCount: number;
  public pages: number[];

  constructor() {}

  public ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = [...Array(this.pagesCount).keys()].map((el) => el + 1);
  }
}

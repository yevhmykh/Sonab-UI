import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { IRouterParams } from 'src/app/shared/types/routerParams.interface';

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
  @Input('params') public paramsProps: IRouterParams = {};

  public pagesCount: number;
  public pages: number[];

  constructor() {}

  public ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = [...Array(this.pagesCount).keys()].map((el) => el + 1);
    this.paramsProps['limit'] = this.limitProps;
  }

  public getRouterParams(page: number): IRouterParams {
    let routerParams: IRouterParams = { ...this.paramsProps };
    routerParams['page'] = page;
    return routerParams;
  }
}

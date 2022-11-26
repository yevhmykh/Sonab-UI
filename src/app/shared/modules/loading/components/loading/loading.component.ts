import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sonab-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoadingComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}

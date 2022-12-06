import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sonab';
  constructor(private translateService: TranslateService) {}

  public ngOnInit(): void {
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.translateService.getBrowserLang() ?? 'en');
  }
}

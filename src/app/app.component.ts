import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  lang: any = 'en';

  constructor(private _LanguageService: LanguageService, private translate: TranslateService) { }

  ngOnInit(): void {
    this._LanguageService.getLanguage().subscribe({
      next: (lang) => {
        this.lang = lang;
        this.translate.use(this.lang);
      }
    });
  }

  changeLang() {
    this.lang = (this.lang === 'en') ? 'ar' : 'en';
    this._LanguageService.changeLanguage(this.lang);
    this.translate.use(this.lang);
  }
}

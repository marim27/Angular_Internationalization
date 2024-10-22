import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language: BehaviorSubject<Language>;

  constructor() {
    this.language = new BehaviorSubject<Language>('en');
  }

  getLanguage(): Observable<Language> {
    return this.language.asObservable();
  }

  changeLanguage(newValue: Language) {
    if (newValue === 'en' || newValue === 'ar') {
      this.language.next(newValue);
      localStorage.setItem('language', newValue);
    }
  }
}

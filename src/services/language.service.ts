import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type Language = 'en' | 'ar'; // Define supported languages

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language: BehaviorSubject<Language>;

  constructor() {
    // const storedLanguage = localStorage.getItem('language') as Language || 'en'; // Fallback to 'en'
    this.language = new BehaviorSubject<Language>('en');
  }

  getLanguage(): Observable<Language> {
    return this.language.asObservable();
  }

  changeLanguage(newValue: Language) {
    if (newValue === 'en' || newValue === 'ar') { // Check if the language is supported
      this.language.next(newValue);
      localStorage.setItem('language', newValue); // Save the language to localStorage
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Language } from '../../interfaces/language';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  languages: Language[];

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe( (retorno: any) => {
      this.languages = retorno.results;
    });
  }

  onSelectLanguage($event: Event): void {

  }
}

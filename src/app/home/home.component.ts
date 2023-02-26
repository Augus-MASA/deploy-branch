import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isTamilLanguage:boolean = true;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    let language = localStorage.getItem('language');
    if(!!language && language == 'ta'){
      this.isTamilLanguage = true;
      this.translate.use('ta');
    }
    else if(!!language && language == 'en'){
      this.isTamilLanguage = false;
      this.translate.use('en');
    }
  }

  isTamilSelected(){
    this.isTamilLanguage = true;
    this.translate.use('ta');
    localStorage.setItem('language','ta')
  }

  isEnglishSelected(){
    this.isTamilLanguage = false;
    this.translate.use('en');
    localStorage.setItem('language','en')
  }

}

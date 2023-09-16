import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isTamilLanguage:boolean = true;
  but:any
  constructor(private translate: TranslateService) { 
    setTimeout(() => {
    const hamburger:any = document.querySelector(".hamburger");
    const navMenu:any = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click" , () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }))
  }, 1000);
  }

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
  //  change(){
  //   if(window.innerWidth<=992){
  //   this.but = document.getElementById("navbarNav");
  //    this.but.classList.toggle("collapse");
  //   }
  //   else{
    
  //   }
  //   }
 
}

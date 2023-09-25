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
  pdfUrl:any;
  documentShow:boolean = false;
  dialogBoxTitle:any;

  constructor() { 
   this.navLinks
  window.onscroll =()=>{ 
    this.sections.forEach(sec =>{
      console.log("active");
        let top= window.scrollY;
        let offset =sec.offsetTop;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');
        
        

        if (top >= offset && top < offset + height) {
           this.navLinks.forEach(links =>{
             links.classList.remove('active')
                document.querySelector('nav-link [herf*='+id+']')?.classList.add('active');
           })
        }
    })
}
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
    
  }

  isTamilSelected(){
    this.isTamilLanguage = true;
  }

  isEnglishSelected(){
    this.isTamilLanguage = false;
  }
  //  change(){
  //   if(window.innerWidth<=992){
  //   this.but = document.getElementById("navbarNav");
  //    this.but.classList.toggle("collapse");
  //   }
  //   else{
    
  //   }
  //   }
 
  sections=document.querySelectorAll('section');
  navLinks=document.querySelectorAll('nav-link');


  openDialog(url:any,title:any){
    this.pdfUrl = url;
    this.documentShow = true;
    this.dialogBoxTitle = title
    setTimeout(() => {
    const dialog: any = document.querySelector('.dialog-overview');
    dialog?.show();
    this.pdfUrl = null
  }, 500);
  }



}

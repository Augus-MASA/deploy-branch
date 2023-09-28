import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {


  @Input() pdfUrl : any
  current_url:any;

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.current_url=this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl)
  }

  ngOnDestroy(){
    this.pdfUrl = null;
    this.current_url = null;
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';  

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss']
})
export class BrochureComponent implements OnInit {

  makePDF() {
    let pdf = new jsPDF();
    var img = new Image()
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-01.png'
    pdf.addImage(img, 'png', 0, 80, 200, 100)
    pdf.addPage();
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-02.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.addPage();
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-03.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.addPage()
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-04.png'
    pdf.addImage(img, 'png', 0, 80, 200, 100)
    pdf.addPage();
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-05.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.addPage();
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-06.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.addPage()
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-07.png'
    pdf.addImage(img, 'png', 0, 80, 200, 100)
    pdf.addPage();
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-08.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.addPage();
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-09.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.addPage()
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-10.png'
    pdf.addImage(img, 'png', 0, 80, 200, 100)
    pdf.addPage();
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-11.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.addPage();
    img.src = '../../assets/img/BROCHURE DINI/BROCHURE DINI-12.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.save();
  }
  
  constructor() { }

  ngOnInit(): void {
  }


 

}

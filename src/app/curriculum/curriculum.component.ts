import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';  

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  makePDF() {
    let pdf = new jsPDF();
    var img = new Image()
    img.src = '../../assets/img/curriculum/HB CURRICULUM CORPORATIVO-1.png'
    pdf.addImage(img, 'png', 0, 0, 210, 300)
    pdf.addPage();
    img.src = '../../assets/img/curriculum/HB CURRICULUM CORPORATIVO-2.png'
    pdf.addImage(img, 'png', 0, 0, 210, 300)
    pdf.addPage();
    img.src = '../../assets/img/curriculum/HB CURRICULUM CORPORATIVO-3.png'
    pdf.addImage(img, 'png', 0, 0, 210, 300)
    pdf.addPage()
    img.src = '../../assets/img/curriculum/HB CURRICULUM CORPORATIVO-4.png'
    pdf.addImage(img, 'png', 0, 0, 210, 300)
    pdf.addPage();
    img.src = '../../assets/img/curriculum/HB CURRICULUM CORPORATIVO-5.png'
    pdf.addImage(img, 'png', 0, 0, 210, 300)
    pdf.addPage();
    img.src = '../../assets/img/curriculum/HB CURRICULUM CORPORATIVO-6.png'
    pdf.addImage(img, 'png', 0, 0, 210, 300)
    pdf.addPage()
    img.src = '../../assets/img/curriculum/HB CURRICULUM CORPORATIVO-7.png'
    pdf.addImage(img, 'png', 0, 0, 210, 300)
    pdf.addPage();
    img.src = '../../assets/img/curriculum/HB CURRICULUM CORPORATIVO-8.png'
    pdf.addImage(img, 'png', 0, 0, 210, 300)
    pdf.save();
  }

}

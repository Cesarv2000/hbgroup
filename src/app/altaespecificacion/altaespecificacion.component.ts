import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';  

@Component({
  selector: 'app-altaespecificacion',
  templateUrl: './altaespecificacion.component.html',
  styleUrls: ['./altaespecificacion.component.scss']
})
export class AltaespecificacionComponent implements OnInit {

  makePDF() {
    let pdf = new jsPDF();
    var img = new Image()
    img.src = '../../assets/img/ALTA ESPECIFICACION/EQUIPOS DE ALTA ESPECIFICACION-1.png'
    pdf.addImage(img, 'png', 0, 80, 200, 100)
    pdf.addPage();
    img.src = '../../assets/img/ALTA ESPECIFICACION/EQUIPOS DE ALTA ESPECIFICACION-2.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.addPage();
    img.src = '../../assets/img/ALTA ESPECIFICACION/EQUIPOS DE ALTA ESPECIFICACION-3.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.addPage()
    img.src = '../../assets/img/ALTA ESPECIFICACION/EQUIPOS DE ALTA ESPECIFICACION-4.png'
    pdf.addImage(img, 'png', 0, 80, 200, 100)
    pdf.addPage();
    img.src = '../../assets/img/ALTA ESPECIFICACION/EQUIPOS DE ALTA ESPECIFICACION-5.png'
    pdf.addImage(img, 'png', 0, 80, 200, 150)
    pdf.save();
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}

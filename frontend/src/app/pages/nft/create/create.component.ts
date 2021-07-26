import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateNftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageInputChanged(e: Event): void{
    const file = (e.target as HTMLInputElement).files || [{name: 'Cargar Imagen'}];
    const fileName = file[0].name;
    
    const element: HTMLElement = document.getElementById('imageLabel') as HTMLElement
    element.innerHTML = fileName
  }
}

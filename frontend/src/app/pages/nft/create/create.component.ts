import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { NftForm } from 'src/app/models/nftForm.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateNftComponent implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      image: new FormControl(),
      type: new FormControl(""),
      onSale: new FormControl(""),
      price: new FormControl("")
    });
  }

  imageInputChanged(e: Event): void{
    const file = (e.target as HTMLInputElement).files || [{name: 'Cargar Imagen'}];
    const fileName = file[0].name;
    
    const element: HTMLElement = document.getElementById('imageLabel') as HTMLElement
    element.innerHTML = fileName
  }

  handleNftCreate(): void {
    console.log(this.form.value)

    const nftdata: NftForm = { ...this.form.value };
    
    console.log(nftdata)
    
    if (this.form.invalid) {
      return;
    }
    
    
    
    /*
    if (this.isEditing) {
      this.postService.updatePost(form.value, this.postId);
    } else {
      this.postService.addPost(form.value);
    }
    */
    this.form.reset();
  }
}

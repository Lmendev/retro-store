import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { NftForm } from 'src/app/models/nftForm.model';
import { NftService } from 'src/app/services/nft.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateNftComponent implements OnInit {
  form!: FormGroup;

  constructor(public NftService: NftService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      imagen: new FormControl(),
      image: new FormControl(null),
      type: new FormControl(""),
      onSale: new FormControl(""),
      price: new FormControl("")
    });
  }

  imageInputChanged(e: Event): void{
    const file = (e.target as HTMLInputElement).files![0] || [{name: 'Cargar Imagen'}];
    const fileName = file.name;

    this.form.patchValue({ image: file });
    this.form.get('image')?.updateValueAndValidity();
    
    const element: HTMLElement = document.getElementById('imageLabel') as HTMLElement
    element.innerHTML = fileName
  }

  handleNftCreate(): void {
    if (this.form.invalid) 
      return;
    
    const { title, description, type, onSale, price, image} = this.form.value

    const nftData: NftForm = {
      title,
      description,
      type,
      price,
      image,
      onSale: onSale? true: false,
      token: Md5.hashStr(title + new Date().toString())
    }
    
    this.NftService.createNft(nftData);

    /*
    if (this.isEditing) {
      this.postService.updatePost(form.value, this.postId);
    } else {
      this.postService.addPost(form.value);
    }
    */
    
    //Form reset
    /*this.form.reset();
    const element: HTMLElement = document.getElementById('imageLabel') as HTMLElement;
    element.innerHTML = 'Cargar Imagen';*/
  }
}

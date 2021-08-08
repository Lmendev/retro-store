import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { NftForm } from 'src/app/models/nftForm.model';
import { NftService } from 'src/app/services/nft.service';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateNftComponent implements OnInit {
  private isEditing = false;
  private nft_id = "";
  public form!: FormGroup;
  
  public pageTitle:string = "Nuevo Retro NFT";
  public pageButtonValue:string = "Crear NFT";
  public pageLabelForImageInput:string = "Cargar Imagen";
  
  constructor(
    public NftService: NftService, 
    public authService: AuthService, 
    public route: ActivatedRoute, 
    private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      
      image: new FormControl(null),
      type: new FormControl(""),
      onSale: new FormControl(""),
      price: new FormControl("")
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        // Form en modo edición
        this.isEditing = true;
        this.pageTitle = "Actualizar Retro NFT"
        this.pageButtonValue = "Actualizar NFT"
        this.pageLabelForImageInput = "Actualizar Imagen"

        this.NftService.getNft(paramMap.get('_id')!).subscribe(nft => {
          const {_id, title, description, image, type, onSale, price} = nft;
          
          this.nft_id = _id;
          this.form.setValue({title, description, image, type, onSale, price});
        });
      }
    });
  }

  imageInputChanged(e: Event): void {
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
    const owner = this.authService.getUserId();

    const nftData: NftForm = {
      _id: this.nft_id,
      title,
      description,
      type,
      price,
      image,
      owner,
      onSale: onSale? true: false,
      token: Md5.hashStr(title + new Date().toString())
    }
    console.log(nftData) 
    if (this.isEditing){
      this.NftService.updateNft(nftData);
    }else{
      this.NftService.createNft(nftData);
    }
    
    //Form reset
    /*this.form.reset();
    const element: HTMLElement = document.getElementById('imageLabel') as HTMLElement;
    element.innerHTML = 'Cargar Imagen';*/
  }
}

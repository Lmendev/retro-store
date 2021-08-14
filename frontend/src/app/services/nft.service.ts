import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nft } from '../models/nft.model';
import { environment } from '../../environments/environment'
import { Subject } from 'rxjs';
import { NftForm } from '../models/nftForm.model';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NftService {
  apiUrl = environment.apiUrl;
  apiVersion = environment.apiVersion;
  endPoint = '/nfts/';
  route = this.apiUrl + this.apiVersion + this.endPoint;
  
  nfts = new Subject<Nft[]>();

  constructor(private http: HttpClient, private router: Router, public authService: AuthService) { }

  getNfts(): void{
    this.http.get<Nft[]>(this.route).subscribe(nfts => this.nfts.next(nfts))
  }

  getOnSaleNfts(){
    let params = { params: new HttpParams().set("onSale", "true") }
    return this.http.get<Nft[]>(this.route, params)
  }

  getNftsByOwner(_id: string){
    let params = { params: new HttpParams().set("owner", _id) }

    return this.http.get<Nft[]>(this.route, params)
  }

  getNft(token: string) {
    return this.http.get<Nft>(this.route + '/' + token);
  }

  createNft(nftData: NftForm){
    const { title, description, onSale, price, token, type, image, owner} = nftData
    
    const nftPostData = new FormData();
    console.log(owner)
    nftPostData.append('type', type);
    nftPostData.append('title', title);
    nftPostData.append('token', token);
    nftPostData.append('image', image, title);
    nftPostData.append('description', description);
    nftPostData.append('price', JSON.stringify(price));
    nftPostData.append('owner', owner);
    nftPostData.append('onSale', JSON.stringify(onSale));
    
    this.http.post(this.route, nftPostData, { headers: new HttpHeaders({Authorization: 'Bearer ' + this.authService.getToken() })}).subscribe(res => {
        console.log('res')
        console.log(res)

        Swal.fire({
          text: 'NFT creado',
          toast: true,
          icon: 'info',
        }).then(() =>{
          this.router.navigate(['/collection'])
        })
        /*
        post.id = response.idPostAdded;
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
        this.router.navigate(['/collection']);*/
      });
  }

  updateNft(nftData: NftForm){
    let nftPutData: any;
    const { _id, image, title, type, description, price, onSale } = nftData

    nftPutData = { title, type, description, price, onSale };

    if (typeof image === 'object') {
      nftPutData = new FormData();
      
      nftPutData.append('type', type);
      nftPutData.append('title', title);
      nftPutData.append('image', image, title);
      nftPutData.append('description', description);
      nftPutData.append('price', JSON.stringify(price));
      nftPutData.append('onSale', JSON.stringify(onSale));
    } 

    this.http.put(this.route + _id, nftPutData, { headers: new HttpHeaders({Authorization: 'Bearer ' + this.authService.getToken() })}).subscribe(res => {
      console.log(res)
      /* this.router.navigate(['/']);*/
      Swal.fire({
        text: 'Información actualizada',
        toast: true,
        icon: 'info',
        position: 'center',
        showConfirmButton: false,
        timer: 2500,
      })
    });
  }

  updateOwnerNft(_id: string, owner: string): void{
    console.log("owner: "+owner)
    this.http.put(this.route + _id, { owner, onSale: false }, { headers: new HttpHeaders({Authorization: 'Bearer ' + this.authService.getToken() })}).subscribe(res => {
      this.router.navigate(['/collection'])
    });
  }
}

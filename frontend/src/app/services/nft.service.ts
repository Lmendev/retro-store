import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nft } from '../models/nft.model';
import { environment } from '../../environments/environment'
import { Subject } from 'rxjs';
import { NftForm } from '../models/nftForm.model';

@Injectable({
  providedIn: 'root'
})
export class NftService {
  apiUrl = environment.apiUrl;
  apiVersion = environment.apiVersion;
  endPoint = '/nfts/';
  route = this.apiUrl + this.apiVersion + this.endPoint;
  
  nfts = new Subject<Nft[]>();

  constructor(private http: HttpClient) { }

  getNfts(): void{
    this.http.get<Nft[]>(this.route).subscribe(nfts => this.nfts.next(nfts))
  }

  getNft(token: string) {
    return this.http.get<Nft>(this.route + '/' + token);
  }

  createNft(nftData: NftForm){
    const { title, description, onSale, price, token, type, image } = nftData
    
    const nftPostData = new FormData();
    
    nftPostData.append('type', type);
    nftPostData.append('title', title);
    nftPostData.append('token', token);
    nftPostData.append('image', image, title);
    nftPostData.append('description', description);
    nftPostData.append('price', JSON.stringify(price));
    nftPostData.append('onSale', JSON.stringify(onSale));
    
    this.http.post(this.route, nftPostData).subscribe(res => {
        console.log('res')
        console.log(res)
        /*
        post.id = response.idPostAdded;
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
        this.router.navigate(['/']);*/
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

    this.http.put(this.route + _id, nftPutData).subscribe(res => {
      console.log(res)
      /* this.router.navigate(['/']);*/
    });
  }
}

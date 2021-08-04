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
  endPoint = '/nfts';
  
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
    console.log('createNft')

    console.log(nftData)


    //this.http.post(this.route, nft).subscribe(res => {
    //  console.log(res)
        /*console.log(response);
        
        post.id = response.idPostAdded;
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
        this.router.navigate(['/']);*/
    //  });
  }
}

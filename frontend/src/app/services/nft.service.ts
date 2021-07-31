import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nft } from '../models/nft.model';
import { environment } from '../../environments/environment'
import { Subject } from 'rxjs';

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
    this.http.get<Nft[]>(this.route).subscribe(nfts => {console.log(nfts); this.nfts.next(nfts)})
  }

  getNft(token: string) {
    return this.http.get<Nft>(this.route + '/' + token);
  }

  createNft(){
    
  }
}

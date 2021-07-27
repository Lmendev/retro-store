import { HttpClient } from '@angular/common/http';
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

  /*
  nfts: Nft[] = [{
    _id: '1',
    title: 'Mario 16Bits',
    description: 'Mario animado 16Bits edición coleccionable 1985',
    image: 'mario.jpg',
    token: 'de2f15d014d40b93578d255e6221fd60',
    type: 'character',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '1',
    title: 'Mario 8Bits',
    description: 'Mario animado 16Bits edición coleccionable 1985',
    image: 'mario.jpg',
    token: 'de2f15d014d40b93578d255e6221fd60',
    type: 'character',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '1',
    title: 'Mario 8Bits',
    description: 'Mario animado 16Bits edición coleccionable 1985',
    image: 'mario.jpg',
    token: 'de2f15d014d40b93578d255e6221fd60',
    type: 'character',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '1',
    title: 'Mario 8Bits',
    description: 'Mario animado 16Bits edición coleccionable 1985',
    image: 'mario.jpg',
    token: 'de2f15d014d40b93578d255e6221fd60',
    type: 'character',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '1',
    title: 'Mario 8Bits',
    description: 'Mario animado 16Bits edición coleccionable 1985',
    image: 'mario.jpg',
    token: 'de2f15d014d40b93578d255e6221fd60',
    type: 'character',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '1',
    title: 'Mario 8Bits',
    description: 'Mario animado 16Bits edición coleccionable 1985',
    image: 'mario.jpg',
    token: 'de2f15d014d40b93578d255e6221fd60',
    type: 'character',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '1',
    title: 'Mario 8Bits',
    description: 'Mario animado 16Bits edición coleccionable 1985',
    image: 'mario.jpg',
    token: 'de2f15d014d40b93578d255e6221fd60',
    type: 'character',
    createdAt: new Date(),
    updatedAt: new Date()
  }];
  */

  constructor(private http: HttpClient) { }

  getNfts(): void{
    this.http.get<Nft[]>(this.route).subscribe(nfts => this.nfts.next(nfts))
  }
}

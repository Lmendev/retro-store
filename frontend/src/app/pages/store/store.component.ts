import { Component, OnInit } from '@angular/core';

import { Nft } from '../../models/nft.model'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}

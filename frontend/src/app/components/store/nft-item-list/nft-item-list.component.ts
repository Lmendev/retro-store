import { Component, Input, OnInit } from '@angular/core';
import { Nft } from '../../../models/nft.model'


@Component({
  selector: 'app-nft-item-list',
  templateUrl: './nft-item-list.component.html',
  styleUrls: ['./nft-item-list.component.css']
})
export class NftItemListComponent implements OnInit {
  @Input() nft: Nft = {
    _id: '',
    title: '',
    description: '',
    image: '',
    token: '',
    type: '',
    price: 0,
    createdAt: new Date(),
    updatedAt: new Date()};

  constructor() { 
  }

  ngOnInit(): void {

  }

}

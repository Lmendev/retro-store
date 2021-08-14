import { Component, OnInit } from '@angular/core';
import { NftService } from 'src/app/services/nft.service';

import { Nft } from '../../models/nft.model'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  nfts: Nft[] = [];

  constructor(public NftService: NftService) { 
  }

  ngOnInit(): void {
    this.NftService.getOnSaleNfts().subscribe(nfts => this.nfts = nfts);
  }

}

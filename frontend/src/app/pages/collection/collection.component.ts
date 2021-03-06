import { Component, OnInit } from '@angular/core';
import { Nft } from 'src/app/models/nft.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  nfts: Nft[] = [];
  message = '';

  constructor(public nftService: NftService, public authService: AuthService) { }

  ngOnInit(): void {
    const owner = this.authService.getUserId();
    this.nftService.getNftsByOwner(owner).subscribe(nfts => {
      if(nfts.length === 0){
        this.message = 'Aun no tienes NFTs!'
      }

      this.nfts = nfts
    });
  }

}

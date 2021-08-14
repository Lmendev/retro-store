import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nft } from 'src/app/models/nft.model';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsNftComponent implements OnInit {

  nft: Nft = {
    _id: '',
    title: '',
    description: '',
    image: '',
    token: '',
    type: '',
    price: 0,
    onSale: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  constructor(private route: ActivatedRoute, public NftService: NftService) { }

  ngOnInit(): void {
    let { token } = this.route.snapshot.params
    
    this.NftService.getNft(token).subscribe(nft => this.nft = nft);
  }
}

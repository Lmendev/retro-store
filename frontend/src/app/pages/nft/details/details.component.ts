import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nft } from 'src/app/models/nft.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NftService } from 'src/app/services/nft.service';
import { UsersService } from 'src/app/services/users.service';

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
    owner: '',
    onSale: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  nftIsMine: boolean = false;

  ownerUsername: string = ''

  constructor(private route: ActivatedRoute, public NftService: NftService, public UserService: UsersService, public authService: AuthService) { }

  ngOnInit(): void {
    let { token } = this.route.snapshot.params
    
    this.NftService.getNft(token).subscribe(nft => {
      this.nft = nft;
      this.nftIsMine = Boolean(nft.owner === this.authService.getUserId());
      this.UserService.getUserById(nft.owner).subscribe(user => this.ownerUsername = user.userName);
    });
  }
}

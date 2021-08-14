import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nft } from 'src/app/models/nft.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NftService } from 'src/app/services/nft.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2'

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
  userId: string= ''
  attrs: string[] = []

  constructor(private route: ActivatedRoute, public NftService: NftService, public UserService: UsersService, public authService: AuthService) { }

  ngOnInit(): void {
    let { token } = this.route.snapshot.params
    
    this.NftService.getNft(token).subscribe(nft => {
      this.nft = nft;
      this.userId = this.authService.getUserId();
      this.nftIsMine = Boolean(nft.owner === this.authService.getUserId());
      this.UserService.getUserById(nft.owner).subscribe(user => this.ownerUsername = user.userName);
      this.attrs = nft.type.split(',').map(attr => attr.trim())
    });
  }

  comprar(): void {
    Swal.fire({
      text: '¿Desea agregar a '+ this.nft.title +' a su colección?',
      //icon: 'question',
      showCancelButton: true,
      showCloseButton: true,
      imageUrl: './assets/images/mario.gif',
      imageWidth: 120,
      reverseButtons:true,
      confirmButtonColor: '#8984b1'
    }).then(({isConfirmed}) => {
      if (isConfirmed) {
        console.log("owner: "+this.userId)
        this.NftService.updateOwnerNft(this.nft._id, this.userId)
      } 
    })
  }
}

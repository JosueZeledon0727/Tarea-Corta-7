import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-listar-discos',
  templateUrl: './listar-discos.page.html',
  styleUrls: ['./listar-discos.page.scss'],
})
export class ListarDiscosPage implements OnInit {

  albumsData: any;

  constructor(
    public apiService: ApiService
  ) { 
    this.albumsData = [];
  }

  ngOnInit() {
    this.getAllAlbums();
  }

  getAllAlbums() {
    //Get saved list of ALBUMS
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.albumsData = response;
    })
  }
 
 
  delete(item) {
    //Delete item in Albums data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllAlbums();
    });
  }

}

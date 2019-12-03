import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../models/album';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editar-disco',
  templateUrl: './editar-disco.page.html',
  styleUrls: ['./editar-disco.page.scss'],
})
export class EditarDiscoPage implements OnInit {

  id: number;
  data: Album;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService

  ) { 
    this.data = new Album();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['/listar-discos']);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-disco',
  templateUrl: './crear-disco.page.html',
  styleUrls: ['./crear-disco.page.scss'],
})
export class CrearDiscoPage implements OnInit {

  data: Album

  constructor(
    public apiService: ApiService,
    public router: Router
  ) { 
    this.data = new Album();
  }

  ngOnInit() {
  }

  submitForm()
  {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['listar-discos']);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../services/miservicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public usuarios : any;
  constructor(private _service : MiservicioService){}

  

  ngOnInit(): void {
    this._service.getUsuarios().subscribe(res=>{
      this.usuarios = res.data;
    }, error =>{
      console.log("ha ocurrido un error");
    })
   
  }

}

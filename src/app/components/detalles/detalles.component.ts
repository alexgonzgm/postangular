import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { MiservicioService } from 'src/app/services/miservicio.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  
})
export class DetallesComponent implements OnInit {

  public usuario : any;
  constructor(private _service : MiservicioService , private _activeR : ActivatedRoute) { }

  ngOnInit(): void {
    this._activeR.params.subscribe((params : Params)=>{
      var id = params.id;
      this._service.getUsuario(id).subscribe(res=>{
        this.usuario = res.data;
        console.log(res.data);
      })
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { Global } from './../../../Globals';
import { MiservicioService } from 'src/app/services/miservicio.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',

})
export class BorrarComponent implements OnInit {

  public usuario : any;
  constructor(
    private _service :MiservicioService,
    private _activeR : ActivatedRoute ,
    private _router : Router
    ) {}

  ngOnInit(): void {
    this._activeR.params.subscribe((params : Params)=>{
      var id  = params.id;
      this._service.getUsuario(id).subscribe(res=>{
        console.log(res.data)
        this.usuario = res.data;
      })
    })
  }
  borrarUsuario(){
    this._service.deleteUsuario(this.usuario.id).subscribe(res=>{
      this._router.navigate(["/"]);
      console.log(res)
      alert("Borrado");
    },error =>{
      console.log("se ha producido un error")
    })
  }

}

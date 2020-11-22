import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params ,Router} from '@angular/router';
import { MiservicioService } from 'src/app/services/miservicio.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html'
})
export class ActualizarComponent implements OnInit {
 @ViewChild("cajanumero") cajanumero : ElementRef;
 @ViewChild("cajanombre") cajanombre : ElementRef;
 @ViewChild("cajaemail") cajaemail : ElementRef;
 @ViewChild("cajaapellidos") cajaapellidos : ElementRef;
  public usuario : any;
  public id : number;
  constructor(private _service : MiservicioService , private _activeR : ActivatedRoute, private _router : Router) { 
    this.cajaemail = ElementRef.prototype;
    this.cajanombre = ElementRef.prototype;
    this.cajanumero = ElementRef.prototype;
    this.cajaapellidos = ElementRef.prototype;
  }

  ngOnInit(): void {
    this._activeR.params.subscribe((params : Params)=>{
      this.id  = params.id;
      this._service.getUsuario(this.id).subscribe(res=>{
        this.usuario = res.data;
        console.log(res.data);
      })
    })
  }

  updateUsuario(){
    var nombre = this.cajanombre.nativeElement.value;
    var email = this.cajaemail.nativeElement.value;
    var apellidos = this.cajaapellidos.nativeElement.value;
    
    var usuarioActualizado = {
      id : "kfkfk",
      email : email,
      first_name : nombre,
      last_name : apellidos
    };
    this._service.updateUsuario(usuarioActualizado , this.id).subscribe(respose=>{
      this._router.navigate(["/"]);
      console.log(respose)
      alert("Actualizado :"+ respose.updatedAt);
    },error =>{
     
      console.log({"se ha producido el siguiente error " : error})
    })
  }
}
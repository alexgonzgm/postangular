import { Component  , OnInit} from '@angular/core';
import { MiservicioService } from './services/miservicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'postangular';
  
  public usuarios : any ;
  ngOnInit():void{

    

  }
}

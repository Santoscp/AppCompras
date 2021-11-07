import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from
  '@angular/forms';
import { AutenticationService } from '../../servicios/autentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public loggingout:boolean=false;

  constructor(){}

ngOnInit(): void {

}



}








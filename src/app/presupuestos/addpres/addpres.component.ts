import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {  Validators } from
'@angular/forms';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent implements OnInit {



    presupuestoForm: FormGroup;
 presupuesto: any;
 base: any;
 tipo: any;
 iva: any = 0;
 total: any = 0;

  constructor(private pf: FormBuilder, private presupuestosS:PresupuestosService ) {
    this.presupuestoForm = this.pf.group({
      proveedor: '',
      fecha: '',
      concepto: '',
      base: '',
      tipo: '',
      iva: '',
      total: ''
    });
   }

  ngOnInit(): void {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      cif:['',Validators.required],
      concepto: ['', [ Validators.required, Validators.minLength(10)] ],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva , 
      total: this.total
      });
     this.onChanges();
     
  }



  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.presupuestosS.postPresupuesto( this.presupuesto )
    .then((data: any) => {
    })
    this.presupuestoForm.reset();
    }




    savePresupuesto() {
      const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor')?.value,
      fecha: this. presupuestoForm.get('fecha')?.value,
      cif:this.presupuestoForm.get('cif')?.value,
      concepto: this.presupuestoForm.get('concepto')?.value,
      base: this.presupuestoForm.get('base')?.value,
      tipo: this.presupuestoForm.get('tipo')?.value,
      iva: this.presupuestoForm.get('iva')?.value,
      total: this.presupuestoForm.get('total')?.value
      };
      return savePresupuesto;
      }
onChanges():void{
      this.presupuestoForm.valueChanges.subscribe((valor: { base: any; tipo: any; }) => { 
        this.base = valor.base; 
        this.tipo = valor.tipo;
        this.presupuestoForm.value.iva = this.base * this.tipo; 
        this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
        });
        }

}

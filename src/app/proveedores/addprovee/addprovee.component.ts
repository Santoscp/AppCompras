
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {
 
  proveedoresForm!:FormGroup;
  proveedor:any;
  provincias: string[] = [
    'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona',
    'Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
    'La Coruña','Cuenca','Gerona','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','IslasBaleares','Jaén','León','Lérida','Lugo',
    'Madrid', 'Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas',
    'Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
    'Zamora','Zaragoza' ]

    constructor(private pf: FormBuilder, private proveedoresService:ProveedoresService ){
    
    this.proveedor = {
      nombre: '',
      cif: '',
      direccion: '',
      cp: '',
      localidad: '',
      provincias: '',
      telefono: '',
      email: '',
      contacto: ''
   }
  }

  ngOnInit(): void {
    this.proveedoresForm=this.pf.group({
      nombre:['', Validators.required ],
      cif:['', Validators.required ],
      direccion:['', Validators.required ],
      cp:['', Validators.required ],
      localidad:['', Validators.required ],
      provincias:['', Validators.required ],
      telefono:['', Validators.required ],
      email:['', Validators.required ],
      contactos:['', Validators.required ],
    })
    
  }
  onSubmit(){

    this.proveedor=this.saveProveedor();
    this.proveedoresService.postProveedor(this.proveedor).then((data:any)=>{

    })
    this.proveedoresForm.reset();
    }
    saveProveedor() {
      const saveProveedor = {
      nombre: this.proveedoresForm.get('nombre')?.value,
      cif:this.proveedoresForm.get('cif')?.value,
      direccion: this.proveedoresForm.get('direccion')?.value,
      cp: this.proveedoresForm.get('cp')?.value,
      localidad: this.proveedoresForm.get('localidad')?.value,
      provincias: this.proveedoresForm.get('provincias')?.value,
      telefono: this.proveedoresForm.get('telefono')?.value,
      email: this.proveedoresForm.get('email')?.value,
      contactos: this.proveedoresForm.get('contactos')?.value
      };
      return saveProveedor;
      }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent implements OnInit {
  proveedoresForm!:FormGroup;
  id!: string;
  proveedor :any;
  provincias: string[] = [
    'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona',
    'Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
    'La Coruña','Cuenca','Gerona','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','IslasBaleares','Jaén','León','Lérida','Lugo',
    'Madrid', 'Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas',
    'Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
    'Zamora','Zaragoza' ]

  constructor(private pf: FormBuilder,
    private proveedorService: ProveedoresService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    ) {
      
     
      
    this.activatedRouter.params.subscribe(parametros => {
      this.id = parametros['id'];
      this.proveedorService.getProveedor(this.id)
        .then(data => this.proveedor = data.val())
    });
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
  onSubmit() {
    this.proveedor = this.saveProveedor();
    this.proveedorService.putProveedores(this.proveedor, this.id)
      .then(newpre => {
        this.router.navigate(['/proovedores'])
      })
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

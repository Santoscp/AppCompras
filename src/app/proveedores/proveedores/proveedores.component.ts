import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
   
   proveedores:any[] =[];

   constructor(private proveedoresService: ProveedoresService) {
    this.proveedoresService.getProveedores()
    .then(data => {
      const proovedores = data.val();
      for (const id$ in proovedores) {

        const p = proovedores[id$];

        p.id$ = id$;

        this.proveedores.push(proovedores[id$]);

      }
    })
   }

   eliminarProovedor(id$: string) {
    this.proveedoresService.delProveedore(id$)
      .then(res => {
        this.proveedores = [];
        this.proveedoresService.getProveedores()
          .then(data => {
            const valor = data.val();
            for (const id$ in valor) {
              const p = valor[id$];
              p.id$ = id$;
              this.proveedores.push(valor[id$]);
            }
          })
      });
  }

  ngOnInit(): void {
   
  }

}

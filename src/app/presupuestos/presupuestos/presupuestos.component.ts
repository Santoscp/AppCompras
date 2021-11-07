import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  presupuestos: any[] = [];


  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos()
      .then(data => {
        const presupuestos = data.val();
        for (const id$ in presupuestos) {

          const p = presupuestos[id$];

          p.id$ = id$;

          this.presupuestos.push(presupuestos[id$]);

        }
      })

  }
  
  eliminarPresupuesto(id$: string) {
    this.presupuestosService.delPresupuesto(id$)
      .then(res => {
        this.presupuestos = [];
        this.presupuestosService.getPresupuestos()
          .then(presupuestos => {
            const valor = presupuestos.val();
            for (const id$ in valor) {
              const p = valor[id$];
              p.id$ = id$;
              this.presupuestos.push(valor[id$]);
            }
          })
      });
  }

  ngOnInit(): void {

  }

}

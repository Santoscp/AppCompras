import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './autentication/registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { EditproComponent } from './proveedores/editpro/editpro.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { GuardService } from './servicios/guard.service';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent,canActivate:[GuardService] },
  { path: 'addprovee', component: AddproveeComponent,canActivate:[GuardService] },
  { path: 'addpres', component: AddpresComponent,canActivate:[GuardService]},
  { path: 'presupuestos', component: PresupuestosComponent,canActivate:[GuardService]},
  { path: 'editpres/:id', component: EditpresComponent,canActivate:[GuardService]},
  { path: 'editpro/:id', component: EditproComponent,canActivate:[GuardService]},
  { path: 'registro', component: RegistroComponent,canActivate:[GuardService] },

  { path: '**', component: InicioComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

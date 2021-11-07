
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database'
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  presupuestos: any[] | undefined;

  constructor(private db:AngularFireDatabase) { }

  postPresupuesto( presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({ 
    'Content-Type': 'application/json'
    });

    return this.db
    .database.ref()
    .child("presupuestos")
    .push(presupuesto); 
    }

    getPresupuestos ( ) {      
      
      return this.db.database.ref().child("presupuestos").get();   
    }

    getPresupuesto ( id$: string )  {
      const url = `${ environment.firebaseConfig.databaseURL }/${ id$ }.json`; 
      return this.db.database.ref().child("presupuestos").child(id$).get( )
      
      }
      

    putPresupuesto( presupuesto: any, id$: string) { 
      const newpre = JSON.stringify(presupuesto);
      const headers = new Headers({
      'Content-Type': 'application/json'
      });
      const url = `${ environment.firebaseConfig.databaseURL }/${ id$ }.json`; 

      return this.db.database.ref().child("presupuestos").child(id$).update(presupuesto);

     
     
      
      }
      delPresupuesto ( id$: string ) {
        const url = `${ environment.firebaseConfig.databaseURL }/${ id$ }.json`;
        return this.db.database.ref().child("presupuestos").child(id$).remove()
        
        
    

      
  }
 
}


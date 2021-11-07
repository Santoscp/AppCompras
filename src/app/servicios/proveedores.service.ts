import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  proveedores: any []| undefined;

  constructor(private db:AngularFireDatabase) { }

  postProveedor( proveedor: any) {
    const newpres = JSON.stringify(proveedor);
    const headers = new Headers({ 
    'Content-Type': 'application/json'
    });

    return this.db
    .database.ref()
    .child("proveedores")
    .push(proveedor); 
    }

    getProveedores ( ) {      
      
      return this.db.database.ref().child("proveedores").get();   
    }

    getProveedor( id$: string )  {
      const url = `${ environment.firebaseConfig.databaseURL }/${ id$ }.json`; 
      return this.db.database.ref().child("proveedores").child(id$).get( )
      
      }
      

    putProveedores( proveedores: any, id$: string) { 
      const newpre = JSON.stringify(proveedores);
      const headers = new Headers({
      'Content-Type': 'application/json'
      });
      const url = `${ environment.firebaseConfig.databaseURL }/${ id$ }.json`; 

      return this.db.database.ref().child("proveedores").child(id$).update(proveedores);

     
     
      
      }
      delProveedore( id$: string ) {
        const url = `${ environment.firebaseConfig.databaseURL }/${ id$ }.json`;
        return this.db.database.ref().child("proveedores").child(id$).remove()
        
        
    

      
  }
 
}
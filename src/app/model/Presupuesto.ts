export class Presupuesto {
    proveedor: string;
    fecha: Date;
    cif: string;   
    concepto:string ;
    base: string;
    tipo: number;
    iva: number;
    total: number;
    constructor(proveedor: string,fecha:Date,cif:string,concepto:string,base:string,tipo:number,iva:number,total:number) {
        this.proveedor = proveedor;
        this.fecha = fecha;
        this.cif = cif;
        this.concepto = concepto;
        this.base = base;
        this.tipo = tipo;
        this.iva = iva;
        this.total = total;
    }
    
 
   
  };

 
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticationService } from './autentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  constructor(private authS:AutenticationService,
    private router:Router) { }
    
  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot):
               boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
              
              if(!this.authS.isLogged){
                this.router.navigate(['/inicio']);
              }
              
              return this.authS.isLogged;
  }
}

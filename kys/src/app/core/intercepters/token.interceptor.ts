import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private Service:AdminService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
  let token = sessionStorage.getItem('');

  let jwttoken  = request.clone({
    setHeaders:{

      Authorization: 'bearer' + token
    }
    
  })
    return next.handle(jwttoken);
  }
}

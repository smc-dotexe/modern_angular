import { Injectable } from "@angular/core";
import { 
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const modifiedReq = req.clone({
            // properties in req are readonly and can't be updated 
            // clone method is how to update values manually
            withCredentials: true
        });

        
        return next.handle(modifiedReq);// this is an observable
            // .pipe(
            //     filter(val => val.type === HttpEventType.Sent),
            //     tap(val => {
            //         console.log('sent the request');
            //         // if request was just sent to the server
            //         // DEPRECATED CODE BELOW, USED FILTER OPERATOR THAT DOES THE SAME
            //         // if (val.type === HttpEventType.Sent) { 
            //         //     console.log('Request was sent to server');
            //         // }

            //         // if (val.type === HttpEventType.Response) {
            //         //     console.log('Got a response from the API', val);
            //         // }
            //     })
            // );
    }

}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginDTO } from "../interfaces/login-dto";
import { RegisterDTO } from "../interfaces/register-dto";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = environment.api;
  private httpOptionsPublic = {
    headers: new HttpHeaders({ "Content-type": "application/json" }),
  };
  constructor(private http: HttpClient) {}

  login(user: LoginDTO) {
    return this.http.post(
      this.baseUrl + "/api/auth/login",
      user,
      this.httpOptionsPublic
    );
  }

  register(user: RegisterDTO) {
    return this.http.post(
      this.baseUrl + "/api/auth/register",
      user,
      this.httpOptionsPublic
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      if (error.status === 401) {
        //redirect user to login page
      }
      return of(result as T);
    };
  }
}

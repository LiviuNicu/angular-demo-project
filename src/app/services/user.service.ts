import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseUrl = environment.api;
  private httpOptionsPrivate = {
    headers: new HttpHeaders({
      "Content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    }),
  };
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(this.baseUrl + "/api/users", this.httpOptionsPrivate);
  }

  getUserProfile(id: string) {
    return this.http.get(
      this.baseUrl + "/api/profile/" + id,
      this.httpOptionsPrivate
    );
  }

  getAllTasksForUser(id, search) {
    return this.http.get(
      this.baseUrl + "/api/tasks?userID=" + id + "&search=" + encodeURI(search),
      this.httpOptionsPrivate
    );
  }

  addTask(data) {
    return this.http.post(
      this.baseUrl + "/api/addTask",
      data,
      this.httpOptionsPrivate
    );
  }

  deleteTask(task) {
    return this.http.post(
      this.baseUrl + "/api/deleteTask",
      task,
      this.httpOptionsPrivate
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      if (error.status === 401) {
      }
      return of(result as T);
    };
  }
}

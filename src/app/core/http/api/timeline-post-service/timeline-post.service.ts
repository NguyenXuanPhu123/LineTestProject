import { Injectable } from "@angular/core";
import { TimelinePostDetail } from "../../models/timeline-post-detail";
import { of, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TimelinePostService {
  private readonly apiUrl = "api/timelinePosts";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private readonly http: HttpClient) {}

  getTimelinePosts(): Observable<TimelinePostDetail[]> {
    return this.http
      .get<TimelinePostDetail[]>(this.apiUrl)
      .pipe(
        catchError(
          this.handleError<TimelinePostDetail[]>("getTimelinePost", [])
        )
      );
  }

  addPosts(post: TimelinePostDetail): Observable<TimelinePostDetail> {
    return this.http
      .post<TimelinePostDetail>(this.apiUrl, post, this.httpOptions)
      .pipe(catchError(this.handleError<TimelinePostDetail>("addPosts")));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}

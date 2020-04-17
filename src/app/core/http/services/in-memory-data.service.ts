import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { TimelinePostDetail } from '../models/timeline-post-detail';

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const timelinePosts = [];
    return { timelinePosts };
  }
  genId(posts: TimelinePostDetail[]): number {
    return posts.length > 0 ? Math.max(...posts.map(hero => hero.id)) + 1 : 1;
  }
}

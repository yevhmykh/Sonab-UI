import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ITopicTag } from 'src/app/shared/types/topicTag.interface';
import { TopicTagsCacheService } from './topic-tags-cache.service';

@Injectable({
  providedIn: 'root',
})
export class TopicTagService {
  constructor(private http: HttpClient, private cache: TopicTagsCacheService) {}

  public getTags(name: string | null): Observable<ITopicTag[]> {
    let tags = this.cache.getValue(name);

    if (!tags) {
      const fullUrl = name
        ? `${environment.apiUrl}/topictag/search?namePart=${name}`
        : `${environment.apiUrl}/topictag/search`;
      tags = this.http.get<ITopicTag[]>(fullUrl).pipe(shareReplay(1))
      this.cache.setValue(tags, name);

    }
    return tags;
  }
}

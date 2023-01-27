import { Injectable } from '@angular/core';

import { AbstractCacheService } from 'src/app/shared/base/services/abstractCache.service';
import { ITopicTag } from 'src/app/shared/types/topicTag.interface';

@Injectable({
  providedIn: 'root',
})
export class TopicTagsCacheService extends AbstractCacheService<ITopicTag[]> {}

import * as dayjs from 'dayjs';
import { Observable } from 'rxjs';

import { CacheDurationInMinutes } from '../../constants/settings';

export abstract class AbstractCacheService<T> {
  private readonly DEFAULT_KEY = 'DEFAULT';

  private cache: {
    [id: string]: {
      expires: Date;
      value: Observable<T>;
    };
  } = {};

  public getValue(object?: string | null): Observable<T> | null {
    const key = object ? object : this.DEFAULT_KEY;
    const item = this.cache[key];
    if (!item) {
      return null;
    }

    if (dayjs(new Date()).isAfter(item.expires)) {
      return null;
    }

    return item.value;
  }

  public setValue(value: Observable<T>, object?: string | null) {
    const key = object ? object : this.DEFAULT_KEY;
    const expires = dayjs(new Date())
      .add(CacheDurationInMinutes, 'minutes')
      .toDate();
    this.cache[key] = { expires, value };
  }

  public clearCache() {
    this.cache = {};
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IPostShortInfo } from '../types/postShortInfo.interface';
import { IPostFullData } from '../types/postFullData.interface';
import { IPostData } from '../types/postData.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  public getCount(url: string): Observable<number> {
    const fullUrl = `${environment.apiUrl}/posts/${url}/count`;
    return this.http.get<number>(fullUrl);
  }

  public getPosts(
    url: string,
    limit: number,
    page: number
  ): Observable<IPostShortInfo[]> {
    const fullUrl = `${environment.apiUrl}/posts/${url}/list`;
    return this.http.get<IPostShortInfo[]>(fullUrl, {
      params: {
        page,
        limit,
      },
    });
  }

  public getPostData(id: number): Observable<IPostFullData> {
    const fullUrl = `${environment.apiUrl}/posts/get/${id}`;
    return this.http.get<IPostFullData>(fullUrl);
  }

  public createPost(data: IPostData): Observable<number> {
    const fullUrl = `${environment.apiUrl}/posts/create`;
    return this.http.post<number>(fullUrl, data);
  }

  public editPost(id: number, data: IPostData): Observable<{}> {
    const fullUrl = `${environment.apiUrl}/posts/edit/${id}`;
    return this.http.put(fullUrl, data);
  }

  public removePost(id: number): Observable<{}> {
    const fullUrl = `${environment.apiUrl}/posts/remove/${id}`;
    return this.http.delete(fullUrl);
  }
}

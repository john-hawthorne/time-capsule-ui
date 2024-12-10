import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITaskType } from '../../models/task-stopwatch/tasktype.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskTypeService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  getTaskTypes(): Observable<ITaskType[]> {
    return this.httpClient.get<ITaskType[]>(this.baseUrl + 'tasktype/GetTaskTypes');
  }

  addTaskType(taskTypeName: string): Observable<any> {
    const options = {
      params: new HttpParams()
        .set('taskTypeName', taskTypeName)
    };
    return this.httpClient.post(this.baseUrl + 'tasktype/AddTaskType', {}, options);
  }
}

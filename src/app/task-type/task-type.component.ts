import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskTypeService } from './task-type.service';
import { ITaskType } from '../../models/task-stopwatch/tasktype.model';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-task-type',
  templateUrl: './task-type.component.html',
  styleUrls: ['./task-type.component.css']
})
export class TaskTypeComponent implements OnInit {
  taskTypeId!: number;
  taskTypes: ITaskType[];
  modal: bootstrap.Modal | null;
  taskTypeName: string;
  modalOpen: boolean;
  @Output() selectedTaskTypeId: EventEmitter<number>;
  @Output() retrievedTaskTypes: EventEmitter<ITaskType[]>;

  constructor(private taskTypeService: TaskTypeService) {
    this.taskTypes = [];
    this.modal = null;
    this.taskTypeName = "";
    this.modalOpen = false;
    this.selectedTaskTypeId = new EventEmitter<number>();
    this.retrievedTaskTypes = new EventEmitter<ITaskType[]>();
  }

  ngOnInit(): void {
    this.getTaskTypes();
  }

  ngAfterViewInit(): void { // hack p.135 - Angular Development with TypeScript
    const tt = document.getElementById("taskTypeId");
    if (tt) {
      tt.addEventListener("change", () => {
        this.selectedTaskTypeId.emit(this.taskTypeId);
      });
    }
  }

  getTaskTypes(): void {
    this.taskTypeService.getTaskTypes()
      .subscribe(response => {
        this.retrievedTaskTypes.emit([...response]);
        this.taskTypes = [...response];
        this.taskTypeId = this.taskTypes[0].id;
        this.selectedTaskTypeId.emit(this.taskTypeId);
      });
  }

  resetTaskType(): void {
    this.taskTypeName = "";
    this.modalOpen = true;
  }

  openAddTaskTypeDialog(): void {
    this.modal = bootstrap.Modal.getInstance('#addTaskTypeModal');
    this.resetTaskType();
  }

  addTaskType(): void {
    this.modalOpen = false;
    this.modal = null;

    this.taskTypeService.addTaskType(this.taskTypeName)
      .subscribe(response => {
        //const modal = bootstrap.Modal.getInstance('addDialog'); // weird issue where modals won't load without this
        this.getTaskTypes();
      });
  }

  cancelAddTaskType(): void {
    this.modal?.hide();
    this.modal = null;
    this.modalOpen = false;
  }
}

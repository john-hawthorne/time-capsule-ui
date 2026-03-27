import { AfterViewInit, Component, OnInit } from '@angular/core';
import {formatDate} from "@angular/common";
import {ITaskSchedule} from "../../models/task-scheduler/taskschedule.model";
import { TaskSchedulerService } from './task-scheduler.service';

@Component({
  selector: 'app-task-scheduler',
  templateUrl: './task-scheduler.component.html',
  styleUrls: ['./task-scheduler.component.css']
})
export class TaskSchedulerComponent implements OnInit {
  selectedDate: string;
  dayOfWeek: string;
  gridSchedule: ITaskSchedule;
  modalSchedule: ITaskSchedule;

  constructor(private taskScheduleService: TaskSchedulerService) {
    this.selectedDate = formatDate(new Date, 'yyyy-MM-dd', 'en');
    this.dayOfWeek = formatDate(new Date, 'fullDate' , 'en');
    this.gridSchedule = new ITaskSchedule("", new Date(), []);
    this.modalSchedule = new ITaskSchedule("", new Date(), []);
  }

  ngOnInit(): void {
    this.getGridSchedule();
  }

  onDateChange(event: any): void {
    if (event) {
        this.getGridSchedule();
        this.dayOfWeek = formatDate(this.selectedDate, 'fullDate', 'en');
    }
  }

  updateSchedule(): void {
    this.taskScheduleService.updateSchedule(this.selectedDate, this.modalSchedule.timeSlots)
      .subscribe(() => {
        this.getGridSchedule();
      });
  }

  add(): void {
    this.modalSchedule = new ITaskSchedule("", new Date(this.selectedDate), []);
  }

  edit(): void {
    this.modalSchedule = JSON.parse(JSON.stringify(this.gridSchedule));
  }

  deleteGridSchedule(): void {
    if (window.confirm(`Delete Schedule?`)) {
      this.taskScheduleService.deleteSchedule(this.selectedDate)
        .subscribe(() => {
          this.getGridSchedule();
        });
    }
  }

  getGridSchedule(): void {
    this.taskScheduleService.getGridSchedule(this.selectedDate)
      .subscribe(response => {
        this.gridSchedule = JSON.parse(JSON.stringify(response));
      });
  };
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {formatDate} from "@angular/common";
import {ITaskSchedule} from "../../models/task-scheduler/taskschedule.model";
import { TaskSchedulerService } from './task-scheduler.service';

@Component({
  selector: 'app-task-scheduler',
  templateUrl: './task-scheduler.component.html',
  styleUrls: ['./task-scheduler.component.css']
})
export class TaskSchedulerComponent implements OnInit, AfterViewInit {
  names: string[] = [];
  selectedDate: string;
  dayOfWeek: string;
  schedule: ITaskSchedule;
  constructor(private taskScheduleService: TaskSchedulerService) {
    this.selectedDate = formatDate(new Date, 'yyyy-MM-dd', 'en');
    this.dayOfWeek = formatDate(new Date, 'fullDate' , 'en');
    this.schedule = new ITaskSchedule("", new Date(), []);
  }

  ngOnInit(): void {
    this.getSchedule();
  }

  ngAfterViewInit(): void { // hack p.135 - Angular Development with TypeScript
    const sd = document.getElementById("selectedDate");
    if (sd) {
      sd.addEventListener("change", () => {
        this.getSchedule();
        this.dayOfWeek = formatDate(this.selectedDate, 'fullDate', 'en');
      })
    }
  }

  reset(): void {
    if (typeof this.names !== 'undefined') {
      for (var i = 0; i < 18; i++) {
        this.names[i] = "";
      }
    }
  };

  openAddDialog(): void {
    this.reset();
  };

  openEditDialog(): void {
    this.reset();
    if (this.schedule.timeSlots.length > 0) {
      for (let i = 0; i < this.schedule.timeSlots.length; i++) {
        this.names[i] = this.schedule.timeSlots[i].taskName;
      }
    }
  }

  addSchedule(): void {
    this.taskScheduleService.addSchedule(this.selectedDate, this.names)
      .subscribe(() => {
        this.getSchedule();
        // console.log("Failed to add schedule.")
      })
  };

  updateSchedule(): void {
    this.taskScheduleService.updateSchedule(this.selectedDate, this.names)
      .subscribe(() => {
        this.getSchedule();
      });
  }

  deleteSchedule(): void {
    if (window.confirm(`Delete Schedule?`)) {
      this.taskScheduleService.deleteSchedule(this.selectedDate)
        .subscribe(() => {
          this.getSchedule();
        });
    }
  }

  getSchedule(): void {
    this.taskScheduleService.getSchedule(this.selectedDate)
      .subscribe(response => {
        this.schedule = JSON.parse(JSON.stringify(response));
        for (let i = 0; i < this.schedule.timeSlots.length; i++) {
          this.names[i] = this.schedule.timeSlots[i].taskName;
        }
      });
  };
}

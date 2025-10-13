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
  scheduleMap: Map<number, Array<string>> = new Map<number, Array<string>>();
  

  constructor(private taskScheduleService: TaskSchedulerService) {
    this.selectedDate = formatDate(new Date, 'yyyy-MM-dd', 'en');
    this.dayOfWeek = formatDate(new Date, 'fullDate' , 'en');
    this.schedule = new ITaskSchedule("", new Date(), []);
  }

  ngOnInit(): void {
    this.getSchedule();
    this.initializeScheduleMap();
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

  saveCompleted(): void {
    
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

  initializeScheduleMap(): void {
    this.scheduleMap.set(0, ["6AM", "taskOne"]);
    this.scheduleMap.set(1, ["7AM", "taskTwo"]);
    this.scheduleMap.set(2, ["8AM", "taskThree"]);
    this.scheduleMap.set(3, ["9AM", "taskFour"]);
    this.scheduleMap.set(4, ["10AM", "taskFive"]);
    this.scheduleMap.set(5, ["11AM", "taskSix"]);
    this.scheduleMap.set(6, ["12PM", "taskSeven"]);
    this.scheduleMap.set(7, ["1PM", "taskEight"]);
    this.scheduleMap.set(8, ["2PM", "taskNine"]);
    this.scheduleMap.set(9, ["3PM", "taskTen"]);
    this.scheduleMap.set(10, ["4PM", "taskEleven"]);
    this.scheduleMap.set(11, ["5PM", "taskTwelve"]);
    this.scheduleMap.set(12, ["6PM", "taskThirteen"]);
    this.scheduleMap.set(13, ["7PM", "taskFourteen"]);
    this.scheduleMap.set(14, ["8PM", "taskFifteen"]);
    this.scheduleMap.set(15, ["9PM", "taskSixteen"]);
    this.scheduleMap.set(16, ["10PM", "taskSeventeen"]);
    this.scheduleMap.set(17, ["11PM", "taskEighteen"]);
  }
}

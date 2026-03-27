export class ITimeSlot {
  timeSlotId: string;
  taskId: string;
  slotTime: Date;
  taskName: string;
  completedTask: boolean;

  constructor(timeSlotId: string, taskId: string, slotTime: Date, taskName: string, completedTask: boolean) {
    this.timeSlotId = timeSlotId;
    this.taskId = taskId;
    this.slotTime = slotTime;
    this.taskName = taskName;
    this.completedTask = completedTask;
  }
}

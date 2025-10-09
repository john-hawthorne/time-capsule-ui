export class ITimeSlot {
  timeSlotId: string;
  taskId: string;
  slotTime: Date;
  taskName: string;
  checked: boolean;

  constructor(timeSlotId: string, taskId: string, slotTime: Date, taskName: string) {
    this.timeSlotId = timeSlotId;
    this.taskId = taskId;
    this.slotTime = slotTime;
    this.taskName = taskName;
    this.checked = false;
  }
}

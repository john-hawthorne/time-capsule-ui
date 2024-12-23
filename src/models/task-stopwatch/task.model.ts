export class ITask {
  id: string;
  name: string;
  notes: string;
  taskTypeId: number;
  elapsedTime: string;
  startTime: string;
  endTime: string;

  constructor(id: string, name: string, notes: string, taskTypeId: number, elapsedTime: string, startTime: string, endTime: string) {
    this.id = id;
    this.name = name;
    this.notes = notes;
    this.taskTypeId = taskTypeId;
    this.elapsedTime = elapsedTime;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

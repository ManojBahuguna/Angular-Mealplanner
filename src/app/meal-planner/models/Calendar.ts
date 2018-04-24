export class DateCell {
  date: Date;

  constructor(date: Date) {
    this.date = date;
  }
}

export default class CalendarMonth {
  days: Array<DateCell>;

  constructor(date: Date) {
    this.days = [];
    this.init(date);
  }

  init(date: Date) {
    const y = date.getFullYear();
    const m = date.getMonth();
    const firstDate = new Date(y, m, 1).getDate();
    const lastDate = new Date(y, m + 1, 0).getDate();

    for(let i = firstDate; i <= lastDate; i++) {
      const date = new Date(y, m, i);
      const dateCell = new DateCell(date);
      this.days.push(dateCell);
    }
  }
}
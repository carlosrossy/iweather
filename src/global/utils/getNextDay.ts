import { DateTime } from 'luxon';

export function getNextDays() {
  const days = [];
  const today = DateTime.local();

  for (let i = 0; i < 5; i++) {
    const date = today.plus({ days: i + 1 });
    days.push(date.toFormat('dd/MM'));
  }

  return days;
}

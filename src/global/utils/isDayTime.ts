import { DateTime } from 'luxon';

export function isDayTime() {
  const currentTime = DateTime.local();
  const hour = currentTime.hour;

  return hour > 6 && hour < 18;
}

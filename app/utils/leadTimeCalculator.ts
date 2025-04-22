import { addDays, format, isWeekend } from "date-fns";

export function calculateLeadRange(minDays: number, maxDays: number, excludedDates: Date[]) {
  let current = new Date();
  const isExcluded = (date: Date) =>
    excludedDates.some(d => d.toDateString() === date.toDateString()) || isWeekend(date);

  const range: Date[] = [];
  while (range.length < maxDays) {
    current = addDays(current, 1);
    if (!isExcluded(current)) range.push(current);
  }
  const start = format(range[minDays - 1], "MMM d");
  const end = format(range[maxDays - 1], "MMM d");
  return `${start} – ${end}`;
}

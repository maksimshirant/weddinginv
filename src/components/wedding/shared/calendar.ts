export const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'] as const

export function buildMonthGrid(year: number, monthIndex: number): Array<number | null> {
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay()
  const leadingEmptyDays = (firstDayOfMonth + 6) % 7
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()

  return [
    ...Array.from({ length: leadingEmptyDays }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ]
}

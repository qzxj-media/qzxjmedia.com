const options: Intl.DateTimeFormatOptions = {
  timeZone: 'UTC',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

export const convertDateToString = (date: Date) => {
  return date.toLocaleDateString('en-US', options)
}

export const formatDateString = (dateString: string) => {
  return convertDateToString(new Date(dateString))
}

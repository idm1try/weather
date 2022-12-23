export function formatTemperature(temp: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'celsius',
  }).format(Math.round(temp))
}

export function formatTime(time: number): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).format(time * 1000)
}

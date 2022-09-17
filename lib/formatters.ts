export function formatTemperature(tempUnit: string, temp: number): string {
  const temperature = tempUnit === 'metric' ? temp : temp * 1.8 + 32;

  return new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: tempUnit === 'metric' ? 'celsius' : 'fahrenheit',
  }).format(Math.round(temperature));
}

export function formatSpeed(speedUnit: string, speed: number) {
  const speeds = speedUnit === 'metric' ? speed : speed / 1.609;

  return new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: speedUnit === 'metric' ? 'kilometer-per-hour' : 'mile-per-hour',
  }).format(Math.round(speeds));
}

export function formatDay(day: number, index: number): string {
  const now = new Date();

  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now);

  const tomorrow = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
    now.setDate(now.getDate() + 1)
  );

  let dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(day * 1000);

  if (dayOfWeek === today && index === 0) {
    dayOfWeek = 'Today';
  }

  if (dayOfWeek === tomorrow) {
    dayOfWeek = 'Tomorrow';
  }

  return dayOfWeek;
}

export function formatTime(format: string, time: number): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hourCycle: format === 'metric' ? 'h23' : 'h12',
  }).format(time * 1000);
}

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

export function formatTime(format: string, time: number): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: format === 'metric' ? 'h23' : 'h12',
  }).format(time * 1000);
}

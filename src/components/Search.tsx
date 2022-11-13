import { useHotkeys } from '@mantine/hooks';
import { useRef } from 'react';
import useWeather from 'lib/useWeather';

export default function Search({ className }: { className?: string }) {
  const { location, setLocation } = useWeather();
  const inputRef = useRef<HTMLInputElement>(null);

  function focusToInput() {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }

  useHotkeys([['/', () => focusToInput()]]);

  return (
    <div>
      <input
        aria-label='Enter city'
        placeholder='Enter city'
        type='text'
        spellCheck='false'
        value={location}
        onChange={event => setLocation(event.target.value)}
        ref={inputRef}
        className={`w-full rounded-lg bg-gray-100 py-2 px-4 outline-none transition-colors duration-500 placeholder:text-gray-500 hover:bg-gray-200 focus:bg-gray-300/70 dark:bg-gray-800 dark:hover:bg-gray-800/70 dark:focus:bg-gray-800/50 ${className}`}
      />
    </div>
  );
}

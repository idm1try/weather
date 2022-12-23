import useWeather from '@/lib/useWeather'
import cn from '@/lib/classNames'

const Search = () => {
  const { location, setLocation } = useWeather()

  return (
    <div>
      <input
        aria-label='Enter city'
        placeholder='Enter city'
        type='text'
        spellCheck='false'
        value={location}
        onChange={event => setLocation(event.target.value)}
        className={cn(
          'rounded-lg bg-neutral-200 py-2 px-4',
          'outline-none transition-colors',
          'duration-300 placeholder:text-neutral-600',
          'dark:placeholder:text-neutral-400',
          'animate-in dark:bg-neutral-800'
        )}
      />
    </div>
  )
}

export default Search

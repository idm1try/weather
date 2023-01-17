import useWeather from '@/lib/useWeather'

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
        className='rounded-lg bg-neutral-200 py-2 px-4 outline-none transition-colors duration-300 placeholder:text-neutral-600 hover:bg-neutral-300/70 active:bg-neutral-300/50 dark:bg-neutral-800 dark:placeholder:text-neutral-400 dark:hover:bg-neutral-700/50 dark:active:bg-neutral-700/70'
      />
    </div>
  )
}

export default Search

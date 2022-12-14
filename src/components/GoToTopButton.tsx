import { useWindowScroll } from '@mantine/hooks'
import { TbArrowUp } from 'react-icons/tb'

const GoToTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <div>
      {scroll.y >= 100 && (
        <button
          aria-label='Scroll to top'
          onClick={() => scrollTo({ y: 0 })}
          className='fixed right-6 bottom-6 z-20 rounded-lg bg-teal-600 p-3 font-bold text-white transition-colors duration-200 hover:bg-teal-700 active:bg-teal-800 dark:bg-teal-300 dark:text-zinc-900 dark:hover:bg-teal-400 dark:active:bg-teal-500'
        >
          <TbArrowUp />
        </button>
      )}
    </div>
  )
}

export default GoToTopButton

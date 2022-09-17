import { IconButton } from '@chakra-ui/react';
import { useHotkeys } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb';
import useWeather from '../lib/useWeather';

const TempUnitToggleButton = () => {
  const { units, setUnits } = useWeather();

  function toggleUnits() {
    setUnits(units == 'us' ? 'metric' : 'us');
  }

  useHotkeys([['f', () => toggleUnits()]]);

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={units}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label='Toggle temp unit'
          icon={units == 'f' ? <TbTemperatureFahrenheit /> : <TbTemperatureCelsius />}
          onClick={toggleUnits}
          ml={3}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default TempUnitToggleButton;

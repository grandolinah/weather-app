'use client'
import Select from 'react-select';
import { useUserConfigContext } from '../../context/userConfig';
import { CHANGE_UNIT } from '../../context/userConfig/actions';
import styles from './UnitTypeSelect.module.scss';
import { useLocalStorage } from '@uidotdev/usehooks';

const UNIT_OPTIONS = [
  { value: 'standard', label: 'Kelvin (K)' },
  { value: 'imperial', label: 'Fahrenheit (°F)' },
  { value: 'metric', label: 'Celsius (°C)' },
];

const UnitTypeSelect = () => {
  const { dispatch } = useUserConfigContext();
  const [selectedOption, setSelectedOption] = useLocalStorage('unit', UNIT_OPTIONS[0]);

  const onChangeHandler = (option) => {
    setSelectedOption(option);
    dispatch({
      type: CHANGE_UNIT, payload: option.value
    });
  };

  return (
    <div className={styles['unit-select']}>
      <Select
        defaultValue={selectedOption}
        onChange={onChangeHandler}
        options={UNIT_OPTIONS}
      />
    </div>
  );
};

export default UnitTypeSelect;

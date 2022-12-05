import { WarningIcon } from '@chakra-ui/icons';
import { FormControl, FormLabel, HStack } from '@chakra-ui/react';

import DatePicker, { registerLocale } from 'react-datepicker';
import fi from 'date-fns/locale/fi';
registerLocale('fi', fi);
import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';
import { useState } from 'react';

export const Datepicker = ({
  value,
  label,
  name,
  disabled,
  valueSetter,
}: {
  value?: Date;
  label: string;
  name: string;
  disabled: boolean;
  valueSetter: (fieldName: string, newValue: Date) => void;
}) => {
  const [dateError, setDateError] = useState(false);
  const setMaxDate = () => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 2);
    return maxDate;
  };
  const getClassName = () => {
    if (dateError) {
      return 'date-error';
    }
    if (disabled) {
      return 'date-input-disabled';
    }
    return 'date-input';
  };

  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <HStack>
        <DatePicker
          selected={value}
          locale={'fi'}
          dateFormat='dd.MM.yyyy'
          minDate={new Date()}
          maxDate={setMaxDate()}
          name='expiryDate'
          disabled={disabled}
          className={getClassName()}
          onChange={(date: Date) => {
            valueSetter(name, date);
            setDateError(false);
          }}
        />
        <WarningIcon color='#EE0004' />
      </HStack>
    </FormControl>
  );
};

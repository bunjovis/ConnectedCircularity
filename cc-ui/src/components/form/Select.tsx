import { WarningIcon } from '@chakra-ui/icons';
import { FormControl, FormLabel, HStack, Select } from '@chakra-ui/react';
import { Field } from 'formik';
import { ReactElement } from 'react';
import { ItemArea } from '../../types/Advert';

export const SelectField = ({
  label,
  id,
  name,
  isRequired,
  disabled,
  value,
  options,
  valueSetter,
  errors,
  touched,
}: {
  label: string;
  id: string;
  name: string;
  isRequired: boolean;
  disabled: boolean;
  value: ItemArea;
  options: any[];
  valueSetter: any;
  errors?: string;
  touched?: boolean;
}) => {
  return (
    <FormControl isInvalid={!!errors && touched}>
      <FormLabel>{label}</FormLabel>
      <HStack>
        <Field
          as={Select}
          id={id}
          name={name}
          backgroundColor='#fff'
          width='100%'
          placeholder='Valitse'
          value={value.name}
          disabled={disabled}
          validate={
            isRequired
              ? (value?: string) => {
                  let error;
                  if (value?.length === 0) {
                    error = 'value cannot be empty';
                  }
                  return error;
                }
              : ''
          }
          onChange={(e: any) => {
            const newValue = options.find((o) => o.name === e.target.value);
            valueSetter(name, newValue);
          }}
        >
          {options.map((op: any): ReactElement => {
            return (
              <option key={op.id} value={op.name}>
                {op.name}
              </option>
            );
          })}
        </Field>
        {isRequired && <WarningIcon color='#EE0004' />}
      </HStack>
    </FormControl>
  );
};

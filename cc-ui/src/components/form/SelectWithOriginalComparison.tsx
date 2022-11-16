import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  Select,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

import { Field } from 'formik';

// eslint-disable-next-line max-lines-per-function
export const SelectWithOriginalComparison = ({
  label,
  valueKey,
  ogValueKey,
  isRequired,
  touched,
  errors,
  options,
}: {
  label: string;
  valueKey: string;
  ogValueKey: string;
  isRequired: boolean;
  touched?: boolean;
  errors?: string;
  options: any[];
}) => {
  return (
    <HStack width='100%'>
      <FormControl isInvalid={!!errors && touched}>
        <FormLabel>{label}</FormLabel>
        <HStack>
          <Field
            as={Select}
            id={valueKey}
            name={valueKey}
            backgroundColor='#fff'
            width='90%'
            placeholder='Valitse'
            validate={
              isRequired
                ? (value: string) => {
                    let error;
                    if (value.length === 0) {
                      error = 'value cannot be empty';
                    }
                    return error;
                  }
                : ''
            }
          >
            {options.map((op) => (
              <option key={op.id} value={op.id}>
                {op.id}
              </option>
            ))}
          </Field>
          {isRequired && <WarningIcon color='#EE0004' />}
        </HStack>
      </FormControl>
      <FormControl m='2'>
        <FormLabel>Annettu arvo</FormLabel>
        <Field
          as={Input}
          id={ogValueKey}
          name={ogValueKey}
          backgroundColor='#fff'
          width='100%'
          disabled={true}
          value='alkuperäinen arvo'
        />
      </FormControl>
    </HStack>
  );
};

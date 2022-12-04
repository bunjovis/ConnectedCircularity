import { FormControl, FormLabel, Input, HStack } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

import { Field } from 'formik';

// eslint-disable-next-line max-lines-per-function
export const FieldWithOriginalComparison = ({
  label,
  valueKey,
  ogValue,
  disabled,
  isRequired,
  touched,
  errors,
  value,
}: {
  label: string;
  valueKey: string;
  ogValue?: string;
  disabled: boolean;
  isRequired: boolean;
  touched?: boolean;
  errors?: string;
  value?: string;
}) => {
  return (
    <HStack width='100%'>
      <FormControl isInvalid={!!errors && touched}>
        <FormLabel>{label}</FormLabel>
        <HStack>
          <Field
            as={Input}
            id={valueKey}
            name={valueKey}
            backgroundColor='#fff'
            width='90%'
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
          />
          {isRequired && <WarningIcon color='#EE0004' />}
        </HStack>
      </FormControl>
      <FormControl m='2'>
        <FormLabel>Annettu arvo</FormLabel>
        <Field
          as={Input}
          id='original'
          name='original'
          backgroundColor='#fff'
          width='100%'
          disabled={true}
          value={ogValue}
        />
      </FormControl>
    </HStack>
  );
};

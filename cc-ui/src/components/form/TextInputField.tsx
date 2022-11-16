import { FormControl, FormLabel, Input, HStack } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { Field } from 'formik';

export const TextInputField = ({
  label,
  id,
  isRequired,
  touched,
  errors,
}: {
  label: string;
  id: string;
  isRequired: boolean;
  touched?: boolean;
  errors?: string;
}) => {
  return (
    <FormControl isInvalid={!!errors && touched}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <HStack>
        <Field
          as={Input}
          id={id}
          name={id}
          backgroundColor='#fff'
          width='100%'
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
        />

        {isRequired && <WarningIcon color='#EE0004' />}
      </HStack>
    </FormControl>
  );
};

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  HStack,
  Select,
  Spacer,
  ButtonGroup,
  Textarea,
  Switch,
} from '@chakra-ui/react';

import { Formik, Field, ErrorMessage } from 'formik';

export const FieldWithOriginalComparison = ({
  label,
  valueKey,
  ogValueKey,
  inputType,
}: {
  label: string;
  valueKey: string;
  ogValueKey: string;
  inputType: string;
}) => {
  return (
    <HStack width='100%'>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Field
          as={inputType !== 'input' ? Select : Input}
          id={valueKey}
          name={valueKey}
          backgroundColor='#fff'
          width='100%'
        />
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

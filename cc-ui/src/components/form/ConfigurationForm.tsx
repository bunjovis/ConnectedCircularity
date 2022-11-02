import {
  VStack,
  FormControl,
  FormLabel,
  Button,
  Switch,
  Text,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { Formik } from 'formik';

export const ConfigurationForm = () => {
  const initValues = {
    contactInformation: true,
    expiryDate: true,
    location: true,
  };
  return (
    <Formik
      initialValues={initValues}
      onSubmit={(values) => {
        console.log('submit configuration');
        // TODO: submit
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <VStack
            spacing={4}
            align='flex-start'
            border='1px'
            borderColor='#000'
            p='5'
            mt='5'
          >
            <Heading as='h5' size='sm'>
              Konfiguroi esitäyttö
            </Heading>
            <FormControl
              display='flex'
              width='100%'
              alignItems='center'
              p='2'
              backgroundColor='#fff'
              border='1px'
              borderRadius='5px'
            >
              <FormLabel htmlFor='contactInformation' width='80%'>
                Käytä näitä Yhteyshenkilön tietoja kaikissa tämän kartoituksen
                materiaaleissa
              </FormLabel>
              <Text width='10%' as='i'>
                {values.contactInformation ? 'Kyllä' : 'Ei'}
              </Text>
              <Switch
                isChecked={values.contactInformation}
                id='contactInformation'
                onChange={(e) => {
                  setFieldValue('contactInformation', e.target.checked);
                }}
              />
            </FormControl>

            <FormControl
              display='flex'
              width='100%'
              alignItems='center'
              p='2'
              backgroundColor='#fff'
              border='1px'
              borderRadius='5px'
            >
              <FormLabel htmlFor='expiryDate' width='80%'>
                Käytä annettua voimassaoloaikaa kaikissa tämän kartoituksen
                materiaaleissa
              </FormLabel>
              <Text width='10%' as='i'>
                {values.expiryDate ? 'Kyllä' : 'Ei'}
              </Text>
              <Switch
                isChecked={values.expiryDate}
                id='expiryDate'
                onChange={(e) => {
                  setFieldValue('expiryDate', e.target.checked);
                }}
              />
            </FormControl>
            <FormControl
              display='flex'
              width='100%'
              alignItems='center'
              p='2'
              backgroundColor='#fff'
              border='1px'
              borderRadius='5px'
            >
              <FormLabel htmlFor='location' width='80%'>
                Käytä annettua sijaintia kaikissa tämän kartoituksen
                materiaaleissa
              </FormLabel>
              <Text width='10%' as='i'>
                {values.location ? 'Kyllä' : 'Ei'}
              </Text>
              <Switch
                isChecked={values.location}
                id='location'
                onChange={(e) => {
                  setFieldValue('location', e.target.checked);
                }}
              />
            </FormControl>
            <Flex width='100%'>
              <Spacer />
              <Button type='submit' colorScheme='blue' borderRadius='0'>
                Tallenna
              </Button>
            </Flex>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

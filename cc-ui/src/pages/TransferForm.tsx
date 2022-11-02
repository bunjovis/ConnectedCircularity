import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  HStack,
  Select,
  Spacer,
  ButtonGroup,
  Textarea,
  Switch,
  Text,
} from '@chakra-ui/react';

import { WarningIcon } from '@chakra-ui/icons';

// TODO: move Datepicker to another file
import DatePicker, { registerLocale } from 'react-datepicker';
import fi from 'date-fns/locale/fi';
registerLocale('fi', fi);
import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';

import { useParams } from 'react-router-dom';

import { FieldWithOriginalComparison } from '../components/form/FieldWithOriginalComparison';
import { TextInputField } from '../components/form/TextInputField';
import { ConfigurationForm } from '../components/form/ConfigurationForm';

import {
  unitOptions,
  materialOptions,
  industryOptions,
} from '../utils/mt-options';

import { Advert } from '../types/Advert';

// TODO: match with MT options
const initValues: Advert = {
  title: '',
  industry: 'Rakentaminen ja purkaminen',
  material: '',
  materialDescription: '',
  amount: '',
  amountUnit: '',
  amountInformation: '',
  showLocationForRegistered: true,
  locationName: '',
  streetAddress: '',
  zipCode: '',
  municipality: '',
  area: '',
  expiryDate: undefined,
  contactName: '',
  contactRole: '',
  contactPhone: '',
  contactEmail: '',
  showOrganizationForRegistered: true,
};

function TransferForm() {
  const { itemId } = useParams();
  console.log(itemId);
  const [dateError, setDateError] = useState(false);
  // TODO: get item id from url params
  // TODO: set initial values based on the Item fetched from backend
  // TODO: show required fields before validations
  /*
  maybe used later
  const renderFormFields = () => {
    for (const key in initValues) {
      console.log(`${key}: ${initValues[key as keyof Advert]}`);
    }
  };
  */

  const cancelAction = () => {
    console.log('Clicked Cancel');
  };

  const saveAsDraft = () => {
    // TODO: type/interface for posting draft values
    console.log('Save as draft');
  };

  const renderFormButtons = () => {
    return (
      <Flex width='100%' alignItems='center'>
        <Button
          colorScheme='blue'
          variant='outline'
          borderRadius='0'
          onClick={() => cancelAction()}
        >
          Peruuta
        </Button>
        <Spacer />
        <ButtonGroup>
          <Button
            colorScheme='blue'
            variant='outline'
            borderRadius='0'
            onClick={() => saveAsDraft()}
          >
            Tallenna luonnos
          </Button>

          <Button type='submit' colorScheme='blue' borderRadius='0'>
            Lähetä
          </Button>
        </ButtonGroup>
      </Flex>
    );
  };

  const setMaxDate = () => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 2);
    return maxDate;
  };

  return (
    <Flex flexDirection='column' backgroundColor='#D1D1D1' align='center'>
      <Box backgroundColor='#F6F6F6' maxWidth='80%' minWidth='400px' p='5'>
        <Heading textAlign='left' as='h2' p='2'>
          Tee ilmoitus Materiaalitoriin
        </Heading>
        <Heading as='h3' size='xs' textAlign='left' fontSize='sm' p='2'>
          Tarkista ja täytä puuttuvat syötteet
        </Heading>
        <Formik
          initialValues={initValues}
          onSubmit={(values) => {
            console.log('onsubmit');
            if (!values.expiryDate) {
              setDateError(true);
              return;
            }
            // TODO: submit
            console.log(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched, values, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <VStack
                spacing={4}
                align='flex-start'
                border='1px'
                borderColor='#000'
                p='5'
              >
                {TextInputField({
                  label: 'Ilmoituksen otsikko',
                  id: 'title',
                  isRequired: true,
                  touched: touched.title,
                  errors: errors.title,
                })}
                <FormControl m='2'>
                  <FormLabel>Toimiala</FormLabel>
                  <Field
                    as={Select}
                    id='industry'
                    name='industry'
                    type='text'
                    backgroundColor='#fff'
                    width='100%'
                  >
                    {industryOptions.map((op) => (
                      <option key={op.id} value={op.id}>
                        {op.id}
                      </option>
                    ))}
                  </Field>
                </FormControl>
                <HStack width='100%'>
                  <FormControl>
                    <FormLabel>Materiaali</FormLabel>
                    <Field
                      as={Select}
                      id='material'
                      name='material'
                      backgroundColor='#fff'
                      width='100%'
                      validate={(value: string) => {
                        console.log(value);
                      }}
                    >
                      {materialOptions.map((op) => (
                        <option key={op.id} value={op.id}>
                          {op.id}
                        </option>
                      ))}
                    </Field>
                  </FormControl>
                  <FormControl m='2'>
                    <FormLabel>Annettu arvo</FormLabel>
                    <Field
                      as={Input}
                      id='ogMaterial'
                      name='ogMaterial'
                      backgroundColor='#fff'
                      width='100%'
                      disabled={true}
                      value='alkuperäinen arvo'
                    />
                  </FormControl>
                </HStack>
                <FormControl>
                  <FormLabel htmlFor='materialDescription'>
                    Materiaalin kuvaus
                  </FormLabel>
                  <Field
                    as={Textarea}
                    id='materialDescription'
                    name='materialDescription'
                    backgroundColor='#fff'
                    width='100%'
                    resize='none'
                  />
                </FormControl>
                {FieldWithOriginalComparison({
                  label: 'Arvio materiaalin määrästä',
                  valueKey: 'amount',
                  ogValueKey: 'ogAmount',
                  inputType: 'input',
                })}
                <HStack width='100%'>
                  <FormControl>
                    <FormLabel>Määrän yksikkö</FormLabel>
                    <Field
                      as={Select}
                      id='amountUnit'
                      name='amountUnit'
                      backgroundColor='#fff'
                      width='100%'
                      validate={(value: string) => {
                        console.log(value);
                      }}
                    >
                      {unitOptions.map((op) => (
                        <option key={op.id} value={op.id}>
                          {op.id}
                        </option>
                      ))}
                    </Field>
                  </FormControl>
                  <FormControl m='2'>
                    <FormLabel>Annettu arvo</FormLabel>
                    <Field
                      as={Input}
                      id='ogAmountUnit'
                      name='ogAmountUnit'
                      backgroundColor='#fff'
                      width='100%'
                      disabled={true}
                      value='alkuperäinen arvo'
                    />
                  </FormControl>
                </HStack>
                <FormControl>
                  <FormLabel htmlFor='amountInformation'>
                    Lisätietoja määrästä
                  </FormLabel>
                  <Field
                    as={Textarea}
                    id='amountInformation'
                    name='amountInformation'
                    backgroundColor='#fff'
                    width='100%'
                    resize='none'
                  />
                </FormControl>
                <Heading as='h5' size='sm'>
                  Materiaalin sijainti
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
                  <FormLabel htmlFor='showLocationForRegistered' width='80%'>
                    Näytä tarkat sijaintitiedot vain rekisteröityneille
                    käyttäjille
                  </FormLabel>
                  <Text width='10%' as='i'>
                    {values.showLocationForRegistered ? 'Kyllä' : 'Ei'}
                  </Text>
                  <Switch
                    isChecked={values.showLocationForRegistered}
                    id='showLocationForRegistered'
                    onChange={(e) => {
                      setFieldValue(
                        'showLocationForRegistered',
                        e.target.checked
                      );
                    }}
                  />
                </FormControl>
                {TextInputField({
                  label: 'Kohteen nimi',
                  id: 'locationName',
                  isRequired: false,
                })}
                {FieldWithOriginalComparison({
                  label: 'Katuosoite',
                  valueKey: 'streetAddress',
                  ogValueKey: 'ogAddress',
                  inputType: 'input',
                })}
                {FieldWithOriginalComparison({
                  label: 'Postinumero',
                  valueKey: 'zipCode',
                  ogValueKey: 'ogZipcode',
                  inputType: 'input',
                })}
                {TextInputField({
                  label: 'Kunta',
                  id: 'municipality',
                  isRequired: true,
                  touched: touched.municipality,
                  errors: errors.municipality,
                })}
                <FormControl>
                  <FormLabel htmlFor='expiryDate'>
                    Ilmoituksen voimassaoloaika
                    {dateError && <WarningIcon color='#EE0004' />}
                  </FormLabel>
                  <DatePicker
                    selected={values.expiryDate}
                    locale={'fi'}
                    dateFormat='dd.MM.yyyy'
                    minDate={new Date()}
                    maxDate={setMaxDate()}
                    name='expiryDate'
                    className={dateError ? 'date-error' : 'date-input'}
                    onChange={(date: Date) => {
                      setFieldValue('expiryDate', date);
                      setDateError(false);
                    }}
                  />
                </FormControl>
                {/**TODO: liitteet ja kuvat */}
                <Heading as='h5' size='sm'>
                  Yhteyshenkilön tiedot
                </Heading>
                {TextInputField({
                  label: 'Nimi',
                  id: 'contactName',
                  isRequired: true,
                  touched: touched.contactName,
                  errors: errors.contactName,
                })}
                {TextInputField({
                  label: 'Rooli organisaatiossa',
                  id: 'contactRole',
                  isRequired: false,
                })}
                {TextInputField({
                  label: 'Puhelinnumero',
                  id: 'contactPhone',
                  isRequired: false,
                })}
                {TextInputField({
                  label: 'Sähköposti',
                  id: 'contactEmail',
                  isRequired: true,
                  touched: touched.contactEmail,
                  errors: errors.contactEmail,
                })}
                <FormControl
                  display='flex'
                  width='100%'
                  alignItems='center'
                  p='2'
                  backgroundColor='#fff'
                  border='1px'
                  borderRadius='5px'
                >
                  <FormLabel
                    htmlFor='showOrganizationForRegistered'
                    width='75%'
                  >
                    Näytä organisaation tiedot vain Materiaalitoriin
                    kirjautuneille
                  </FormLabel>
                  <Text width='10%' as='i'>
                    {values.showOrganizationForRegistered ? 'Kyllä' : 'Ei'}
                  </Text>
                  <Switch
                    isChecked={values.showOrganizationForRegistered}
                    id='showOrganizationForRegistered'
                    onChange={(e) => {
                      setFieldValue(
                        'showOrganizationForRegistered',
                        e.target.checked
                      );
                    }}
                  />
                </FormControl>
                {renderFormButtons()}
              </VStack>
            </form>
          )}
        </Formik>
        <ConfigurationForm />
      </Box>
    </Flex>
  );
}

export default TransferForm;

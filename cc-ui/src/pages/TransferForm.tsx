/* eslint-disable max-lines-per-function */
import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { Form, Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
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

import { useParams } from 'react-router-dom';

import { FieldWithOriginalComparison } from '../components/form/FieldWithOriginalComparison';
import { TextInputField } from '../components/form/TextInputField';
import { ConfigurationForm } from '../components/form/ConfigurationForm';
import { SelectWithOriginalComparison } from '../components/form/SelectWithOriginalComparison';
import { Datepicker } from '../components/form/Datepicker';

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

const TransferForm: React.FC<{}> = () => {
  const { itemId } = useParams();

  // TODO: check if user has authenticated to MT
  // temp MT auth state
  const [mtAuth, setMTAuth] = useState(false);

  /*
  maybe used later
  const renderFormFields = () => {
    for (const key in initValues) {
      console.log(`${key}: ${initValues[key as keyof Advert]}`);
    }
  };
  */
  useEffect(() => {
    // TODO: get item info with itemId
    // TODO: set initial values based on the Item fetched from backend
    console.log(itemId);
  }, []);

  const cancelAction = () => {
    console.log('Clicked Cancel');
  };

  const saveAsDraft = () => {
    // TODO: type/interface for posting draft values
    console.log('Save as draft');
  };

  const authToMT = () => {
    console.log('authenticate to MT');
    setMTAuth(true);
  };

  const renderFormButtons = () => {
    return (
      <Flex width='100%' alignItems='center'>
        <Button
          colorScheme='blue'
          variant='outline'
          borderRadius='0'
          textTransform='uppercase'
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
            textTransform='uppercase'
          >
            Tallenna luonnos
          </Button>
          {mtAuth && (
            <Button
              type='submit'
              colorScheme='blue'
              borderRadius='0'
              textTransform='uppercase'
            >
              Lähetä
            </Button>
          )}
          {!mtAuth && (
            <Button
              onClick={() => authToMT()}
              colorScheme='blue'
              borderRadius='0'
              textTransform='uppercase'
            >
              Kirjaudu Materiaalitoriin
            </Button>
          )}
        </ButtonGroup>
      </Flex>
    );
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
          onSubmit={(values: Advert) => {
            console.log('onsubmit');
            if (!values.expiryDate) {
              return;
            }
            // TODO: submit
            console.log(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched, values, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
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
                <FormControl
                  m='2'
                  isInvalid={!!errors.industry && touched.industry}
                >
                  <FormLabel>Toimiala</FormLabel>
                  <HStack>
                    <Field
                      as={Select}
                      id='industry'
                      name='industry'
                      type='text'
                      backgroundColor='#fff'
                      width='100%'
                      validate={(value: string) => {
                        let error;
                        if (value.length === 0) {
                          error = 'value cannot be empty';
                        }
                        return error;
                      }}
                    >
                      {industryOptions.map(
                        (op: any): ReactElement => (
                          <option key={op.id} value={op.id}>
                            {op.id}
                          </option>
                        )
                      )}
                    </Field>
                    <WarningIcon color='#EE0004' />
                  </HStack>
                </FormControl>
                {SelectWithOriginalComparison({
                  label: 'Materiaali',
                  valueKey: 'material',
                  ogValueKey: 'ogMaterial',
                  isRequired: true,
                  touched: touched.material,
                  errors: errors.material,
                  options: materialOptions,
                })}
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
                  isRequired: true,
                  touched: touched.amount,
                  errors: errors.amount,
                })}
                {SelectWithOriginalComparison({
                  label: 'Määrän yksikkö',
                  valueKey: 'amountUnit',
                  ogValueKey: 'ogAmountUnit',
                  isRequired: true,
                  touched: touched.amountUnit,
                  errors: errors.amountUnit,
                  options: unitOptions,
                })}
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
                  <FormLabel
                    htmlFor='showLocationForRegistered'
                    width='80%'
                    mt='auto'
                    mb='auto'
                    mr='0'
                    ml='0'
                  >
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
                  isRequired: false,
                })}
                {FieldWithOriginalComparison({
                  label: 'Postinumero',
                  valueKey: 'zipCode',
                  ogValueKey: 'ogZipcode',
                  isRequired: false,
                })}
                {TextInputField({
                  label: 'Kunta',
                  id: 'municipality',
                  isRequired: true,
                  touched: touched.municipality,
                  errors: errors.municipality,
                })}
                {Datepicker({
                  label: 'Ilmoituksen voimassaoloaika',
                  value: values.expiryDate,
                  name: 'expiryDate',
                  valueSetter: setFieldValue,
                })}
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
                    width='80%'
                    mt='auto'
                    mb='auto'
                    mr='0'
                    ml='0'
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
            </Form>
          )}
        </Formik>
        <ConfigurationForm />
      </Box>
    </Flex>
  );
};

export default TransferForm;

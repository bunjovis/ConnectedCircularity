/* eslint-disable max-lines-per-function */
import React, { useState, useMemo } from 'react';
import { notificationActions } from '../notificationsSlice';
import { useDispatch } from 'react-redux';
import { municipalityOptions } from '../utils/mt-options';
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
  Image,
  Center,
  Spinner,
} from '@chakra-ui/react';

import { DeleteIcon, WarningIcon } from '@chakra-ui/icons';

import { useParams, useNavigate } from 'react-router-dom';

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
import { advertDefaults, setUpPrefills } from '../utils/helpers';

import { Advert, ItemArea, PostAdvert } from '../types/Advert';
import { useAuth } from '../components/AuthProvider';
import { useGetItemQuery } from '../dbServiceApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import axios from 'axios';
import { SelectField } from '../components/form/Select';

const TransferForm: React.FC<{}> = () => {
  const { itemId } = useParams();
  const { mtAuth } = useAuth();
  const { data, error, isLoading } = useGetItemQuery(itemId ?? skipToken);
  const navigate = useNavigate();
  const [isPostingItem, setIsPosting] = useState(false);
  const dispatch = useDispatch();

  const cancelAction = () => {
    navigate('/home');
  };

  const saveAsDraft = () => {
    // TODO: type/interface for posting draft values
    //console.log('Save as draft');
  };

  const renderFormButtons = () => {
    return (
      <Flex width='100%' alignItems='center'>
        <Button
          colorScheme='blue'
          variant='outline'
          borderRadius='0'
          textTransform='uppercase'
          backgroundColor='#fff'
          onClick={() => cancelAction()}
        >
          Peruuta
        </Button>
        <Spacer />
        <ButtonGroup>
          {false && (
            <Button
              colorScheme='blue'
              variant='outline'
              borderRadius='0'
              onClick={() => saveAsDraft()}
              textTransform='uppercase'
            >
              Tallenna luonnos
            </Button>
          )}
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

  const mappedValues = ['material', 'unit', 'area'];

  const setUpValues = (data: Advert) => {
    let d = {} as Advert;
    type AdKey = keyof typeof advertDefaults;
    for (const key in data) {
      if (data[key as AdKey]) {
        const value = data[key as AdKey];
        if (typeof value === 'string' && mappedValues.includes(key)) {
          const v = setUpPrefills(key, value);
          d = {
            ...d,
            [key]: v,
          };
        }
      }
    }
    const industryPrefill = setUpPrefills('industry', 'PK');
    d = {
      ...d,
      ['industry']: industryPrefill,
    };
    // TODO: if configurations
    return { ...advertDefaults, ...data, ...d };
  };

  const removeImage = (url: string) => {};
  const extractedOptions = municipalityOptions
    .map((o) => o.municipalities)
    .flat(1)
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const displayImages = (images: string[]) => {
    return (
      <Flex width='100%' alignContent='center' gap='1'>
        {images &&
          images.map((i) => {
            return (
              <Flex direction='column' maxW='25%' minH='200px' key={i}>
                <Box flex={1} key={i} border='1px solid black' padding='10px'>
                  <Image
                    border='1px solid black'
                    src={i}
                    marginLeft='auto'
                    marginRight='auto'
                    marginTop='auto'
                    marginBottom='auto'
                    minH='200px'
                    objectFit='contain'
                    padding='10px'
                  />
                </Box>
                <Button
                  mt='5px'
                  colorScheme='blue'
                  variant='outline'
                  borderRadius='0'
                  textTransform='uppercase'
                  backgroundColor='#fff'
                  rightIcon={<DeleteIcon />}
                  onClick={() => removeImage(i)}
                >
                  Poista
                </Button>
              </Flex>
            );
          })}
      </Flex>
    );
  };

  if (isLoading) {
    return (
      <Center width='100%' p='5'>
        <Spinner size='xl' />
      </Center>
    );
  }

  if (error) {
    return (
      <Center width='100%' p='5'>
        Tietojen haku ei onnistunut
      </Center>
    );
  }
  return (
    <Flex
      flexDirection='column'
      backgroundColor='#D1D1D1'
      align='center'
      minW={'900px'}
    >
      {data && (
        <Box backgroundColor='#F6F6F6' maxWidth='80%' minWidth='400px' p='5'>
          <Heading textAlign='left' as='h2' p='2'>
            Tee ilmoitus Materiaalitoriin
          </Heading>
          <Heading as='h3' size='xs' textAlign='left' fontSize='sm' p='2'>
            Tarkista ja täytä puuttuvat syötteet
          </Heading>
          <Formik
            enableReinitialize
            initialValues={setUpValues(data)}
            onSubmit={(values: Advert) => {
              if (!values.expiryDate) {
                return;
              }
              const postData = {
                contact: {
                  name: values.contactName,
                  title: values.contactRole,
                  phone: values.contactPhone,
                  email: values.contactEmail,
                },
                contactIsPublic: values.showOrganizationForRegistered,
                expires: values.expiryDate.toISOString(),
                materials: [
                  {
                    quantity: {
                      amount: parseInt(values.amount),
                      unitOfMeasure: values.unit,
                    },
                    continuity: 'onetime',
                    amountDescription: values.amountInformation,
                    location: {
                      name: values.locationName,
                      address: values.streetAddress,
                      postalcode: values.zipCode,
                      city: values.area.name,
                      cityId: values.area.cityId,
                      region: values.area.region,
                      regionId: values.area.regionId,
                    },
                    isWaste: false,
                    description: values.materialDescription,
                    industry: values.industry,
                    locationIsPublic: values.locationIsPublic,
                    classification: values.material,
                    subClassification: '',
                  },
                ],
                regions: [],
                attachments: [],
                title: values.title,
              };
              setIsPosting(true);
              const sendData: PostAdvert = {
                type: 'offeringMaterial',
                data: postData,
              };
              const config = {
                headers: {
                  Authorization: `Bearer ${sessionStorage.getItem('mtToken')}`,
                },
              };

              axios
                .post(
                  `${import.meta.env.VITE_CC_BACKEND}v1/advert`,
                  sendData,
                  config
                )
                .then((res) => {
                  navigate('/home');
                  dispatch(
                    notificationActions.newNotification({
                      status: 'success',
                      message: 'Ilmoituksen siirto onnistui!',
                    })
                  );
                })
                .catch((err) => {
                  setIsPosting(false);
                  dispatch(
                    notificationActions.newNotification({
                      status: 'error',
                      message: 'Ilmoituksen siirto epäonnistui',
                    })
                  );
                });
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
                    disabled: isPostingItem,
                    touched: touched.title,
                    errors: errors.title,
                    value: values.title,
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
                        value={values.industry}
                        disabled={isPostingItem}
                        validate={(value?: string) => {
                          let error;
                          if (value?.length === 0) {
                            error = 'value cannot be empty';
                          }
                          return error;
                        }}
                      >
                        {industryOptions.map(
                          (op: any): ReactElement => (
                            <option key={op.id} value={op.id}>
                              {op.displayValue}
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
                    ogValue: data.material,
                    isRequired: true,
                    disabled: isPostingItem,
                    touched: touched.material,
                    errors: errors.material,
                    options: materialOptions,
                    value: values.material,
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
                      disabled={isPostingItem}
                    />
                  </FormControl>
                  {FieldWithOriginalComparison({
                    label: 'Arvio materiaalin määrästä',
                    valueKey: 'amount',
                    ogValue: data.amount,
                    isRequired: true,
                    disabled: isPostingItem,
                    touched: touched.amount,
                    errors: errors.amount,
                    value: values.amount,
                  })}
                  {SelectWithOriginalComparison({
                    label: 'Määrän yksikkö',
                    valueKey: 'unit',
                    ogValue: data.unit,
                    isRequired: true,
                    disabled: isPostingItem,
                    touched: touched.unit,
                    errors: errors.unit,
                    options: unitOptions,
                    value: values.unit,
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
                      disabled={isPostingItem}
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
                      htmlFor='locationIsPublic'
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
                      {values.locationIsPublic ? 'Kyllä' : 'Ei'}
                    </Text>
                    <Switch
                      isChecked={values.locationIsPublic}
                      id='locationIsPublic'
                      disabled={isPostingItem}
                      onChange={(e) => {
                        setFieldValue('locationIsPublic', e.target.checked);
                      }}
                    />
                  </FormControl>
                  {TextInputField({
                    label: 'Kohteen nimi',
                    id: 'locationName',
                    isRequired: false,
                    disabled: isPostingItem,
                  })}
                  {FieldWithOriginalComparison({
                    label: 'Katuosoite',
                    valueKey: 'streetAddress',
                    ogValue: data.streetAddress,
                    isRequired: false,
                    disabled: isPostingItem,
                  })}
                  {FieldWithOriginalComparison({
                    label: 'Postinumero',
                    valueKey: 'zipCode',
                    ogValue: data.zipCode,
                    isRequired: false,
                    disabled: isPostingItem,
                  })}
                  {SelectField({
                    label: 'Kunta/Alue',
                    id: 'area',
                    name: 'area',
                    isRequired: true,
                    disabled: isPostingItem,
                    value: values.area,
                    options: extractedOptions,
                    valueSetter: setFieldValue,
                    errors: errors.area?.name,
                    touched: touched.area?.name,
                  })}
                  {Datepicker({
                    label: 'Ilmoituksen voimassaoloaika',
                    value: values.expiryDate,
                    name: 'expiryDate',
                    disabled: isPostingItem,
                    valueSetter: setFieldValue,
                  })}
                  {false && (
                    <>
                      <Heading as='h5' size='sm'>
                        Liitteet ja kuvat
                      </Heading>
                      {displayImages(values.images)}
                    </>
                  )}
                  <Heading as='h5' size='sm'>
                    Yhteyshenkilön tiedot
                  </Heading>
                  {TextInputField({
                    label: 'Nimi',
                    id: 'contactName',
                    isRequired: true,
                    disabled: isPostingItem,
                    touched: touched.contactName,
                    errors: errors.contactName,
                  })}
                  {TextInputField({
                    label: 'Rooli organisaatiossa',
                    id: 'contactRole',
                    isRequired: false,
                    disabled: isPostingItem,
                  })}
                  {TextInputField({
                    label: 'Puhelinnumero',
                    id: 'contactPhone',
                    isRequired: false,
                    disabled: isPostingItem,
                  })}
                  {TextInputField({
                    label: 'Sähköposti',
                    id: 'contactEmail',
                    isRequired: true,
                    disabled: isPostingItem,
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
                      disabled={isPostingItem}
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
          {false && <ConfigurationForm />}
        </Box>
      )}
    </Flex>
  );
};

export default TransferForm;

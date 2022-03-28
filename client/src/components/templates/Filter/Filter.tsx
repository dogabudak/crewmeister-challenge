import React from 'react';
import moment from 'moment';
import { Button } from '@atoms/Button/Button';
import { buildFilters } from '@helpers/filterBuilder';
import { ToArray } from '@helpers/enumToArray';
import { Select } from '@molecules/Select/Select';
import type { Filters, FormikFilters, QueryFilters } from '@type/Filter.type';
import {useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as S from './Filter.styled';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {AbsenceType} from "@type/Absence.type";

export interface FilterBarProps {
  filters: Filters;
  onSubmit: (filters)=> void;
  queryFilters: QueryFilters;
}

/**
 * Filter Sidebar
 */
export function Filter({ onSubmit, queryFilters }: FilterBarProps): JSX.Element {
  const router = useRouter();

  const update = async (values: FormikFilters): Promise<void> => {
    const { generatedFilters, queryParams } = buildFilters(values);
    onSubmit(generatedFilters);
    await router.push({
      query: queryParams,
    });
  };

  const formik = useFormik<FormikFilters>({
    initialValues: {
      type: '',
      startDate: '',
      endDate: '',
    },
    onSubmit: update,
    validate: update,
    validateOnBlur: true,
  });


  return (
    <S.Filter data-testid='filterbar'>
      <S.Header weight={700}>Filter</S.Header>
      <S.Divider />
      <Select
          defaultValue={''}
          options={ToArray(AbsenceType)}
          name='type'
          localizedName='type'
          initField={true}
          onChange={formik.handleChange}
      />
      <S.Divider />
        Start Date
        <S.Divider />
        <DatePicker
            name='startDate'
            format='dd-mm-yyyy'
            selected={formik.values.startDate}
            onChange={(field)=>{
                formik.setFieldValue('startDate', field)
            }}
            />
        <S.Divider />
        End Date
        <DatePicker
            name='endDate'
            format='yyyy-MM-dd'
            selected={formik.values.endDate}
            onChange={(field)=>{
                formik.setFieldValue('endDate', field)
        }}
        />
      <Button secondary onClick={() => formik.handleSubmit()} type='submit'>
        Filter anwenden
      </Button>
    </S.Filter>
  );
}

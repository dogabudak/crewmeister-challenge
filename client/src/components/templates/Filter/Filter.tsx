import React from 'react';
import { Button } from '@atoms/Button/Button';
import { buildFilters } from '@helpers/filterBuilder';
import { Select } from '@molecules/Select/Select';
import type { Filters, FormikFilters, QueryFilters } from '@type/Filter.type';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as S from './Filter.styled';

export interface FilterBarProps {
  filters: Filters;
  // TODO place type to the filter here = > onSubmit: (filters: HTTPFilterBody) => void;
  onSubmit: (filters)=> void;
  queryFilters: QueryFilters;
}

/**
 * Filter Sidebar
 */
export function Filter({ filters, onSubmit, queryFilters }: FilterBarProps): JSX.Element {
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
      type: queryFilters.type,
      date: queryFilters.date,
    },
    onSubmit: update,
    validate: update,
    validateOnBlur: true,
  });
 /*
 <Select
          defaultValue={''}
          options={filters.type}
          name='type'
          localizedName='AbsenceType'
          initField={true}
          onChange={formik.handleChange}
      />
      <S.Divider />
      <Select
          defaultValue={''}
          options={filters.date}
          name='date'
          localizedName='Date'
          initField={true}
          onChange={formik.handleChange}
      />
  */
  return (
    <S.Filter data-testid='filterbar'>
      <S.Header weight={700}>Filter</S.Header>
      <S.Divider />

      <S.Divider />
      <Button secondary onClick={() => formik.handleSubmit()} type='submit'>
        Filter anwenden
      </Button>
    </S.Filter>
  );
}

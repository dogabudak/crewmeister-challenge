import React from 'react';
import { IndexLayout } from '@templates/IndexLayout/IndexLayout';
import type { Absence } from '@type/Absence.type';
import type { Filters } from '@type/Filter.type';
import Head from 'next/head';

export type IndexServerProps = {
  props: {
    absences: Absence[];
    filters: Filters;
  };
};

export default function Index({ absences, filters }: IndexServerProps['props']): JSX.Element {
  return (
    <>
      <Head>
        <title>Crewmeister Absences</title>
        <meta property='og:title' content='Crewmeister Absences' />
      </Head>
      <IndexLayout absences={absences} filters={filters} />
    </>
  );
}


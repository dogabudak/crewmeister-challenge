import React, { useEffect, useState} from 'react';
import { Text } from '@atoms/Text/Text';
import { queryFilterToHTTPFilter } from '@helpers/queryFilterToHTTPFilter';
import { Filter } from '@templates/Filter/Filter';
import { makeRequest } from '@templates/IndexLayout/IndexLayout.helpers';
import type { Absence } from '@type/Absence.type';
import { useRouter } from 'next/router';
import type { IndexServerProps } from '../../../pages';
import * as S from './IndexLayout.styled';

/**
 * The Index Page Layout
 */

export function IndexLayout({ absences, filters }: IndexServerProps['props']): JSX.Element {
  const [storedAbsences, setStoredAbsences] = useState<Absence[]>(absences);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const router = useRouter();
  const [filter, setFilter] = useState(queryFilterToHTTPFilter(router.query));
  useEffect(() => {
    const fetchUsers = async () => {
      if (isLoading) {
        return;
      }
      setLoading(true);
      const result = await makeRequest(page, filter)
      setStoredAbsences(result.records);
      setTotalPageCount(result.count / 10);
      setLoading(false);
    };
     fetchUsers();
  }, [filter, page]);

  const handleFilter = (selectedFilters) => {
    setLoading(true);
    setPage(0);
    setFilter(selectedFilters);

    makeRequest(page, selectedFilters).then((result) => {
      setStoredAbsences(result.records);
      setTotalPageCount(result.count / 10);
      setLoading(false);
    });
  };
  const handlePageClick = (event) => {
    setPage(event.selected)
  };
  return (
    <>
    <S.IndexLayout>
      <S.FilterContainer>
        <Filter
          filters={filters}
          onSubmit={(selectedFilters) => handleFilter(selectedFilters)}
          queryFilters={router.query}
        />
      </S.FilterContainer>
      <S.ResultsContainer>
        {storedAbsences?.map((absences, idx) => {
          return <S.Result absence={absences} key={idx} />;
        })}
        {storedAbsences?.length !== 0 && isLoading && (
          <S.LoadingContainer>
            <Text>Laden...</Text>
          </S.LoadingContainer>
        )}
      </S.ResultsContainer>
    </S.IndexLayout>
        <S.PaginateContainer>
          <S.MyPagination
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={totalPageCount}
              previousLabel="< previous"
          />
        </S.PaginateContainer>
      </>
  );
}

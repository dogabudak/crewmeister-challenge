import React from 'react';
import { Text } from '@atoms/Text/Text';
import * as S from './Status.styled';
import { CustomerStatus } from "@type/Status";

export interface StatusProps {
  /** Text Content */
  children: React.ReactNode;
  type: CustomerStatus
}

/**
 * Description of Status.
 */
export function Status({ type, children }: StatusProps): JSX.Element {
  return (
    <S.Status type={type} data-testid='Status'>
      <Text>{children}</Text>
    </S.Status>
  );
}

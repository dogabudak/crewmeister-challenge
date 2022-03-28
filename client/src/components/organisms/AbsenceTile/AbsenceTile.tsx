import React from 'react';
import { Badge } from '@atoms/Badge/Badge';
import { Text } from '@atoms/Text/Text';
import type { Absence } from '@type/Absence.type';
import * as S from './AbsenceTile.styled';

export interface AbsenceTileProps {
  absence: Absence;
  className?: string;
  id?: string;
}

export function AbsenceTile({ absence, className, id }: AbsenceTileProps): JSX.Element {
  const {
  admitterId,
  admitterNote,
  confirmedAt,
  createdAt,
  endDate,
  memberNote,
  rejectedAt,
  startDate,
  type,
  member,
  } = absence;
  return (
    <S.AbsenceTile className={className} id={id} data-testid='absence'>
      <S.ImageContainer>
        <S.Image src={member.image} />
      </S.ImageContainer>
      <S.Header weight={700}>
        {startDate} {endDate}
      </S.Header>
      <S.Header weight={700}>
        {member.name}
      </S.Header>
        {memberNote} <Text>memberNote {memberNote}</Text>
      <S.Badges>
          {createdAt} <Badge>Created at{createdAt}</Badge>
          {confirmedAt} <Badge>Confirmed at{confirmedAt}</Badge>
          {admitterNote} <Badge>Admitter Note {admitterNote}</Badge>
          {admitterId} <Badge>Admitter id {admitterId}</Badge>
          {type} <Badge>type: {type}</Badge>
          {rejectedAt} <Badge>rejectedAt: {rejectedAt}</Badge>
      </S.Badges>
    </S.AbsenceTile>
  );
}

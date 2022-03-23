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
  crewId,
  endDate,
  memberNote,
  rejectedAt,
  startDate,
  type,
  userId,
  } = absence;
/*
      <S.ImageContainer>
        <S.Image src={image} alt={`${make} ${model}`} />
        <S.ImageBadge>
          {images.length} {images.length === 1 ? 'Bild' : 'Bilder'}
        </S.ImageBadge>
      </S.ImageContainer>
 */
    //TODO make these optional
  return (
    <S.CarTile className={className} id={id} data-testid='absence'>

      <S.Header weight={700}>
        {startDate} {endDate}
      </S.Header>
      <Text>memberNote {memberNote}</Text>
      <S.Badges>
        <Badge>Confirmed at: {confirmedAt}</Badge>
        <Badge>userId: {userId}</Badge>
        <Badge>Crew id {crewId}</Badge>
        <Badge>Created at{createdAt}</Badge>
        <Badge>Admitter Note {admitterNote}</Badge>
        <Badge>Admitter id {admitterId}</Badge>
        <Badge>type: {type}</Badge>
        <Badge>rejectedAt: {rejectedAt}</Badge>
      </S.Badges>
    </S.CarTile>
  );
}

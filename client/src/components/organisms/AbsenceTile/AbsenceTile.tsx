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
      <Text>memberNote {memberNote}</Text>
      <S.Badges>
        <Badge>Created at{createdAt}</Badge>
        <Badge>Admitter Note {admitterNote}</Badge>
        <Badge>Admitter id {admitterId}</Badge>
        <Badge>type: {type}</Badge>
        <Badge>rejectedAt: {rejectedAt}</Badge>
      </S.Badges>
    </S.AbsenceTile>
  );
}

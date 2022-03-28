import styled from 'styled-components';
import {colors} from '@style/colors';
import {StatusProps} from "@molecules/Status/Status";
import {CustomerStatus} from "@type/Status";

export const Status = styled.div<StatusProps>`
  background-color: ${({type}) => handleColorType(type)};
  border: #c4c4c4 1px solid;
  border-radius: 4px;
  display: inline-block;
  padding: 6px 8px;
`;
const handleColorType = color => {
    switch (color) {
        case CustomerStatus.requested:
            return colors.requested;
        case CustomerStatus.rejected:
            return colors.rejected;
        default:
            return colors.confirmed;
    }
};
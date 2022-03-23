import React from 'react';
import {render, screen} from '@testing-library/react';
import {Absence} from './Absence';

const absence = {
    "admitterId": undefined,
    "admitterNote": "",
    "confirmedAt": new Date(),
    "createdAt": new Date(),
    "crewId": 352,
    "endDate": "2021-01-13",
    "id": 2351,
    "memberNote": "",
    "rejectedAt": undefined,
    "startDate": "2021-01-13",
    "type": "sickness",
    "userId": 2664
};

test('AbsenceTile', () => {
    render(<Absence absence={absence}/>);
    expect(screen.getByTestId('absence')).toBeInTheDocument();
    expect(screen.getByTestId('absence')).toMatchSnapshot();
});

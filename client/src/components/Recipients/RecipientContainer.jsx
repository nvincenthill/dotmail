import styled from 'styled-components';

import { Below } from '../../utilities';

const RecipientContainer = styled.div`
  margin: 1rem auto;
  padding: 0.75rem;
  align-self: center;
  align-items: center;
  justify-content: center;
  display: grid;
  box-shadow: ${({ theme }) => theme.elevations.med};
  border: 1px solid ${({ theme }) => theme.colors.accentColor5};
  animation: ${({ animation }) => animation} 0.25s ease;
  grid-template-columns: 15rem 15rem;
  grid-template-areas:
    'firstName lastName'
    'preferred email'
    'add       cancel';
  grid-gap: 0.5rem;
  ${Below.small`
    grid-template-columns: 7rem 7rem;
    grid-template-areas:
      "firstName firstName"
      "lastName lastName"
      "preferred preferred"
      "email email"
      "add cancel";
  `}
`;

export default RecipientContainer;

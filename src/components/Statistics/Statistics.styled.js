import styled from 'styled-components';

export const List = styled.ul``;
export const Item = styled.li`
  margin-bottom: 10px;
  font-size: 20px;

  :nth-child(0n + 3) {
    margin-bottom: 25px;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

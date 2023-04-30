import styled from '@emotion/styled';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 100px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const StatusTrue = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.green};
`;
export const StatusFalse = styled(StatusTrue)`
  background-color: ${props => props.theme.colors.red};
`;

export const Avatar = styled.img`
  border-radius: 5px;
  background-color: ${props => props.theme.colors.bgAvatar};
`;

export const Name = styled.p`
  font-weight: 700;
  color: var(--global-black-color);
`;

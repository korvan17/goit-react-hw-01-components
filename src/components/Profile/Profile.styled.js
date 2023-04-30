import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding-top: 70px;
  padding-bottom: 70px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  background-color: ${props => props.theme.colors.white};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  box-shadow: ${props => props.theme.colors.boxShadow} 0px 1px 4px;
`;

export const Avatar = styled.img`
  width: 70px;
  background-color: ${props => props.theme.colors.bgAvatar};
  border-radius: 50%;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.black};
`;
export const Tag = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
`;
export const Location = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom-right-radius: 5px;
  box-shadow: ${props => props.theme.colors.boxShadow} 0px 1px 4px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${props => props.theme.colors.statsProfile};
  border-top: 0.1px solid ${props => props.theme.colors.border};
  border-right: 0.1px solid ${props => props.theme.colors.border};
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.p`
  font-size: 12px;
  margin: 0;
  padding-bottom: 8px;
`;
export const Quantity = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  margin: 0;
`;

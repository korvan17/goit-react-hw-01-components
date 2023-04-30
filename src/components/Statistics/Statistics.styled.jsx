import styled from '@emotion/styled';
import randomColor from 'utils/RandomColor';

export const StatisticsBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: ${props => props.theme.colors.boxShadow} 0px 22px 70px 4px;
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 21px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.white};
  background-color: ${randomColor};
`;

export const Label = styled.span`
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  font-size: 14px;
`;

export const Percentage = styled.span`
  margin: 0;
  padding: 0;
  font-size: 18px;
`;

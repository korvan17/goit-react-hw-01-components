import PropTypes from 'prop-types';
import {
  StatisticsBlock,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsBlock>
      {title && <Title>{title}</Title>}
      <StatList>
        {data.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsBlock>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

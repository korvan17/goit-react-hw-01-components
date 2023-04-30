import PropTypes from 'prop-types';
import {
  Sheet,
  TableOfContents,
  FirstRow,
  BodyOfSheet,
  Row,
  NameOfColumn,
  Cell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Sheet>
      <TableOfContents>
        <FirstRow>
          <NameOfColumn>Type</NameOfColumn>
          <NameOfColumn>Amount</NameOfColumn>
          <NameOfColumn>Currency</NameOfColumn>
        </FirstRow>
      </TableOfContents>

      <BodyOfSheet>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <Row key={id}>
              <Cell>{type}</Cell>
              <Cell>{amount}</Cell>
              <Cell>{currency}</Cell>
            </Row>
          );
        })}
      </BodyOfSheet>
    </Sheet>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

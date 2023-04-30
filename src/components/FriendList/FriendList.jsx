import PropTypes from 'prop-types';
import {
  Friends,
  Item,
  StatusTrue,
  StatusFalse,
  Avatar,
  Name,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </Friends>
  );
};

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item key={id}>
      {isOnline ? <StatusTrue /> : <StatusFalse />}
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

/*

Як я зрозумів код що вище суто для того щоб потренуватися використовувати елемент у іншому елементі, 
але я би зробив так як нижче:

export const FriendList = ({ friends }) => {
  return (
    <Friens>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            {isOnline ? <StatusTrue /> : <StatusFalse />}
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </Friens>
  );
};

*/

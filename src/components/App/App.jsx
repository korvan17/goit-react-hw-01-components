import { MainConteiner } from './App.styled';
import user from '../../data/user.json';
import { Profile } from '../Profile';
import data from '../../data/data.json';
import { Statistics } from 'components/Statistics';
import friends from '../../data/friends.json';
import { FriendList } from 'components/FriendList';
export const App = () => {
  return (
    <MainConteiner>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" data={data} />
      <Statistics data={data} />

      <FriendList friends={friends} />
    </MainConteiner>
  );
};

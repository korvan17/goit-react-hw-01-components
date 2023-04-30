import { MainConteiner } from './App.styled';
import user from '../../data/user.json';
import { Profile } from '../Profile';
import data from '../../data/data.json';
import { Statistics } from 'components/Statistics';

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
    </MainConteiner>
  );
};

import './style.scss';
import Btn from 'components/btn';
import Picture from 'components/picture';
import Information from 'components/information';

function Home({ user }) {
  return (
    <div className='container-card'>
      <Picture username={user.username} />
      <Information user={user} />
      <div>
        {/* <Btn icon={favoriteIcon} handleClick={} />
        <Btn icon={deleteIcon} handleClick={} /> */}
      </div>
    </div>
  );
}

export default Home;

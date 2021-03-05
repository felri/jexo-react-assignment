import './style.css';
import Btn from 'components/btn';
import Picture from 'components/picture';
import Information from 'components/Information';

function Home() {
  return (
    <div className='container-card'>
      <Picture />
      <Information />
      <div>
        <Btn icon={favoriteIcon} handleClick={} />
        <Btn icon={deleteIcon} handleClick={} />
      </div>
    </div>
  );
}

export default Home;

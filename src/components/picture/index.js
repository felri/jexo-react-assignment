import './style.css';

function Picture({ username }) {
  return (
    <div className='container-home'>
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
        alt='avatar'
      />
    </div>
  );
}

export default Picture;

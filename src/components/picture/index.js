import './style.scss';
import Avatar from '@atlaskit/avatar';

function Picture({ username }) {
  return (
    <div className='container-avatar'>
      <Avatar
        appearance='circle'
        src={`${process.env.REACT_APP_SVG_URL}${username}.svg?options[mood][]=happy`}
        size='xxlarge'
      />
    </div>
  );
}

export default Picture;

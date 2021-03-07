import './style.scss';
import EmailIcon from '@atlaskit/icon/glyph/email';
import VidHangUpIcon from '@atlaskit/icon/glyph/vid-hang-up';
import HomeCircleIcon from '@atlaskit/icon/glyph/home-circle';

function Name({ name }) {
  return <h3 className='name'>{name}</h3>;
}

function Email({ email }) {
  return (
    <div className='email'>
      <EmailIcon />
      <span>{email}</span>
    </div>
  );
}

function Phone({ phone }) {
  return (
    <div className='phone'>
      <VidHangUpIcon />
      <span>{phone}</span>
    </div>
  );
}

function Website({ website }) {
  return (
    <div className='website'>
      <HomeCircleIcon />
      <span>
        <a href={website} target='_blank' rel='noreferrer'>
          http://{website}
        </a>
      </span>
    </div>
  );
}

function Information({ user }) {
  return (
    <div className='container-information'>
      <Name name={user.name} />
      <Email email={user.email} />
      <Phone phone={user.phone} />
      <Website website={user.website} />
    </div>
  );
}

export default Information;

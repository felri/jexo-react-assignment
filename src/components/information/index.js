import './style.css';

function Name({ name }) {
  return <div className='name'>{name}</div>;
}

function Email({ email }) {
  return <div className='email'>{email}</div>;
}

function Phone({ phone }) {
  return <div className='phone'>{phone}</div>;
}

function Website({ website }) {
  return <div className='website'>{website}</div>;
}

function information({ user }) {
  return (
    <div className='container-information'>
      <Name name={user.name} />
      <Email email={user.email} />
      <Phone phone={user.phone} />
      <Website website={user.website} />
    </div>
  );
}

export default information;

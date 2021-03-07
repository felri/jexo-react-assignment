import './style.scss';
import Button from '@atlaskit/button';
import Picture from 'components/picture';
import Information from 'components/information';

import StarIcon from '@atlaskit/icon/glyph/star';
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled';
import TrashIcon from '@atlaskit/icon/glyph/trash';

function Card({ user, onLike, onDelete }) {
  return (
    <div className='container-card'>
      <Picture username={user.username} />
      <Information user={user} />
      <div className='container-btns'>
        <Button shouldFitContainer onClick={onLike}>
          {user.liked ? <StarFilledIcon /> : <StarIcon />}
        </Button>
        <Button shouldFitContainer onClick={onDelete}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
}

export default Card;

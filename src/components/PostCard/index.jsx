import Type from 'prop-types';

import './styles.css';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {title} #{id}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: Type.string.isRequired,
  cover: Type.string.isRequired,
  body: Type.string.isRequired,
  id: Type.number.isRequired,
};

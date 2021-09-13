import Type from 'prop-types';

import './styles.css';
import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
    ))}
  </div>
);

Posts.propTypes = {
  posts: Type.arrayOf(
    Type.shape({
      title: Type.string,
      cover: Type.string,
      body: Type.string,
      id: Type.number,
    }),
  ),
};

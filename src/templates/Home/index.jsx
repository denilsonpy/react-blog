import { useState, useEffect, useCallback } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/Search';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    : posts;

  const handleLoadPosts = useCallback(async (pages, postPerPage) => {
    const postAndPhotos = await loadPosts();

    setPosts(postAndPhotos.slice(page, postPerPage));
    setAllPosts(postAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postPerPage);
  }, [handleLoadPosts, postPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}

        <SearchInput searchValue={searchValue} actionFn={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Não existem posts</p>}
      <div className="button-container">
        {!searchValue && <Button text="Load More Post" onCLick={loadMorePosts} disabled={noMorePosts} />}
      </div>
    </section>
  );
};

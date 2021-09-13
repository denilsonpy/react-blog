export const loadPosts = async () => {
  const postsReponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosReponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postsReponse, photosReponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });

  return postAndPhotos;
};

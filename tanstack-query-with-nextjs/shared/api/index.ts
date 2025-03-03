export const getPosts = async () => {
  new Promise((resolve) => setTimeout(resolve, 3000));

  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}
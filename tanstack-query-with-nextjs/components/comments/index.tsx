const Comments = async () => {
  const comments = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=10"
  ).then((res) => {
    new Promise((resolve) => setTimeout(resolve, 3000));

    return res.json();
  });

  return (
    <div>
      {comments.map((comment: any, index: number) => (
        <div key={comment.id}>
          <h3 className="text-2xl">
            #{index + 1} {comment.name}
          </h3>
          <p>{comment.body}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Comments;

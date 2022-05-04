import Post from "./post";

const Posts = ({ data }) => {
  return (
    <div className="posts">
      {data.map?.((data, key) => (
        <Post data={data} key={key} />
      ))}
    </div>
  );
};

export default Posts;

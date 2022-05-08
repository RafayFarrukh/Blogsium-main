const { Link } = require("react-router-dom");

const Post = ({ data }) => {
  const ImageLink = "http://localhost:5000/images/";
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-12 lg:px-20 lg:w-1/2 lg:h-1/2 container  mx-auto px-4 md:px-12">
      <div className="Posts overflow-hidden rounded-lg shadow-lg">
        {data.image && (
          <img
            className="postImage block h-auto w-full"
            src={ImageLink + data.image + ".jpg"}
            alt="postImage"
          />
        )}
        <div className="postInfo">
          <div className="categories">
            {/* {data.categories.map((cate, key) => (
            <span className="category" key={key}>
              {cate.name}
            </span>
          ))} */}
          </div>
          <Link className="link" to={`/post/${data._id}`}>
            <span className="title no-underline hover:underline text-black text-lg font-bold">
              {" "}
              {data.title}{" "}
            </span>
          </Link>

          <hr />
          <span className="postDate flex items-center justify-between leading-tight  md:p-4 float-right">
            {new Date(data.createdAt).toDateString()}
          </span>
        </div>
        <p className="body flex items-center justify-between leading-tight  md:p-4">
          {data.body}
        </p>
      </div>
    </div>
  );
};

export default Post;

import { comments } from "./../../../data/comments";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.id}:{comment.text}
    </div>
  );
};

export default Comment;

export async function getStaticPaths() {
  const data = await fetch("http://localhost:3000/api/comments/");
  const res = await data.json();

  const paths = res.map((comment) => {
    return {
      params: { commentid: `${comment.id}` },
    };
  });

  return {
    // paths: [
    //   { params: { commentid: "1" } },
    //   { params: { commentid: "2" } },
    //   { params: { commentid: "3" } },
    // ],
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentid } = params;

  console.log(commentid);

  console.log(comments);

  const comment = comments.find((comment) => {
    return comment.id === parseInt(commentid);
  });
  console.log(comment);

  return {
    props: {
      comment,
    },
  };
}

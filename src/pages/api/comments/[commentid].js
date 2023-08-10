import { comments } from "./../../../data/comments";

export default async function handler(req, res) {
  const id = req.query.commentid * 1;

  if (req.method === "GET") {
    const comment = comments.find((comment) => {
      return comment.id === id;
    });

    return res.status(200).json(comment);
  }

  if (req.method === "DELETE") {
    const comment = comments.find((comment) => {
      return comment.id === id;
    });

    const deletecomment = comments.findIndex((comment) => comment.id === id);

    comments.splice(deletecomment, 1);

    return res.status(200).json(comment);
  }
}

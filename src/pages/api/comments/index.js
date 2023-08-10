import { comments } from "./../../../data/comments";
export default function handler(req, res) {
  if (req.method === "POST") {
    const comment = req.body.userCom;

    const newid = comments[comments.length - 1].id + 1;

    const newComment = {
      id: newid,
      text: comment,
    };

    comments.push(newComment);

    return res.status(201).json(newComment);
  }

  res.status(200).json(comments);
}

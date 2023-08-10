import { useState } from "react";
import Link from "next/link";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [userCom, setUserCom] = useState("");

  const getComments = async () => {
    const response = await fetch("http://localhost:3000/api/comments");
    const res = await response.json();
    setComments(res);
    console.log(comments);
  };

  const submitForm = async (e) => {
    const response = await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ userCom }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (id) => {
    const response = await fetch(`http://localhost:3000/api/comments/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);

    getComments();
  };

  return (
    <div>
      <button onClick={getComments}>Load comments</button>
      {comments.map((com) => {
        return (
          <div key={com.id}>
            <Link href={`./comments/${com.id}`}>
              <h1>
                {com.id} {com.text}
              </h1>
            </Link>
            <button onClick={() => deleteComment(com.id)} className="bg-red">
              delete
            </button>
          </div>
        );
      })}

      <input
        type="text"
        value={userCom}
        onChange={(e) => setUserCom(e.target.value)}
      />
      <button onClick={submitForm}>send</button>
    </div>
  );
};

export default Comments;

import User from "@/components/user";

const UsersList = ({ users, error }) => {
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>List of Users</h1>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/api/v1/users");
  const res = await response.json();
  if (res.status === "fail") {
    console.log(res);
    return {
      props: {
        error: res.message,
      },
    };
  }

  return {
    props: {
      users: res.data.data,
    },
  };
  //   try {
  //     const res = await fetch("http://localhost:4000/api/v1/users");
  //     const data = await res.json();

  //     return {
  //       props: {
  //         users: data,
  //       },
  //     };
  //   } catch (err) {
  //     console.log(err);
  //     return {
  //       props: {
  //         err,
  //       },
  //     };
  //   }
}

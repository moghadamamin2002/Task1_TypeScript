import { Todo } from "./Display";
interface Props {
  data: Todo[];
}

const User = ({ data }: Props) => {
  console.log("User : " + data);

  return (
    <>
      {data.map((todo) => (
        <table className="table table-dark table-borderless my-5" key={todo.id}>
          <tbody>
            <tr>
              <th scope="row">Title :</th>
              <td>{todo.title}</td>
            </tr>
            <tr>
              <th scope="row">Position :</th>
              <td>
                {todo.completed ? (
                  <div style={{ color: "green" }}> Done</div>
                ) : (
                  <div style={{ color: "red" }}>Not completed</div>
                )}
              </td>
            </tr>
            <tr>
              <th scope="row">User Id :</th>
              <td>{todo.userId}</td>
            </tr>
            <tr>
              <th scope="row">Usre number :</th>
              <td>{todo.id}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};

export default User;

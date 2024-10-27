import { SortBy } from "../Enums/UserEnums";
import { type User } from "../models/UserModelTypes"
import '../App.css'

interface Props{
  users: User[],
  showColor: boolean,
  deleteUser: (uuid: string) => void,
  sortingUser: (sort: SortBy)=> void
}

export function UserTable({ users, showColor, deleteUser, sortingUser }: Props) {
  console.log('Usuarios en UserTable:', users);

   // Verifica si users es un array
  if (!Array.isArray(users)) {
    console.error('users no es un array:', users);
    return null;
  }

  return (
    <table width="100%">
      <caption>Users Table</caption>
      <thead>
        <tr>
          <th>Foto</th>
          <th className="pointer" onClick={() => sortingUser(SortBy.NAME)}>Nombre</th>
          <th className="pointer" onClick={() => sortingUser(SortBy.LAST)}>Apellido</th>
          <th className="pointer" onClick={() => sortingUser(SortBy.COUNTRY)}>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          console.log('Usuario:', user.email);
          const backgroundColor = index % 2 === 0 ? '#333' : '#555';
          const color = showColor ? backgroundColor : 'transparent';
          return (
            <tr key={user.login.uuid} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail} alt={`Imagen de: ${user.name.first} ${user.name.last}`} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUser(user.login.uuid)}>Delete User</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
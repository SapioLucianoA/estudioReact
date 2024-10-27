import { useUsers } from './customHooks/UseUser'
import './App.css'
import { UserTable } from './components/UserTable.component'
import { SortBy } from './Enums/UserEnums'



function App() {
  const {
    usuariosSorteados,
    showColors,
    setShowColors,
    setFilterCountry,
    idInput,
    loading,
    error,
    sorting,
    setSorting,
    users,
    setUsers,
    page,
    setPage,
    initialUsers
  } = useUsers();

  console.log('Usuarios sorteados en App:', usuariosSorteados);

  const toggleColors = () => {
    setShowColors(prevState => !prevState);
  };

  const toggleCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSorting(newSortingValue);
  };

  const handleDeleteUser = (uuid: string) => {
    const userDeleteFilter = users.filter(user => user.login.uuid !== uuid);
    setUsers(userDeleteFilter);
    console.log(uuid)
  };

  const handleOriginalUsers = async () => {
    setUsers(initialUsers.current);
  };

  const handleClickResetOrdenamiento = () => {
    setSorting(SortBy.NONE);
  };

  const handleChangeInputCountry = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterCountry(event.target.value);
  };

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort);
  };

  return (
    <>
      <header>
        <h1>Prueba técnica</h1>
        <nav>
          <button onClick={toggleColors}>{showColors ? 'No pintar filas' : 'Pintar filas'}</button>
          <button onClick={toggleCountry}>{sorting === SortBy.COUNTRY ? 'No ordenar por país' : 'Ordenar por país'}</button>
          <button onClick={handleClickResetOrdenamiento}>Reset ordenamiento</button>
          <button onClick={handleOriginalUsers}>Reset Users</button>
          <input type="text" id={idInput} placeholder="Coloca el nombre del país" onChange={handleChangeInputCountry} />
        </nav>
      </header>
      <main>
        <section>
          
          { users.length > 0 &&  <UserTable
              users={usuariosSorteados}
              showColor={showColors}
              deleteUser={handleDeleteUser}
              sortingUser={handleChangeSort}
            />}
          
          {loading && <strong>Cargando...</strong>}
          {!loading && error && <p>Ha habido un error</p>}
          {!loading && !error && users.length === 0 && <p>No hay usuarios</p>}
        </section>

        {!loading && !error && (
          <div className="paginacion-div">
            <button onClick={() => setPage(page + 1)}>Cargar más resultados</button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
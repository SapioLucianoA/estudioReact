import { type User } from "../models/UserModelTypes";
import { useId, useRef, useState, useMemo, useEffect } from 'react'
import { SortBy } from "../Enums/UserEnums";


const fetchingUsers = async (page: number) => {
  const response = await fetch(`https://randomuser.me/api/?results=10&seed=zapeoh&page=${page}`);
  if (!response.ok) {
    throw new Error('Error fetching users');
  }
  const data = await response.json();
  return data;
};

export function useUsers() {

  const [users, setUsers] = useState<User[]>([])

  const [showColors, setShowColors] = useState(false);

  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)

  const initialUsers = useRef<User[]>([])

  const idInput = useId();

  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const [page, setPage] = useState<number>(1)

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)


  useEffect(() => {
    fetchingUsers(page)
      .then(response => {

        setUsers(previusUsers => {

          const newUsers = previusUsers.concat(response.results)
          initialUsers.current = newUsers
          return newUsers
        })

        initialUsers.current = response.results;
      })

      .catch(err => {
        setError(true)
        throw new Error('error :' + err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page])

  const FilterInputCountry = useMemo(() => {
    console.log('filtrando ususarios')
    return filterCountry != null && filterCountry.length > 2 ?
      users.filter(user => {
        return user.location.country.toLocaleLowerCase().includes(filterCountry.toLocaleLowerCase())
      }) : users;
  }, [filterCountry, users])


  const usuariosSorteados = useMemo(() => {

    if (sorting === SortBy.NONE) {
      return FilterInputCountry
    }
    if (sorting === SortBy.COUNTRY) {
      return FilterInputCountry.toSorted((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    }
    if (sorting === SortBy.NAME) {
      return FilterInputCountry.toSorted((a, b) =>
        a.name.first.localeCompare(b.name.first)
      )
    }
    if (sorting === SortBy.LAST) {
      return FilterInputCountry.toSorted((a, b) =>
        a.name.last.localeCompare(b.name.last)
      )
    }
    else {
      return FilterInputCountry;
    }
  }, [sorting, FilterInputCountry])



  return {
    usuariosSorteados,
    showColors,
    setShowColors,
    setFilterCountry,
    idInput,
    loading,
    error,
    sorting,
    setSorting,
    initialUsers,
    users,
    page,
    setPage,
   setUsers,
  };
}
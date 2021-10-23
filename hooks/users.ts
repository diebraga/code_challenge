import { parseCookies } from "nookies";
import useSWR from "swr";
import { Users } from "../types/users";

const jwt = parseCookies().jwt
const config = {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
}

export function getUsers() {

  const { data, error } = useSWR([`${process.env.NEXT_PUBLIC_API}/users`, config])

  return {
    users: data as Users[],
    isLoading: !error && !data,
    error,
  } 
}

export function getUserById(id: string) {
  const { data, error, mutate } = useSWR([`${process.env.NEXT_PUBLIC_API}/users/${id}`, config])  
  return {
    user: data as Users,
    isLoading: !error && !data,
    error,
    mutateUser: mutate
  } 
}

export function getUserMe() {
  const { data, error, mutate } = useSWR([`${process.env.NEXT_PUBLIC_API}/users/me`, config])  
  return {
    userMe: data as Users,
    isLoading: !error && !data,
    error,
    mutateMe: mutate
  } 
}
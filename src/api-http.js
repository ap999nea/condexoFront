import axios from "axios";

const url = "http://localhost:8000/web-api";

export const httpGetUsers = () => {
  return axios.get(url + "/users");
};

export const httpCreateUser = (
  name,
  surname,
  age,
  birthplace,
  zodiacalSign,
  favColor,
  favTvShow,
  eyeColor,
  favPizza,
  favBand
) => {
  return axios.post(
    url + "/users",
    name,
    surname,
    age,
    birthplace,
    zodiacalSign,
    favColor,
    favTvShow,
    eyeColor,
    favPizza,
    favBand
  );
};

export const httpEditUser = (
  user,
  name,
  surname,
  age,
  birthplace,
  zodiacalSign,
  favColor,
  favTvShow,
  eyeColor,
  favPizza,
  favBand
) => {
  return axios.put(
    url + `/user/${user}`,
    name,
    surname,
    age,
    birthplace,
    zodiacalSign,
    favColor,
    favTvShow,
    eyeColor,
    favPizza,
    favBand
  );
};

export const httpDeleteUser = (name) => {
  return axios.delete(url + `/user/${name}`);
};

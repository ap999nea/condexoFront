import TextField from "@mui/material/TextField";
import "./Css/Users.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { httpGetUsers, httpDeleteUser } from "./api-http";
import { useState, useEffect } from "react";
import EditUser from "./EditUser";
import NewUserNav from "./components/NewUserNav";

const Users = () => {
  const [usersDisplay, setUsersDisplay] = useState();
  const [editUser, setEditUser] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const navigate = useNavigate();
  const getUsers = async () => {
    const { data } = await httpGetUsers();
    setUsersDisplay(data);
  };
  useEffect(() => {
    getUsers();
  }, [deleteUser]);
  return (
    <>
      <NewUserNav />
      <div className="userContainer">
        {usersDisplay?.map((el, i) => {
          const {
            name,
            surname,
            age,
            birthplace,
            zodiacalSign,
            favColor,
            favTvShow,
            eyeColor,
            favPizza,
            favBand,
          } = el;
          const refreshPage = () => {
            window.location.reload(false);
          };
          const deleteUser = async () => {
            const deletedUser = await httpDeleteUser(name);
            setDeleteUser(true);
            refreshPage();
          };
          const modifyUser = async () => {
            setEditUser(!editUser);
          };
          return (
            <>
              <div className="cardContainer" key={i}>
                {editUser ? (
                  <EditUser
                    name={name}
                    surname={surname}
                    age={age}
                    birthplace={birthplace}
                    zodiacalSign={zodiacalSign}
                    favColor={favColor}
                    favTvShow={favTvShow}
                    eyeColor={eyeColor}
                    favPizza={favPizza}
                    favBand={favBand}
                  ></EditUser>
                ) : (
                  <>
                    <div className="inputBox">
                      <label className="label">Nome</label>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue={name}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="inputBox">
                      <label className="label">Cognome</label>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue={surname}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="inputBox">
                      <label className="label">Età</label>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue={age}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="inputBox">
                      <label className="label">Comune di nascita</label>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue={birthplace}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="inputBox">
                      <label className="label">Segno Zodiacale</label>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue={zodiacalSign}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="inputBox">
                      <label className="label">Colore preferito</label>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue={favColor}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="inputBox">
                      <label className="label">Serie TV preferita</label>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue={favTvShow}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="inputBox">
                      <label className="label">Colore degli occhi</label>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue={eyeColor}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="inputBox">
                      <label className="label">Pizza preferita</label>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue={favPizza}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="inputBox">
                      <label className="label">Gruppo musicale preferito</label>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue={favBand}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                    <div className="iconContainer">
                      <EditIcon onClick={modifyUser} />
                      <DeleteIcon onClick={deleteUser} />
                    </div>
                  </>
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Users;

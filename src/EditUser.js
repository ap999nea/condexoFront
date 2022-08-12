import React from "react";
import TextField from "@mui/material/TextField";
import "./Css/Users.css";
import { Button } from "@mui/material";
import { httpEditUser } from "./api-http";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";

const EditUser = ({
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
}) => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const editedUser = await httpEditUser(name, data);
      console.log(data);
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cardContainer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputBox">
          <label className="label">Nome</label>
          <TextField
            required
            id="outlined-required"
            placeholder={name}
            {...register("name", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="inputBox">
          <label className="label">Cognome</label>
          <TextField
            required
            id="outlined-required"
            placeholder={surname}
            {...register("surname", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="inputBox">
          <label className="label">Età</label>
          <TextField
            id="outlined-number"
            placeholder={age}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            {...register("age", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="inputBox">
          <label className="label">Comune di nascita</label>
          <TextField
            required
            id="outlined-required"
            placeholder={birthplace}
            {...register("birthplace", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="inputBox">
          <label className="label">Segno zodiacale</label>
          <TextField
            required
            id="outlined-required"
            placeholder={zodiacalSign}
            {...register("zodiacalSign", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="inputBox">
          <label className="label">Colore preferito</label>
          <TextField
            required
            id="outlined-required"
            placeholder={favColor}
            {...register("favColor", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="inputBox">
          <label className="label">Serie TV preferita</label>
          <TextField
            required
            id="outlined-required"
            placeholder={favTvShow}
            {...register("favTvShow", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="inputBox">
          <label className="label">Colore degli occhi</label>
          <TextField
            required
            id="outlined-required"
            placeholder={eyeColor}
            {...register("eyeColor", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="inputBox">
          <label className="label">Pizza preferita</label>
          <TextField
            required
            id="outlined-required"
            placeholder={favPizza}
            {...register("favPizza", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="inputBox">
          <label className="label">Gruppo musicale preferito</label>
          <TextField
            required
            id="outlined-required"
            placeholder={favBand}
            {...register("favBand", { required: true, maxLength: 80 })}
          />
        </div>
        <Button variant="contained">
          <input className="sendBtn" type="submit" />
        </Button>
      </form>
    </div>
  );
};

export default EditUser;

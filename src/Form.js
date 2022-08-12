import "./Css/Form.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { httpCreateUser } from "./api-http";
import { useState } from "react";
import { Animation } from "./Animation.js";
import MainNav from "./components/MainNav";

const Form = () => {
  const [animation, setAnimation] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const newUser = await httpCreateUser(data);
      setAnimation(!animation);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main">
      <MainNav />
      {animation && <Animation />}
      <div className={!animation ? "headerContainer" : "hiddenHeaderContainer"}>
        <h3 className="header">Compila il form e registrati subito!</h3>
      </div>
      <div className={!animation ? "formContainer" : "hiddenFormContainer"}>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputBox">
            <label className="label">Nome</label>
            <TextField
              required
              id="outlined-required"
              label="Campo richiesto"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="inputBox">
            <label className="label">Cognome</label>
            <TextField
              required
              id="outlined-required"
              label="Campo richiesto"
              {...register("surname", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="inputBox">
            <label className="label">Età</label>
            <TextField
              id="outlined-number"
              label="Campo richiesto"
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
              label="Campo richiesto"
              {...register("birthplace", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="inputBox">
            <label className="label">Segno zodiacale</label>
            <TextField
              required
              id="outlined-required"
              label="Campo richiesto"
              {...register("zodiacalSign", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="inputBox">
            <label className="label">Colore preferito</label>
            <TextField
              required
              id="outlined-required"
              label="Campo richiesto"
              {...register("favColor", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="inputBox">
            <label className="label">Serie TV preferita</label>
            <TextField
              required
              id="outlined-required"
              label="Campo richiesto"
              {...register("favTvShow", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="inputBox">
            <label className="label">Colore degli occhi</label>
            <TextField
              required
              id="outlined-required"
              label="Campo richiesto"
              {...register("eyeColor", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="inputBox">
            <label className="label">Pizza preferita</label>
            <TextField
              required
              id="outlined-required"
              label="Campo richiesto"
              {...register("favPizza", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="inputBox">
            <label className="label">Gruppo musicale preferito</label>
            <TextField
              required
              id="outlined-required"
              label="Campo richiesto"
              {...register("favBand", { required: true, maxLength: 80 })}
            />
          </div>
          <Button variant="contained">
            <input className="sendBtn" type="submit" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;

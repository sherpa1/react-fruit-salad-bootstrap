import "./Signin.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { redirect } from "react-router-dom";

import User from "../models/User";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fruits.shrp.dev",
  timeout: 3000,
  headers: {},
});

function Signin() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  async function onSubmitSignInForm(data) {
    try {
      setLoading(true);
      const response = await axiosInstance.post(`/auth/login`, {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        const aUser = new User(null, null, data.email);
        aUser.accessToken = response.data.data.access_token;
        aUser.refreshToken = response.data.data.refresh_token;
        aUser.expires = response.data.data.expires;

        const decodedPayload = jwt_decode(aUser.accessToken);

        aUser.id = decodedPayload.id;

        setUser(aUser);
      }

      setLoading(false);
      setError(false);
      reset();

      console.log(user);

      return redirect("/fruits");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div className="Signup">
      {loading === false && error === false && user !== null && (
        <p>
          Connexion au compte <b>{user.email}</b>
        </p>
      )}
      {loading === true && <p>Chargement...</p>}
      {error === true && <p>Une erreur s'est produite</p>}
      <form onSubmit={handleSubmit(onSubmitSignInForm)}>
        <input
          placeholder="Adresse mail"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Ce champ est obligatoire</span>}

        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Ce champ est obligatoire</span>}

        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Signin;

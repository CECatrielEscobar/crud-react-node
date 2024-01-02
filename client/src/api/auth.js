import axios from "./axios.js";

// Cambia tu función registerRequest para que devuelva solo los datos de la respuesta
export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`/register`, user);
    return response.data; // Devuelve solo los datos de la respuesta
  } catch (error) {
    console.error("Error during registration request:", error);
    throw error; // Relanza el error para que pueda ser manejado en el componente
  }
};

export const loginRequest = async (user) => await axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get("/verify");

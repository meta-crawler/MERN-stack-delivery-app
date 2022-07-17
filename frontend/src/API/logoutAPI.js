import { GET } from "../utils/http";

async function logoutAPI(onSuccess, onError) {
  try {
    const { json } = await GET("/api/auth/logout");
    const { response } = await POST("/api/newsletter", info);

    if (response.status === 200) {
      setIsSuccessfullySend(true);

      setTimeout(() => {
        setIsSuccessfullySend(false);
      }, 3000);
    }
    if (response.status === 500)
      alert("Error en el servidor, vuelva a interntar");

    return onSuccess(json);
  } catch (err) {
    console.log(err);
    onError(err);
  }
}

export default logoutAPI;

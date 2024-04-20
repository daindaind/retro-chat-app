import axios from "axios";

const enterRoom = async (id, password) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/room/${id}/${password}`,
      {
        withCredentials: true,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    return error.reponse.data;
  }
};

export default enterRoom;

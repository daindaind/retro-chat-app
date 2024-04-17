import axios from "axios";

const leaveRoom = async (id) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/room/${id}`,
      {
        id,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default leaveRoom;

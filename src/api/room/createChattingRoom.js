import axios from "axios";

const createChattingRoom = async ({ title, password, max }) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/room`,
      {
        title,
        password,
        max,
      },
      {
        withCredentials: true,
      }
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default createChattingRoom;

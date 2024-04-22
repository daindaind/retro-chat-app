import axios from "axios";

const sendGif = async (id, formdata) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/room/${id}/gif`,
      formdata
    );
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default sendGif;

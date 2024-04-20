import axios from "axios";

const sendChat = async (id, chat) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/room/${id}/chat`,
      {
        chat,
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

export default sendChat;

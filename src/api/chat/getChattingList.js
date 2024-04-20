import axios from "axios";

const getChattingList = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/room`, {
      withCredentials: true,
    });
    // console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getChattingList;

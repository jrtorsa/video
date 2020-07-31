import axios from "axios";

const KEY = "AIzaSyBPQqNhVqUlI54luwpM9clMu2evi1Qq-kY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

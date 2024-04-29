import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://maktabatul-amzad-s-tan.vercel.app/api",
});

export function useAxiosPublic() {
  return axiosPublic;
}

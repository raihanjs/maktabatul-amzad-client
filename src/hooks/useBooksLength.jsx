import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function useBooksLength() {
  const axiosPublic = useAxiosPublic();
  const { data: totalBooks = 0 } = useQuery({
    queryKey: ["totalBooks"],
    queryFn: () =>
      axiosPublic.get("/bookslength").then((res) => {
        return res.data.totalBooks;
      }),
  });
  return [totalBooks];
}

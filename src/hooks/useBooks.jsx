import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function useBooks() {
  const axiosPublic = useAxiosPublic();
  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () =>
      axiosPublic.get("/books").then((res) => {
        return res.data;
      }),
  });
  return [books, isLoading, refetch];
}

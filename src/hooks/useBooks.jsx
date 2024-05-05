import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function useBooks(searchData) {
  const query = searchData ? `/books?title=${searchData}` : "/books";
  const axiosPublic = useAxiosPublic();
  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () =>
      axiosPublic.get(query).then((res) => {
        return res.data;
      }),
  });
  return [books, isLoading, refetch];
}

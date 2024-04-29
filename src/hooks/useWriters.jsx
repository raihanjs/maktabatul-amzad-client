import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function useWriters() {
  const axiosPublic = useAxiosPublic();
  const {
    data: writers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["writers"],
    queryFn: () =>
      axiosPublic.get("/writers").then((res) => {
        return res.data;
      }),
  });
  return [writers, isLoading, refetch];
}

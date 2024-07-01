import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useWriters() {
  const axiosPublic = useAxiosPublic();
  const {
    data: writers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["writers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/writers");
      return res.data;
    },
  });
  return [writers, isLoading, refetch];
}

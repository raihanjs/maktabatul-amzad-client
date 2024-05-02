import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function usePublishers() {
  const axiosPublic = useAxiosPublic();
  const {
    data: publishers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["publishers"],
    queryFn: () =>
      axiosPublic.get("/publishers").then((res) => {
        return res.data;
      }),
  });
  return [publishers, isLoading, refetch];
}

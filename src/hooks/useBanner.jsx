import { useAxiosPublic } from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export default function useBanner() {
  const axiosPublic = useAxiosPublic();
  const {
    data: banners = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: () =>
      axiosPublic.get("/banners").then((res) => {
        return res.data;
      }),
  });
  return [banners, isLoading, refetch];
}

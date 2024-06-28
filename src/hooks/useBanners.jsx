import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useBanners() {
  const axiosPublic = useAxiosPublic();
  const {
    data: banners = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const res = await axiosPublic.get("/banners");
      return res.data.filter((banner) => banner.isActive === true);
    },
  });
  return [banners, isLoading, refetch];
}

import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function useCategories() {
  const axiosPublic = useAxiosPublic();
  const {
    data: categories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      axiosPublic.get("/categories").then((res) => {
        return res.data;
      }),
  });
  return [categories, isLoading, refetch];
}

import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function useSubCategories() {
  const axiosPublic = useAxiosPublic();
  const {
    data: subcategories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["subcategories"],
    queryFn: () =>
      axiosPublic.get("/subcategories").then((res) => {
        return res.data;
      }),
  });
  return [subcategories, isLoading, refetch];
}

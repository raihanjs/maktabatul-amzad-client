import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function useEditors() {
  const axiosPublic = useAxiosPublic();
  const {
    data: editors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["editors"],
    queryFn: () =>
      axiosPublic.get("/editors").then((res) => {
        return res.data;
      }),
  });
  return [editors, isLoading, refetch];
}

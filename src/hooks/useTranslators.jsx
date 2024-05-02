import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function useTranslators() {
  const axiosPublic = useAxiosPublic();
  const {
    data: translators = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["translators"],
    queryFn: () =>
      axiosPublic.get("/translators").then((res) => {
        return res.data;
      }),
  });
  return [translators, isLoading, refetch];
}

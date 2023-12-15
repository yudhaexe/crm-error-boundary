import { Clients } from "@/types/ClientsTypes";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

const fetchClients = async (): Promise<Clients[]> => {
  const response = await fetch(
    "https://interview-test-mock-api.azurewebsites.net/clients"
  );
  if(!response.ok) throw Error
  return response.json();
};

type useClientsDataOptions = {
  config?: UseQueryOptions;
};

export const useClients = ({ config }: useClientsDataOptions = {}) => {
  return useQuery({
    queryKey: ["client-data"],
    queryFn: () => fetchClients(),
    ...config,
  });
};

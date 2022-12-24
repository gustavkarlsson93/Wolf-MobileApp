import { useQuery } from "@tanstack/react-query";
import Agent from "../actions/Agent";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { FlatList } from "react-native";

const HomeScreen = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["ClubData"],
    queryFn: () => Agent.Club.All().then((response) => response),
  });

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <>
      <text>Klubbar</text>
      {data &&
        data.clubs.map((club) => (
          <FlatList
            data={data}
            renderItem={club.name}
            keyExtractor={(club) => club.id}
          />
        ))}
    </>
  );
};

export default HomeScreen;

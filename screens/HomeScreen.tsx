import { useQuery } from "@tanstack/react-query";
import Agent from "../Actions/Agent";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { FlatList, Text } from "react-native";

const HomeScreen = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["ClubData"],
    queryFn: () => Agent.Club.All().then((response) => response),
  });

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <>
      <Text>Klubbar</Text>
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

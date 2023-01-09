import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ErrorLottie from "./components/Error";
import Loader from "./components/Loader";
import Error from "./components/Error";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import HomeScreen from "./screens/HomeScreen";
import Agent from "./Actions/Agent";

const queryClient = new QueryClient();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <QueryClientProvider client={queryClient}>
        <Clubs />
      </QueryClientProvider>
      <Text>Fungerar!?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function Clubs() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

// const queryClient = new QueryClient()

// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Example />
//     </QueryClientProvider>
//   )
// }

// function Example() {
//   const { isLoading, error, data } = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () =>
//       fetch('https://api.github.com/repos/tanstack/query').then(res =>
//         res.json()
//       )
//   })

//   if (isLoading) return 'Loading...'

//   if (error) return 'An error has occurred: ' + error.message

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{' '}
//       <strong>✨ {data.stargazers_count}</strong>{' '}
//       <strong>🍴 {data.forks_count}</strong>
//     </div>
//   )
// }

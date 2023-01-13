import { Grid } from "@nextui-org/react";
import Navbar from "../../components/Navbar/Navbar";
import { Card4 } from './card';
import UserProfileNavBar from "./navbar";


export default function App() {
  return (
    <>
    <UserProfileNavBar/>
    <Grid.Container gap={5} justify="center">
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
    </Grid.Container>
    </>
  );
}

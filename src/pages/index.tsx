import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "npm/components/Header";

import { api } from "npm/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Header />
    </>
  );
};

export default Home;

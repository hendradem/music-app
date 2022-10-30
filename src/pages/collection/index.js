import React from "react";
import { useSession } from "next-auth/react";
import Layout from "../../layout/Layout";
import Login from "../auth/Login";
import Image from "next/image";

function index() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div>
      <Layout withMenu={true}>
        <h1> {session.user.name} </h1>
        <Image width={100} height={100} src={session.user.image} alt="propic" />
      </Layout>
    </div>
  );
}

export default index;

import React from "react";
import { getSession, getProviders, useSession } from "next-auth/react";
import Layout from "../../layout/Layout";
import Login from "../auth/Login";

function index() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div>
      <Layout withMenu={true}>
        <h1> {session.user.name} </h1>
        <img src={session.user.image} />
      </Layout>
    </div>
  );
}

export default index;

import React from "react";
import { useSession } from "next-auth/react";
import Layout from "../../layout/Layout";
import Login from "../auth/Login";

function index() {
  // const { session } = useSession();
  // if (!session) return <Login />;
  return (
    <div>
      <Layout withMenu={true}>
        <h1> collections </h1>
      </Layout>
    </div>
  );
}

export default index;

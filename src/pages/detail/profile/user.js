import React from "react";
import { getSession, getProviders, useSession, signOut } from "next-auth/react";
import Layout from "../../../layout/Layout";
import Login from "../../auth/Login";
// import Image from "next/image";

function User() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div>
      <Layout withMenu={true}>
        <div className="w-full p-14">
          <div className="flex flex-col items-center py-10 bg-white rounded-md">
            {/* <Image
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={session.user.image}
              alt="Name"
              width={100}
              height={100}
            /> */}
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              {session.user.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {" "}
              @{session.user.tag}{" "}
            </span>
            <div className="flex space-x-3 mt-2">
              <button
                onClick={() => {
                  signOut({
                    callbackUrl: `${window.location.origin}`,
                  });
                }}
                className="py-2 px-4 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default User;

import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Flowbite } from "flowbite-react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Flowbite>
        <Component {...pageProps} />
      </Flowbite>
    </SessionProvider>
  );
}

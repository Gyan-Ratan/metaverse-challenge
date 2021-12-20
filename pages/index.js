import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import Header from '../components/Header';

export default function Home() {
  const {isAuthenticated,logout} = useMoralis();
  // const isAuthenticated = false;
  if(!isAuthenticated) {return <Login />}
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-green-500  to-fuchsia-500 overflow-hidden">
      <Head>
        <title>metaverse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <button onClick={logout}>logout</button>
    </div>
  )
}
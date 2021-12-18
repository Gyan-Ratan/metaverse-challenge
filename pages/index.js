import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";

export default function Home() {
  const {isAuthenticated,logout} = useMoralis();
  // const isAuthenticated = false;
  if(!isAuthenticated) {return <Login />}
  return (
    <div className="h-screen">
      <Head>
        <title>metaverse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>kanishak</h1>
      <button onClick={logout}>logout</button>
    </div>
  )
}

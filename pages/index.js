"use client"
import Image from 'next/image'
import LandingPage from '../components/LandingPage'
import Head from 'next/head'
import { StateContextProvider } from '../context'
export default function Home() {
  return (
    <div>
      <Head>
        <title>NExtJS App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <LandingPage/>
    </div>
  )
}
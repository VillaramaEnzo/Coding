import React, { useState, useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash"
import { useRecoilValue, useRecoilState } from "recoil";
import { playlistState, playlistIdState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";
import Songs from "./Songs"


const colours = [

  "from-indigo-100", "from-indigo-200", "from-indigo-300", "from-indigo-400", "from-indigo-500",
  "from-pink-100", "from-pink-200", "from-pink-300", "from-pink-400", "from-pink-500",
  "from-green-100", "from-green-200", "from-green-300", "from-green-400",  "from-green-500",
  "from-yellow-100", "from-yellow-200", "from-yellow-300", "from-yellow-400", "from-yellow-500",
  "from-red-100", "from-red-200", "from-red-300", "from-red-400", "from-red-500",
  "from-blue-100", "from-blue-200","from-blue-300", "from-blue-400", "from-blue-500",
  "from-purple-100", "from-purple-200", "from-purple-300", "from-purple-400", "from-purple-500",

]


export default function Center() {

  const {data : session } = useSession();

  const spotifyApi = useSpotify()

  const [colour, setColour] = useState(null);

  const playlistId = useRecoilValue(playlistIdState);

  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {

    setColour(shuffle(colours).pop());

  }, [playlistId]);


  useEffect(() => {

    spotifyApi.getPlaylist(playlistId).then((data) => {

      setPlaylist(data.body);

    }).catch((err) => console.log("Somthing went wrong!", err))


  }, [spotifyApi, playlistId]);

  // console.log(playlist)

  return (
    <div className = "flex-grow h-screen overflow-y-scroll scrollbar-hide">

      <header className = "absolute top-5 right-8">

        <div className = "flex items-center bg-black text-white space-x-3 \
            opacity-90 hover:opacity-80 cursor pointer rounded-full p-1 pr-2" onClick = {signOut}>

          <img className = "rounded-full w-10 h-10" src = { session?.user.image } alt = ""/>
            <h1> { session?.user.name } </h1>
          <ChevronDownIcon className = "h-5 w-5" />

        </div>

      </header>

      <section className = {`flex items-end space-x-7 bg-gradient-to-b to-black ${colour} h-80 text-white p-8`}>

      <img className = "h-44 w-44 shadow-2xl" src = {playlist?.images?.[0]?.url} />

      <div>

        <p> Playlist </p>
        <h2 className = "text-2xl md:text-3xl xl:text-5xl font-bold"> {playlist?.name} </h2>

      </div>

      </section>

      <div>

      <Songs />

      </div>

    </div>
  )
}

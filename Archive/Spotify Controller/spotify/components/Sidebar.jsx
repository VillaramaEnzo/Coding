import React, {useState, useEffect} from 'react'
import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon, RssIcon} from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/solid';
import { signOut, useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";

export default function Sidebar() {


  const spotifyApi = useSpotify();

  const bSection1 = [[<HomeIcon className = "h-5 w-5"/>, "Home"],
                      [<SearchIcon className = "h-5 w-5"/>, "Search"],
                      [<LibraryIcon className = "h-5 w-5"/>, "Your Library"]];

  const bSection2 = [[<PlusCircleIcon className = "h-5 w-5"/>, "Create Playlist"],
                      [<HeartIcon className = "h-5 w-5 text-blue-500"/>, "Liked Songs"],
                      [<RssIcon className = "h-5 w-5 text-green-"/>, "Your Episodes"]];


  const { data: session, status } = useSession();


  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);


  // console.log("current playlist is", playlistId)


  useEffect(() => {

    if (spotifyApi.getAccessToken()) {

      spotifyApi.getUserPlaylists().then((data) => {

        setPlaylists(data.body.items);

      });

    }

  }, [session, spotifyApi])

  return (

    <div className = "text-gray-500 p-5 text-xs lg:text-sm border-r \
      border-gray-900 overflow-y-scroll scrollbar-hide h-screen \
      sm:max-w-[15rem] lg:max-w[20rem] hidden md:inline-flex pb-26">

      <div className = "space-y-4">

        { bSection1.map(item => (

          <button key = {item[1]} className = "sidebarButton">

            {item[0]}
            <p> {item[1]} </p>

          </button>

        )) }

        <hr className = "border-t-[0.1px] border-gray-900"/>

        { bSection2.map(item => (

          <button key = {item[1]} className = "sidebarButton">

            {item[0]}
            <p> {item[1]} </p>

          </button>

        )) }

        <hr className = "border-t-[0.1px] border-gray-900"/>

        {playlists.map(playlist => (

          <p key = {playlist.id} onClick = {() => setPlaylistId(playlist.id)} className = "cursor-pointer hover:text-white"> {playlist.name} </p>

        ))}

      </div>

    </div>

  )

}

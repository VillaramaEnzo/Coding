import React, { useCallback, useEffect, useState } from 'react'

import useSpotify from '../hooks/useSpotify';
import { useSession } from "next-auth/react";
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom"
import useSongInfo from "../hooks/useSongInfo";
import { debounce } from 'lodash'

import { HeartIcon,
         VolumeUpIcon as VolumeDownIcon } from "@heroicons/react/outline";

import { FastForwardIcon,
         PauseIcon,
         PlayIcon,
         ReplyIcon,
         RewindIcon,
         VolumeUpIcon,
         VolumeOffIcon,
         SwitchHorizontalIcon } from "@heroicons/react/solid";


export default function Player() {

  const spotifyApi = useSpotify();

  const { data: session, status } = useSession();

  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {

    if (!songInfo) {

      spotifyApi.getMyCurrentPlayingTrack().then((data) => {

        console.log("Now Playing:", data.body?.item);
        setCurrentTrackId(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {

          setIsPlaying(data.body?.is_playing);

        });

      });

    }

  }

  useEffect(() => {

    if (spotifyApi.getAccessToken() && !currentTrackId) {

      fetchCurrentSong();
      setVolume(50);

    }

  }, [currentTrackIdState, spotifyApi, session])


  const handlePlayPause = () => {

    spotifyApi.getMyCurrentPlaybackState().then((data) => {

      if (data.body.is_playing) {

        spotifyApi.pause();
        setIsPlaying(false);

      } else {

        spotifyApi.play();
        setIsPlaying(true);

      }

    });

  }

  useEffect(() => {

    if (volume > 0 && volume < 100) {

      debounceAdjustVolume(volume);

    }

  }, [volume]);


  const debounceAdjustVolume = useCallback(

    debounce((volume) => {

      spotifyApi.setVolume(volume).catch((err) => console.log(err));

    }, 200), []

  )


  return (

    <div className = "h-24 bg-gradient-to-b from-black to-gray-900 text-white \
                      grid grid-cols-3 text-xs md:text-base px-2 md:px-8">

      {/* Left Section */}
      <div className = "flex items-center space-x-4">

        <img className = "hidden md:inline h-10 w-10" src = {songInfo?.album.images?.[0]?.url} alt = ""/>

        <div>

          <h3> { songInfo?.name } </h3>
          <p> { songInfo?.artists?.[0]?.name } </p>

        </div>

      </div>

      {/* Center */}
      <div className = "flex items-center justify-evenly">

        <SwitchHorizontalIcon className = "playerButton" />
        <RewindIcon className = "playerButton" // onClick = {() => spotifyApi.skipToPrevious()} -- API not working
        />

        {isPlaying ? (

          <PauseIcon className = "playerButton w-10 h-10" onClick = { handlePlayPause } />

        ) : (

          <PlayIcon className = "playerButton w-10 h-10" onClick = { handlePlayPause } />

        )}

        <FastForwardIcon className = "playerButton" // onClick = {() => spotifyApi.skipToNext()} -- API not working
        />
        <ReplyIcon className = "playerButton" />

      </div>

      {/* Right */}
      <div className = "flex items-center space-x-3 mad:space-x-4 justify-end pr-5">

        {volume === 0 ? (

          <VolumeOffIcon className = "playerButton" />

        ) : (

          <VolumeDownIcon className = "playerButton" onClick = {() => volume > 0 && setVolume(volume - 10)}/>

        )}

        <input className = "w-14 md:w-28 bg-blue-400"
               type = "range"
               value = {volume}
               min = {0} max = {100}
               onChange = {(e) => setVolume(Number(e.target.value))}/>

        <VolumeUpIcon className = "playerButton" onClick = {() => volume < 100 && setVolume(volume + 10)}/>

      </div>

    </div>

  )
}

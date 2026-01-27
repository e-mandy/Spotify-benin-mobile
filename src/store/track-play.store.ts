import { create } from "zustand";

//currentSong
//onPause
//onNext
//onPrev
//onSeek
//onEnd
//playlists
//startSong
//startFromPlaylist
//randomStart

interface ITrackPlay {
  title: string;
  cover: string;
  singer: string;
  duration: string;
  playlistName: string;
}

const useTrackPlay = create<ITrackPlay>((set, get) => ({
  title: "Agolo",
  cover:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC4Uhs-zpl6Hn0-NcjnkTxMRGqEFIk21XJjUmKSXaxvVcYZ9hXkjdCQIrB4H1FJr1dqWFo7CGJl7y3bOoqhjzyABvV-vKXRQz2TeI-wCnJEh0Ci11Hi87Kysl1bnFCA-eRmWbNUjwnUE8LUC8mbxSUWTMj_5_W6Ow3KvhFRZRdenPPRMEeACdqKWMRlz3osqyhyiTsj8-ptxE52ujFoYTGfGNyJkg8iG7ERcgUBUn9X1ZjZSd1Uhns2RGfrG2fAn8vmhwK1X6GefhHa",
  singer: "Angélique Kidjo",
  duration: "07:44",
  playlistName: "Top Bénin 50",
}));

export default useTrackPlay;

import { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);

  function handlePlay() {
    videoRef.current.play();
  }

  return (
    <div>
        <iframe src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" width={285} height={122} frameborder="0"></iframe>
      {/* <video
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        autoPlay
        controls
      />
      <button onClick={handlePlay}>
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/play-3660698-3094959.png?f=avif&w=128" alt="play-icon" />
      </button> */}
    </div>
  );
}
export default VideoPlayer
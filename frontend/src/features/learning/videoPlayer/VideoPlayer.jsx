import { useEffect, useRef } from "react";

function VideoPlayer({ videoId }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("src");
      videoRef.current.load();
    }
  }, [videoId]);

  return (
    <section className="pt-16 overflow-y-scroll">
      <div className="bg-black w-full px-24">
        <video className="w-full h-[42.875rem]" ref={videoRef} controls>
          <source
            src={`http://localhost:3001/videos/${videoId}`}
            type="video/mp4"
          />
          Your browser does not support
        </video>
      </div>
      <div className="w-full h-[40%] px-24 py-4">
        <h3 className="text-2xl text-black font-semibold">Bài 1: giới thiệu về HTML, CSS</h3>
      </div>
    </section>
  );
}

export default VideoPlayer;

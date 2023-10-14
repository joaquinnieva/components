'use client';
import { useEffect, useRef } from 'react';

function TestLive() {
  const localVideo = useRef<any>(null);

  const getStream = async () => {
    const video: any = document.getElementById('video');
    const textDecoder = new TextDecoder();

    const res = await fetch('https://downmall.rodeo/dtvpl2.html?id=1240');
    console.log(res.body);

    video.src = res.body;
  };

  useEffect(() => {
    getStream();
  }, []);

  return (
    <div>
      <video id="video" autoPlay={true} src="blob:https://downmall.rodeo/a4f58b42-764d-4a71-9410-6caf31c2572d" className="h-[400px] w-[400px]"></video>
    </div>
  );
}

export default TestLive;

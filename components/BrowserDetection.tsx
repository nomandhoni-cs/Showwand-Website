"use client";
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { BsBrowserEdge } from "react-icons/bs";
const BrowserDetection: React.FC = () => {
  const [isEdge, setIsEdge] = useState(false);
  // Detect Edge browser
  useEffect(() => {
    const detectEdge = async () => {
      if (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent) {
        const userAgent = window.navigator.userAgent;
        if (userAgent.includes('Edg') || userAgent.includes('Edge')) {
          setIsEdge(true);
        }
      }
    };

    detectEdge();
  }, []);

  if (isEdge) {
    return (
      <Link
        href="https://microsoftedge.microsoft.com/addons/detail/showwand/kihfagbcdciegpafpalbhkfmedpefamb"
        className="rounded-md bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:border-solid border-2 border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
        target={`_blank`}
      >
        Add Showwand to Edge
        <span aria-hidden="true" className="inline-block ms-2">
          <BsBrowserEdge />
        </span>
      </Link>
    );
  }

  return (
    <div>
      <Link
        href="https://chrome.google.com/webstore/detail/showwand/eccblhhmiljocdidkkcaidegfdoophga"
        className="rounded-md bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:border-solid border-2 border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
        target={`_blank`}
      >
        Download
        <span aria-hidden="true" className="inline-block ms-2">
          <HiDownload />
        </span>
      </Link>
    </div>
  );
};

export default BrowserDetection;
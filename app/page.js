"use client"
import MapSection from "@/components/Home/MapSection";
import Search from "@/components/Home/Search";
import { SourceContext } from "@/context/SourceContext";
import { UserButton } from "@clerk/nextjs";
import { LoadScript } from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);

  return (
    <>
    <SourceContext.Provider value={{source, setSource, destination, setDestination}}>
    <LoadScript 
    libraries={['places']}
     googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      {/* <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 "> */}

      <div className="p-6 flex flex-col-reverse md:flex-row gap-5 ">
        <div className="w-full md:w-[35%]">
          <Search />
        </div>
        {/* <div className="col-span-2">  */}
        <div className="w-full mt-3 md:w-[65%]"> 
          <MapSection />
        </div>
      </div>
      </LoadScript>
      </SourceContext.Provider>
    </>
  );
}

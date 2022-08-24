import React from "react";
import { Carousel } from "flowbite-react";

function HomeCarousel() {
  return (
    <div>
      <div className="h-18 sm:h-64 xl:h-[220px]">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 bg-[url('https://images.unsplash.com/photo-1535992165812-68d1861aa71e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')]">
            <h1 className="font-bold text-2xl text-white text-center">
              Everything you need <br /> about music
            </h1>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 bg-[url('https://images.unsplash.com/photo-1587714656374-fb3c9c3a4977?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')]">
            <h1 className="font-bold text-2xl text-white text-center">
              Get trending <br /> song and artist
            </h1>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 object-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1630441100130-90451b6ae4f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')]">
            <h1 className="font-bold text-2xl text-white text-center">
              Explore your <br /> favourite songs
            </h1>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default HomeCarousel;

import React from "react";

export default function GlobeAppDemo() {
  return (
    <div className="text-black md:mt-14">
      <div>
        <img src={"/images/AppDemo.webp"} alt="Preview of TrustAuthX app" />
      </div>
      <div className="mt-10 p-4 md:absolute md:bottom-[1rem] md:right-[10rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.2rem"
          height="2.2rem"
          viewBox="0 0 46 46"
          fill="none"
          className="ml-auto"
        >
          <path
            d="M0 23C0 27.549 1.34893 31.9958 3.8762 35.7781C6.40347 39.5604 9.99558 42.5084 14.1983 44.2492C18.401 45.99 23.0255 46.4455 27.4871 45.5581C31.9486 44.6706 36.0468 42.4801 39.2634 39.2634C42.4801 36.0468 44.6706 31.9486 45.558 27.4871C46.4455 23.0255 45.99 18.401 44.2492 14.1983C42.5084 9.99558 39.5604 6.40347 35.7781 3.8762C31.9958 1.34893 27.549 1.66893e-06 23 1.66893e-06C16.902 0.00644088 11.0556 2.43172 6.74365 6.74366C2.43171 11.0556 0.0064396 16.902 0 23ZM24.2517 12.9021L31.3286 19.979C31.6606 20.311 31.8471 20.7613 31.8471 21.2308C31.8471 21.7003 31.6606 22.1505 31.3286 22.4825C30.9967 22.8145 30.5464 23.001 30.0769 23.001C29.6074 23.001 29.1572 22.8145 28.8252 22.4825L24.7692 18.4243L24.7692 31.8461C24.7692 32.3154 24.5828 32.7654 24.251 33.0972C23.9192 33.429 23.4692 33.6154 23 33.6154C22.5308 33.6154 22.0808 33.429 21.749 33.0972C21.4172 32.7654 21.2308 32.3154 21.2308 31.8461L21.2308 18.4243L17.1748 22.4825C16.8428 22.8145 16.3926 23.001 15.9231 23.001C15.4536 23.001 15.0033 22.8145 14.6713 22.4825C14.3394 22.1505 14.1529 21.7003 14.1529 21.2308C14.1529 20.7613 14.3394 20.311 14.6713 19.979L21.7483 12.9021C21.9126 12.7376 22.1077 12.6071 22.3225 12.5181C22.5373 12.4291 22.7675 12.3832 23 12.3832C23.2325 12.3832 23.4627 12.4291 23.6775 12.5181C23.8923 12.6071 24.0874 12.7376 24.2517 12.9021Z"
            fill="#9EFE00"
          />
        </svg>
        <h2 className="text-right text-3xl font-light md:text-[3.5rem] md:leading-none">
          Low-Code Is The New <br />
          Source Code
        </h2>
        <p className="ml-auto mt-10 w-fit text-right text-zinc-600 md:text-xl">
          TrustAuthx Serverless Ai Based Authentication & Authorization <br />
          infrastructure, manage everything from Auth to Sessions.
        </p>
      </div>
    </div>
  );
}
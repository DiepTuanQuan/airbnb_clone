import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="h-[35px] w-[112px] relative hidden md:block ">
      <Image
        src="/images/airbnb.png"
        alt="logo"
        fill
        
        priority
      />
    </Link>
  );
};

export default Logo;
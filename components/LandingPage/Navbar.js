import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between">
        <div className="mt-5">
            <Image src="/images/logo.svg" height={32} width={160} alt="easybank logo" />
        </div>
        <div className=" ">
        <Link href="/home">
        <button className="hidden h-full  lg:block bg-blue-500 rounded-full px-7  text-neutral-white text-xs from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400">
            Launch App
        </button>
        </Link>
        </div>

    </div>
  );
}
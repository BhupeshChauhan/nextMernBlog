import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex justify-center items-center">
      <Image
        src="/logoCG.png"
        alt="logo"
        width={50}
        height={50}
        className="aspect-video w-30"
        priority
      />
    </Link>
  );
};

export default Logo;

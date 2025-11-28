import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex h-[100px] w-full items-center bg-[#1A1A1A] px-6 md:h-[180px] md:px-4">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-[1440px]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo.svg"
            alt="logo"
            className="w-[40px] md:size-[114px]"
            width={80}
            height={80}
          />
          <Image
            src="/logo/logo-title.svg"
            alt="logo"
            className="w-[96px] md:size-[197px]"
            width={197}
            height={82}
          />
        </Link>
      </div>
    </header>
  );
}

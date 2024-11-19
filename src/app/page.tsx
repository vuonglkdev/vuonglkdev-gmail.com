import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <p className="text-lg bg-slate-400">
          To generate this message, Docker took the following steps: 1. The
          Docker client contacted the Docker daemon. 2. The Docker daemon pulled
          the &quot;hello-world&quot; image from the Docker Hub. (amd64) 3. The
          Docker daemon created a new container from that image which runs the
          executable that produces the output you are currently reading. 4. The
          Docker daemon streamed that output to the Docker client, which sent it
          to your terminal.
        </p>
      </main>
    </div>
  );
}

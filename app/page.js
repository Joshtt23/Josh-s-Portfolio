import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mx-auto my-auto mt-32">
        <h1 className="text-5xl font-bold text-center">Joshua Traver</h1>
        <h2 className="italic mt-2 text-gray-600 text-xl mb-9">
          Full-Stack Software Developer
        </h2>

        <img
          src="./images/Banner.png"
          className="max-w-2xl rounded-lg shadow-lg"
          alt="Joshua Traver - Full-Stack Software Developer"
        />
        <p className="mt-9 text-center max-w-lg text-2xl">
          Transforming Ideas into Digital Realities
          <br />
          One Innovative Code at a Time!
        </p>
      </div>
    </main>
  );
}

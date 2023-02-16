import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <img src="./images/creative.png" className=" max-w-lg my-20 rounded-lg" alt="creative picture"/>
        <h1 className="text-5xl font-light font-lobster">Joshua Traver</h1>
        <h2 className="italic mt-1 font-lobster">Full-Stack Software Developer</h2>
        <p className="mt-4">
          Est. 1998. Coding since 2010. Developing the world one line at a time! 🧑‍💻
        </p>
      </div>
    </main>
  )
}

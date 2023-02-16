import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { initializeApp } from "firebase/app";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-col h-screen justify-between bg-gradient-to-r from-myPurple to-myLightBlue">
        <div className="flex-start h-14">
          <Header />
        </div>
        <div className="flex-1">{children}</div>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}

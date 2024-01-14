'use client';
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

import { Container } from 'reactstrap'; // Import Container from Reactstrap

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col h-screen justify-between bg-gradient-to-r from-myPurple to-myLightBlue">
        <header>
          <Header />
        </header>
        <Container fluid className="flex-1"> {/* Use Container from Reactstrap */}
          {children}
        </Container>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { Button, Nav } from "reactstrap";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <Link href={href} passHref>
      <div
        className="p-2 block text-white hover:text-gray-200"
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </div>
    </Link>
  );

  return (
    <Nav className="bg-gray-900 text-white shadow-md p-4 flex items-center justify-between mb-10">
      <Link href="/" passHref>
        <div className="text-2xl font-bold spec-font">Welcome!</div>
      </Link>

      <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        {isMenuOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </Button>

      <Transition as={React.Fragment} show={isMenuOpen}>
        <Dialog as="div" className="fixed inset-0 z-10" onClose={setIsMenuOpen}>
          <div className="min-h-screen">
            <Transition.Child
              as={React.Fragment}
              enter="transition ease-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 p-4 bg-gray-800 w-64">
                <Button onClick={() => setIsMenuOpen(false)} className="mb-4">
                  <FaTimes className="text-2xl" />
                </Button>
                <div className="flex flex-col">
                  <NavLink href="/resume">Resume</NavLink>
                  <NavLink href="/projects">Projects</NavLink>
                  {/* Uncomment when needed
                  <NavLink href="/contact">Contact</NavLink>
                  */}
                  <NavLink href="/about">About</NavLink>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <div className="hidden md:flex md:flex-row md:items-center">
        <NavLink href="/resume">Resume</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        {/* Uncomment when needed
        <NavLink href="/contact">Contact</NavLink>
        */}
        <NavLink href="/about">About</NavLink>
      </div>
    </Nav>
  );
}

export default Header;

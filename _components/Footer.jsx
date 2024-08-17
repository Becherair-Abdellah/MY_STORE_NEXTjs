'use client'
import Link from "next/link"
import { FaFacebook,FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
export default function Footer() {
  return (
<footer className="bg-gray-100 dark:bg-dark_primary">
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">

    <div
      className=" border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24"
    >
      <ul className="flex flex-wrap justify-center  gap-4 text-xs lg:justify-end">
        <li>
          <a href="#" className="text-color_primary dark:text-white transition hover:opacity-75"> Terms & Conditions </a>
        </li>

        <li>
          <a href="#" className="text-color_primary dark:text-white transition hover:opacity-75"> Privacy Policy </a>
        </li>

        <li>
          <a href="#" className="text-color_primary dark:text-white transition hover:opacity-75"> Cookies </a>
        </li>
      </ul>

      <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 dark:text-white transition hover:opacity-75"
          >
            <FaFacebook size={30}/>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition dark:text-white hover:opacity-75"
          >
            <FaInstagram size={30}/>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition dark:text-white hover:opacity-75"
          >
            <FaGithub size={30}/>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 dark:text-white transition hover:opacity-75"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
  )
}

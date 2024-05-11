import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav class="bg-zinc-900 p-6 m-5 rounded-xl">
                <div class="flex flex-wrap items-center justify-between">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="../asserts/uzchessLogo.png" class="h-14" alt="Flowbite Logo" />
                        <span class="text-xl">O'zbekcha</span>
                    </a>


                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">


                        <div class="flex flex-row items-center space-x-7 mr-4">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <i class="fa-solid fa-bell"></i>
                        </div>

                        <button type="button" class="text-white hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 
            py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            ml-auto">Kirish <i class="fa-solid fa-door-open"></i></button>

                    </div>

                    <div class="items-center justify-between hidden md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul
                            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                opacity-50">
                                <Link to="/">Asosiy</Link>
                            </li>
                            <li>
                                <Link to="/news">Yangiliklar</Link>
                            </li>
                            <li className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                opacity-50">
                                <Link to="/courses">Kurslar</Link>
                            </li>
                            <li className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                opacity-50">
                                <Link to="/library">Kutubxona</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navigation;
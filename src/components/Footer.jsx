import React from "react";

const Footer = () => {
    return (
        <div>
            <footer class="bg-zinc-900 grid grid-cols-1 pt-7">
                <div class=" flex items-center justify-center">
                    <img class="justify-center items-end" src="./asserts/uzchessLogo.png" />
                </div>
                <div class="mt-3">
                    <ul class="flex flex-col justify-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent
              opacity-50" aria-current="page">Biz haqimizda</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
            opacity-50">Cookie fayllari siyosati</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
              opacity-50">Foydalanish qoidalari</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
              opacity-50">Brend resurslari</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
            opacity-50">Cookie fayllari siyosati</a>
                        </li>
                    </ul>
                </div>
                <div class="flex justify-center space-x-5 md:mt-4">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-telegram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <div class="border-3 border-black mt-2 p-3 mx-3 justify-between flex">
                    <h2 class="">@ Uzchess. All rights reserved</h2>
                    <h2>Foydalanish qoidalari</h2>
                </div>
            </footer>


        </div>
    )
}

export default Footer;
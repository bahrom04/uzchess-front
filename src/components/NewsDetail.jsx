import React from 'react'
import TopBooks from './TopBooks';


const NewsDetail = (props) => {
    return (
        <div>
            <main class="grid grid-cols-4">
                <div class="gap-10 col-span-3">

                    <div class="grid grid-cols-1 gap-6 p-6">
                        <div class="overflow-hidden relative bg-zinc-900 rounded-md p-3">
                            <h1 class="font-bold text-3xl ">
                                O'zbekiston shaxmatchilari olimpiadada
                                Armanistonlik raqiblarini mag'lub etishdi
                            </h1>
                            <div>
                                <p class="opacity-50 mt-2">Sentabr 7 2022</p>
                            </div>
                            <img src="../asserts/komanda.png" class="w-full  object-cover rounded-md" />
                            <div class="p-7">
                                <h3 class="mt-2 mb-2 leading-5 text-2xl">Qonun nima haqida edi</h3>
                                <h2 class="opacity-75 mt-4">
                                    Ozbekiston mos corrupti omnis? bekiston yoish Lorem ipsum dol
                                    eum...
                                </h2>
                                <p class="opacity-75 mt-4">
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's s
                                    tandard dummy text ever since thake a type specimen book. It has surviv
                                    ed not only five centuri
                                </p>
                                <p class="opacity-75 mt-4">Lorem Ipsum
                                    <span class="text-blue-500">- In Game</span>
                                    is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's s
                                    tandard dummy text ever it to make a type specimen book. It has surviv
                                    ed not only five centuri
                                </p>
                                <p class="opacity-75 mt-4">
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's s
                                    tandard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has surviv
                                    ed not only five centuries, but also the leap into electronic typesetting, rema
                                    ining essentially unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi
                                    ng software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <img src="../asserts/carlsen.jpg" class="w-full object-cover rounded-md mt-4" />
                                <p class="opacity-75 mt-4">
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's s
                                    tandard dummy text ever since thake a type specimen book. It has surviv
                                    ed not only five centuri
                                </p>
                                <p class="opacity-75 mt-4">Lorem Ipsum
                                    <span class="text-blue-500">- In Game</span>
                                    is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's s
                                    tandard dummy text ever it to make a type specimen book. It has surviv
                                    ed not only five centuri
                                </p>
                                <p class="opacity-75 mt-4">
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's s
                                    tandard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has surviv
                                    ed not only five centuries, but also the leap into electronic typesetting, rema
                                    ining essentially unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi
                                    ng software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- similar posts --> */}
                    <div class="flex justify-between items-center">
                        <h1 class="font-bold text-2xl px-6">O'xshash yangiliklar</h1>
                    </div>
                    {/* <!-- similar posts end --> */}
                    {/* <!-- card grid --> */}
                    <div class="grid grid-cols-3 gap-6 p-6">
                        <div class="overflow-hidden relative bg-zinc-900 rounded-md p-3">
                            <img src="../asserts/nodirbek.png" class="w-full sm:h-32 object-cover rounded-md" />
                            <div>
                                <p class="opacity-50 mt-2">Sentabr 7 2022</p>
                            </div>
                            <div>
                                <h3 class="mt-2 mb-2 leading-5">Nodirber adddbudsaator FIDE JAHIN chemoiinatida 2700 reytinh aolfdi</h3>
                                <h4 class="opacity-75">
                                    Ozbekiston mos corrupti omnis? bekiston yoish Lorem ipsum dol
                                    eum...
                                </h4>
                            </div>
                        </div>
                        <div class="overflow-hidden relative bg-zinc-900 rounded-md p-3">
                            <img src="../asserts/trener.png" class="w-full sm:h-32 object-cover rounded-md" />
                            <div>
                                <p class="opacity-50 mt-2">Sentabr 7 2022</p>
                            </div>
                            <div>
                                <h3 class="mt-2 mb-2 leading-5">Nodirber adddbudsaator FIDE JAHIN chemoiinatida 2700 reytinh aolfdi</h3>
                                <h4 class="opacity-75">
                                    Ozbekiston mos corrupti omnis? bekiston yoish Lorem ipsum dol
                                    eum...
                                </h4>
                            </div>
                        </div>
                        <div class="overflow-hidden relative bg-zinc-900 rounded-md p-3">
                            <img src="../asserts/chessdesk.png" class="w-full sm:h-32 object-cover rounded-md" />
                            <div>
                                <p class="opacity-50 mt-2">Sentabr 7 2022</p>
                            </div>
                            <div>
                                <h3 class="mt-2 mb-2 leading-5">Nodirber adddbudsaator FIDE JAHIN chemoiinatida 2700 reytinh aolfdi</h3>
                                <h5 class="opacity-75">
                                    Ozbekiston mos corrupti omnis? bekiston yoish Lorem ipsum dol
                                    eum...
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* <!-- card grind end --> */}
                </div>

                {/* Top-books */}
                <TopBooks />
                {/* Top-books-end */}

            </main>
        </div>
    )
}

export default NewsDetail;

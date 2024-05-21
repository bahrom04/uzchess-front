import React from "react";
import { Link } from "react-router-dom";
import TopBooks from "./TopBooks";


const NewsCard = (props) => {
    return (
        <div>
            <div>
                <main className="grid grid-cols-4">
                    <div className="gap-10 col-span-3">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-3xl px-6">Yangiliklar</h1>
                            <i className="fa-solid fa-magnifying-glass mr-9"></i>
                        </div>

                        <div className="grid grid-cols-3 gap-6 p-6">

                            {props.news ? props.news.map((d, i) => {
                                return (
                                    <div key={i} className="overflow-hidden relative bg-zinc-900 rounded-md p-3">
                                        <img src={d.img} className="w-full sm:h-32 object-cover rounded-md" alt={"image" + i} />
                                        <div>
                                            <p className="opacity-50 mt-2">{d.date}</p>
                                        </div>
                                        <div>
                                            <h3 className="mt-2 mb-2 leading-5 hover:text-blue-500"><Link to="/news/1">{d.title}</Link></h3>

                                            <h4 className="opacity-75 hover:text-blue-500"><Link to="/news/1">{d.context}</Link></h4>
                                        </div>
                                    </div>
                                );
                            }) : "Loading"}

                        </div>
                    </div>
                    
                    <TopBooks />
                </main>

            </div>


        </div>
    )
}

export default NewsCard;
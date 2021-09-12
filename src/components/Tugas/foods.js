import React from "react";

export default function Foods(props) {
    const { name, desc, image, name1, desc1, image1, name2, desc2, image2 } = props;
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

            <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt="makanan" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text -gray-700 text-base">
                    {desc}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#foods</span>

                </div>
            </div>

            <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image1} alt="makanan" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name1}</div>
                    <p className="text -gray-700 text-base">
                    {desc1}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#foods</span>
                </div>
            </div>

            <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image2} alt="makanan" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name2}</div>
                    <p className="text -gray-700 text-base">
                    {desc2}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#foods</span>
                </div>
            </div>
        </div>
    );
}
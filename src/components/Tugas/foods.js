import React from "react";

export default function Foods(props) {
    const { food } = props;
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-clip text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        {food.map((f) => (
                <div className="rounded overflow-hidden shadow-lg bg-white ">
                <img className="w-full" src={f.image} alt="makanan" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{f.name}</div>
                        <p className="text-black text-base">
                        {f.desc}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#foods</span>
                    </div>
                </div>
                ))}
        </div>
    );
}
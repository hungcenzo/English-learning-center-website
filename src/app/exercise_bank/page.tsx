'use client'

import SideBar from "@/components/layout/sideBar"
import Header from "@/components/layout/header"
import Link from "next/link"
import Ieye from "@/components/icons/eye"
import { ReactElement, useState, useEffect } from "react"
import Select from "react-select";
import * as React from 'react';

export default function Exercise_bank() {
    const [module, setModule] = useState('')
    const [skill, setSkill] = useState('')
    const [content, setContent] = useState<ReactElement | any | null>(null)
    const [exercises, setExercises] = useState([])
    const [selectedButton, setSelectedButton] = useState<number | null>(null);


    const handleButtonClick = (buttonNumber: number) => {
        setSelectedButton(buttonNumber);
    };




    // Mặc định hiển thị nội dung khi trang được tải

    useEffect(() => {
        fetch('/api/exercisesBank')
            .then(res => res.json())
            .then(data => {
                setExercises(data)
                console.log(data)
                console.log(exercises)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // if (selectedButton == null) {
    //     setContent(
    //         <div className="flex justify-between mt-10 gap-2">
    //             <div className="w-1/3 bg-white rounded-xl border border-zinc-300 px-2 pb-4">
    //                 <p className="text-center text-black text-base font-semibold font-['Poppins'] mt-4">exercise[0].module</p>
    //                 <div className="flex items-center justify-between mt-4 border-b border-stone-200 pb-4">
    //                     <p className="rounded-md border-2 border-stone-300 text-center text-stone-300 text-base font-semibold font-['Poppins'] px-1">exercise[0].title</p>
    //                 </div>

    //                 <div className="mt-10 ml-4">
    //                     <Link href={"/exercise_bank/ex_in_exbank"}>
    //                         <button className="flex items-center gap-2 bg-stone-300 rounded-md px-3 py-1 hover:bg-stone-200">
    //                             <Ieye className="w-[1em] fill-blue-400" />
    //                             <p className="text-sky-400 text-sm font-medium font-['Poppins']">View Exercise</p>
    //                         </button>
    //                     </Link>
    //                 </div>
    //             </div>
    {/* 
                    <div className="w-1/3 bg-white rounded-xl border border-zinc-300 px-2 pb-4">
                        <p className="text-center text-black text-base font-semibold font-['Poppins'] mt-4">exercise[0].title</p>
                        <div className="flex items-center justify-between mt-4 border-b border-stone-200 pb-4">
                            <p className="rounded-md border-2 border-stone-300 text-center text-stone-300 text-base font-semibold font-['Poppins'] px-1">exercise[0].module</p>
                            <p className="rounded-md border-2 border-stone-300 text-center text-stone-300 text-base font-semibold font-['Poppins'] px-1">exercise[0].skill</p>
                            <p className="rounded-md border-2 border-stone-300 text-center text-stone-300 text-base font-semibold font-['Poppins'] px-1"></p>
                        </div>

                        <div className="mt-10 ml-4">
                            <Link href={"/exercise_bank/ex_in_exbank"}>
                                <button className="flex items-center gap-2 bg-stone-300 rounded-md px-3 py-1 hover:bg-stone-200">
                                    <Ieye className="w-[1em] fill-blue-400" />
                                    <p className="text-sky-400 text-sm font-medium font-['Poppins']">View Exercise</p>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-1/3 bg-white rounded-xl border border-zinc-300 px-2 pb-4">
                        <p className="text-center text-black text-base font-semibold font-['Poppins'] mt-4">exercise[0].title</p>
                        <div className="flex items-center justify-between mt-4 border-b border-stone-200 pb-4">
                            <p className="rounded-md border-2 border-stone-300 text-center text-stone-300 text-base font-semibold font-['Poppins'] px-1">exercise[0].module</p>
                            <p className="rounded-md border-2 border-stone-300 text-center text-stone-300 text-base font-semibold font-['Poppins'] px-1">exercise[0].skill</p>
                            <p className="rounded-md border-2 border-stone-300 text-center text-stone-300 text-base font-semibold font-['Poppins'] px-1"></p>
                        </div>

                        <div className="mt-10 ml-4">
                            <Link href={"/exercise_bank/ex_in_exbank"}>
                                <button className="flex items-center gap-2 bg-stone-300 rounded-md px-3 py-1 hover:bg-stone-200">
                                    <Ieye className="w-[1em] fill-blue-400" />
                                    <p className="text-sky-400 text-sm font-medium font-['Poppins']">View Exercise</p>
                                </button>
                            </Link>
                        </div>
            </div> */}
    //         </div>
    //     );
    // }

    // if (selectedButton !== null) {
    //     if (selectedButton === 1) {
    //         setContent('');
    //     } else if (selectedButton === 2) {
    //         setContent(
    //             <div className="w-1/3 bg-white rounded-xl border border-zinc-300 px-2 pb-4">
    //                 {/* Nội dung cho Button 2 */}
    //             </div>
    //         );
    //     }
    // }



    //console.log(exercise)

    const handleChangeModule = (ev) => {
        setModule(ev.value);
    };

    const handleChangeSkill = (ev) => {
        setSkill(ev.value);
    };

    return (
        <>
            <Header />
            <div className="flex">
                <SideBar />

                <div className="ml-14 w-2/3">
                    <div className="mb-4 mt-4 font-poppins font-bold text-5xl border-b border-black">
                        Exercises Bank
                    </div>
                    <div className="bg-white rounded pb-3">
                        <div className="flex gap-32 justify-center px-11 py-7">
                            <Select options={optionModule} onChange={handleChangeModule} className="w-1/4 text-center border-2 border-zinc-300 rounded-md" placeholder="Module" />
                            <Select options={optionSkill} onChange={handleChangeSkill} className="w-1/4 text-center border-2 border-zinc-300 rounded-md" placeholder="Skill" />
                        </div>

                        <div className="mt-16 flex items-center ml-9 gap-2">
                            <button className="bg-purple-500 rounded-lg text-white text-base font-medium font-['Poppins'] px-6 py-1 hover:bg-purple-400">
                                Sort Data
                            </button>

                            <button className="text-red-700 rounded-lg text-base font-medium font-['Poppins'] border-2 border-red-600 px-4 py-[2px] hover:bg-red-200">
                                Remove filter
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pl-4 pt-3">
                        <button
                            onClick={() => handleButtonClick(1)}
                            className={`bg-white hover:bg-red-500 text-black hover:text-white text-base font-medium px-4 py-2 rounded-lg border border-zinc-300 ${selectedButton === 1 ? 'bg-blue-400' : ''}`}>
                            All
                        </button>

                        <button
                            onClick={() => handleButtonClick(2)}
                            className={`bg-white hover:bg-sky-200 text-black hover:text-white text-base font-medium px-4 py-2 rounded-lg border border-zinc-300 ${selectedButton === 2 ? 'bg-blue-400' : ''}`}>
                            Your Exercises
                        </button>
                    </div>

                    <div className="inline-block mt-4">
                        {/* {exercise[0].content} */}
                        {
                            exercises.map(exercise => (
                                <>
                                    <div className="inline-block bg-white mr-4 pl-10 pr-[95px] py-4 mb-4 rounded-xl">
                                        <div className="font-semibold mb-4">
                                            {exercise.title}
                                        </div>
                                        <div className="flex text-gray-400 text-sm font-medium pb-3 border-b-2 border-gray-400">
                                            <div className="p-2 border-2 border-gray-300 rounded-lg mr-10">
                                                {exercise.module}
                                            </div>
                                            <div className="p-2 border-2 border-gray-300 rounded-lg">
                                                {exercise.skill}
                                            </div>
                                        </div>
                                        <Link onClick={() => localStorage.setItem('exerciseID', exercise._id)}
                                            href='/exercise_bank/ex_in_exbank'
                                            className="flex p-2 mt-3 w-full items-center gap-4 bg-gray-200 rounded-lg">
                                            <Ieye className="fill-blue-400 w-6" />
                                            <div className="text-blue-400">View Exercise</div>
                                        </Link>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

const optionModule = [
    { value: "IELTS", label: "IELTS" },
    { value: "TOEIC", label: "TOEIC" },
    { value: "TOEFL", label: "TOEFL" }
];

const optionSkill = [
    { value: "Speaking", label: "Speaking" },
    { value: "Listening", label: "Listening" },
    { value: "Writing", label: "Writing" },
    { value: "Reading", label: "Reading" }
];
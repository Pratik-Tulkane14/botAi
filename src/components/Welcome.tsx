import staticQuestionsArray from "../constants/staticQuestionsArray";
import staticData from "../constants/staticData";
import { useEffect } from "react";
interface WelcomeProp {
    setBotAiResponse: React.Dispatch<React.SetStateAction<{ id: number; question: string; response: string; }[]>>;
}

const Welcome = ({ setBotAiResponse }:WelcomeProp) => {
    const handleClick=(id:number)=>{
        const result = staticData.filter((item)=>item.id ==id)
       setBotAiResponse([...result]);
    }
    // useEffect(()=>{
    //     setBotAiResponse([]);
    // },[]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black mt-10">
            {staticQuestionsArray.map((ele, index) => {
                return (
                    <div key={index} onClick={()=>handleClick(ele.id)} className="bg-white p-6 rounded shodow cursor-pointer hover:shadow-lg transition delay-150 duration-300 ease-in-out  transition delay-150 duration-300 ease-in-out ">
                        <h5>{ele.question}</h5>
                        <p className="text-gray-400 text-sm font-normal">
                            Get immediate AI generated response
                        </p>
                    </div>
                )
            })}
        </div>
    );
};

export default Welcome;

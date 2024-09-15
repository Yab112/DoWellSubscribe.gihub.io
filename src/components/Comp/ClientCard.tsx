import { FaStar } from "react-icons/fa"
import { cn } from "../../lib/utils"
interface Props {
  name?:string
  image?:string,
  description?:string,
  link?:string,
  linkText:string,
  header?:string
  className?:string
}
const ClientCard = ({name,description,header,link,linkText,className,image}:Props) => {
  return (
    <section className={cn(" border-none flex flex-col gap-4 p-2 shadow-2xl w-[30%]", className)}>
        <div className="flex gap-2">
            <div className="flex w-full justify-between">
                <div className="flex gap-2 text-center justify-center items-center">
                    <img src={image} alt={name} className="w-16 h-16 rounded-full border border-teal-100 object-cover" />
                    <p className="text-[10px] text-slate-600 text-center font-bold">{name}</p>
                </div>
                <div className="gap-1 hidden md:flex md:gap-0 w-10 lg:w-20 align-end">
                    <FaStar className="text-xl text-yellow-500"/>
                    <FaStar className="text-xl text-yellow-500"/>
                    <FaStar className="text-xl text-yellow-500"/>
                    <FaStar className="text-xl text-yellow-500"/>
                    <FaStar className="text-xl text-gray-300"/>            
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-2">
           <h1 className="text-[15px] font-bold text-center lg:text-xl">{header}</h1>
           <p className="text-slate-700 text-center font-semibold hidden lg:block">{description}</p>
        </div>
        <div>
            <a href={link} className="text-blue-500 text-center font-semibold">{linkText}</a>
        </div>
    </section>
  )
}

export default ClientCard
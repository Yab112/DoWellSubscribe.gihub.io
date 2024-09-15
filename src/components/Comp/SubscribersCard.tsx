interface Props {
    name:string
    email:string,
    date:string,
    status:string,
    avatar:string


}
const SubscribersCard = ({name,email,date,status,avatar}:Props) => {
  return (
    <section className="flex flex-col gap-4 items-center">
        <div className="flex items-center justify-center p-10 rounded-full h-80 w-80">
              <img src={avatar} alt="avatar" className="rounded-full w-full h-full" />
        </div>
        <div className="flex flex-col gap-2 ">
            <div className="flex items-center w-10 h-10 border-slate-700 rounded-xl bg-white shadow-2xl">
                            <span className="text-green-500 mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span className="text-green-500">Verified</span>
                        <div className="ml-4">
                              <h1 className="text-2xl text-center font-serif font-bold hover:underline">Follow</h1>
                        </div>
            </div >
            <div className="flex  gap-4">
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className="text-slate-500">{email}</p>
            </div>
            <div className="flex  gap-2 items-center justify-center">
                <p className="text-slate-500">{date}</p>
                <div className="w-4 h-4 bg-green-500 rounded-full flex justify-center items-center ml-2"></div>
                <p className="text-slate-500">{status}</p>
            </div>
            
        </div>
    </section>
  )
}

export default SubscribersCard

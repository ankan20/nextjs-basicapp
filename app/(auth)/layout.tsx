export default function({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <>
         <div className="p-2 bg-slate-200 text-dark border-b text-center">
            Signin now to get a 30% discount!
        </div>
            {children}
        </>
       
    )
}
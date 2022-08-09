import  {ReactNode} from "react";

export default  function ContextWrapper ({children}:{children:ReactNode}):JSX.Element{
    return <>{children}</>
}

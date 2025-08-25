import { cn } from '@/lib/utils'


const Container = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4",className)} > 
      {children}
    </div>
  )
}

export default Container

//whatever written inside - cn() will be default and extra config is passed through className
import { ReactNode } from "react"

interface CardProps {
  children: JSX.Element | ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className='grid bg-[#F4F4F5] gap-4 p-4 shadow-sm rounded-md ease-in-out duration-200 transition hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1'>
      {children}
    </div>
  )
}

export default Card

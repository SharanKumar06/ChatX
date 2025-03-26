import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'

interface buttonProps {
  
}

const buttonVariants= cva(
  'active: scale-95 inline-flex items-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant:{
      default: 'bg-slate-900 text-white hover:bg-slate-800',
      ghost: 'bg-transparent hover: text-slate-900 hover:bg-slate-200'
      },
      size:{
        default: 'h-10 py-2 px-4',
        sm: 'h-p px-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants:{
      variant: 'default',
      size: 'default',

    }
  },

)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const button: FC<buttonProps> = ({}) => { 
  return <div>button</div>
}

export default button
import React from 'react'
import cn from 'classnames'
import styles from './style.module.scss'

interface IButton {
  type?: 'solid'|'outline';
  label: string;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({
  type,
  label,
  onClick
}) => {
  const isOutline = type === 'outline'
  return (
    <button 
      className={cn(styles['container'],isOutline&&styles['outline'])} 
      onClick={onClick}>
      {label}
    </button>
  )
}

export default Button

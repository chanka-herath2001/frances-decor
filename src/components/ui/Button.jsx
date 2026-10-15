import { Link } from 'react-router-dom'

const styles = {
  solid: 'bg-navy text-paper hover:bg-ink',
  outline: 'border border-navy text-navy hover:bg-navy hover:text-paper',
  light: 'border border-paper/80 text-paper hover:bg-paper hover:text-navy',
}

// Pill button like the invitation's "Open Invitation"; renders a router Link, anchor or button.
export default function Button({ to, href, children, variant = 'solid', className = '', ...rest }) {
  const cls = `group inline-flex items-center gap-3 rounded-full px-7 py-3 eyebrow transition-colors duration-500 ${styles[variant]} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}

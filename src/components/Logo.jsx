export default function Logo({ size = 'md', light = false }) {
  const dims = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9'
  const text = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl'
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="flex gap-1">
        <div className={`${dims} rounded-[10px] bg-teal-500`} />
        <div className={`${dims} rounded-[10px] bg-coral-500`} />
      </div>
      <span className={`font-display font-bold ${text} ${light ? 'text-white' : 'text-ink-900'}`}>
        Turis<span className={light ? 'text-coral-100' : 'text-coral-500'}>IA</span>
      </span>
    </div>
  )
}

import { clsx } from 'clsx'
import { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// NOTE: tailwind-merge not installed yet; if needed, add dependency. For now fallback to clsx only.
export function cn(...inputs: ClassValue[]) {
  // @ts-ignore
  return clsx(...inputs)
}

export function debounce<T extends (...args: any[]) => void>(fn: T, delay = 300) {
  let t: any
  return (...args: Parameters<T>) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), delay)
  }
}

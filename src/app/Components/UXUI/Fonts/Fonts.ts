// src/components/uxui/fonts.ts
import { Albert_Sans, Montserrat_Alternates } from 'next/font/google'

export const albertSans = Albert_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-albert'
})

export const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat'
})

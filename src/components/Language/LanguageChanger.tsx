'use client'

import { useReducer, useState } from 'react'
import { Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from 'next/navigation'

type Language = 'en' | 'ar-AE'

export default function LanguageChanger() {
  const [language, setLanguage] = useState<Language>('en')

  const path = usePathname()
  const router = useRouter()
  const toggleLanguage = (newLanguage: Language) => 
{
    setLanguage(newLanguage)

    if(newLanguage ==='ar-AE')
    router.push(
        path.replace('en',newLanguage)
    )
    else if(newLanguage ==='en')
    router.push(
        path.replace('ar-AE',newLanguage)
    )
    router.refresh();
}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 px-0">
          <Globe className="h-[1.2rem] w-[1.2rem] mt-3" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mt-12' align="end">
        <DropdownMenuItem onClick={() => toggleLanguage('en')}>
          <span className={`font-semibold ${language === 'en' ? 'text-primary' : ''}`}>EN</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLanguage('ar-AE')}>
          <span className={`font-semibold ${language === 'ar-AE' ? 'text-primary' : ''}`}>عربي</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
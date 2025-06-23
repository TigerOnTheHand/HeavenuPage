'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, User, Settings, Mail, Info } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { menuItems } from '@/constants/index'


export default function DrawerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-80 sm:w-96">
        <SheetHeader>
          <SheetTitle className="text-left">メニュー</SheetTitle>
          <SheetDescription className="text-left">
            サイト内のページにアクセスできます
          </SheetDescription>
        </SheetHeader>
        
        <nav className="mt-8">
          <ul className="space-y-4">
            {menuItems.map((item) => {
              return (
                <li key={item.id}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className="flex items-center p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                      <Home></Home>
                    </Link>
                  </SheetClose>
                </li>
              )
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
'use client'

import Link from 'next/link'
import DrawerMenu from './drawermenu'
import { menuItems } from '@/constants/index'
import Newdrawermenu from './newdrawermenu'

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            {/*<div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">H</span>
            </div>*/}
            <span className="text-xl font-bold">へぶんぬ</span>
          </Link>

          {/* グローバルナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* モバイルメニュー（ドロワー） */}
          {/*<DrawerMenu />*/}
          <Newdrawermenu />
        </div>
      </div>
    </header>
  )
}
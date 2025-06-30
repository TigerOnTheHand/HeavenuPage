'use client'

import Link from 'next/link'
import { MenuItem, menuItems } from '@/constants/index'
import Newdrawermenu from './newdrawermenu'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

export default function Header() {
  const renderGrobalNav = (item : MenuItem) => {
    // 子要素がある場合はドロップダウンメニューとして表示
    if (item.children && item.children.length > 0) {
      return (
        <DropdownMenu key={item.id}>
          <DropdownMenuTrigger className="text-white">
            {item.label}
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {item.children.map(children =>(
              <DropdownMenuItem key={children.id} asChild>
                <Link href={children.href}>{children.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
    // 通常のメニュー表示
    return (
      <Link key={item.label} href={item.href} className="text-white">
        {item.label}
      </Link>
    )
  }

  return (
    <header className="border-b bg-black">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            {/*<div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">H</span>
            </div>*/}
            <span className="text-xl font-bold text-white">へぶんぬ</span>
          </Link>

          {/* グローバルナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(renderGrobalNav)}
          </nav>

          {/* モバイルメニュー（ドロワー） */}
          {/*<DrawerMenu />*/}
          <Newdrawermenu />
        </div>
      </div>
    </header>
  )
}
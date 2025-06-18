'use client'

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button"
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MenuItem, menuItems } from "@/constants";
import { ReactNode, useState, useEffect } from "react";
import React from "react";

export default function Newdrawermenu() {
	const [dropdownStates, setDropdownStates] = useState<Record<string, boolean>>({}); // オブジェクトのStateを作成し、疑似的に複数のStateを管理する

	useEffect(() => {
		const initialStates = {};
		menuItems.map(item => {
			if (item.children && item.children.length > 0) {
				(initialStates as any)[item.id] = false;
			}
		})
		setDropdownStates(initialStates);
	},[])

	// ドロップダウンの開閉
	const toggleDropdown = (itemId: string) => {
		setDropdownStates(prev => ({
			...prev,
			[itemId]: !prev[itemId]
		}));
	}

	const renderMenuItems = (item : MenuItem): React.ReactNode => {
		// 子要素がある場合はドロップダウンメニューとして表示
		if (item.children && item.children.length > 0) {
			return (
				<div key={item.id}>
					<div className="flex">
						<button
							onClick={() => toggleDropdown(item.id)}
						>
							{item.label}
						</button>
						<ChevronDown></ChevronDown>
					</div>
					{dropdownStates[item.id] && (
						item.children.map(children => (
							<SheetClose key={children.id} asChild>
								<Link key={children.id} href={children.href}>{children.label}</Link>
							</SheetClose>
						))
					)}
				</div>
			)
		}
		// 通常のメニュー表示
		return (
			<p key={item.id} >{ item.label }</p>
		)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button>
					<Menu></Menu>
				</Button>
			</SheetTrigger>

			<SheetContent side="right" className="w-80">
				<SheetHeader>
					<SheetTitle>メニュー</SheetTitle>
				</SheetHeader>
				
				{ menuItems.map(renderMenuItems) }
				
				<SheetClose asChild>
					<Link href="./about" className="flex hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
						aaaa
					</Link>
				</SheetClose>

				<DropdownMenu>
					<DropdownMenuTrigger>
						<ChevronDown></ChevronDown>
					</DropdownMenuTrigger>

					<DropdownMenuContent>
						<p>a</p>
					</DropdownMenuContent>
				</DropdownMenu>
			</SheetContent>
		</Sheet>
	)
}
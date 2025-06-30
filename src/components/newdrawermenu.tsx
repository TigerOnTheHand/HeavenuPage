'use client'

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button"
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { MenuItem, menuItems } from "@/constants";
import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export default function Newdrawermenu() {
	const renderMenuItems = (item : MenuItem): React.ReactNode => {
		// 子要素がある場合はドロップダウンメニューとして表示
		if (item.children && item.children.length > 0) {
			return (
				<div key={item.id}>
					<Collapsible>
						<CollapsibleTrigger asChild>
							<div className="flex items-center p-4 hover:bg-accent hover:text-accent-foreground">
								<button>
									<span className="text-lg">{item.label}</span>
								</button>
								<ChevronDown className="ml-auto"></ChevronDown>
							</div>
						</CollapsibleTrigger>
						
						{item.children.map(children => (
							<CollapsibleContent >
								<SheetClose key={children.id} asChild>
									<Link 
										key={children.id} 
										href={children.href}
										className="pl-4"
									>
										{children.label}
									</Link>
								</SheetClose>
							</CollapsibleContent>
						))}
					</Collapsible>
				</div>
			)
		}
		// 通常のメニュー表示
		return (
			<SheetClose key={item.id} asChild>
				<Link href={item.href} className="p-4 text-lg hover:bg-accent hover:text-accent-foreground">{ item.label }</Link>
			</SheetClose>
		)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="md:hidden" variant="outline">
					<Menu></Menu>
				</Button>
			</SheetTrigger>

			<SheetContent side="right" className="w-80">
				<SheetHeader>
					<SheetTitle>メニュー</SheetTitle>
				</SheetHeader>

				{ menuItems.map(renderMenuItems) }
			</SheetContent>
		</Sheet>
	)
}
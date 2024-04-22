"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";
import Image from "next/image";

import Logo  from "@/public/assets/images/Group 331.png";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem} from "@nextui-org/dropdown";
export const Navbar = () => {

	return (
		<div className="px-3">
		<NextUINavbar maxWidth="xl" position="sticky"  className="bg-[#f2f2f0]">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit max-h-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Image src={Logo} height={30} alt='' />
						<p className=" text-xs text-black font-bold">Pastoral Del Duelo Bolivia</p>
					</NextLink>
				</NavbarBrand>
				
			</NavbarContent>
	<NavbarContent justify="start">
		<Link href="\nosotros">
		<h1 className="text-black text-base">Nosotros</h1>
		</Link>
	<Dropdown className="bg-[#f2f2f0]">
      <DropdownTrigger>
        <Button className="text-black text-base" variant="light">
			Fechas De Ciclo
		</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="bg-[#f2f2f0] border-[#f2f2f0]" variant="light">
	  <DropdownItem key="new" className="text-black"><Link className="text-black" href="\virtual">Modalidad Virtual</Link></DropdownItem>
	  <DropdownItem key="new" className="text-black"><Link className="text-black" href="\presencial">Modalidad Presencial</Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
	<Dropdown className="bg-[#f2f2f0]">
      <DropdownTrigger>
        <Button className="text-black text-base" variant="light">
			Articulos
		</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="border-[f2f2f0] bg-[#f2f2f0]">
        <DropdownItem key="new" className="text-black"><Link className="text-black" href="\Articulos">Articulos de Interes</Link></DropdownItem>
        {/* <DropdownItem key="copy" className="text-black">Novedades</DropdownItem> */}
        <DropdownItem key="copy" className="text-black"><Link className="text-black" href="\Videos">Videos</Link></DropdownItem>
        <DropdownItem key="copy" className="text-black"><Link className="text-black" href="\Publicaciones">Publicaciones</Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
	<Dropdown className="bg-[#f2f2f0]">
      <DropdownTrigger>
        <Button className="text-black text-base" variant="light">
			Redes
		</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="border-[f2f2f0] bg-[#f2f2f0]">
        <DropdownItem key="new" href="https://www.linkedin.com/company/pastoral-duelo-resurrecci%C3%B3n-bolivia/" className="text-black">Linkedin</DropdownItem>
        <DropdownItem key="copy" className="text-black">Facebook</DropdownItem>
        <DropdownItem key="copy" className="text-black">Youtube</DropdownItem>
      </DropdownMenu>
    </Dropdown>
	
				</NavbarContent>
			<NavbarMenuToggle />

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href={`${item.href}`}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
		</div>
	);
};

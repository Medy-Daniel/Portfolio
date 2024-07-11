"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import { Github } from "../icons/Github";
import { Section } from "./Section"; 
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Linkedin } from "../icons/Linkedin";
import { useState } from "react";


 export const Header = () => { 

    const [blueMode, setBlueMode] = useState(false);

  const toggleBlueMode = () => {
    setBlueMode(!setBlueMode);
    document.documentElement.classList.toggle('white'); // Ajout/suppression de la classe 'dark'
  };
    

    return (
    <header className=" top-0 py-4">
        <Section className= "flex items-baseline overflow-x-hidden">
            <h1 className="text-lg font-bold text primary-foreground">
               Medy Daniel 
            </h1>
            <button className="ml-20 bg-white rounded-sm text-black" onClick={toggleBlueMode}>Switch</button>
            <div className="flex-1" />
            <ul>
                <Link
                href="https://github.com/Medy-Daniel"
                 className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0 mr-2")}
                 >
                    <Github size={25} className="text-foreground"/>
               </Link>
               <Link
                href="https://linkedin.com/in/médy-daniel"
                 className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                 >
                    <Linkedin size={25} className="text-foreground"/>
               </Link>
            </ul>
        </Section>
    </header>
    )
};

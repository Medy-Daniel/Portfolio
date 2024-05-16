"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import './SlideProjects.css';
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Car } from "lucide-react";

import Recipe from '../images/Recipe.jpg';

export const SlideProjects = () => {
 
  return (
    
    <div>
      <div className="flex flex-col items-start mb-4">
        <Badge  className="text-primary m-auto" variant={"outline"}>
          Projets en image
        </Badge>
        <div className='max-md:text-xl md:border-b hover:border-primary hover:text-primary transition-colors text-foreground pb-2 text-3xl font-bold tracking-tight m-auto pt-4'>
        Cliquez sur l'image pour accéder au site
        </div>
      </div>
      <Carousel className="w-full m-auto max-w-lg">
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
              <CarouselItem key={index} className=" ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                   {index === 0 ? (
                    <Link   href="http://www.ofourneau.fr/">
                      <div className='max-w-md: img-container-1'>
                        <img className="max-w-md: project-img md: " src={Recipe.src}
                        alt="image_ofourneau"/>
                        </div>
                    </Link>
                    
                    )  : (
                      <Link href="https://youtube.com">
                      <span>{index + 1} </span>
                      </Link>
                    )} 
                      </CardContent>
                    </Card>
                  
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  
    
    </div>
  );
};



const ImageProject = (props: {
  image: string;
  url: string;
  title: string;
  id: string;
}) => {
  return (
    <Link
    id={props.id} 
    href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/60 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-8 h-8 object-contain rounded-md"
      />
    </Link>
  );
};

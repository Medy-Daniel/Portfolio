"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { React } from "../icons/React";
import {  useEffect } from "react";

import { Javascript } from "../icons/Javascript";
import { Redux } from "../icons/Redux";
import { Tailwind } from "../icons/Tailwind";
import { Code } from "./Code";
import { Card } from "@/components/ui/card";
import { Php } from "../icons/Php";
import { Bootstrap } from "../icons/Bootstrap";
import Aos from 'aos' ;
import 'aos/dist/aos.css';
import { Next } from "../icons/Next";


export const Skills = () => {
  
  useEffect(() =>{
    Aos.init()
  },[])
  
  return (
    <Section  className="flex flex-col items-start gap-4 " >
      <Badge data-aos="fade-up" data-aos-delay="50" className="text-primary  " variant={"outline"}>
        Compétences
      </Badge>
      <h2 data-aos="fade-up" data-aos-delay="200" className=" border-b hover:border-primary hover:text-primary transition-colors text-foreground pb-2 text-3xl font-bold tracking-tight ">
        Ce que je pratique le plus
      </h2>
      <Card data-aos="fade-up" data-aos-delay="210" className="w-full flex flex-wrap gap-2 p-4 mb-4 ">
        <div className="flex max-md:flex-wrap gap-4 ">
          <div>
            <div className="   gap-4 mb-2 ">
              <React
                size={42}
                className="animate-spin  "
                style={{ animationDuration: "10s" }}
              />
            </div>
            <h3 className=" text-2xl font-bold text-primary tracking-tight m-auto">
              React
            </h3>
            <p className="text-sm m-auto text-muted-foreground">
              Ma principale librairie utilisée est <Code>React</Code> .
            </p>
          </div>

          <div>
            <div className="  gap-4 mb-2">
              <Javascript size={42} />
            </div>
            <h3 className=" text-2xl font-bold text-primary tracking-tight">
              Javascript
            </h3>
            <p className="text-sm m-auto text-muted-foreground">
              Mon principal langage utilisé est <Code>Javascript</Code> .
            </p>
          </div>
          <div>
            <div className=" gap-4  mb-2">
              <Redux size={42} />
            </div>
            <h3 className=" text-2xl font-bold text-primary tracking-tight">
              Redux
            </h3>
            <p className="text-sm m-auto text-muted-foreground">
              J'utilise régulièrement au sein de <Code>React</Code> la librairie{" "}
              <Code>Redux</Code> .
            </p>
          </div>
          <div>
            <div className=" gap-4 mb-2">
              <Tailwind size={42} />
            </div>
            <h3 className=" text-2xl font-bold text-primary tracking-tight">
              TailwindCss
            </h3>
            <p className="text-sm m-auto text-muted-foreground">
              J'apprécie utilisé <Code>TailwindCss</Code> .
            </p>
          </div>
        </div>
      </Card>
      <h2 data-aos="fade-up" data-aos-delay="200" className=" border-b hover:border-primary hover:text-primary transition-colors text-foreground pb-2 text-3xl font-bold tracking-tight ">
        Je maîtrise également
      </h2>
      <Card data-aos="fade-up" data-aos-delay="210" className=" max-md:m-auto flex flex-wrap gap-2 p-4 mb-4 ">
        <div className="flex max-md:flex-wrap gap-4 ">
          <div>
            <div className="  gap-4 mb-2">
            <Php size={42}/>
          </div>
          <h3 className=" text-2xl font-bold text-primary tracking-tight">
            PHP
          </h3>
          <p className="text-sm m-auto text-muted-foreground mb-2">
            J'utilise également le langage <Code>PHP</Code>{" "} .
          </p>
          <div className="  gap-4 mb-2">
            <Bootstrap size={42}/>
          </div>
          <h3 className=" text-2xl font-bold text-primary tracking-tight">
            Bootstrap
          </h3>
          <p className="text-sm m-auto text-muted-foreground">
             Utilisation du framework <Code>Bootstrap</Code>{" "} .
          </p>
          </div>
        </div>
      </Card>
    </Section>
  );
};

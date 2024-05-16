/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Linkedin } from "../icons/Linkedin";
import { Github } from "../icons/Github";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono hover:bg-accent/60 transition-colors border border-accent px-1 py-0.5 text-primary rounded-sm",
        className
      )}
      {...props}
    />
  );
};

export const Me = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h3 className="font-caption text-3xl font-bold text-primary">
          <strong>Dévellopeur web et web mobile</strong>
        </h3>
        <p className="text-base mb-4">
          Voici le lien pour télécharger mon{" "}
          <Link href="https:linkedin.com/in/médy-daniel">
            <Code className="inline-flex items-center gap-1">
              Curriculum vitae
            </Code>
          </Link>{" "}
          ainsi que que l'accès à mon{" "}
          <Link href="https://github.com/Medy-Daniel">
            <Code className="inline-flex items-center gap-1">
              <Github size={16} className="inline" />
              Github
            </Code>
          </Link>{" "}
          .
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto ">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQGoCYaibkybrQ/profile-displayphoto-shrink_200_200/0/1707148474425?e=2147483647&v=beta&t=PFLXfVBP0nICtv9uyt-nqZ73qn2LgAHwsotYEAMHSZw"
          className="m-auto h-auto hover:bg-primary rounded-full max-w-xs max-md:w-56"
          alt="image personnel"
        />
      </div>
    </Section>
  );
};

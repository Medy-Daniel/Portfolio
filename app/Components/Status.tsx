import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  ArrowUpRight,
  ChefHat,
  CircleDashed,
  Droplet,
  LucideIcon,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { url } from "inspector";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 ">
      <div className="flex-[3] w-full">
        <Card className=" w-full flex flex-col gap-2 p-4">
          <p className="text-lg text-muted-foreground">Projets</p>
          <div className="flex flex-col gap-4">
            {SideProjects.map((project, index) => (
              <Projects
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[4]  flex flex-col gap-4 w-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground mb-1">Mes expériences</p>
          <div className="flex flex-col gap-4 ">
            {SideWorks.map((work, index) => (
              <Works 
                key={index}
                image ={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url} 
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground mb-1">Contactez moi</p>
          <Link href="https://linkedin.com/in/médy-daniel" target='_blank'>
            <ContactCard
              name="Médy Daniel"
              description=""
              image="https://media.licdn.com/dms/image/D4E03AQGoCYaibkybrQ/profile-displayphoto-shrink_200_200/0/1707148474425?e=2147483647&v=beta&t=PFLXfVBP0nICtv9uyt-nqZ73qn2LgAHwsotYEAMHSZw"
              mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACUCAMAAAD79nauAAAAb1BMVEUKZsL///8AYsEAZME7d8ja4/LE0+sUaMMAU70AXsDX4PFslNLT3vBIfcnv8/kAYMAASboAWb4AVr34+fwAT7vM2O7p7/iKqNo1ccZWgszf6PVfi86Ur91Uhs14nNWLrNydueG3yueDodenvuM2a8S7nkPMAAAD9UlEQVR4nO2ca3eiMBBAJUEg8ogJDxHEivb//8aV1m0LMtnqGRfCmfs52FwnQ15jVyuCIAiCIIg54nMplBJy5U/dk6fhaqub4253bLJMTd2Z5+Bi9VY5N6KjFHzqHj0Ml+UpdX6Q7Eo5dacehKuwcgZEtWVjSr+lQ4drMEI9db8eIXi7V+gsjtqe15QKk1EJp9qLqfv2W3gZjTs4TstseUepE+TgpGdLkpu5YCCuofDtCIU4ww5OUlsxW3AOj6YrZzZ1B38DLz2TxMWK8cTitUnCe7dBQu6BSeKTdUkS/wkW3y39fhLZIeEuICd42ZokTisrJOTBJHG0YrJbiaMhs4u9FZOdeba7cBtG0xV1HtnW3QJR27OhAFP7Yo3DSkBTRV7akREdvqpHc3sd2xOIK6op7h02rrDnnKBD3L+i2nc7pogfMFX3EiOKlSUv1x4iiC9VUSRJUVSnOLMuDDekDsp9Xcd+pm1V+IBLKRm3K58JgiAegjMphRDSmoP1AT6XSnO3qcMwrPel1Oo/3Cr7IKMtb18t/6bfiAWiObT5prouAIpqHXntoZbBi+dPnm0BgkFDnXUE+gPVIaT8mB+/NWXgXtZFf7OYFlVbB+qF0WBulIyTtv0/qz8bpnd4XxYsi4HrjrTYbV93OW44PvN6Z+I82ADt8tvuiUk3hz6r8ziyV6U5mkR3o29Q6IiaF1lgSXBRm8LwSXHgL9m3I0n4+mw8mv5Ly15hgSPhbw/GO4JvIvECCxyJzHik27fQ+HmBIqHhY8SRj8Xfv2NI6PGTK4gLugWChOcbLvRHSELsRQhGJH6fEJ9E2AekCBLJyAGimd38JB6nQA7FJBLOG+5h9TQSTgB2yCKJEDUUE0lssgVIOKh3mlNJoJbmoUsUUZ5X/15KeRninhtXIgrfr3vQK037j5YVZu0wpoTnZ+J2iiMDadZIYsQFFJ5EcdTye4j4bDtWvf0Far0qmkRVDwfI1rQwTE+I4wlLImnuO6VbwwPtDCXGivyZa9gsefOTGP1ejVW3OeLCA0ciHa+zkzWc2xFizS2OxGl8f2Cqptog7ilwJBrgpS/h8bR2ZyaRQ6WnamePxAlakwroZzIzlDhDbxrZgCe0c5NIwH0ai8GH5iZRgT8W4SV43j83ifV+ARIbsAjYMFHMTSKKQQmfJEiCJHosQWIRkSCJuUhQTpAESQxYgsQiIkESc5GgnCAJkhiwBIlFRIIk5iJBOUESJDFgCRKLiMQiJGg4kQRJLFCCEpskECVoOJGEjRJgRVI+kABt1wYJsEClQpRY+d3/Ehil6deTMbBhDRbgc948/tAzdP/VYRTJf9sQ/nD+zEMEQRAEQRDEc/wBP8Fjo1qd5q4AAAAASUVORK5CYII="
            />
          </Link>
          <Link href="mailto:medy.vilgenis@gmail.com">
          <ContactCard 
            name="Email"
            description= "N'hesitez pas à me contacter"
            image="https://media.licdn.com/dms/image/D4E03AQGoCYaibkybrQ/profile-displayphoto-shrink_200_200/0/1707148474425?e=2147483647&v=beta&t=PFLXfVBP0nICtv9uyt-nqZ73qn2LgAHwsotYEAMHSZw"
            mediumImage="data:image/png;base64,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"
          />
          </Link>
        </Card>
      </div>
    </Section>
  );
};

const SideProjects: ProjectsProps[] = [
  {
    Logo: ChefHat,
    title: "O'Fourneau",
    description:
      "Imaginez une application web accueillante, fluide et responsive où chaque fois que vous vous y connectez, vous en salivez d'avance.",
    url: "http://www.ofourneau.fr/" ,
    
  },
  {
    Logo: CircleDashed,
    title: "A venir",
    description: "",
    url: "/",
  },
 
];

type ProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const Projects = (props: ProjectsProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/60 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={18} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const SideWorks: WorkProps[] = [
  {
    image:
      "data:image/png;base64,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",
    title: "Veolia Water Technologies",
    role: "Développeur web",
    date: "2024 - maintenant",
    url: "https://www.veoliawatertechnologies.com/fr" ,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgdkCNEPSmYaBKx_EoGQZjr0GBR51MK-1Zw&s",
    title: "EPSI",
    role: "Concepteur développeur d'applications / DEVOPS / ia",
    date: "2024 - maintenant",
    url: "https://www.epsi.fr/" ,
  },
  {
    image:
      "data:image/png;base64,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",
    title: "Oclock",
    role: "Formation développeur web et web mobile",
    date: "2023 - 2024",
    url: "https://oclock.io/?adgroupname&keyword=oclock&utm_source=google&utm_medium=cpc&utm_campaign=SEA%20-%20BRAND%20-%20O%27clock&utm_term=oclock&hsa_acc=9353883648&hsa_cam=21076823994&hsa_grp=159247594466&hsa_ad=693007213145&hsa_src=g&hsa_tgt=kwd-106998799&hsa_kw=oclock&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=EAIaIQobChMIypCg44bZhQMViEJBAh1MXQ1NEAAYASAAEgLS6vD_BwE", 
    
  },
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEVHcEzuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCDuDCCUsWDbAAAAE3RSTlMADFaFuJZnGEbP/+4o4cfVdaY0EsvLcAAAAQBJREFUeAFtUgeSxCAMMx3Sk/8/9vDKA+ZAaTaS64QUjHW+IsREK+SyNexxoo/zx5zXdUOTR/7hs2JF/LL3av79F2M4zd39wGVpQNAKO/NI+ko+zj9PdraqvlqOJhySFwlogaueW2nHzzRaK/W71++0uJ4an49WwHIyZpiB3I4iCw4SxHMPgyDQo7cc2Ll1CQ+B621hNiyCBShx9sHahhEa0KSM8QyCn+0kLepmCJxSZ+6V8fQgzJRgV8v1Xwx2UdrSW8e6sTXEt7BXnFKZD8WCHJ2tXeB+Dncl6+HJcGh+jUACt+YLNYQ1r2DX+RVSGel9/oc+r7JbWiI/wfvgBvYPjbsTj6auvJMAAAAASUVORK5CYII=",
    title: "Veolia",
    role: "Technicien de régéneration",
    date: "2019 - 2024",
    url: "https://www.veoliawatertechnologies.fr/fr/a-propos/veolia-water-sti" ,
  },
  
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Works = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/60 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10  object-contain rounded-md"
      />

      <div>
        <p className="text-md font-semibold text-primary">{props.title}</p>

        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-contain"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-md font-semibold text-primary">{props.name}</p>
        </div>

        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight
        className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
        size={16}
      />
    </Card>
  );
};

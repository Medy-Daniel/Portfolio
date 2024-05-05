import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Me } from "./Components/Me";
import { Skills } from "./Components/Skills";
import { SlideProjects } from "./Components/SlideProjetcts";
import { Spacing } from "./Components/Spacing";
import { Status } from "./Components/Status";


export default function Home() {
  return (
   <main>
  <Header/>
  
  <Spacing size="md" />
  <Me/>
  
  <Spacing size="md"/>
  <Status/>

  <Spacing size="md"/>
  <SlideProjects/>

  <Spacing size="md"/>


  <Spacing size="md"/>
  <Skills/>

  <Spacing size="md"/>
  <Footer/>

   </main>
  );
}

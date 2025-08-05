import { MyStack } from '@/app/components/MyStack'
import { About } from "@/app/components/About";
import GradientHero from "@/app/components/gradient-hero";
import { Project } from '@/app/components/Project';

export default function Home() {
  return (
    <div className='relative'>
      <GradientHero />
      <MyStack ></MyStack>
      <About></About>
      <Project></Project>
    </div>

  );
}

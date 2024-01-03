import { Pernambuco } from '@/app/private/components/flags/Pernambuco';
import { GitHubLogoIcon, TokensIcon } from '@radix-ui/react-icons';
import { Button, Theme } from '@radix-ui/themes';
import { Building, CalendarSearch, DatabaseZap, HeartHandshake, Lightbulb, LogInIcon, Search } from 'lucide-react';
import "./globals.css";
import { Header } from './components/Header';
import { Intro } from '../sections/Intro';
import { CardsSection } from '../sections/Cards';
import { Footer } from './components/Footer';
import { Contents } from '../sections/Contents';

export default function Home() {
  
  return (
    <div>
    <Intro />
    <CardsSection />
    <Contents />
    </div>
  
  )
}

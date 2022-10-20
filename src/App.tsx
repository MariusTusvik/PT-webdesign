import React from 'react';
import logo from './assets/logo.png';
import Container from './components/Container';
import Container2 from './components/Container2';
import icon from './assets/icon.png';

function App({name}: {name: string}) {
  return (

     <Container className='bg-slate-500'>
      <header className="flex py-5 space-x-10">
        <img src={logo} className="object-scale-down h-40 w-40 items-center"/>

        <ul className='flex gap-x-4 text-black text-lg font-bold items-center'>
          <NavItem href='#Aktuelt' text='Aktuelt' /> 
          <NavItem href='#Lærling' text='Lærling' /> 
          <NavItem href='#Bedrift' text='Bedrift' /> 
          <NavItem href='#Omoss' text='Om oss' /> 
        </ul>

      <button className='object-right-top'>
      <img src={icon} className="object-scale-down h-10 w-10"/>
      </button>

      </header>   
      </Container>
  );
}
const NavItem = ({text, href}: {href: string, text: string}) => 
(
  <li className='border-b-4 border-transparent hover:text-pink-500 text-bold'><a href={href}></a>{text}</li>
)



export default App;

import { CORE_CONCEPTS } from './data'
import Coreconcept from './components/CoreConcept'
import Header from './components/Header/Header.jsx'
import { TabButton } from './components/TabButton.jsx';
import { useState } from 'react';


  function App() {
    const [initialSelected,postSelected]=useState('Please Select a Button');
    function clickHandler(clickButton){
      console.log(initialSelected)
     postSelected(clickButton);
     
    }
    
    
  return (
    <div>
      <Header/>
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
      <ul>
      <Coreconcept {...CORE_CONCEPTS[0]}/>
      <Coreconcept {...CORE_CONCEPTS[1]}/>
      <Coreconcept {...CORE_CONCEPTS[2]}/>
      <Coreconcept {...CORE_CONCEPTS[3]}/>
      <h2>Time to get started!</h2>
      </ul>
</section>
<section id="examples">
   
   <h2>Examples</h2>
   <menu>
  <TabButton onSelect={()=>{clickHandler("Components")}}>Components</TabButton>
  <TabButton onSelect={()=>{clickHandler("JSX")}}>JSX</TabButton>
  <TabButton onSelect={()=>{clickHandler("Props")}}>Props</TabButton>
  <TabButton onSelect={()=>{clickHandler("State")}}>State</TabButton>
   </menu>
   </section>
   {initialSelected}
      </main> 
    </div>
  );
}

export default App;

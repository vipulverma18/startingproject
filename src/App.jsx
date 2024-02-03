import { CORE_CONCEPTS } from './data'
import Coreconcept from './components/CoreConcept'
import Header from './components/Header/Header.jsx'
import { TabButton } from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data';


  function App() {
    const [initialSelected,postSelected]=useState();
    function clickHandler(clickButton){
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
  <TabButton isSelected={initialSelected==="Components"} onSelect={()=>{clickHandler("Components")}}>Components</TabButton>
  <TabButton isSelected={initialSelected==="JSX"} onSelect={()=>{clickHandler("JSX")}}>JSX</TabButton>
  <TabButton isSelected={initialSelected==="Props"} onSelect={()=>{clickHandler("Props")}}>Props</TabButton>
  <TabButton isSelected={initialSelected==="State"} onSelect={()=>{clickHandler("State")}}>State</TabButton>
   </menu>
   {!initialSelected ? 
    (<p>Please select a topic</p>):(<div id="tab-content">
    <h3>{EXAMPLES[initialSelected].title}</h3>
    <p>{EXAMPLES[initialSelected].description}</p>
    <pre>
     <code> 
       {EXAMPLES[initialSelected].code}
     </code>
     </pre>
    </div>)}
   </section>
      </main> 
    </div>
  );
}

export default App;

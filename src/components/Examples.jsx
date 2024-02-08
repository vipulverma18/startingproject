import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import {TabButton} from './TabButton.jsx'
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(){
    const [initialSelected,postSelected]=useState();
    function clickHandler(clickButton){
     postSelected(clickButton);
    }
    let TabContent=<p>Please Select a Topic</p>
    if(initialSelected){
      TabContent=<div id="tab-content">
      <h3>{EXAMPLES[initialSelected].title}</h3>
      <p>{EXAMPLES[initialSelected].description}</p>
      <pre>
       <code> 
         {EXAMPLES[initialSelected].code}
       </code>
       </pre>
      </div>
    }
    return(
        <Section title= 'Examples' id="examples">
          <Tabs  button={<> <TabButton isSelected={initialSelected==="Components"} onClick={()=>{clickHandler("Components")}}>Components</TabButton>
  <TabButton isSelected={initialSelected==="JSX"} onClick={()=>{clickHandler("JSX")}}>JSX</TabButton>
  <TabButton isSelected={initialSelected==="Props"} onClick={()=>{clickHandler("Props")}}>Props</TabButton>
  <TabButton isSelected={initialSelected==="State"} onClick={()=>{clickHandler("State")}}>State</TabButton> </>}>{TabContent}</Tabs>
   </Section>
    )
}
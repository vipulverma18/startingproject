import Coreconcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"
export default function(){
    return(
        <section id="core-concepts">
        <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreItems)=>(<Coreconcept key={coreItems.title} {...coreItems}/>))}
      {/* <Coreconcept {...CORE_CONCEPTS[0]}/>
      <Coreconcept {...CORE_CONCEPTS[1]}/>
      <Coreconcept {...CORE_CONCEPTS[2]}/>
      <Coreconcept {...CORE_CONCEPTS[3]}/> */}
      <h2>Time to get started!</h2>
      </ul>
</section>
    )
}
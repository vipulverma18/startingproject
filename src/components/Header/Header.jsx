import './Header.css'
const randomNum=['Core','Basics','Advance']
function genRandomInt(max)
{
return(
  Math.floor(Math.random()*(max+1))
)
}
export default function Output()
{
  

return(<header>
  
  <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
  <h1>React Essentials</h1>
  <p>
    {randomNum[genRandomInt(2)]} React concepts you will need for almost any app you are
    going to build!
  </p>
</header>)
}
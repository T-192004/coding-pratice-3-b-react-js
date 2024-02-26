// Write your code here.
import './index.css'

const Card = props => {
  const {cardItems} = props
  const {key, title, description, imgUrl, className} = cardItems
  console.log(`${key}, ${title}, ${description}, ${imgUrl}, ${className}`)
  return (
    <li className={`card ${className}`} key={key}>
      <h1 className="card-title"> {title} </h1>
      <p className="card-description"> {description} </p>
      <img src={imgUrl} className="img" alt="img" />
    </li>
  )
}
export default Card

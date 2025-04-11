
//rfc can be used to create a functional component as a shorthand
// also other shorthands are given below
// rcc for class component
// rafce for functional component with export
// rafc for functional component with arrow function
// rconst for functional component with constructor
// rconstc for class component with constructor
// rconstf for functional component with constructor
// rconstfc for functional component with constructor and export


const cardFooter = "Not done!"

function Card(props) {
  const {titleText, description} = props; // destructuring props

  return (
    <div style={{ textAlign: 'center' }} className='card'>
      <h3 className='cardTitle'>{titleText}</h3>
      <p className='cardDescription'>{description}</p>
      <p className='cardFooter'>{cardFooter}</p>
    </div>
  )
}

export default Card;
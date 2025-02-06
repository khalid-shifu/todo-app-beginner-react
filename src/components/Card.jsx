
const cardFooter = "Not done!"

function Card(props) {
  const {titleText, description} = props;

  return (
    <div style={{ textAlign: 'center' }} className='card'>
      <h3 className='cardTitle'>{titleText}</h3>
      <p className='cardDescription'>{description}</p>
      <p className='cardFooter'>{cardFooter}</p>
    </div>
  )
}

export default Card;
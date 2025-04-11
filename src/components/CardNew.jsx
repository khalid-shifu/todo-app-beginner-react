
function CardNew(props) {
    const { titleText, description, footer} = props; // destructuring props

    return(
        <div className="card" style={{textAlign: 'center'}}>
            <h2 className="cardTitle">{titleText}</h2>
            <p className="cardDescription">{description}</p>
            <p className="cardFooter">{footer}</p>
        </div>
    )

}

export default CardNew;
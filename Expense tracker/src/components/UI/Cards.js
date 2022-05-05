import './Cards.css';

const Cards = (props) => {
    // Important the space between classes string 
    const classes = 'card ' + props.className;

    return (
        <div className={classes}>{props.children}</div>
    );

}

export default Cards;
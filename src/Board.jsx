const Board = ({svg, title, detail}) => {
    return(
        <article className="box">
            <span className="spot">{svg}</span>
            <h2 className="art-t">{title}</h2>
            <p className="detail-text">
                {detail}
            </p>
            <button className="btn">
                <svg className="btn-svg">
                    <rect rx="25" ry="25"></rect>
                </svg>
                Learn More</button>
        </article>
    )
}

export default Board;
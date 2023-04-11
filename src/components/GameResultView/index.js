import './index.css'

const GameResultView = props => {
  const {isShow, array, getResult, choicesList, restart, textRes} = props
  return (
    <>
      {isShow && (
        <div className="button-container">
          <button
            className="bg-btn"
            onClick={() => getResult(choicesList[0].id)}
            type="button"
            data-testid="rockButton"
          >
            <img
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
              className="btn-1"
            />
          </button>
          <button
            className="bg-btn"
            onClick={() => getResult(choicesList[1].id)}
            type="button"
            data-testid="scissorsButton"
          >
            <img
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
              className="btn-2"
            />
          </button>
          <button
            className="bg-btn"
            onClick={() => getResult(choicesList[2].id)}
            type="button"
            data-testid="paperButton"
          >
            <img
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
              className="btn-3"
            />
          </button>
        </div>
      )}
      {!isShow && (
        <div className="game-container">
          <div className="match-container">
            <div>
              <h1>YOU</h1>
              <img
                src={array[0].imageUrl}
                alt="your choice"
                className="bg-btn-1"
              />
            </div>
            <div>
              <h1>OPPONENT</h1>
              <img
                src={array[1].imageUrl}
                alt="opponent choice"
                className="bg-btn-1"
              />
            </div>
          </div>
          <div className="result-container">
            <p className="result">{textRes}</p>
            <button type="button" onClick={restart} className="play-btn">
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}
    </>
  )
}
export default GameResultView

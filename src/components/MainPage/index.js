import {Component} from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import GameResultView from '../GameResultView'
// import ReactPopup from './components/ReactPopup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class MainPage extends Component {
  state = {
    isShow: true,
    score: 0,
    array: [choicesList[0], choicesList[1]],
    textRes: 'YOU WON',
  }

  getValues = (value1, value2) => {
    if (value1.id === 'ROCK') {
      switch (value2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (value1.id === 'PAPER') {
      switch (value2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (value2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  getResult = id => {
    const {score} = this.state
    const ch2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const ch1 = choicesList.filter(e => e.id === id)
    const res = this.getValues(ch1[0], ch2)
    let count = score
    if (res === 'YOU WON') {
      count = score + 1
    } else if (res === 'YOU LOSE') {
      count = score - 1
    } else {
      count = score
    }

    this.setState({
      isShow: false,
      array: [ch1[0], ch2],
      score: count,
      textRes: res,
    })
  }

  restart = () => {
    this.setState({isShow: true})
  }

  render() {
    const {score, isShow, array, textRes} = this.state
    return (
      <>
        <div className="container">
          <div className="score-container">
            <div className="items-cont">
              <h1>
                Rock
                <br />
                Paper
                <br />
                Scissors
              </h1>
            </div>
            <div className="score-board">
              <p>Score</p>
              <p className="score">{score}</p>
            </div>
          </div>
          <div className="button-container">
            <GameResultView
              array={array}
              isShow={isShow}
              textRes={textRes}
              getResult={this.getResult}
              choicesList={choicesList}
              restart={this.restart}
            />
          </div>
          <div className="popup-btn">
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button type="button" className="trigger-button1">
                    Rules
                  </button>
                }
              >
                {close => (
                  <>
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      <RiCloseLine />
                    </button>
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                        alt="rules"
                        className="rule-cont"
                      />
                    </div>
                  </>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default MainPage

// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeState: 0,
  }

  onLeftClick = () => {
    const {activeState} = this.state
    if (activeState > 0) {
      this.setState(prevState => ({
        activeState: prevState.activeState - 1,
      }))
    }
  }

  onRightClick = () => {
    const {activeState} = this.state
    const {reviewsList} = this.props
    if (activeState < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeState: prevState.activeState + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeState} = this.state
    const currReviewList = reviewsList[activeState]
    const {imgUrl, username, companyName, description} = currReviewList
    return (
      <div className="mainCont">
        <div className="reviewCont">
          <h1 className="h1">Reviews</h1>
          <div className="pageContent">
            <img src={imgUrl} className="Mi" alt={username} />
            <div className="bCont">
              <button
                type="button"
                className="btn"
                onClick={this.onLeftClick}
                data-testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  className="i1"
                  alt="left arrow"
                />
              </button>

              <p className="Mn">{username}</p>

              <button
                type="button"
                className="btn"
                onClick={this.onRightClick}
                data-testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  className="i1"
                  alt="right arrow"
                />
              </button>
            </div>
            <p className="Mc">{companyName}</p>
            <p className="Mc">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

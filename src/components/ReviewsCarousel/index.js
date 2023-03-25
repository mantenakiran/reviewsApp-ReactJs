// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  leftArrowClicked = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  rightArrowClicked = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  showTheReview = presentReview => {
    const {imgUrl, username, companyName, description} = presentReview

    return (
      <div className="review-inner-container">
        <img className="review-image" alt={username} src={imgUrl} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewId = reviewsList[activeReviewIndex]
    console.log(activeReviewIndex)

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            data-testid="leftArrow"
            onClick={this.leftArrowClicked}
            type="button"
            className="button"
          >
            <img
              alt="left arrow"
              className="arrows"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          {this.showTheReview(currentReviewId)}
          <button
            data-testid="rightArrow"
            onClick={this.rightArrowClicked}
            type="button"
            className="button"
          >
            <img
              alt="right arrow"
              className="arrows"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel

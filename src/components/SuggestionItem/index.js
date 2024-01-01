// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, getSuggestion} = props
  const {suggestion, id} = suggestionDetails

  const onClickedText = () => {
    getSuggestion(suggestion, id)
  }
  return (
    <li className="suggestion-card">
      <p className="suggestion">{suggestion}</p>
      <button className="button" type="button" onClick={onClickedText}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

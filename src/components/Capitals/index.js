import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const findCountry = countryAndCapitalsList.find(
      each => each.id === activeId,
    )
    return findCountry.country
  }

  render() {
    const country = this.getCountry()
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select className="select-tag" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital-para">is capital of which country?</p>
          </div>
          <p className="para">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { tempAction } from '../../store/actions'

import NavBar from '../../component/module/navBar/navBar'

class Search extends Component {
  componentDidMount() {
    this.props.fetchTemp()
  }
  state = {}

  render() {
    const { temp } = this.props

    return (
      <Fragment>
        <div class='grid grid-col-3-1'>
          <section className='main'>
            <div className='search'>
              <div className='search__icon'>
                <i className='material-icons'>search</i>
              </div>
              <input className='search__input' placeholder='Search for...' />
            </div>
          </section>
          <section className='aside'>Location</section>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  temp : state.temp,
})
const mapDispatchToProps = dispatch => ({
  fetchTemp : payload => dispatch(tempAction.send.fetch(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { tempAction } from '../../store/actions'

import NavBar from '../../component/module/navBar/navBar'

class Login extends Component {
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
            <form>
              <label>
                <x-text>Name</x-text>
                <input type='text' placeholder='i.e. Whatever' />
              </label>
              <formGroup>
                <label>
                  <x-text>Password</x-text>
                  <input type='password' placeholder='i.e. Xwf*34S6w' />
                </label>
                <label>
                  <x-text>Date</x-text>
                  <input type='password' placeholder='i.e. Xwf*34S6w' />
                </label>
              </formGroup>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)

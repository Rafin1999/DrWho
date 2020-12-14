import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { tempAction } from '../../store/actions'

import Search from '../Search/Search'
import Appointment from '../Appointment/Appointment'

import NavBar from '../../component/module/navBar/navBar'

class Home extends Component {
  componentDidMount() {
    this.props.fetchTemp()
  }
  state = {}

  render() {
    const { temp } = this.props

    return (
      <Fragment>
        <section className='header'>
          <div className='logo'>Dr WHO</div>
          <div className='btn-container'>
            <div>logout</div>
            <div>not</div>
            <div>pro</div>
          </div>
        </section>
        <div class='home grid grid-col-1-5'>
          <section style={{ marginLeft: 'auto' }} className='aside'>
            <NavBar
              navigations={[
                { link: '/search', name: 'Search', icon: 'person_search' },
                { link: '/appointments', name: 'Appointments', icon: 'today' },
                { link: '/medical-profile', name: 'Medical Profile', icon: 'contact_page' },
                { link: '/reviews', name: 'Reviews', icon: 'rate_review' },
              ]}
            />
            {/* <Switch>
            <Route path='/temp' component={temp} key={0} />
          </Switch> */}
          </section>
          <section className='scrollable'>
            <Switch>
              <Route path='/search' component={Search} />
              <Route path='/appointments' component={Appointment} />
            </Switch>
          </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)

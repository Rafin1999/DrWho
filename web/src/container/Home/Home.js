import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { tempAction } from '../../store/actions'

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
        {/* <Container> */}
        <NavBar navigations={[ { link: '/temp', name: 'Temp', icon: 'temp' } ]} />
        {/* <Main> */}
        {/* <Card> */}
        <Switch>
          <Route path='/temp' component={temp} key={0} />
        </Switch>
        {/* </Card> */}
        {/* </Main> */}
        {/* </Container> */}
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

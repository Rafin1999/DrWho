import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { tempAction } from '../../store/actions'

import Input from '../../component/element/form/input'
import Password from '../../component/element/form/password'

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
            <form>
              <Input type='text' label='label' placeholder='i.e. Whatever' icon='home' value='aaa' />
              <formGroup>
                <Input label='label' placeholder='i.e. Whatever' icon='home' value='aaa' />
                <Password label='label' placeholder='i.e. Whatever' icon='home' value='aaa' />
              </formGroup>
              <label className='lebel-checkbox'>
                <input type='checkbox' />
                <x-text>Title</x-text>
              </label>
              <label className='lebel-radio'>
                <input type='radio' name='a' />
                <x-text>Title</x-text>
              </label>
              <label className='lebel-radio'>
                <input type='radio' name='a' />
                <x-text>Title</x-text>
              </label>
              <label className='lebel-radio'>
                <input type='radio' name='a' />
                <x-text>Title</x-text>
              </label>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)

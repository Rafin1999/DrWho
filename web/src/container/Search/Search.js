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
  state = {
    result : [
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification qualification qualification vvv qualificationvqualificationqualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'ad lkasjd djoi jdiajdij adia djadjda',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification dad adj nbbba asd',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
      {
        id            : '1212',
        avatar        : '',
        name          : 'name',
        specialised   : 'specialised',
        qualification : 'qualification',
        location      : 'location',
        rating        : '',
      },
    ],
  }

  render() {
    const { result } = this.state
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
            <div className='card-container' style={{ backgroundColor: 'red' }}>
              {result.map(({ id, avatar, name, specialised, qualification, location, rating }) => (
                <div class='card result' key={id}>
                  <div className='flex flex-d-row flex-pos-between'>
                    {/* <img src={avatar} /> */}
                    <div>IMG</div>
                    <div className='p-left-2'>
                      <h3>{name}</h3>
                      <h5>{specialised}</h5>
                    </div>
                  </div>
                  <div className='p-top-2'>
                    <h5>Qualification</h5>
                    <p>{qualification}</p>
                  </div>
                  <div className='flex'>
                    <div>
                      <h5>Location</h5>
                      <p>{location}</p>
                    </div>
                    <div>
                      <h5>Rating</h5>
                      <p>{rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <form>
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
            </form> */}
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

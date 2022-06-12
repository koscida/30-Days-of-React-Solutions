import React from 'react'
import './twitter.scss'
import moment from 'moment'
import TextAreaFieldGroup from '../shared/TextAreaField'

const randomId = () => {
  const numbersLetters = '0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    ''
  )
  let randId = ''
  let randIndex
  for (let i = 0; i < 6; i++) {
    randIndex = Math.floor(Math.random() * numbersLetters.length)
    randId += numbersLetters[randIndex]
  }
  return randId
}
const displayDateTime = () => {
  let now = new Date()
  let year = now.getFullYear(),
    month = now.getMonth() + 1,
    date = now.getDate(),
    hours = now.getHours(),
    minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  let dateMonthYear = date + '.' + month + '.' + year
  let time = hours + ':' + minutes
  let fullTime = dateMonthYear + ' ' + time
  return fullTime
}

class AddPost extends React.Component {
  state = { text: '' }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPost(this.state.text)
    console.log(this.state.text)
    this.setState({
      text: '',
    })
  }
  render() {
    let wordCount = 250 - this.state.text.length
    let buttonStatus = wordCount < 250 && wordCount > 0

    let buttonClass = buttonStatus ? 'activeButton' : 'disabledButton'

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextAreaFieldGroup
            cols='90'
            rows='10'
            type='text'
            name='Post'
            placeholder='Tweet about 30 Days Of React ...'
            ref='Post'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <p className={wordCount < 0 ? 'red-text' : 'other'}>{wordCount}</p>
        </div>
        <div>
          <button className={buttonClass} disabled={!buttonStatus}>
            Add Post
          </button>
        </div>
      </form>
    )
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      checked: false,
    }
  }
  editPost = () => {
    this.setState({
      editing: true,
    })
  }
  deletePost = () => {
    this.props.removePost(this.props.index)
  }
  savePost = () => {
    let text = this.refs.newText.value
    this.props.editPost(text, this.props.index)

    this.setState({
      editing: false,
    })
  }
  cancelEditing = () => {
    this.setState({
      editing: false,
    })
  }
  handleChecked = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }
  renderForm = () => {
    return (
      <div className='Posts'>
        <textarea defaultValue={this.props.children} ref='newText' /> <br />
        <button className='save-button' onClick={this.savePost}>
          Save
        </button>
        <button className='cancel-button' onClick={this.cancelEditing}>
          Cancel
        </button>
      </div>
    )
  }
  renderPost = () => {
    return (
      <div className='post'>
        <div className='user-info'>
          <i className='fas fa-user' />
          <h4>
            {this.props.user} <span>@{this.props.firstName}</span>
          </h4>
        </div>

        <div className='post-text'>
          <p>{this.props.children}</p>
        </div>
        <div className='post-detail'>
          <div>
            <i onClick={this.editPost} className='far fa-edit' />
            <i onClick={this.deletePost} className='far fa-trash-alt' />
          </div>
          <div className='post-activity'>
            <i className='far fa-comment' />
            <i className='far fa-heart' />
            <i className='fas fa-retweet' />
          </div>
          <div>
            <small className='tweeted-date'>{this.props.date}</small>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return !this.state.editing ? this.renderPost() : this.renderForm()
  }
}

class TwitterApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {
          id: randomId(),
          date: new Date(),
          user: 'Asabeneh Yetayeh',
          post:
            '30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students. ',
          postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
        },
        {
          id: randomId(),
          date: new Date(),
          user: 'Asabeneh Yetayeh',
          post:
            '30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. I hope this will help lots of students. JavaScript for Ever! ',
          postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
        },
        {
          id: randomId(),
          date: new Date(),
          user: 'Asabeneh Yetayeh',
          post:
            '30 Days Of Python challenge has been started on 22 November 2019  and ended on 22 December 2020. It is of the best references for Pythonistas, data scientists and aspiring ML. Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend',
          postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
        },
        {
          id: randomId(),
          date: new Date(),
          user: 'Asabeneh Yetayeh',
          post:
            '30 Days Of Python challenge has been started on 22 November 2019  and ended on 22 December 2020. It is of the best references for Pythonistas, data scientists, and aspiring ML. Students learned quite a lot of concepts. Python is eating the world.',
          postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
        },
        {
          id: randomId(),
          date: new Date(),
          user: 'Asabeneh Yetayeh',
          post:
            'I have no idea about the coming challenge. It could be 30 days of HTML &  CSS, ReactNative, Data Analysis or MERN. ',
          postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
        },
      ],
      checked: false,
    }
  }
  addPost = (text) => {
    let id = randomId()
    let date = new Date()
    if (text.length) {
      this.setState({
        posts: [
          ...this.state.posts,
          {
            id,
            date,
            post: text,
            user: 'Anonymous User',
            postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
          },
        ],
      })
    }
  }
  editPost = () => {
    this.setState({ editing: true })
  }

  removePost = (position) => {
    let arr = this.state.posts
    arr.splice(position, 1)
    this.setState({
      posts: arr,
    })
  }
  savePost = (newText, i) => {
    let arr = this.state.posts
    arr[i].post = newText
    this.setState({
      posts: arr,
      editing: false,
    })
  }
  cancelEditing = () => {
    this.setState({
      editing: false,
    })
  }
  eachPost = () => {
    return this.state.posts.map((postObj, i) => {
      let { id, date, post, user } = postObj
      let firstName = user.split(' ')[0]
      return (
        <Post
          key={'id' + i}
          removePost={this.removePost}
          editPost={this.savePost}
          index={i}
          id={id}
          date={moment(date).format('MMM DD, YYYY HH:mm a')}
          user={user}
          firstName={firstName}
        >
          {post}
        </Post>
      )
    })
  }
  render() {
    return (
      <div className='tweet-wrapper'>
        <AddPost addPost={this.addPost} />
        {this.eachPost()}
      </div>
    )
  }
}

export default TwitterApp

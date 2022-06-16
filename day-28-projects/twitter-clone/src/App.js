// src/App.js
import React, { useState } from 'react'
import './styles.css'

const createInitPosts = () => {
	const postTexts = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum mi orci, nec convallis eros tincidunt tempus.',
		'Nam condimentum scelerisque risus, in imperdiet est accumsan quis. Aliquam erat volutpat. Quisque commodo varius commodo.',
		'Duis malesuada sed ante sit amet auctor. Fusce rhoncus, eros nec luctus rutrum, justo risus fringilla nisi, ut feugiat eros',
		'orci at felis. Duis dictum sem nec nibh rhoncus ultrices. Maecenas sapien lorem, cursus non tincidunt nec, volutpat non.',
		'Donec iaculis justo sit amet fermentum tempus. Pellentesque diam mi, placerat a mattis sed, auctor at odio.',
		'Praesent eu egestas turpis. Nam quis dignissim erat. In est eros, scelerisque et magna non, tempus tempus tellus.',
		'Nullam et commodo erat. Proin dapibus dolor sed ligula ornare porttitor. Vestibulum ante ipsum primis in faucibus orci.',
		'luctus et ultrices posuere cubilia curae; Vivamus sollicitudin, nulla id sollicitudin pulvinar, turpis est vestibulum dui,',
		'eget varius velit sem ac orci. Nulla sit amet mattis arcu. Vestibulum ornare sollicitudin enim, ut accumsan tellus aliquam ut.',
		'Praesent tempus varius nibh, non suscipit elit pretium vel. Orci varius natoque penatibus et magnis dis parturient montes,',
		'nascetur ridiculus mus. Mauris blandit luctus fermentum. Sed ac justo mi. Nunc ante arcu, dignissim eget vulputate vel.'
	]
	const startDate = new Date()
	const endDate = new Date(startDate.getFullYear(), startDate.getMonth(), (startDate.getDate()-1), 
		startDate.getHours(), startDate.getMinutes(), startDate.getSeconds() )
	return postTexts.map(postText => ({
		date: new Date(startDate.getTime() - Math.random() * (startDate.getTime() - endDate.getTime())),
		id: ((Math.random() + 1).toString(36).substring(7)),
		postText,
		postInfo: {
			comment: Math.floor(Math.random() * 5),
			repost: Math.floor(Math.random() * 1),
			heart: Math.floor(Math.random() * 10),
		},
		user: {
			username: 'koscida',
			name: 'Brittany Kos',
		}
	}))
}

const Post = ({
		postText,
		date,
		postInfo,
		user,
		handleSave,
		handleDelete,
		handleHeart,
		handleReTweet,
		idx,
}) => {
	const [isEditing, setEditing] = useState( (idx === -1 ? true : false) )
	const [text, setText] = useState(postText?postText:'')
	
	const editPost = () => {
		setEditing(true)
	}
	
	const postChange = (e) => {
		setText(e.target.value)
	}
	const clickSave = () => {
		handleSave(text, idx)
		idx === -1
			? setText('')
			: setEditing(false)
	}
	const clickCancel = () => {
		setEditing(false)
	}
	
	const deletePost = () => {
		handleDelete(idx)
	}
	
	const likePost = () => {
		handleHeart(idx)
	}
	const reTweetPost = () => {
		handleReTweet(idx)
	}
	
	const WritePost = () => <>
		<div className=''>
			<textarea
				name='text'
				value={text}
				onChange={postChange}
				className="form-control w-100"
				placeholder='Tweet...'
				/>
		</div>
		<div className='d-flex flex-direction-row align-items-center'>
			<button className='btn btn-primary btn-sm m-1' onClick={clickSave}>Save</button>
			<button className='btn btn-outline-secondary btn-sm m-1' onClick={clickCancel}>Cancel</button>
			<span className='ms-auto'>{[...text].length}</span>
		</div>
	</>
	
	const ShowPost = () => <>
		<div className='d-flex flex-row align-items-center'>
			<div>
				<span className='me-1 fw-bold'>{user.name}</span>
				<span className='fw-light'>@{user.username}</span>
				<span className='mx-2 fs-5 fw-light'>·</span>
				<span className='fw-light'>{date.toLocaleString()}</span>
			</div>
			<div className='ms-auto'>
				<i onClick={editPost} className='fa-solid fa-edit ms-2 clickable' />
				<i onClick={deletePost} className='fa-solid fa-trash-alt ms-2 clickable' />
			</div>
		</div>
		<div className=''>
			<p>{postText}</p>
		</div>
		<div className='d-flex flex-row justify-content-between' style={{width: '80%'}}>
			<div>
				<i className='fa-solid fa-comment me-3' />
				<span>{postInfo.comment > 0 ? postInfo.comment : ''}</span>
			</div>
			<div>
				<i onClick={reTweetPost} className='fa-solid fa-retweet me-3 clickable' />
				<span>{postInfo.repost > 0 ? postInfo.repost : ''}</span>
			</div>
			<div>
				<i onClick={likePost} className='fa-solid fa-heart me-3 clickable' />
				<span>{postInfo.heart > 0 ? postInfo.heart : ''}</span>
			</div>
		</div>
	</>

	return <>
		<div className='post border p-3 d-flex flex-row align-items-stretch'>
			<div className='me-3 flex-shrink-0 flex-grow-0' style={{flexBasis: '48px'}}>
				<div className='d-flex align-items-center justify-content-center text-white' style={{
					background: '#eee', 
					borderRadius: "50%",
					width: "48px",
					height: "48px",
				}} alt="icon" >
					<i className='fa-solid fa-user' />
				</div>
			</div>
			<div className='flex-grow w-100'>
				{ isEditing ? WritePost() : ShowPost() }
			</div>
		</div>
	</>
}

const App = (props) => {
	const initPosts = createInitPosts()
	const [posts, setPosts] = useState(initPosts)
	
	const editPost = (postText, idx) => {
		if(idx === -1) {
			const newPost = {
				date: new Date(),
				id: ((Math.random() + 1).toString(36).substring(7)),
				postText,
				postInfo: {
					comment: 0,
					repost: 0,
					heart: 0,
				},
				user: {
					username: 'anonymous',
					name: 'Anon Y Mous',
				}
			}
			// console.log([...posts, newPost])
			setPosts([...posts, newPost])
		} else {
			const newPosts = posts.map( (post, i) => 
				idx === i
					? {...post, postText}
					: post
			)
			setPosts(newPosts)
		}
	}
	const deletePost = (idx) => {
		let p = posts
		p.splice(idx,1)
		setPosts([...p])
	}
	const heartPost = (idx) => {
		const newPosts = posts.map( (post, i) => 
			idx === i
				? {...post, postInfo: {...post.postInfo, heart: post.postInfo.heart+1}}
				: post
		)
		setPosts(newPosts)
	}
	const reTweetPost = (idx) => {
		const newPosts = posts.map( (post, i) => 
			idx === i
				? {...post, postInfo: {...post.postInfo, repost: post.postInfo.repost+1}}
				: post
		)
		const copiedPost = {
			...posts[idx],
			date: new Date(),
			id: ((Math.random() + 1).toString(36).substring(7)),
			postInfo: {
				comment: 0,
				repost: 0,
				heart: 0,
			},
			user: {
				username: 'anonymous',
				name: 'Anon Y Mous',
			}
		}
		setPosts([...newPosts, copiedPost])
	}
	
	return <div className="app">
		<div className='container m-5'>
			<div className='row'>
				<div className='col-lg-2 col-md-3 ms-auto'>
					<p className='fs-4'>Fake Twitter</p>
					<p className='fs-4'><i className='fa-solid fa-home me-3' />Home</p>
					<p className='fs-4'><i className='fa-solid fa-hashtag me-3' />Explore</p>
					<p className='fs-4'><i className='fa-solid fa-bell me-3' />Notifications</p>
					<p className='fs-4'><i className='fa-solid fa-envelope me-3' />Messages</p>
					<p className='fs-4'><i className='fa-solid fa-user me-3' />Profile</p>
					<p className='fs-4'><i className='fa-solid fa-ellipsis me-3' />More</p>
				</div>
				<div className='col-lg-6 col-md-8 me-auto'>
					<Post 
						idx={-1}
						handleSave={editPost} 
						/>
					{posts.sort((a,b)=>b.date-a.date).map( (post, i) => 
						<Post 
							key={post.id}
							idx={i}
							post={post}  
							postText={post.postText}
							date={post.date}
							postInfo={post.postInfo}
							user={post.user}
							handleSave={editPost} 
							handleDelete={deletePost}
							handleHeart={heartPost}
							handleReTweet={reTweetPost}
							/> 
					)}
				</div>
			</div>
		</div>
		
	</div>
}

export default App
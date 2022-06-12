// src/App.js
import React, { useState } from 'react'



const createInitPosts = () => {
	var today = new Date()
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
	return postTexts.map(postText => ({
		date: today.toLocaleString(),
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

const Post = ({post}) => {
	const editPost = () => {
		
	}
	const deletePost = () => {
		
	}
	return <div className='post border p-3 d-flex flex-row align-items-stretch' key={post.id}>
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
		<div className='flex-grow'>
			<div className='d-flex flex-row align-items-center'>
				<div>
					<span className='me-1 fw-bold'>{post.user.name}</span>
					<span className='fw-light'>@{post.user.username}</span>
					<span className='mx-2 fs-5 fw-light'>·</span>
					<span className='fw-light'>{post.date}</span>
				</div>
				<div className='ms-auto'>
					<i onClick={editPost} className='fa-solid fa-edit ms-2' />
					<i onClick={deletePost} className='fa-solid fa-trash-alt ms-2' />
				</div>
			</div>
			<div className=''>
				<p>{post.postText}</p>
			</div>
			<div className='d-flex flex-row justify-content-between' style={{width: '80%'}}>
				<div>
					<i className='fa-solid fa-comment me-3' />
					<span>{post.postInfo.comment > 0 ? post.postInfo.comment : ''}</span>
				</div>
				<div>
					<i className='fa-solid fa-retweet me-3' />
					<span>{post.postInfo.repost > 0 ? post.postInfo.repost : ''}</span>
				</div>
				<div>
					<i className='fa-solid fa-heart me-3' />
					<span>{post.postInfo.heart > 0 ? post.postInfo.heart : ''}</span>
				</div>
			</div>
		</div>
	</div>
}

const App = (props) => {
	const initPosts = createInitPosts()
	const [posts, setPosts] = useState(initPosts)
	
	
	return <div class="app" className='container'>
		<div className='container m-5'>
			<div className='row'>
				<div className='col-lg-2 col-md-3 ms-auto'>
					<p className='fs-4'>"Twitter"</p>
					<p className='fs-4'><i className='fa-solid fa-home me-3' />Home</p>
					<p className='fs-4'><i className='fa-solid fa-hashtag me-3' />Explore</p>
					<p className='fs-4'><i className='fa-solid fa-bell me-3' />Notifications</p>
					<p className='fs-4'><i className='fa-solid fa-envelope me-3' />Messages</p>
					<p className='fs-4'><i className='fa-solid fa-user me-3' />Profile</p>
					<p className='fs-4'><i className='fa-solid fa-ellipsis me-3' />More</p>
				</div>
				<div className='col-lg-6 col-md-8 me-auto'>
					{posts.map( post => <Post post={post} />)}
				</div>
			</div>
		</div>
		
	</div>
}

export default App
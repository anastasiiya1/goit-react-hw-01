import css from './FriendList.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
	return(
		<>
		<img src={avatar} alt='Avatar' width={48}/>
		<p>{name}</p>
		<p className={isOnline ? css.online : css.offline}>
			{isOnline ? 'Online' : 'Offline'}</p>
		</>
	)
}

export default FriendListItem
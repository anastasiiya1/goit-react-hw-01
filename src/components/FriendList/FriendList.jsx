import FriendListItem from "./FriendListItem";
import css from './FriendList.module.css'

const FriendList = ({friends}) => {
return(
	<>
	<ul className={css.friendsList}>
		{friends.map((friend) => (
			<li className={css.listItem} key={friend.id}>
				<FriendListItem {...friend} />
			</li>
		))}
	</ul>
	</>
)
};

export default FriendList;
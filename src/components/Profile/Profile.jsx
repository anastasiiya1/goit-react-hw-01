import PropTypes from 'prop-types';
import css from './Profile.module.css'

function Profile ({name, tag, location, image, stats: {followers, views, likes}}) {
	return(
		<div className={css.container}>
			<div className={css.profileContainer}>
				<img className={css.profileImg} src={image} alt={`${name} avatar`}/>
				<p className={css.username}>{name}</p>
				<p className={css.userTag}>@{tag}</p>
				<p className={css.userLocation}>{location}</p>
			</div>
			<ul className={css.statsList}>
				<li className={css.statsItem}>
					<span className={css.itemTitle}>Followers</span>
					<span className={css.itemValue}>{followers}</span>
				</li>
				<li className={css.statsItem}>
					<span className={css.itemTitle}>Views</span>
					<span className={css.itemValue}>{views}</span>
				</li>
				<li className={css.statsItem}>
					<span className={css.itemTitle}>Likes</span>
					<span className={css.itemValue}>{likes}</span>
				</li>
			</ul>
		</div>
	)
}

Profile.propTypes = {
	name: PropTypes.string,
	tag: PropTypes.string,
	location: PropTypes.string,
	image: PropTypes.string,
	stats: PropTypes.shape({
		followers: PropTypes.number,
		views: PropTypes.number,
		likes: PropTypes.number,
	})
}

export default Profile;
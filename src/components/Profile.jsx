import PropTypes from "prop-types";
import s from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats,
}) {
  return (
    <div className={s.block}>
      <div className={s.mainBlock}>
        <div className={s.avatar}>
          <img
            className={s.img}
            src={image}
            alt="User avatar"
            width="50"
          />
        </div>
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statItem}>
          <span className={s.label}>
            Followers
          </span>
          <span className={s.value}>
            {stats.followers}
          </span>
        </li>
        <li className={s.statItem}>
          <span className={s.label}>Views</span>
          <span className={s.value}>
            {stats.views}
          </span>
        </li>
        <li className={s.statItem}>
          <span className={s.label}>Likes</span>
          <span className={s.value}>
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

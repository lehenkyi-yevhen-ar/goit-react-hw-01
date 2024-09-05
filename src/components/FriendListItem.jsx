import s from './FriendListItem.module.css'

function FriendListItem({
  avatar,
  name,
  isOnline,
}) {
  return (
    <div className={s.item}>
      <img className={s.img}        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={s.name}>{name}</p>
      <p
        className={
          isOnline ? s.online : s.offline
        }
      >
        {" "}
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;

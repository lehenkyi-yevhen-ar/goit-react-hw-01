import Profile from "./Profile";
import userData from "../userData.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

import Card from "../../Components/Cards/Card";
import { RootState } from "../../Rematch/store";
import { useSelector } from "react-redux";

function UserDetail() {
  const userState = useSelector((state: RootState) => state.userModel);

  return (
    <div>
      <Card
        title={`${userState.firstName} ${userState.lastName}`}
        description={userState.email}
        imageSrc={userState.avatar}
      />
    </div>
  );
}

export default UserDetail;

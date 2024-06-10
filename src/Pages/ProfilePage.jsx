import SideBar from "../Components/SideBar";

const ProfilePage = () => {
  return (
    <div className="flex w-full h-full bg-white">
      <div className="w-1/5 bg-slate-300">
        <SideBar />
      </div>
      <div className="w-4/5">
        <div className="flex ">
          <div className="w-1/3 flex justify-center items-center bg-slate-500">
            <div className="rounded-full bg-pink-300 w-64 h-64 p-4">PP</div>
          </div>
          <div>Buraya profil bilgieri, takipçi sayısı falan</div>
        </div>
        <div className="flex flex-wrap">Buraya da postlar hehe</div>
      </div>
    </div>
  );
};

export default ProfilePage;

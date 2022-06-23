import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import SideBar from "../components/SideBar/SideBar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="body-cont">
        <SideBar />
        <Main />
        {/* {hideScreen && <Main data={movData} />} */}
      </div>
    </>
  );
}

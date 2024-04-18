import "./single.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Chart from "../../component/chart/Chart";
import List from "../../component/table/Table";
import { useGlobalContext } from "../../Context";

const Single = () => {
  const {newData} = useGlobalContext();
  const [nextData] = newData;
  const {username,img,email,phone,address,country,data} = nextData;
  console.log(nextData);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={img}
                alt="avatar"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address</span>
                  <span className="itemValue">
                   {address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" data={data} />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single
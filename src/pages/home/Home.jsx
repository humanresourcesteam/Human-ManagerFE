import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import NewEmployee from "../../components/newEmployee/NewEmployee";
import Tables from "../../components/table/Tables";
import BarCharts from "../../components/bar/BarCharts";
import withAuth from "../../withAuth";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="total" />
          <Widget type="retired" />
          <Widget type="active" />
          <Widget type="laik" />
        </div>

        <div className="circ">
          <div className="circ_left">
            <NewEmployee />
            <NewEmployee />
          </div>
          <div className="circ_right">
            <BarCharts />
          </div>
        </div>
        <div className="charts">
          {/* <NewEmployee /> */}
          <div className="tablearea">
            <span>All Employee</span>
            <Tables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Home);

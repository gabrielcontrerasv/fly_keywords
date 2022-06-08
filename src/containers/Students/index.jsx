import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Search from "../../components/search";

function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="Search">
          <Search />
        </div>
        <div className="Cards">
          <Card />
        </div>
      </div>
    </Layout>
  );
}

export default Home;

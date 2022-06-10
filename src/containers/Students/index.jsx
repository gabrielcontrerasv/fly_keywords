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
        <Card />
      </div>
    </Layout>
  );
}

export default Home;

import { Switch } from "antd";

const Home = () => {
  const handleChange = (e: boolean) => {
    // 切换主题
    if (e) {
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
    }
  };
  return (
    <div className="home_page">
      <h1>Home</h1>
      <Switch
        checkedChildren="白天"
        unCheckedChildren="夜间"
        defaultChecked
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Home;

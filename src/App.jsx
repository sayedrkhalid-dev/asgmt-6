import Navbar from "./components/Navbar/Navbar";

const nav_items = [
  {
    id: 1,
    label: "home",
    path: "/",
  },
  {
    id: 2,
    label: "products",
    path: "/products",
  },
  {
    id: 3,
    label: "features",
    path: "/features",
  },
  {
    id: 4,
    label: "pricing",
    path: "/pricing",
  },
  {
    id: 5,
    label: "testimonials",
    path: "/testimonials",
  },
  {
    id: 6,
    label: "FAQ",
    path: "/questions",
  },
];

function App() {
  return (
    <>
      <Navbar items={nav_items} />
      <h1 className="text-red-500 text-3xl font-bold">Hello world</h1>
    </>
  );
}

export default App;

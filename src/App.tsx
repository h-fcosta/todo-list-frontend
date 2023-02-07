import "./App.css";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsGallery from "./components/NewsGallery";
import PleaseLogin from "./components/PleaseLogin";
import ToDoLists from "./components/ToDoLists";
import Welcome from "./components/Welcome";
import useSession from "./hooks/useSession";

function App() {
  const { session } = useSession();

  console.log(session);

  return (
    <div className="App">
      <Header />
      <Welcome />
      <Banner />
      {session ? <ToDoLists /> : <PleaseLogin />}
      <NewsGallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

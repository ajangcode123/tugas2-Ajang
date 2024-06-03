import Header from './components/Header';
import MyList from './components/MyList';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header />
      <main className="flex-grow">
        <MyList />
      </main>
      <Footer />
    </div>
  );
};

export default App;

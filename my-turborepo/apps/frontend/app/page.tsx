import Header from '../app/components/Header/index';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-4">
        <h1 className="text-2xl">Вітаємо на сайті!</h1>
      </main>
    </>
  );
};

export default Home;

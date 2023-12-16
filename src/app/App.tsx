import { Footer, Header, ResponsiveList } from 'components';

const sampleJson = [
  {
    id: 1,
    name: 'Vini',
    email: 'vini@vini.com',
  },
  {
    id: 2,
    name: 'John',
    email: 'john@john.com',
  },
  {
    id: 3,
    name: 'Doe',
    email: 'doe@doe.com',
  },
  {
    id: 4,
    name: 'Foo',
    email: 'foo@foo.com',
  },
  {
    id: 5,
    name: 'Bar',
    email: 'bar@bar.com',
  },
  {
    id: 6,
    name: 'Hey',
    email: 'hey@hey.com',
  },
];

function App() {
  return (
    <div>
      <Header />
      <ResponsiveList
        data={sampleJson}
        renderItem={(item) => (
          <div style={{ backgroundColor: 'mistyrose', height: 100 }}>
            {item.name}
          </div>
        )}
        maxCols={3}
      />
      <Footer />
    </div>
  );
}

export default App;

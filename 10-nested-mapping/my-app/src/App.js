const users = [
  {
    fullName: "Md Tahasin Oyshik",
    age: 22,
    phones: [
      {home: "01723423434"},
      {office: "00093434344"},
    ],
  },
  {
    fullName: "Hulk Javeli",
    age: 44,
    phones: [
      {home: "342348923094"},
      {office: "0000000000"},
    ],
  },
  {
    fullName: "Elon musk",
    age: 55,
    phones: [
      {home: "9099999999999"},
      {office: "44444444444"},
    ],
  },
];

const App = () => {
  return (
    <div>
      <h1>Nested Lists</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h3>FullName: {user.fullName}</h3>
          <p>Age: {user.age}</p>
          {
            user.phones.map((phone, index) => (
              <div key={index}>
                {phone.home && <p>Home: {phone.home}</p>}
                {phone.office && <p>Office: {phone.office}</p>}
              </div>
            ))
          }
        </article>
      ))}
    </div>
  );
};

export default App;

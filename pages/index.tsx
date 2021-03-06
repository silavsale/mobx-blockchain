import { useState, FC} from 'react'
import { observer} from 'mobx-react-lite'
import { useStore } from 'src/store'


const Home: FC = () => {
  return <main>
    <Transactions/>
  </main>
}

const Transactions: FC = observer(() => {
  const store = useStore();

  return store.transactions.length > 0 ? (
    <div>
      <h2>Pending Transactions</h2>
      <ul className="pending">
        {store.transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
    </div>
  ) : null;
});

export default Home
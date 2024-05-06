import { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardView from './CardView';
import ListView from './ListView';

function Store({ products }) {
  const [view, setView] = useState('view_module');

  const handleSwitch = () => {
    if (view === 'view_module') {
      setView('view_list');
    } else {
      setView('view_module');
    }
  }

  return (
    <div className="container">
      <div className="button">
        <IconSwitch icon={view} onSwitch={handleSwitch} />
      </div>
      {view === 'view_module' ? <CardView cards={products} /> : <ListView items={products} />}
    </div>
  );
}

export default Store;
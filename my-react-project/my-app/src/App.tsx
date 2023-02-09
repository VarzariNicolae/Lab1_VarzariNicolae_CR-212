import React from 'react';
import { observer } from 'mobx-react';

const App: React.FC = observer(() => {
   return (
      <div>
         <h1>My Personal Data</h1>
         <p>First Name: Varzari</p>
         <p>Last Name: Nicolae</p>
         <p>Group: CR-212</p>
      </div>
   );
});

export default App;
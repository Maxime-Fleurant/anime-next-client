// IMPORT
import { FunctionComponent, useEffect } from 'react';
import GlobalForm from '../../components/GlobalForm';
import GlobalList from '../../components/GlobalList';

// TYPE DEFINITION
type IndexComponent = FunctionComponent<{ animeList: any[] }>;

// REACT COMPONENT
const GlobalAnimePage: IndexComponent = () => {
  useEffect(() => {
    console.log('PAGE update or mount');
  });

  return (
    <div>
      <GlobalForm />
      <GlobalList />
    </div>
  );
};

export default GlobalAnimePage;

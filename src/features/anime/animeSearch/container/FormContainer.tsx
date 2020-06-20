// IMPORT
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormSelection } from '../redux/animeListSlice';

import GlobalForm from '../component/GlobalForm';
import { TStore } from '../../../../app/store';

// TYPE DEFINITION
type TListContainer = FunctionComponent;

// REACT COMPONENT
const FormContainer: TListContainer = () => {
  const stateFormSelection = useSelector((state: TStore) => {
    return state.animeListPageReducers.formSelection;
  });

  const dispacth = useDispatch();
  const changeHandler = (values: any) => {
    dispacth(updateFormSelection(values));
  };

  return (
    <div>
      <GlobalForm changeHandler={changeHandler} initialForm={stateFormSelection} />
    </div>
  );
};

export default FormContainer;
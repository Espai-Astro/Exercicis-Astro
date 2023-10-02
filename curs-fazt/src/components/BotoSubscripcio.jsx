import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BotoSubscripcio = () => {
  const initialSubscripcio = false;
  const [subscripcio, setSubscripcio] = useState(initialSubscripcio);

  return (
    <div>
      <button
        style={{
          'cursor' : 'pointer',
          'padding': '0.5rem 1rem',
          'background-color': 'skyblue',
          'border': '2px solid black',
          'border-radius': '0.5rem',
        }}
        onClick={() => {
          if (!subscripcio) {
            toast.success(`T'has subscrit a la newsletter`, {
              position: 'top-center',
              theme: 'dark',
            });
          } else {
            toast.error(`T'has donat de baixa de la newsletter`, {
              position: 'top-center',
              theme: 'dark',
            });
          }
          setSubscripcio(!subscripcio);
        }}>
        {subscripcio ? 'Estàs subscrit' : "Donar-se d'alta"}
      </button>
      <ToastContainer />
    </div>
  );
};
export default BotoSubscripcio;

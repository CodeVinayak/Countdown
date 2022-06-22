import { Counter } from './components/Counter';
import rocketSvg from './assets/img/rocket.svg';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

export const App = () => {
  const notify = () =>
    toast.info('High Sir', {
      closeButton: false,
      theme: 'colored',
    });

  return (
    <main>
      <div className="container">
        <h1>NIMCET Exam in</h1>

        <Counter />

        <p>One day, all your hard work will pay off</p>

        <button onClick={notify}>How’s the Josh?</button>

        <ToastContainer
          theme="dark"
          position="top-center"
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
      </div>

      <img src={rocketSvg} alt="" width={500} />
    </main>
  );
};

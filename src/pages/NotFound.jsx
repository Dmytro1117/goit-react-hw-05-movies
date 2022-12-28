import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>Nothing found</h2>
      <Link to="/">Back home</Link>
    </>
  );
};

export default NotFound;
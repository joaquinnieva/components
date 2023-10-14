import { useState } from 'react';

function LoadingManager({ action }: any) {
  const [loading, setLoading] = useState(false);

  const handleAction = async () => {
    setLoading(true);
    await action?.();
    console.log('first');
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleAction}> LoadingManager</button>
      {loading && 'asd'}
    </div>
  );
}

export default LoadingManager;

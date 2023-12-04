'use client';
import Menu from '@/components/Menu';
import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState('');

  const promisee = async () => {
    await new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-80">
        {/* <Pie /> */}
        {/* <Select label="Label" options={['Opcion 1', 'Opcion 2', 'Opcion 3', 'Opcion 4']} onSelect={setSelected} selected={selected} /> */}
        {/* <Input onlyNumbers={true} value={text} onChange={setText} noAvailableWords={['k', 'l']} charToAdd="-" addCharIn={[2, 11]} max={13} /> */}
        {/* <TestLive /> */}
        {/* <LoadingManager action={promisee} /> */}
        {/* <Image /> */}
        <Menu options={[{ name: 'asd1' }, { name: 'basd2' }, { name: 'casd3' }, { name: 'asd4' }]} />
      </div>
    </main>
  );
}

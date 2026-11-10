import { useEffect, useState } from 'react'
import './App.css'
import type { Kerekpar } from './types/Kerekpar'
import { KerekparKartya } from './components/Kerekpar';

function App() {
  const [kerekparok, setKerekparok] = useState<Kerekpar[]>([]);
  const [kerekparokSzama, setKerekparokSzama] = useState(0);
  const [legolcsobb, setLegolcsobb] = useState(0);
  const [legdragabb, setLegdragabb] = useState(0);
  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("/kerekparok.json");
        if (!response.ok) {
          throw new Error("Hiba a betöltés során")
        }
        const data = await response.json() as Kerekpar[];
        setKerekparokSzama(data.length)
        setLegolcsobb(data[0].napiDij)
        setLegdragabb(data[0].napiDij)
        data.forEach(kerekpar => {
          if (kerekpar.napiDij < legolcsobb) {
            setLegolcsobb(kerekpar.napiDij)
          }
          if (kerekpar.napiDij > legdragabb) {
            setLegdragabb(kerekpar.napiDij)
          }
        });
        setKerekparok(data);
      }
      catch (error) {
        if (error instanceof Error) {
          console.error(error);
        }
      }
    }
    load();
  }, [])
  return (
    <>
      <div className="container">
        <h1>Kiadó kerékpárok</h1>
        <h2>Statisztikák</h2>
        <ul className='list-group mb-3'>
          <li className="list-group-item">Kerépkárok száma: {kerekparokSzama}</li>
          <li className="list-group-item">Legolcsóbb bérleti díj: {legolcsobb}</li>
          <li className="list-group-item">Legdrágább bérleti díj: {legdragabb}</li>
        </ul>
        <div className="row">
          {kerekparok.map(kerekpar => (
            <div className="col-sm-4">
              <KerekparKartya key={kerekpar.id} kerekpar={kerekpar} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

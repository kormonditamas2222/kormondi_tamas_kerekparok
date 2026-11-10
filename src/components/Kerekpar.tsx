import { useState } from "react";
import type { Kerekpar } from "../types/Kerekpar";

export function KerekparKartya({ kerekpar }: { kerekpar: Kerekpar }) {
    const [reszletekMegjelenites, setReszletekMegjelenites] = useState(true);
    return (
        <>
            <section className="card mb-2">
                <div className="card-body">
                    <h3 className="card-title" style={{ color: kerekpar.szin }}>{kerekpar.nev}</h3>
                    {reszletekMegjelenites &&
                        <>
                            <p className="card-text"><em>{kerekpar.tipus}</em></p>
                            <p className="card-text"><u>{kerekpar.napiDij} Ft</u></p>
                        </>
                    }
                </div>
                <button className="btn btn-primary" onClick={() => setReszletekMegjelenites(megjelenites => !megjelenites)}>
                    {reszletekMegjelenites ? "Részletek becsukása" : "Részletek megjelenítése"}
                </button>
            </section>
        </>
    )
}
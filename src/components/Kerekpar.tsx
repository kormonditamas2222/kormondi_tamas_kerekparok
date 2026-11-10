import type { Kerekpar } from "../types/Kerekpar";

export function KerekparKartya({kerekpar}: {kerekpar: Kerekpar}) {
    return (
        <>
            <section className="card mb-2">
                <div className="card-body">
                    <h3 className="card-title" style={{color: kerekpar.szin}}>{kerekpar.nev}</h3>
                    <p className="card-text"><em>{kerekpar.tipus}</em></p>
                    <p className="card-text"><u>{kerekpar.napiDij}</u></p>
                </div>
            </section>
        </>
    )
}
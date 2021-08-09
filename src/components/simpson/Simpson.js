import './Simpson.css'

export function Simpson({name, surname, age, info, photo}) {
        return (
        <div className={'simpson'}>
            <div>
                <h2>{name} {surname}</h2>
            </div>

            <div className={'wrap'}>
                <div>
                    <p>Вік - {age}</p>
                    <p>{info}</p>
                </div>

                <div className={'img'}>
                    <img src={photo} alt={`${name} ${surname}`}></img>
                </div>
            </div>
        </div>
    );
}
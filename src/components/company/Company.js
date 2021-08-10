import './Company.css';

export function Company(props) {
    let {name, catchPhrase, bs} = props.company;

    return(
        <div className={'company'}>
            <p>Company:</p>

            <div className={'value'}>
                <div className={'value-wrap'}>
                    <p>Name: {name}</p>
                    <p>Catch Phrase: {catchPhrase}</p>
                    <p>BS: {bs}</p>
                </div>
            </div>
        </div>
    );
}
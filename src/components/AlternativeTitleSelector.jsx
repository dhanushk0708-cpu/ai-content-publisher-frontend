function AlternativeTitleSelector({

    titles,

    onSelect

}) {

    if (!titles) return null;

    return (

        <div className="section">

            <h2>Alternative Titles</h2>

            {

                titles.map((title, index) => (

                    <button

                        key={index}

                        onClick={() => onSelect(title)}

                    >

                        {title}

                    </button>

                ))

            }

        </div>

    );

}

export default AlternativeTitleSelector;
import './MainPage.scss';

function MainPage() {
    return (
        <>
            <main className='main-page'>
                <div className='box pink'>
                    <h1 className="box__andrea">Let's Get Sorted!</h1>
                </div>
                <div className='theme-container'>
                    <div className='theme blue'>
                        <h2 className='theme-title'>Harry Potter</h2>
                    </div>
                    <div className='theme blue'>
                        <h2 className='theme-title'>NBA Players</h2>
                    </div>
                </div>


            </main >
        </>
    )
}

export default MainPage;
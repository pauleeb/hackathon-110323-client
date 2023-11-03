import "./RevealPage.scss";
import image from "../../Hackathon-P&E/dobby.jpeg"
function RevealPage() {
    return (
        <>
            <main className='main-page'>
                <div className='box pink'>
                    <h1 className="box__andrea">YOU ARE.....</h1>
                </div>
                <img className="image" src={image} />
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

export default RevealPage;
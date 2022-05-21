import BWP from "../../images/Hotels/BestWestern.png"
import AI from "../../images/Hotels/AmericInn.png"
import './travel.scss'
export default function Travel () {
  return (
    <div className="wrapper">
      <h2>
        Lodging
      </h2>

      <div id="images">
        <a href="https://www.bestwestern.com/en_US/book/hotels-in-isanti/best-western-plus-isanti/propertyCode.24145.html" target="_blank" rel="noreferrer"><img src={BWP} alt="BestWesternPlus" /></a>
          <a href="https://www.wyndhamhotels.com/americinn/north-branch-minnesota/americinn-lodge-and-suites-north-branch/overview" target="_blank" rel="noreferrer"><img src={AI} alt="americinn" /></a>
          <p> A block of rooms has been reserved at the AmericInn in North Branch. <br></br> To reserve please call them directly at 800-634-3444 and reference the Oelke / Koppendrayer wedding.</p>
      </div>
    </div>
  )
}

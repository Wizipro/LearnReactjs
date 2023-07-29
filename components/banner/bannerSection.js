import BannerBtn from './bannerBtn'
import BannerHeader from './bannerHeader'
import BannerImg from './bannerImage'
import BannerParagraph from './bannerParagraph'
import classes from './bannerSection.module.css'

function BannerSection() {
    return ( 
 <div className = { classes.section } >

        < div className = { classes.section1 } >
        <BannerHeader/>
       <BannerParagraph/>
       <BannerBtn/>
        </div> 
        <div className = { classes.section2 }> 
        <BannerImg/>
    </div> 
</div >
    )
}
export default BannerSection
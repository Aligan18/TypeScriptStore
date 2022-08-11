import React , {FC} from 'react'
import ImageCard from '../../components/ImageCard/ImageCard'
import InfoCard, { ESizeTypes } from '../../components/InfoCard/InfoCard'
import classes from './InfoPage.module.scss'

const InfoPage:FC = () => {
  return (
    <div className={ classes.wrapper}>
      <div className={classes.back_button}>
        <button > Back </button>
      </div>
      <div className={classes.short_info}>
          <div className={classes.img}>
              <ImageCard/>
          </div>
          <div className={classes.info}>
              <InfoCard size={ESizeTypes.large} stars={2}/>
          </div>
      </div>
      <div className={classes.description_wrapper}>
      <div className={classes.description_title}>Description</div>
      <div className={classes.description_text}>Pariatur quis commodo ex occaecat esse et. Incididunt consequat tempor mollit ad ad consequat eu. Nulla occaecat nostrud id reprehenderit sint officia. Consequat anim dolore Lorem id culpa sint cillum aliqua consequat veniam. In occaecat est laboris duis ipsum ut est eiusmod in nisi. Dolor mollit consectetur ex fugiat amet mollit et anim ullamco mollit.

                Amet non reprehenderit nisi sint velit deserunt anim aute consectetur irure aliquip anim ea. Do quis id nostrud ea. Deserunt enim sit esse magna Lorem. Pariatur proident magna ex laborum cupidatat veniam anim sit est.

                Commodo sunt dolor exercitation ullamco fugiat sit ex voluptate aliquip elit veniam anim sint. Ad anim tempor ullamco ex commodo proident velit excepteur nulla. Anim cupidatat deserunt Lorem eu duis labore pariatur dolor proident cillum. Adipisicing sint deserunt est dolor minim est non.

                Labore nisi do enim laborum labore voluptate cupidatat magna ex eiusmod aliqua amet. Ut elit do do anim fugiat adipisicing esse. Duis tempor fugiat ad sint sint irure est laboris. Officia amet pariatur sunt ad amet velit ipsum irure reprehenderit veniam.

                Tempor aliquip tempor nisi do sit eiusmod mollit. Non nulla ex amet veniam nostrud est dolore in aliqua. Ea proident nostrud non pariatur nulla consequat quis ipsum Lorem pariatur incididunt. Ea enim est fugiat aute ut non enim id ipsum pariatur officia irure cillum. Anim exercitation sint incididunt minim incididunt incididunt duis consectetur cupidatat consequat ea ut aliquip veniam.Labore irure ex culpa consectetur. Commodo ipsum proident minim ut cillum voluptate eiusmod laboris. Adipisicing pariatur anim reprehenderit ex cupidatat duis exercitation occaecat. Fugiat cupidatat ad qui proident fugiat ad nisi eiusmod eu.</div>

    </div>
    </div>
  )
}

export default InfoPage
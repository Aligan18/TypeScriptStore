import React , {FC} from 'react'
import { useTypedSelector } from '../../нooks/useTypeSelector'

import ImageCard from '../../components/ImageCard/ImageCard'
import InfoCard, { ESizeTypes } from '../../components/InfoCard/InfoCard'
import useActions from '../../нooks/useActions'
import classes from './InfoPage.module.scss'

import BackButton from '../../components/BackButton/BackButton'
import Bag from '../../components/Bag/Bag'
import useWindowDimensions from '../../нooks/useWindowDimensions'

const InfoPage:FC = () => {
  const {width,height} = useWindowDimensions()
  const item = useTypedSelector(state=>state.product)

  const {RemoveProductInfo}=useActions()

const backToHome= ()=>{
  RemoveProductInfo()
}

  return (
<div className={ classes.page}>
    <div className={ classes.wrapper}>
        <BackButton onClick={()=>backToHome()}/>
      <div className={classes.short_info}>
          <div className={classes.img}>
              <ImageCard  img_url={item.product?.primaryImage.medium}/>
          </div>
          <div className={classes.info}>
              <InfoCard info={item.product} size={ESizeTypes.large} stars={item.product?.rating}/>
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
    {width >= 780 && <div>
      <Bag/>
    </div>}
</div>
  )
}

export default InfoPage
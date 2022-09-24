import styles from "./Clients.module.css";
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ClientItem } from './component/ClientItem';
import Image from "next/image";

export default function Clients() {
  const { t } = useTranslation();
  const AniTravelLog = <Image src={'/Clients/ani.png'} width={100} height={50} />
  const TravelLog = <Image src={'/Clients/travel.png'} width={100} height={71.81} />
  const KanachLog = <Image src={'/Clients/kanach.png'} width={100} height={71.81} />
  const TransLog = <Image src={'/Clients/trans.png'} width={100} height={71.81} />
  const RollLog = <Image src={'/Clients/roll.png'} width={150} height={150} />
  const AzadLog = <Image src={'/Clients/azad.png'} width={100} height={30} />
  const B2BLog = <Image src={'/Clients/B2B.png'} width={100} height={50} />
  const RoyalLog = <Image src={'/Clients/royal.png'} width={100} height={20} />
  const Azad2Log = <Image src={'/Clients/steler.png'} width={150} height={100} />
  const ChayLog = <Image src={'/Clients/chay.png'} width={100} height={71.81} />
  const MagaxatLogo = <Image src={'/Clients/magaxat.png'} width={100} height={20} />
  const LmondLog = <Image src={'/Clients/lmond.png'} width={100} height={20} />
  const DriftLogo = <Image src={'/Clients/azad2.png'} width={100} height={20} />
  const CarShopLog = <Image src={'/Clients/carShop.png'} width={150} height={80} />
  const EcoPenLogo = <Image src={'/Clients/ecoPen.png'} width={100} height={30} />
  const YlogoLog = <Image src={'/Clients/ylogo.png'} width={80} height={10} />

  const title = t('common:clientsText');
  const title1 = t('common:clientsText1');
  return (

    <div className={`${styles.clients_main} animate__animated animate__backInLeft animate__slow`}>
    <div className={styles.container_left}>
        <ClientItem frontImg={AniTravelLog} backImg={TravelLog} time={17000}/>
      </div>
      <div className={styles.container_between}>
        <div className={styles.container_between_up}>
          <ClientItem frontImg={KanachLog} backImg={TransLog} time={13000} />
          <ClientItem frontImg={RollLog} backImg={AzadLog} time={9500} />
          <ClientItem frontImg={B2BLog} backImg={RoyalLog} time={4500} />
        </div>
        <div className={styles.container_text}>
          <div className={styles.container_title}>
            {title} <br />
            {title1}
          </div>
        </div>
        <div className={styles.container_between_down}>
          <ClientItem frontImg={Azad2Log} backImg={ChayLog} time={14000} />
          <ClientItem frontImg={MagaxatLogo} backImg={LmondLog} time={11000} />
          <ClientItem frontImg={DriftLogo} backImg={CarShopLog} time={15000} />
        </div>
      </div>
      <div className={styles.container_right}>
        <ClientItem frontImg={EcoPenLogo} backImg={YlogoLog} time={7500} />
      </div>
    </div>
  );
};

import styles from "./Technologies.module.css"
import Image from "next/image";
import useTranslation from 'next-translate/useTranslation'

const Technologies = () => {
  let {t} = useTranslation()

    return (
        <div className={`${styles.technolodiesWrap} animate__animated animate__backInLeft animate__slow`}>
            <div className={styles.technolodies}>
                <div className={styles.technologies}>{t("common:technologies")}</div>
                <div className={styles.iconstop}>
                    {[{
                        icon: "iconsjavascript",
                        icontext: "Javascript",
                        iconstyle: styles.iconsJavascript
                    },
                    {
                        icon: "iconsreact",
                        icontext: "React.js",
                        iconstyle: styles.iconsReact
                    },
                    {
                        icon: "iconsvuejs",
                        icontext: "Vue.js",
                        iconstyle: styles.iconsVuejs
                    },
                    {
                        icon: "iconsnodejs",
                        icontext: "Node.js",
                        iconstyle: styles.iconsNodejs
                    },
                    {
                        icon: "iconsangularjs",
                        icontext: "Angular",
                        iconstyle: styles.iconAngular
                    },
                    {
                        icon: "iconsreact",
                        icontext: "React Native",
                        iconstyle: styles.iconsReactNative
                    },
                    {
                        icon: "iconsphp",
                        icontext: "Php",
                        iconstyle: styles.iconsPhp
                    },
                    {
                        icon: "iconslaravel",
                        icontext: "Laravel",
                        iconstyle: styles.iconsLaravel
                    },
                    {
                        icon: "iconspython",
                        icontext: "Python",
                        iconstyle: styles.iconsPython
                    }
                    ].map((item,i) => (
                        <div key={i} className={`${styles.icons} ${item.iconstyle}`}>
                            <Image src={"/Technologies/" + item.icon + ".svg"} width={71.81} height={71.81}/>
                            <p>{item.icontext}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.iconsbottom}>
                    {[{
                        icon: "iconsdjango",
                        icontext: "Django",
                        iconstyle: styles.iconsDjango
                    },
                    {
                        icon: "iconsmysql",
                        icontext: "MySQL",
                        iconstyle: styles.iconsMysql
                    },
                    {
                        icon: "iconspostgresql",
                        icontext: "PostgreeSql",
                        iconstyle: styles.iconsPostgresql
                    },
                    {
                        icon: "iconsmongo",
                        icontext: "Mongodb",
                        iconstyle: styles.iconsMongodb
                    },
                    {
                        icon: "iconsamazon",
                        icontext: "Amazon",
                        iconstyle: styles.iconsAmazon
                    },
                    {
                        icon: "iconsgoogle",
                        icontext: "Google",
                        iconstyle: styles.iconsGoogle
                    },
                    {
                        icon: "iconsazure",
                        icontext: "Azure",
                        iconstyle: styles.iconAzure
                    },
                    {
                        icon: "iconsjava",
                        icontext: "Java",
                        iconstyle: styles.iconsJava
                    },
                    {
                        icon: "iconskotlin",
                        icontext: "Kotlin",
                        iconstyle: styles.iconsKotlin
                    },
                    ].map((item,i) => (
                        <div key={i+10} className={`${styles.icons} ${item.iconstyle}`}>
                            <Image src={"/Technologies/" + item.icon + ".svg"} width={71.81} height={71.81} />
                            <p>{item.icontext}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Technologies;
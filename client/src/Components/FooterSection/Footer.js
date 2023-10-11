import {Divider} from "@chakra-ui/react";
import FooterCard from "./FooterCard";
import {SocialIcon} from "react-social-icons";

function Footer() {
    return(
        <>
            <div className={'flex m-auto justify-center items-center'}>
            <div>
            <div className={'flex justify-between m-auto mt-4 '}>
                <h1 className={'text-orange-600 text-3xl font-sans'}>Dukkan</h1>
                <div className={'flex'}>
                    <p className={'mx-2'}>Sepetim</p>
                    <p>Hesabım</p>
                </div>
            </div>
             <div className={'justify-center  mt-10 mb-10 ml-20'}>
            <FooterCard/>
             </div>
                <div className={'ml-20'}>
                    <Divider orientation='horizontal' />
                    <div className={'grid grid-cols-2 sm:grid-cols-4  gap-10 mt-3 mb-8' }>
                        <div>
                           <h2 className={'font-bold'}>Dukkan</h2>
                            <div className={'flex flex-col mt-3'}>
                                <a className={''}>Kullanıcı Bilgileri</a>
                                <a className={'mt-1'}>İşlem Rehberi</a>
                                <a className={'mt-1'}>Mobil Uygulamalar</a>
                                <a className={'mt-1'}>Hakkımızda</a>
                            </div>
                        </div>
                        <div>
                            <h2 className={'font-bold'}>Kategoriler</h2>
                            <div className={'flex flex-col mt-3'}>
                                <a className={''}>Bilgisayar / Tablet / Telefon / Laptop</a>
                                <a className={'mt-1'}>Takı Mücevher</a>
                                <a className={'mt-1'}>Erkek Giyim</a>
                                <a className={'mt-1'}>Kadın Giyim</a>
                            </div>
                        </div>
                        <div>
                          <h2 className={'font-bold'}>Sayfalar</h2>
                            <div className={'flex flex-col mt-3'}>
                                <a className={''}>lorem</a>
                                <a className={'mt-1'}>lorem</a>
                                <a className={'mt-1'}>lorem</a>
                                <a className={'mt-1'}>lorem</a>
                            </div>
                        </div>
                        <div>
                        <h2 className={'font-bold'}>Bizi Takip edin</h2>
                            <div className={'flex flex-col mt-3'}>
                                <a className={''}> <SocialIcon network={'facebook'}/> Facebook</a>
                                <a className={'mt-1'}> <SocialIcon network={'twitter'}/> Twitter</a>
                                <a className={'mt-1'}> <SocialIcon network={'instagram'}/> Instagram</a>
                                <a className={'mt-1'}><SocialIcon network={'linkedin'} url="" />Linkedin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer;
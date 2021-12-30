import Header from "./Header"
import Plans from "./Plans"
import { ReactComponent as SVG1 } from "./Assets/undraw_education_f8ru.svg"
import { ReactComponent as SVG2 } from "./Assets/undraw_meditation_re_gll0.svg"
import { ReactComponent as SVG3 } from "./Assets/undraw_order_confirmed_re_g0if.svg"
import { ReactComponent as SVG4 } from "./Assets/undraw_powerful_re_frhr.svg"
import { ReactComponent as SVG5 } from "./Assets/undraw_in_progress_re_m1l6.svg"
import { ReactComponent as SVG6 } from "./Assets/undraw_profile_details_f8b7.svg"

const Index = () => {
    return (
        <>
            <Header/>
            <div className="HPNXA06qJ7">
                <div className="column gap-120 margin-top-120">
                    <div className="CgaRRAc6to padding-x-32">
                        <div className="oq0sHQbGE1 svg align-center justify-center flex">
                            <SVG1/>
                        </div>
                        <div className="column justify-center oq0sHQbGE1">
                            <p className="ff-title fs-32">Grow & Experience</p>
                            <p className="fs-20">
                                Experienced or not, we believe there is always room to grow and we made that easier than ever. Experience a straightforward platform designed to help you and your business grow
                            </p>
                        </div>
                    </div>
                    <div className="CgaRRAc6to padding-x-32 reverse">
                        <div className="oq0sHQbGE1 svg align-center justify-center flex">
                            <SVG2/>
                        </div>
                        <div className="column justify-center oq0sHQbGE1">
                            <p className="ff-title fs-32">Ease</p>
                            <p className="fs-20">
                            Enjoy a simplistic and modern design, created so that you can
skip the headaches. Track macronutrients, clients, and exercises
with ease.
                            </p>
                        </div>
                    </div>
                   
                    <div className="CgaRRAc6to padding-x-32 ">
                        <div className="oq0sHQbGE1 svg align-center justify-center flex">
                            <SVG6/>
                        </div>
                        <div className="column justify-center oq0sHQbGE1">
                            <p className="ff-title fs-32">Customize</p>
                            <p className="fs-20">
                            Customize your profile to your liking with a selection of
colours, or match your profile to your business with ease.
                            </p>
                        </div>
                    </div>
                    <div className="CgaRRAc6to padding-x-32 reverse">
                        <div className="oq0sHQbGE1 svg align-center justify-center flex">
                            <SVG3/>
                        </div>
                        <div className="column justify-center oq0sHQbGE1">
                            <p className="ff-title fs-32">Sign up</p>
                            <p className="fs-20">
                            We’re tired of hearing “We’ll start on Monday”, start now and
get a free 14 day trial on us.
                            </p>
                        </div>
                    </div>
                    <div className="CgaRRAc6to padding-x-32">
                        <div className="oq0sHQbGE1 svg align-center justify-center flex">
                            <SVG4/>
                        </div>
                        <div className="column justify-center oq0sHQbGE1">
                            <p className="ff-title fs-32">You’re in Charge</p>
                            <p className="fs-20">
                            Introducing the most simplified, easy to use
application for your fitness needs. Find, or become
a personal trainer and interact with other users!
                            </p>
                        </div>
                    </div>
                    <div className="CgaRRAc6to padding-x-32 reverse">
                        <div className="oq0sHQbGE1 svg align-center justify-center flex">
                            <SVG5/>
                        </div>
                        <div className="column justify-center oq0sHQbGE1">
                            <p className="ff-title fs-32">Scale</p>
                            <p className="fs-20">
                            Scale your business through a simple client
manager. Track yours or your client’s progress,
and macronutrients with a modern interface.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Plans/>
        </>
    )
}

export default Index

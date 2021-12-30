import { ReactComponent as YourSvg1 } from './Assets/undraw_junior_soccer_6sop.svg';
import { ReactComponent as YourSvg2 } from './Assets/undraw_personal_training_0dqn.svg';

const Header = () => {
    return (
        <div className="padding-top-80 dark" style={{
            background: "var(--indigo)"
        }}>
            <div className="HPNXA06qJ7">
                <div className="column ILadfB9CNM padding-x-32 align-center color-inherit" style={{
                    color: "var(--text-color-2)",
                    zIndex: "1",
                }}>
                    <p className="ff-title fs-40">
                        AIO Fitness Platform Made for Everyone
                    </p>
                    
                </div>
            </div>
            <div className="Zzjc6ji3p4">
                <div className="E9aLNbU5Gm">
                    <YourSvg1/>
                </div>
                <div className='WfvBsQnlrQ'>
                    <YourSvg2/>
                </div>
            </div>
        </div>
    )
}

export default Header

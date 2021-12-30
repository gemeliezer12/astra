import { useNavigate } from "react-router-dom"

const SettingHeader = ({setCurrentSetting, settingTitle}) => {
    const navigate = useNavigate()

    return (
        <div className="space-between row align-start" style={{
            height: "40px"
        }}>
            <div className="row gap-6 align-center">
                {setCurrentSetting &&
                    <div onClick={() => setCurrentSetting("")} className="img-32 icon color-inherit cursor-pointer" style={{
                        color: "var(--text-color-2)"
                    }}>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                }
                <p className="ff-title fs-16">{settingTitle}</p>
            </div>
            <div onClick={() => navigate(-1)} className="img-32 icon color-inherit cursor-pointer" style={{
                backgroundColor: "var(--bg-color-5)",
                color: "var(--text-color-2)"
            }}>
                <i className="fas fa-times"></i>
            </div>
        </div>
    )
}

export default SettingHeader

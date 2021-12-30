import Input from "../../../Assets/Input"

const AboutMe = ({aboutMe}) => {

    return (
        <div className="column gap-6">
            <p>{aboutMe.label}</p>
            <Input input={aboutMe} maxLength={200} minRows={2} maxRows={6}/>
        </div>
    )
}

export default AboutMe

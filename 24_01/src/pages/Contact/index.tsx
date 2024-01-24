import Footer from "../../components/Footer";
import Heading from "../../components/Heading";

function Contact(){
    return (
        <div>
            <Heading title='Contact' level={1} />
            <form>
                <label htmlFor={"email"}>Email:</label>
                <input name={"email"} id={"email"} /><br/>
                <label htmlFor={"topic"}>Topic:</label>
                <select name={"topic"}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select><br/>
                <label htmlFor={"agree"}>I agree to process my personal data</label><br/>
                <label htmlFor={"message"}>Message:</label>
                <textarea name={"message"}/><br/>
                <button >Send</button>


            </form>
            <Footer/>
        </div>
    )

}

export default Contact
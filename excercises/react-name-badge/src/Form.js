import React from "react";

const Form = (props) => {
    return(
        <div className="centerForm">
            <form onSubmit={props.handleSubmit}>
                <div className="formDivs">
                    <input
                        name="firstName"
                        value={props.firstName}
                        onChange={props.handleChange}
                        placeholder="First Name"
                    />
                    <input
                        name="lastName"
                        value={props.lastName}
                        onChange={props.handleChange}
                        placeholder="Last Name"
                    />
                </div>
                <div className="formDivs">
                    <input
                        name="email"
                        value={props.email}
                        onChange={props.handleChange}
                        placeholder="Email"
                    />
                    <input
                        name="pob"
                        value={props.pob}
                        onChange={props.handleChange}
                        placeholder="Place Of Birth"
                    />
                </div>
                <div className="formDivs">
                    <input
                        name="phone"
                        value={props.phone}
                        onChange={props.handleChange}
                        placeholder="Phone Number"
                    />
                    <input
                        name="favFood"
                        value={props.favFood}
                        onChange={props.handleChange}
                        placeholder="Favorite Food"
                    />
                </div>
                <div className="aboutYou">
                    <textarea
                        className="aboutYourself"
                        name="about"
                        value={props.about}
                        onChange={props.handleChange}
                        placeholder="Tell Us A Bit About Yourself"
                    ></textarea>
                </div>
                <div className="formDivs">
                    <button onSubmit={props.handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;

import { useState, useEffect } from "react";
import CheckBoxes from "./CheckBoxes";
import RadioButtons from "./RadioButtons";

export default function Form({ addAnswer, editForm }) {
    const initialState = {
        color: 0,
        spendTime: [],
        review: '',
        username: '',
        email: ''
    };

    /*

    */

    useEffect(() => {
        if (editForm) {
            // If editform is not null, then set the form data to the form in editform
            setFormData(editForm);
        } else {
            // If editForm is not null, initialize as usual
            setFormData(initialState);
        }
        // Dependency array. When changes happen to the dependency array, the effect executes
    }, [editForm])
    
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;

        if (name === "color") {
            setFormData({ ...formData, color: value})
        }

        if (name === 'spendTime') {
            // If the checkbox is checked.
            if (checked) {
            setFormData((previousFormData) => ({
                ...previousFormData, 
                // Adds the value to the array.
                [name]: [...previousFormData[name], value],
                }));
            } else {
                setFormData((previousFormData) => ({
                    ...previousFormData,
                    // Create a new array without the unchecked value.
                    [name]: previousFormData[name].filter((item) => item !== value),
                }));
            }
        }

        if (name === "review") {
            setFormData({ ...formData, review: value})
        }

        if (name === "username") {
            setFormData({ ...formData, username: value})
        }

        if (name === "email") {
            setFormData({ ...formData, email: value})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // If editForm is not null, include the index.
        addAnswer(formData, editForm ? editForm.index : null);
        setFormData(initialState);
    }

    return (
    <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <RadioButtons handleChange={handleChange} formData={formData}/>
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <CheckBoxes handleChange={handleChange} formData={formData}/>
        </div>
        <label>
            What else have you got to say about your rubber duck?
            <textarea
            name="review"
            cols="30"
            rows="10"
            value={formData.review}
            onChange={handleChange}
            />
        </label>
        <label>
            Put your name here (if you feel like it):
            <input
            type="text"
            name="username"
            value= {formData.username} 
            onChange={handleChange}
            />
        </label>
        <label>
            Leave us your email pretty please??
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        </label>
        <input 
            className="form__submit" 
            type="submit" 
            /* 
                If the user is updating an answer, the the button says "Update     Answer". If not the button says "Submit Survey". 
            */
            value={editForm ? "Update Answer" : "Submit Survey"} 
        />
      </form>
      );
}
export default function CheckBoxes({handleChange, formData}) {
    /*
        Leveraging an alternative approach for learning purposes.
        Declaring the various ducky activities in an array makes 
        it more maintainable, shorter, and more functional.
    */

    const options = [
        { label: 'Swimming', value: 'swimming'},
        { label: 'Bathing', value: 'bathing' },
        { label: 'Chatting', value: 'chatting' },
        { label: "I don't like to spend time with it", value: 'noTime'}
    ]
    
    return (
    <ul>
        {/* Iterate over the declared options. */}
        {options.map((option) => (
        // Set the key to the unique value of the option.
        <li key={option.value}>
            <label>
                <input
                name="spendTime"
                type="checkBox"
                value={option.value}
                onChange={handleChange}
                /* 
                    Determines if the box should be checked based on
                    whether the array includes the value.
                    If this is the case, the value sets to true.
                */
                checked={formData.spendTime.includes(option.value)}
                />
            {option.label}
            </label>
        </li>
        ))}
        </ul>
    );
}

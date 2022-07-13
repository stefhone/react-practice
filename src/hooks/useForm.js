import {useState} from "react";

export const useForm = (addToState, initialFormValues, postToDb) => {

    // 1 control the state of form within this component, so we have single source of truth when submitting form.
    const [formData, setFormData] = useState(initialFormValues);

    // 2 add an onChange function to form, so we can capture changes.
    const handleFormChange = (event) => {
        // console.log(event.target.value);
        const copyFormData = { ...formData };
        // console.log("Event target name: ", event.target.name);
        copyFormData[event.target.name] = event.target.value;

        setFormData(copyFormData);
    }

    // 3 add an onSubmit, so when form submitted get state and use that further up in App - add to list of employees
    const handleFormSubmit = (event) => {
        // stop posting it to URL
        event.preventDefault();
        postToDb(formData)
            .then(objectFromDb => addToState(objectFromDb))
    }

    return {
        formData,
        handleFormChange,
        handleFormSubmit
    }
}

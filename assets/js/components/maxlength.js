function maxlength(input){
    const inputType = input.dataset.type;
    if (validators[inputType]){
        validators[inputType](input);
    }
    const leng = lenght[inputType];
    input.setAttribute("maxlength", leng)
    input.setAttribute("required", "")
}
    

const validators ={

}

const lenght = {
    name: "51",

    email: "60",

    subject: "51",

    message: "300",
}

export default maxlength;
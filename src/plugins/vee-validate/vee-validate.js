import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, min, max, confirmed } from "vee-validate/dist/rules";

export default function(Vue) {
    extend("required", {
        ...required,
        message: "This field is required",
    });

    extend("email", {
        ...email,
        message: "This email is not correct",
    });

    extend("min", {
        ...min,
        validate(value, { length }) {
            return value.length >= length;
        },
        params: ["length"],
        message: "The field must have at least {length} characters",
    });

    extend("max", {
        ...max,
        validate(value, { length }) {
            return value.length <= length;
        },
        params: ["length"],
        message: "The field must have less than {length} characters",
    });

    extend("confirmed", {
        ...confirmed,
        message: "Confirm password is not valid",
    });

    Vue.component("ValidationObserver", ValidationObserver);
    Vue.component("ValidationProvider", ValidationProvider);
}

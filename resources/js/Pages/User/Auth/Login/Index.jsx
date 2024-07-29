import clsx from "clsx";
import { useForm as useFormInertia } from "@inertiajs/react";
import { useForm as useFormHookForm } from "react-hook-form";

import styles from "./LoginStyle.module.scss";

const cn = (...classes) => clsx(classes.map((cls) => styles[cls] || cls));

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors: errorsHookForm },
    } = useFormHookForm();

    const { setData, post, processing, errors } = useFormInertia({
        email: "",
        password: "",
    });

    const onSubmit = (formData) => {
        post("/login", { data: formData });
    };

    return (
        <>
            <div className={clsx(cn("wrapper"), " col-3 mx-auto")}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="label" htmlFor="email">
                            Nhập email
                        </label>
                        <input
                            className={cn("form-control", {
                                "is-invalid":
                                    errors.email || errorsHookForm.email,
                            })}
                            type="email"
                            id="email"
                            {...register("email", { required: "Vui lòng nhập trường này" })}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        {errors.email || errorsHookForm.email && (
                            <div className="invalid-feedback">
                                {errors.email || errorsHookForm.email?.message}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="label" htmlFor="passsword">
                            password
                        </label>
                        <input
                            className={cn("form-control", {
                                "is-invalid":
                                    errors.password || errorsHookForm.password,
                            })}
                            type="password"
                            id="passsword"
                            {...register("password", {
                                required: "Vui lòng nhập trường này",
                                minLength: {
                                    value: 4,
                                    message: "Vui lòng nhập tối thiểu 4 ký tự",
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Vui lòng nhập tối đa 30 ký tự",
                                },
                            })}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {errors.password || errorsHookForm.password && (
                            <div className="invalid-feedback">
                                {errors.password || errorsHookForm.password?.message}
                            </div>
                        )}
                    </div>
                    {errors.fail && (
                        <div className="text-danger">{errors.fail}</div>
                    )}

                    <button
                        type="submit"
                        className={cn("button")}
                        disabled={processing}
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;

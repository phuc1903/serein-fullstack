import clsx from "clsx";
import { useForm} from "@inertiajs/react";

import styles from './LoginStyle.module.scss';

const cn = (...classes) => clsx(classes.map(cls => styles[cls] || cls));
function Login() {

    const {data, setData, post, processing, errors} = useForm({
        emailOrPhone: "",
        password: "",
    }) 

    function submit(e) {
        e.preventDefault();
        post('/login');
    }
        
    return (  
        <>
            <div className={clsx(cn('wrapper'), ' col-3 mx-auto')}>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label className="label" htmlFor="email">Nhập email </label>
                        <input className={cn('form-control', {'is-invalid': errors.email})} type="email" id="email" onChange={e => setData('email', e.target.value)}/>
                        <div className="invalid-feedback">
                            {errors.email}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="label" htmlFor="passsword">password</label>
                        <input className={cn('form-control', {'is-invalid': errors.password})} type="password" id="passsword" onChange={e => setData('password', e.target.value)}/>
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
                    </div>
                    {
                        errors.fail && (
                        <div className="text-danger mb-3">
                            {errors.fail}
                        </div>
                    )}
                    <button type="submit" className={cn('button')} disabled={processing}>Đăng nhập</button>
                </form>
            </div>
        </>
    );
}

export default Login;
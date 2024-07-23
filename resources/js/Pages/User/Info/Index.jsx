import LayoutAdmin from '@/Layouts/LayoutAdmin/LayoutAdmin';
import { useForm } from '@inertiajs/react';
import clsx from "clsx";
import styles from "./InfoStyle.module.scss";

const cn = (...classes) => clsx(classes.map(cls => styles[cls] || cls));

function Info({user}) {
    console.log(user);
    const { data, setData, put, errors, processing } = useForm({
        fullname: "",
        avatar: "",
        phone: "",
        address: "",
        role: "",
    });

    console.log(useForm());

    function submit(e) {
        e.preventDefault();
        put('info/', data);
    }

    return (
        <>
            <h1 className={cn('heading mb-5')}>Hồ sơ chi tiết</h1>
            <div className="d-flex mb-5">
                <div className={cn('avatar')}>
                    <img className={cn('w-100 h-100 object-cover')} src="images/default.jpg" alt="" />
                </div>
                <div className={cn('ms-3')}>
                    <h4 className={cn('h4')}>Đinh Trọng Phúc</h4>
                    <input type="file" name="avatar" id="" hidden />
                    <button className={clsx(cn('button-info-1'), ' button-primary-serein')}>Thay đổi ảnh</button>
                </div>
            </div>
            <form onSubmit={submit}>
                <div className="row mb-3">
                    <div className="col-6">
                        <label className={cn('label')} htmlFor="fullname">Họ và tên</label>
                        <input className={cn('w-100 form-control')} value={data.email} type="text" onChange={e => setData('fullname', e.target.value)} id="fullname" />
                    </div>
                    <div className="col-6">
                        <label className={cn('label')} htmlFor="phone">Số điện thoại</label>
                        <input className={cn('w-100 form-control')} type="text" onChange={(e) => setData('phone', e.target.value)} id="phone" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <label className={cn('label')} htmlFor="address">Địa chỉ của bạn</label>
                        <input className={cn('w-100 form-control')} type="text" onChange={(e) => setData('address', e.target.value)} id="address" />
                    </div>
                    <div className="col-6">
                        <label className={cn('label')} htmlFor="email">Email</label>
                        <input className={cn('w-100 form-control')} type="text" onChange={(e) => setData('fullname', e.target.value)} id="email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <label className={cn('label')} htmlFor="created_at">Ngày đăng ký tài khoản</label>
                        <input className={cn('w-100 form-control')} type="text" id="created_at" disabled />
                    </div>
                    <div className="col-6">
                        <label className={cn('label')} htmlFor="role">Chức vụ</label>
                        <input className={cn('w-100 form-control')} type="text" onChange={(e) => setData('role', e.target.value)} id="role" />
                    </div>
                </div>
                <button type="submit" className={clsx(' btn button-primary-serein')}>Update</button>
            </form>
        </>
    );
}

Info.layout = page => <LayoutAdmin children={page} />

export default Info;

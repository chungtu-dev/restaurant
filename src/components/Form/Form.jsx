import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import "../../styles/form.css";
import axios from 'axios'
import Swal from 'sweetalert2';

const Form = () => {
    // form states
    const initialValues = { name: "", phone: "", numberof: "", dateTime: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const [startDate, setStartDate] = useState("");
    const today = new Date().toISOString().slice(0, 16);
    const [loading, setLoading] = useState(false)

    //handleChange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // const handleChangePhone = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value });

    //     const valueInp = e.target.value;
    //     console.log(!isNaN(+valueInp));
    // };

    // submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // our object to pass
        setFormErrors(validate(formValues));
        // setFormErrors(validate_phoneNumber(formValues));
        const data = {
            TEN_KH: formValues.name,
            SDT: formValues.phone,
            SO_LUONG_KH: formValues.numberof,
            NGAY_GIO: startDate,
            GHI_CHU: formValues.note ? formValues.note : ""
        }

        if (formValues.name !== '' && formValues.phone !== '' && formValues.numberof !== '' && formValues.dateTime !== '') {
            axios.post('https://sheet.best/api/sheets/820aee89-edd8-4335-a026-08e695898298', data).then(response => {
                setTimeout(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Xin cảm ơn',
                        text: 'Đã gửi thành công, chúng tôi sẽ liên hệ đến bạn trong thời gian sớm nhất',
                    })
                    e.target.reset();
                    setFormValues("");
                    setLoading(false)
                    // window.location.reload();
                }, 2000);
            }).catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Rất tiếc',
                    text: 'Đã có lỗi xảy ra, vui lòng kiểm tra lại thông tin hoặc thử lại sau',
                })
                console.log(err);
            })
        }
        else {
            Swal.fire({
                icon: 'warning',
                title: 'Thông báo',
                text: 'Vui lòng điền đầy đủ hoặc kiểm tra lại các thông tin!',
            })
            setLoading(false)
        }
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Vui lòng nhập tên";
        }
        if (isNaN(values.phone)) {
            errors.phone = "Lỗi nhập sdt";
        }
        if(!regex.test(values.phone)){
            errors.phone = "Số điện thoại không nhập kí tự";
        }
        if (!values.phone) {
            errors.phone = "Vui lòng nhập số điện thoại";
        }
        if (values.phone.length > 10) {
            errors.phone = "Số điện thoại 10 kí tự";
        }
        if (!values.numberof) {
            errors.numberof = "Vui lòng nhập số lượng";
        }
        if(!regex.test(values.numberof)){
            errors.numberof = "Số lượng không nhập kí tự";
        }
        if (!values.dateTime) {
            errors.dateTime = "Vui lòng chọn thời gian";
        }
        return errors;
    };

    const handleCancel = () => {
        Swal.fire({
            title: 'Hủy đơn',
            text: "Bạn có chắc hủy đặt bàn?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Đóng',
            confirmButtonText: 'Hủy'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Hủy thành công',
                    '',
                    'success'
                )
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            }
        })
    }

    useEffect(() => {
        const btn = document.getElementById('btn');
        btn.addEventListener('click', function handleClick() {
            const dateInput = document.getElementById('date');
            if (!dateInput.value) {
                setStartDate('')
            } else {
                setStartDate(dateInput.value)
            }
        });
    }, [])

    return (
        <Container>
            <Row>
                <Col lg='12' md='12' sm='12'>
                    <Container className='container-form-inp'>
                        <div className='form-header'>
                            <h5>Đặt bàn</h5>
                            <hr className='hr' />
                        </div>
                        <form autoComplete="off" className="form-inp" onSubmit={handleSubmit}>
                            <div className="form-inp-item">
                                <label htmlFor="name" className="form-inp-label">Họ và tên</label>
                                <input className='inp' placeholder="Nhập tên" type="text" id="name"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange} />
                                {
                                    formErrors.name && (<p className='error-valid-form'>*{formErrors.name}</p>)
                                }
                            </div>
                            <div className="form-inp-item">
                                <label htmlFor="phone" className="form-inp-label">Số điện thoại</label>
                                <input className='inp' placeholder="Nhập số điện thoại" type="text" id="phone"
                                    name="phone"
                                    maxLength="10"
                                    value={formValues.phone}
                                    onChange={handleChange}
                                />
                                {
                                    formErrors.phone && (<p className='error-valid-form'>*{formErrors.phone}</p>)
                                }
                            </div>
                            <div className="form-inp-item">
                                <label htmlFor="customers" className="form-inp-label">Số lượng khách</label>
                                <input className='inp' placeholder="Nhập số lượng" type="number" id='customers'
                                    name="numberof"
                                    value={formValues.numberof}
                                    onChange={handleChange}
                                />
                                {
                                    formErrors.numberof && (<p className='error-valid-form'>*{formErrors.numberof}</p>)
                                }
                            </div>
                            <div className="form-inp-item">
                                <label className="form-inp-label" htmlFor="date">Ngày</label>
                                <input defaultValue={formValues.dateTime} onChange={handleChange} type="datetime-local" className='inp' name="dateTime" id="date" min={today} />
                                {
                                    formErrors.dateTime && (<p className='error-valid-form'>*{formErrors.dateTime}</p>)
                                }
                            </div>

                            <div className="form-inp-item">
                                <label className="form-inp-label" htmlFor="note">Yêu cầu khác (Không bắt buộc)</label>
                                <textarea className='inp' id="note" cols="10" rows="10" placeholder="Nhập yêu cầu"
                                    name="note"
                                    value={formValues.note}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <input id='btn' className='btn-submit' name="Name" type="submit" value={loading ? "Vui lòng đợi..." : "Gửi"} />

                            <input className='btn-cancel' type="button" value="Hủy đơn đặt" onClick={handleCancel} />
                        </form>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Form
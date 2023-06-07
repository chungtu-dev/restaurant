import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import "../../styles/form.css";
// import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Loading from '../UI/loading/Loading';

const Form = () => {
    // form states
    const initialValues = { name: "", phone: "", numberof: "", dateTime: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const [startDate, setStartDate] = useState("");
    const today = new Date().toISOString().slice(0, 16);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    //handleChange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // our object to pass
        setFormErrors(validate(formValues));
        const data = {
            TEN_KH: formValues.name,
            SDT: `(+84) - ${formValues.phone}`,
            SO_LUONG_KH: formValues.numberof,
            NGAY_GIO: startDate,
            GHI_CHU: formValues.note ? formValues.note : ""
        }

        const validPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/

        if (formValues.name !== '' && (formValues.phone !== '' && validPhone.test(formValues.phone)) && formValues.numberof !== '' && formValues.dateTime !== '') {
            console.log('success');
            const formEle = document.querySelector("form");
            const formDatab = new FormData(formEle);
            console.log(data);
            fetch(
                "https://script.google.com/macros/s/AKfycbxTsKKx16htSIDFh4VpIGhwjOfbQCrT0rZwwgg-zHKeltKgF6blYm_QDPWfRyfQRRV5yA/exec",
                {
                    method: "POST",
                    body: formDatab
                }
            )
                .then((response) => response.json())
                .then(response => {
                    setTimeout(() => {
                        Swal.fire({
                            title: 'Xin cảm ơn',
                            text: "Đã gửi thành công, chúng tôi sẽ liên hệ đến bạn trong thời gian sớm nhất",
                            icon: 'success',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Đóng'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate("/")
                                window.location.reload();
                            }
                        })

                        e.target.reset();
                        setLoading(false)
                        setFormValues("");
                    }, 2000)
                }).catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Rất tiếc',
                        text: 'Đã có lỗi xảy ra, vui lòng kiểm tra lại thông tin hoặc thử lại sau',
                    })
                    setLoading(false)
                    console.log(err);
                })
        }
        else {
            setLoading(false)
            Swal.fire({
                icon: 'warning',
                title: 'Thông báo',
                text: 'Vui lòng điền đầy đủ hoặc kiểm tra lại các thông tin!',
            })
        }
    }

    const validate = (values) => {
        const errors = {};
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const validPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
        const regexNumberof = /^(?:(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;
        if (!values.name) {
            errors.name = "Vui lòng nhập tên";
        }
        if (!values.phone) {
            errors.phone = "Vui lòng nhập số điện thoại";
        }
        if (!validPhone.test(values.phone)) {
            errors.phone = "Vui lòng nhập số điện thoại";
        }

        if (!values.numberof || !regexNumberof.test(values.numberof)) {
            errors.numberof = "Vui lòng nhập số lượng";
        }

        if (!values.dateTime) {
            errors.dateTime = "Vui lòng chọn thời gian";
        }
        return errors;
    };

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

    // const handleLog = () => {
    //     fetch("https://sheetdb.io/api/v1/mxocir8iv4z0b")
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    // }

    return (
        <Container>
            <Row>
                <Col lg='12' md='12' sm='12'>
                    <Container className='container-form-inp'>
                        {
                            loading ? <div className='load'>
                                <Loading />
                            </div> : ""
                        }
                        <div className={loading ? 'loading-form' : ""}>
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
                                    // pattern="(0+)\d+"
                                    // title="Vui lòng nhập số điện thoại"
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
                                    // pattern="(0+)\d+"
                                    // title="Vui lòng nhập số lượng"
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
                            </form>
                            {/* <button onClick={()=>handleLog()}>CALl API FROM SHEET</button> */}
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Form
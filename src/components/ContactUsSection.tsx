import './ContactUsSection.css'
import { WrapperSection } from '../StyledComponents/Section.style'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Button } from '../StyledComponents/Button.style'
function ContactUsSection() {
    const schema = yup.object().shape({
        Firstname: yup.string().required('First name is required'),
        Lastname: yup.string(),
        email: yup.string().email().required(),
        interest:yup.string().required(),
        message: yup.string().required()
    })
    const {values,errors,handleBlur,handleChange,handleSubmit, touched,handleReset}=useFormik({
        initialValues:{
            Firstname:'',
            Lastname:'',
            email:'',
            interest:'',
            message:''
        },
        validationSchema:schema,
        onSubmit:(values)=>{
            handleReset(values)
        }
    })
    const handleRadiosValue = (e: React.ChangeEvent<HTMLInputElement>) => values.interest = e.target.value

    function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleSubmit()
    }

return (
    <div className='container-fluid contactUsSection overflow-hidden p-0'>
        <div className='row'>
            <div className='col-12 p-2 d-flex flex-md-row flex-column justify-content-between'>
                <WrapperSection className='col-md-5 col-12 d-flex flex-column align-items-center'>
                    <div className="col-12 text-center SectionTitle ">
            <div style={{color:"white"}} className="title col-12">FIND YOUR NEXT HOME</div>
                    </div>
                    <p className='col-md-6 col-8 text-center mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus at accusantium sed, reprehenderit amet voluptatibus vitae natus et, molestiae ipsam fuga exercitationem velit, beatae hic dolorem autem excepturi sint.</p>
                </WrapperSection>
                <WrapperSection className='col-md-6 col-12 d-flex flex-column align-items-center'>
                    <div className="col-12 SectionTitle ">
            <div style={{color:"white"}} className="title d-flex col-12">Get In Touch</div>
                    </div>
                    <form onSubmit={handleSubmitForm} className='col-12 mt-5 row-gap-4 d-flex flex-wrap justify-content-between'>
                        <div className='col-md-5 col-12 d-flex flex-column'>
                            <label className='col-12' htmlFor='firstname'>First Name<span style={{color:'red'}}>*</span></label>
                            <input
                                value={values.Firstname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name='Firstname'
                                className='col-12  p-2'
                                type='text'
                                id='firstname'
                            />
                            {touched.Firstname && errors.Firstname&& <p className='col-12' style={{color:'red'}}>{errors.Firstname}</p>}
                        </div>
                        <div className='col-md-5 col-12 d-flex flex-column'>
                            <label className='col-12' htmlFor='lastname'>Last Name</label>
                            <input
                                value={values.Lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name='Lastname'
                                className='col-12  p-2'
                                type='text'
                                id='lastname'
                            />
                        </div>
                        <div className='col-12 d-flex flex-column'>
                            <label className='col-12' htmlFor='lastname'>Email <span style={{color:'red'}}>*</span></label>
                            <input
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name='email'
                                className='col-12  p-2'
                                type='email'
                                id='email'
                            />
                            {touched.email && errors.email&& <p className='col-12' style={{color:'red'}}>{errors.email}</p>}
                        </div>
                        <div className='col-12 d-flex'>
                            <label className='col-4' htmlFor='interest'>Interested in:</label>
                            <div className='col-8 d-flex justify-content-between'>
                                <div className='col-10 d-flex justify-content-between'>
                                    <input
                                    type='radio'
                                    name='interest'
                                    id='buy'
                                    value='buy'
                                        onChange={(e) => { handleRadiosValue(e) }}
                                        />
                                    <label htmlFor='buy'>Buy</label>
                                    <input
                                    type='radio'
                                    name='interest'
                                    id='Sell'
                                    value='sell'
                                        onChange={(e) => { handleRadiosValue(e) }}
                                    />
                                    <label htmlFor='Sell'>Sell</label>
                                    <input
                                    type='radio'
                                    name='interest'
                                    id='others'
                                    value='others'
                                        onChange={(e) => { handleRadiosValue(e) }}
                                    />
                                    <label htmlFor='others'>Others</label>
                                </div>
                            </div>
                        </div>
                        { errors.interest&& <p className='col-12' style={{color:'red'}}>{errors.interest}</p>}
                            <div className='col-12 d-flex flex-column'>
                            <label className='col-12' htmlFor='lastname'>Message <span style={{color:'red'}}>*</span></label>
                            <textarea
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name='message'
                                className='col-12  p-2'
                                id='message'
                            />
                            {touched.message && errors.message&& <p className='col-12' style={{color:'red'}}>{errors.message}</p>}
                        </div>
                        <Button type='submit' className='col-12 p-2 rounded'>Submit</Button>

                    </form>
                </WrapperSection>
            </div>
        </div>
    </div>
)
}

export default ContactUsSection
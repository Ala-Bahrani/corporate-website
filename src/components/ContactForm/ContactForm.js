import React, { useState } from 'react';
import styles from './ContactForm.module.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with formData (e.g., send to server)
        console.log("Form Data:", formData);
        // Optionally reset the form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };
    return (
        <form onSubmit={handleSubmit} className={styles.formStyle}>
            <div className={styles.inputGroupStyle}>

                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='نام'
                />
            </div>

            <div className={styles.inputGroupStyle}>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='ایمیل'
                />
            </div>

            <div className={styles.inputGroupStyle}>

                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder='موضوع'
                />
            </div>

            <div className={styles.inputGroupStyle}>

                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder='پیام'
                />
            </div>

            <div className={styles.btnContainer}>
                <button type="submit" className={styles.buttonStyle}>ارسال</button>
            </div>
        </form>
    );
};

export default ContactForm;

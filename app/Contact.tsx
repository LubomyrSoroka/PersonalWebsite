"use client";

import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState(false);
    const [errorFields, setErrorFields] = useState<{
        email: string | null;
        subject: string | null;
        message: string | null;
        submit?: string | null;
    }>({
        email: null,
        subject: null,
        message: null,
        submit: null,
    });

    const resetForm = () => {
        setEmail('');
        setSubject('');
        setMessage('');
        setSuccess(false);
        setErrorFields({ email: null, subject: null, message: null, submit: null });
    };

    const onClick = async (e: React.FormEvent) => {
        e.preventDefault();

        const errors = {
            email: email === '' ? 'Email cannot be empty.' :
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Invalid email format.' : null,
            subject: subject === '' ? 'Subject cannot be empty.' : null,
            message: message === '' ? 'Body cannot be empty.' : null,
        };

        setErrorFields(errors);

        if (errors.email || errors.subject || errors.message)
            return;

        setLoading(true);
        try {
            const response = await fetch('https://y6xxonyz5lqli74ajbupgu6rm40vzvyt.lambda-url.us-east-2.on.aws/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        subject: subject,
                        message: message,
                        type: 1
                    }),
                }
            );
            if (!response.ok) {
                throw (response.statusText);
            }
            setSuccess(true);
        } catch (e) {
            console.log(e);
            setErrorFields(prev => ({ ...prev, submit: 'Failed to send message. Please try again later.' }));
        }
        setLoading(false);
    }

    return (
        <div id="contact" className="relative min-h-screen flex flex-col justify-center items-center px-8 max-w-screen-xl mx-auto">
            <h2 className="absolute top-6 left-0 text-3xl font-semibold tracking-widest">CONTACT</h2>

            {success ? (
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="text-4xl font-bold text-green-500">Message sent successfully!</div>
                    <p className="text-white text-lg">Thank you for reaching out. I'll get back to you soon.</p>
                    <button
                        onClick={resetForm}
                        className="bg-white text-black rounded-lg px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={onClick} className="flex flex-col gap-4 w-1/2 text-black relative">
                    <div className="flex flex-col gap-1">
                        <div className="text-white">Email:</div>
                        <input onClick={() => { setSuccess(false); setErrorFields({ email: null, subject: null, message: null, submit: null }); }} className="bg-white rounded-lg p-2" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <div className="h-5">
                            {errorFields.email && <p className="text-red-500 text-sm">{errorFields.email}</p>}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="text-white">Subject:</div>
                        <input type="text" onClick={() => { setSuccess(false); setErrorFields({ email: null, subject: null, message: null, submit: null }); }} className="bg-white rounded-lg p-2" onChange={(e) => setSubject(e.target.value)} value={subject} />
                        <div className="h-5">
                            {errorFields.subject && <p className="text-red-500 text-sm">{errorFields.subject}</p>}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="text-white">Body:</div>
                        <textarea
                            onClick={() => { setSuccess(false); setErrorFields({ email: null, subject: null, message: null, submit: null }); }}
                            className="bg-white rounded-lg p-2 h-48 resize-none"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        <div className="h-5">
                            {errorFields.message && <p className="text-red-500 text-sm">{errorFields.message}</p>}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-2">
                        <button
                            className={`cursor-pointer bg-white hover:bg-gray-200 rounded-lg self-start px-8 py-3 font-semibold transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                        <div className="h-5">
                            {errorFields.submit && <p className="text-red-500 font-bold">{errorFields.submit}</p>}
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}
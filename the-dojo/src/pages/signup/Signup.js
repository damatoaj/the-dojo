import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

//styles
import './Signup.css';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [thumbnailError, setThumbnailError] = useState('');
    const { signup, error, isPending } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, thumbnail, displayName)
        signup(email, password, displayName, thumbnail)
    }

    const handleFileChange = (e) => {
        setThumbnail(null);
        let selected = e.target.files[0];
        console.log(selected)

        if(!selected) {
            setThumbnailError('Please select a file')
            return
        }
        if(!selected.type.includes('image')) {
            setThumbnailError('Selected file must be an image');
            return
        }
        if (selected.size > 100000) {
            setThumbnailError('Image file size must be less than 100 kb')
            return
        }

        setThumbnailError(null);

        setThumbnail(selected);
        console.log('Thumbnail updated')
    }

    return(
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <label>
                <span>Email: </span>
                <input
                    type="email"
                    required
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>Password: </span>
                <input
                    type="password"
                    required
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>Display Name: </span>
                <input
                    type="text"
                    required
                    onChange={(e)=> setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            <label>
                <span>Profile Thumbnail: </span>
                <input
                    type="file"
                    required
                    onChange={handleFileChange}
                />
                {thumbnailError && <div className="error">{thumbnailError}</div>}
            </label>
            {!isPending && <button className="btn">Sign Up!</button>}
            {isPending && <button className="btn" disabled>Loading...</button>}
            {error && <div className="error">{error}</div>}
        </form>
    )
}
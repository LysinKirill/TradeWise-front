// src/pages/Settings/index.tsx
import { useState } from 'react';
import * as UI from './styles';
import { linkEmail, updatePassword, verifyEmail } from '@/shared/api/settings';
import { toast } from 'react-toastify';

export default function Settings() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLinkEmail = async () => {
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email.');
      return;
    }

    const response = await linkEmail({ email });
    if (response?.success) {
      toast.success('Email linked successfully!');
      setEmail('');
    } else {
      toast.error(response?.message || 'Failed to link email.');
    }
  };

  const handleUpdatePassword = async () => {
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    const response = await updatePassword({ password });
    if (response?.success) {
      toast.success('Password updated successfully!');
      setPassword('');
    } else {
      toast.error(response?.message || 'Failed to update password.');
    }
  };

  const handleVerifyEmail = async () => {
    if (!code.trim()) {
      toast.error('Please enter the verification code.');
      return;
    }

    const response = await verifyEmail({ code });
    if (response?.success) {
      toast.success('Email verified successfully!');
      setCode('');
    } else {
      toast.error(response?.message || 'Failed to verify email.');
    }
  };

  return (
    <UI.Container>
      <UI.ContentContainer>
        <UI.Title>Account Settings</UI.Title>

        <UI.FormSection>
          <UI.Subtitle>Link Email</UI.Subtitle>
          <UI.Input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <UI.PrimaryButton onClick={handleLinkEmail}>
            Link Email
          </UI.PrimaryButton>
        </UI.FormSection>

        <UI.FormSection>
          <UI.Subtitle>Update Password</UI.Subtitle>
          <UI.Input
            type="password"
            value={password}
            placeholder="New password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <UI.PrimaryButton onClick={handleUpdatePassword}>
            Change Password
          </UI.PrimaryButton>
        </UI.FormSection>

        <UI.FormSection>
          <UI.Subtitle>Verify Email</UI.Subtitle>
          <UI.Input
            type="text"
            value={code}
            placeholder="Verification code"
            onChange={(e) => setCode(e.target.value)}
          />
          <UI.PrimaryButton onClick={handleVerifyEmail}>
            Confirm Email
          </UI.PrimaryButton>
        </UI.FormSection>
      </UI.ContentContainer>
    </UI.Container>
  );
}

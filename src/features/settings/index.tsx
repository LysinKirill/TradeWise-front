import { useState } from 'react';
import * as UI from './styles';
import { linkInvestApiKey, updatePassword, verifyEmail } from '@/shared/api/settings';
import { toast } from 'react-toastify';

export default function Settings() {
  const [investApiKey, setInvestApiKey] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const handleLinkInvestApiKey = async () => {
    if (!investApiKey.trim()) {
      toast.error('Please enter a valid API key.');
      return;
    }

    const response = await linkInvestApiKey({ investApiKey });
    if (response?.status === 200) {
      toast.success('API key linked successfully!');
      setInvestApiKey('');
    } else {
      toast.error(response?.message || 'Failed to link API key.');
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
          <UI.Subtitle>Link Invest API Key</UI.Subtitle>
          <UI.Input
            type="text"
            value={investApiKey}
            placeholder="Enter your investment API key"
            onChange={(e) => setInvestApiKey(e.target.value)}
          />
          <UI.PrimaryButton onClick={handleLinkInvestApiKey}>
            Link API Key
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
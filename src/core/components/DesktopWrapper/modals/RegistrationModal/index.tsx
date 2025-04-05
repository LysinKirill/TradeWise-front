import { useTypedDispatch } from './../../../../store';
import { selectGetStartedModalState, selectRegistrationModalState } from './../../../../store/modules/modals/selectors';
import { closeGetStartedModal, closeRegistrationModal } from './../../../../store/modules/modals/slice';
import { useSelector } from 'react-redux';
import * as UI from './styles';


export const RegistrationForm = () => {
  const dispatch = useTypedDispatch();
  const { isOpen } = useSelector(selectRegistrationModalState);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeRegistrationModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    onClose();
  };

  return (
    <UI.ModalOverlay>
      <UI.ModalContent>
        <UI.CloseButton onClick={handleClose}>×</UI.CloseButton>
        <UI.InnerContentWrapper>
          <UI.Title>Registration</UI.Title>
          
          <UI.Form onSubmit={handleSubmit}>
            <UI.FormGroup>
              <UI.SectionTitle>Full Name</UI.SectionTitle>
              <UI.InputLabel>Please enter your Email</UI.InputLabel>
              <UI.TextInput type="email" placeholder="Email" required />
              
              <UI.PhoneInputGroup>
                <UI.TextInput type="tel" placeholder="Phone number" required />
              </UI.PhoneInputGroup>
            </UI.FormGroup>

            <UI.FormGroup>
              <UI.SectionTitle>Country</UI.SectionTitle>
              <UI.InputLabel>Please enter your Password</UI.InputLabel>
              <UI.TextInput type="password" placeholder="Password" required />
              
              
            </UI.FormGroup>

            <UI.FormGroup>
              <UI.SectionTitle>Position you are applying for</UI.SectionTitle>
              <UI.InputLabel>Please enter your Confirm password</UI.InputLabel>
              <UI.TextInput type="password" placeholder="Confirm Password" required />
              
              <UI.SelectInput required>
                <option value="">Select your Order</option>
                {['Order 1', 'Order 2', 'Prefer not to say'].map((order) => (
                  <option key={order} value={order.toLowerCase().replace(' ', '-')}>
                    {order}
                  </option>
                ))}
              </UI.SelectInput>
            </UI.FormGroup>

            <UI.ButtonGroup>
              <UI.PrimaryButton type="submit">Complete Registration</UI.PrimaryButton>
              <UI.SecondaryButton onClick={handleClose}>Cancel</UI.SecondaryButton>
            </UI.ButtonGroup>
          </UI.Form>

          <UI.ExistingAccountText>
            Already have an account? <UI.SignInLink >Sign in</UI.SignInLink>
          </UI.ExistingAccountText>
        </UI.InnerContentWrapper>
      </UI.ModalContent>
    </UI.ModalOverlay>
  );
};
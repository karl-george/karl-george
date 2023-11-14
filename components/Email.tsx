interface EmailProps {
  name: string;
  email: string;
  message: string;
}

function Email({ name, email, message }: EmailProps) {
  return (
    <>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>{message}</p>
    </>
  );
}

export default Email;
